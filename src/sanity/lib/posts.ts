import fs from 'fs';
import path from 'path';
import { cache } from 'react';

// Đọc từ cả 2 thư mục: buying-guides và product-reviews
const CONTENT_DIRS = ['buying-guides', 'product-reviews'];

function parseFrontmatter(content: string): Record<string, string> {
    const result: Record<string, string> = {};
    const lines = content.split('\n');

    // Cách 1: Parse khối --- ---
    const parts = content.split('---');
    if (parts.length >= 3) {
        const fm = parts[1];
        for (const line of fm.split('\n')) {
            const m = line.match(/^([^:]+):\s*(.+)/);
            if (m) result[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '');
        }
    }

    // Cách 2: Parse kiểu **Key:** Value (Dự phòng cho file không có ---)
    for (const line of lines) {
        // Regex bắt: **Key:** Value
        const matchBold = line.match(/^\*\*(.+?):\*\*\s*(.+)/);
        if (matchBold) {
            const key = matchBold[1].trim();
            const val = matchBold[2].trim();
            result[key] = val;
            continue;
        }

        // Regex bắt: Key: Value (trực tiếp, chỉ ở dòng đầu của file làm frontmatter thô)
        const matchDirect = line.match(/^([^#*:\n]+):\s*(.+)/);
        if (matchDirect && !line.startsWith('#')) {
            const key = matchDirect[1].trim();
            const val = matchDirect[2].trim();
            if (key.length < 30) {
                result[key] = val;
            }
        }
    }

    return result;
}

function estimateReadTime(content: string): string {
    const words = content.split(/\s+/).length;
    const minutes = Math.max(1, Math.round(words / 200));
    return `${minutes} phút đọc`;
}

// Xác định category dựa trên source folder
function getCategoryFromDir(dir: string, fm: Record<string, string>): string {
    if (fm['category'] || fm['Category']) return fm['category'] || fm['Category'];
    if (dir === 'product-reviews') return 'Product Review';
    return 'Kiến thức';
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
                const slug = file.replace('.md', '');
                const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
                const fm = parseFrontmatter(raw);

                const parts = raw.split('---');
                const body = parts.length >= 3 ? parts.slice(2).join('---') : raw;

                const firstH1 = raw.match(/^#\s+(.+)/m)?.[1] || slug;
                const firstPara = body
                    .replace(/^#+.+$/gm, '')
                    .replace(/[#*\[\]]/g, '')
                    .trim()
                    .split('\n')
                    .find(l => l.trim().length > 20) || '';

                allPosts.push({
                    slug,
                    // Thêm prefix dir vào slug để tránh trùng + biết nguồn
                    fullSlug: `${dirName}__${slug}`,
                    sourceDir: dirName,
                    title: fm['title'] || fm['Title'] || firstH1,
                    excerpt: fm['Meta Description'] || fm['description'] || fm['Description'] || firstPara.slice(0, 160),
                    mainImage: fm['Featured Image'] || fm['image'] || fm['featuredImage'] || null,
                    publishedAt: fm['Ngày cập nhật'] || fm['date'] || fm['Date'] || fm['publishedAt'] || null,
                    readTime: fm['Thời gian đọc'] || fm['readTime'] || estimateReadTime(raw),
                    category: getCategoryFromDir(dirName, fm),
                });
            }
        } catch (e) {
            console.error(`getAllPosts error (${dirName}):`, e);
        }
    }

    // Sort: published date desc, fallback alphabetical
    return allPosts.sort((a, b) => {
        if (a.publishedAt && b.publishedAt) {
            return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        }
        return a.title.localeCompare(b.title, 'vi');
    });
});

export const getPostBySlug = cache(async (slug: string): Promise<any | null> => {
    // Thử tìm trong cả hai folder
    for (const dirName of CONTENT_DIRS) {
        try {
            const filePath = path.join(process.cwd(), 'content', dirName, slug + '.md');
            if (!fs.existsSync(filePath)) continue;

            const raw = fs.readFileSync(filePath, 'utf-8');
            const fm = parseFrontmatter(raw);

            const parts = raw.split('---');
            const body = parts.length >= 3 ? parts.slice(2).join('---') : raw;

            const firstH1 = raw.match(/^#\s+(.+)/m)?.[1] || slug;

            return {
                slug,
                sourceDir: dirName,
                title: fm['title'] || fm['Title'] || firstH1,
                excerpt: fm['Meta Description'] || fm['description'] || fm['Description'] || '',
                mainImage: fm['Featured Image'] || fm['image'] || fm['featuredImage'] || null,
                publishedAt: fm['Ngày cập nhật'] || fm['date'] || fm['Date'] || fm['publishedAt'] || null,
                readTime: fm['Thời gian đọc'] || fm['readTime'] || estimateReadTime(raw),
                body,
                author: fm['Tác giả'] || fm['author'] || 'Maison de SON',
                category: getCategoryFromDir(dirName, fm),
            };
        } catch (e) {
            console.error(`getPostBySlug error (${dirName}/${slug}):`, e);
        }
    }

    return null;
});
