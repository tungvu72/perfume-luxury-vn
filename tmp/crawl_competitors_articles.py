# -*- coding: utf-8 -*-
import re, json, pathlib, time
from urllib.parse import urljoin, urlparse
from urllib.request import Request, urlopen
from urllib.error import URLError, HTTPError
from xml.etree import ElementTree as ET

SITES = [
    'https://kenperfume.com/',
    'https://www.thegioinuochoa.com.vn/',
    'https://vuahanghieu.com/nuoc-hoa',
    'https://xxivstore.com/',
    'https://lanperfume.com/',
    'https://orchard.vn/nuoc-hoa/',
    'https://namperfume.net/',
]
OUT = pathlib.Path(r'D:/anti/perfume-luxury-vn/docs/reports/competitor-content-map-2026-03-30.json')
SUMMARY = pathlib.Path(r'D:/anti/perfume-luxury-vn/docs/reports/competitor-content-map-2026-03-30.md')
HEADERS = {'User-Agent':'Mozilla/5.0'}
ARTICLE_HINTS = ['/blog', '/kien-thuc', '/review', '/reviews', '/top-', '/top/', '/vs', '/so-sanh', '/cach-', '/phan-biet', '/la-gi', '/nen-', '/best-', '/huong-dan', '/tu-van']
ARTICLE_TITLE_HINTS = ['review', 'top ', 'vs', 'so sánh', 'cách ', 'phân biệt', 'là gì', 'nen ', 'nên ', 'hướng dẫn', 'kinh nghiệm', 'tư vấn']


def fetch(url):
    try:
        req = Request(url, headers=HEADERS)
        with urlopen(req, timeout=20) as r:
            content = r.read()
            ct = r.headers.get_content_type()
            charset = r.headers.get_content_charset() or 'utf-8'
            try:
                text = content.decode(charset, errors='ignore')
            except Exception:
                text = content.decode('utf-8', errors='ignore')
            return r.status, ct, text
    except Exception:
        return None, None, None


def clean(text):
    text = re.sub(r'<[^>]+>', ' ', text or '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()


def extract(pattern, html):
    m = re.search(pattern, html, re.I | re.S)
    return clean(m.group(1)) if m else ''


def fetch_sitemap_urls(base):
    urls = []
    queue = [urljoin(base, p) for p in ['/sitemap.xml','/sitemap_index.xml','/post-sitemap.xml','/page-sitemap.xml']]
    seen = set()
    while queue:
        sm = queue.pop(0)
        if sm in seen:
            continue
        seen.add(sm)
        status, ct, txt = fetch(sm)
        if status != 200 or not txt:
            continue
        if '<sitemapindex' in txt:
            try:
                root = ET.fromstring(txt)
                ns = {'x':'http://www.sitemaps.org/schemas/sitemap/0.9'}
                for loc in root.findall('.//x:sitemap/x:loc', ns):
                    queue.append(loc.text.strip())
            except Exception:
                pass
        elif '<urlset' in txt:
            try:
                root = ET.fromstring(txt)
                ns = {'x':'http://www.sitemaps.org/schemas/sitemap/0.9'}
                for loc in root.findall('.//x:url/x:loc', ns):
                    urls.append(loc.text.strip())
            except Exception:
                pass
    return urls


def classify(url, title, h1):
    blob = f'{url} {title} {h1}'.lower()
    if any(x in blob for x in ['/vs', ' vs ', 'so sánh']):
        return 'Comparison'
    if any(x in blob for x in ['review', 'đánh giá']):
        return 'Review'
    if any(x in blob for x in ['top ', 'best ', 'đáng mua']):
        return 'Buying guide'
    if any(x in blob for x in ['là gì', 'cách ', 'phân biệt', 'hướng dẫn', 'nên ', 'kinh nghiệm', 'tư vấn']):
        return 'Educational'
    return 'Other'


def is_article_like(url, title, h1):
    blob = f'{url} {title} {h1}'.lower()
    return any(x in blob for x in ARTICLE_HINTS + ARTICLE_TITLE_HINTS)

all_rows = []
for site in SITES:
    urls = fetch_sitemap_urls(site)
    if not urls:
        status, ct, html = fetch(site)
        urls = re.findall(r'href=["\']([^"\']+)["\']', html or '', re.I)
        urls = [urljoin(site, u) for u in urls]
    seen = set()
    picked = []
    for u in urls:
        if not u or u in seen:
            continue
        seen.add(u)
        if urlparse(u).netloc != urlparse(site).netloc:
            continue
        picked.append(u)
    for i, u in enumerate(picked[:1000]):
        status, ct, html = fetch(u)
        if status != 200 or ct != 'text/html' or not html:
            continue
        title = extract(r'<title[^>]*>(.*?)</title>', html)
        h1 = extract(r'<h1[^>]*>(.*?)</h1>', html)
        meta = extract(r'<meta[^>]+name=["\']description["\'][^>]+content=["\'](.*?)["\']', html)
        if is_article_like(u, title, h1):
            all_rows.append({'site':site,'url':u,'title':title,'h1':h1,'meta':meta,'type':classify(u,title,h1)})
        if i and i % 50 == 0:
            time.sleep(0.2)

OUT.write_text(json.dumps(all_rows, ensure_ascii=False, indent=2), encoding='utf-8')
by_site = {}
for r in all_rows:
    by_site.setdefault(r['site'], []).append(r)
lines = ['# Competitor content map','',f'Total article-like URLs: **{len(all_rows)}**']
for site, rows in by_site.items():
    lines.append(f'\n## {site}')
    lines.append(f'- URLs found: **{len(rows)}**')
    counts = {}
    for x in rows:
        counts[x['type']] = counts.get(x['type'],0)+1
    for k,v in sorted(counts.items(), key=lambda kv:(-kv[1], kv[0])):
        lines.append(f'  - {k}: {v}')
    for x in rows[:10]:
        lines.append(f'  - {x["title"]} | {x["url"]}')
SUMMARY.write_text('\n'.join(lines), encoding='utf-8')
print(OUT)
print(SUMMARY)
print(len(all_rows))
