import fs from 'fs';
import path from 'path';
import { cache } from 'react';

const CONTENT_DIRS = ['buying-guides', 'product-reviews'];

function parseFrontmatter(content: string): Record<string, string> {
    const result: Record<string, string> = {};
    const lines = content.split('\n');
    const parts = content.split('---');
    if (parts.length >= 3) {
        const fm = parts[1];
        for (const line of fm.split('\n')) {
            const m = line.match(/^([^:]+):\s*(.+)/);
            if (m) result[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '');
        }
    }
    for (const line of lines) {
        const matchBold = line.match(/^\*\*(.+?):\*\*\s*(.+)/);
        if (matchBold) { result[matchBold[1].trim()] = matchBold[2].trim(); continue; }
        const matchDirect = line.match(/^([^#*:\n]+):\s*(.+)/);
        if (matchDirect && !line.startsWith('#')) {
            const key = matchDirect[1].trim();
            if (key.length < 30) result[key] = matchDirect[2].trim();
        }
    }
    return result;
}

function estimateReadTime(content: string): string {
    const words = content.split(/\s+/).length;
    return `${Math.max(1, Math.round(words / 200))} phút đọc`;
}

function getCategoryFromDir(dir: string, fm: Record<string, string>): string {
    if (fm['category'] || fm['Category']) return fm['category'] || fm['Category'];
    if (dir === 'product-reviews') return 'Product Review';
    return 'Kiến thức';
}

function parsePost(file: string, dirName: string): any | null {
    const filePath = path.join(process.cwd(), 'content', dirName, file);
    if (!fs.existsSync(filePath)) return null;
    const raw = fs.readFileSync(filePath, 'utf-8');
    const fm = parseFrontmatter(raw);

    // Draft gate
    const status = (fm['status'] || fm['Status'] || '').toLowerCase().trim();
    if (status !== 'published') return null;

    const fileSlug = file.replace('.md', '');
    const urlSlug = fm['slug'] || fm['Slug'] || fileSlug;

    const hasFrontmatter = raw.trimStart().startsWith('---') && raw.split('---').length >= 3;
    const parts = raw.split('---');
    const body = hasFrontmatter ? parts.slice(2).join('---').trim() : raw.trim();

    const firstH1Match = raw.match(/^#\s+(.+)/m);
    const firstH1 = firstH1Match ? firstH1Match[1].trim() : null;
    const firstPara = body.replace(/^#+.+$/gm, '').replace(/[#*\[\]]/g, '').trim().split('\n').find(l => l.trim().length > 20) || '';

    return {
        slug: fileSlug,
        urlSlug,
        fullSlug: urlSlug,
        sourceDir: dirName,
        title: fm['title'] || fm['Title'] || firstH1 || fileSlug,
        excerpt: fm['Meta Description'] || fm['description'] || fm['Description'] || firstPara.slice(0, 160),
        mainImage: fm['Featured Image'] || fm['image'] || fm['featuredImage'] || null,
        publishedAt: fm['Ngày cập nhật'] || fm['date'] || fm['Date'] || fm['publishedAt'] || null,
        readTime: fm['Thời gian đọc'] || fm['readTime'] || estimateReadTime(raw),
        category: getCategoryFromDir(dirName, fm),
        tags: fm['tags'] || fm['Tags'] || '',
        body,
        author: fm['Tác giả'] || fm['author'] || 'Maison de SON',
    };
}

export const getAllPosts = cache(async (): Promise<any[]> => {
    const allPosts: any[] = [];
    for (const dirName of CONTENT_DIRS) {
        try {
            const dir = path.join(process.cwd(), 'content', dirName);
            if (!fs.existsSync(dir)) continue;
            const files = fs.readdirSync(dir)
                .filter(f => f.endsWith('.md') && !f.includes('template') && !f.includes('TEMPLATE'))
                .sort();
            for (const file of files) {
                const post = parsePost(file, dirName);
                if (post) allPosts.push(post);
            }
        } catch (e) {
            console.error(`getAllPosts error (${dirName}):`, e);
        }
    }
    return allPosts.sort((a, b) => {
        if (a.publishedAt && b.publishedAt) return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        return a.title.localeCompare(b.title, 'vi');
    });
});

// Tìm bài viết qua URL slug — dùng cho route /[slug]
export const getPostByUrlSlug = cache(async (urlSlug: string): Promise<any | null> => {
    for (const dirName of CONTENT_DIRS) {
        try {
            const dir = path.join(process.cwd(), 'content', dirName);
            if (!fs.existsSync(dir)) continue;
            const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
            for (const file of files) {
                const filePath = path.join(dir, file);
                const raw = fs.readFileSync(filePath, 'utf-8');
                const fm = parseFrontmatter(raw);
                const status = (fm['status'] || fm['Status'] || '').toLowerCase().trim();
                if (status !== 'published') continue;
                const fileSlug = file.replace('.md', '');
                const resolvedUrlSlug = fm['slug'] || fm['Slug'] || fileSlug;
                if (resolvedUrlSlug !== urlSlug) continue;
                return parsePost(file, dirName);
            }
        } catch (e) {
            console.error(`getPostByUrlSlug error:`, e);
        }
    }
    return null;
});

// Backward compat
export const getPostBySlug = cache(async (slug: string): Promise<any | null> => {
    return getPostByUrlSlug(slug);
});
