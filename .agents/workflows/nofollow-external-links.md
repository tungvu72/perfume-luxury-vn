---
description: Rule bắt buộc - Tất cả external link phải có rel="nofollow"
---

# RULE: External Links phải có rel="nofollow"

> ⚠️ **RULE BẮT BUỘC — ÁP DỤNG TOÀN WEBSITE**

## Nguyên tắc

1. **Mọi external link** (link trỏ ra ngoài domain `maisondeson.com`) **BẮT BUỘC** phải có `rel="nofollow noopener noreferrer"`.
2. **Internal links** (link trong cùng domain) **KHÔNG** cần nofollow.

## Cách nhận biết External Link

- Bắt đầu bằng `http://` hoặc `https://` và **không** chứa `maisondeson.com`
- Ví dụ external: `https://www.fragrantica.com/...`, `https://shopee.vn/...`, `https://kenperfume.com/...`
- Ví dụ internal: `/san-pham/sauvage-elixir`, `/kien-thuc`, `/`

## Format chuẩn

### Trong HTML/JSX:
```html
<a href="https://external-site.com" rel="nofollow noopener noreferrer" target="_blank">Text</a>
```

### Trong Markdown content:
- Nếu render bằng rehype/remark: cần plugin `rehype-external-links` hoặc middleware tương đương để tự động thêm `rel="nofollow noopener noreferrer"` cho mọi external link.

## Áp dụng cho

- [ ] Tất cả component JSX/TSX có `<a>` hoặc `<Link>` external
- [ ] Tất cả Markdown content (articles, product descriptions)
- [ ] Shopee affiliate links
- [ ] Zalo links
- [ ] Bất kỳ link nào trỏ ra ngoài domain

## Kiểm tra

Trước khi deploy, chạy audit:
```bash
# Tìm tất cả external links thiếu nofollow
grep -rn "href=\"https\?://" src/ content/ --include="*.tsx" --include="*.ts" --include="*.md" --include="*.html" | grep -v "nofollow" | grep -v "maisondeson.com"
```

---

*Rule này được thiết lập ngày 27/03/2026 theo chỉ đạo của chủ dự án.*
