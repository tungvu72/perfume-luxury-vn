import fs from 'fs';
import path from 'path';
import { cache } from 'react';

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

        // Regex bắt: Key: Value (trực tiếp)
        const matchDirect = line.match(/^([^#*:\n]+):\s*(.+)/);
        if (matchDirect && !line.startsWith('#')) {
            const key = matchDirect[1].trim();
            const val = matchDirect[2].trim();
            if (key.length < 30) { // Tránh bắt nhầm text thường
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

export const getAllPosts = cache(async (): Promise<any[]> => {
    try {
        const dir = path.join(process.cwd(), 'content', 'buying-guides');
        if (!fs.existsSync(dir)) {
            console.error('Folder content/buying-guides không tồn tại');
            return [];
        }
        const files = fs.readdirSync(dir).filter(f => f.endsWith('.md')).sort();

        return files.map(file => {
            const slug = file.replace('.md', '');
            const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
            const fm = parseFrontmatter(raw);

            const parts = raw.split('---');
            const body = parts.length >= 3 ? parts.slice(2).join('---') : raw;

            const firstH1 = raw.match(/^#\s+(.+)/m)?.[1] || slug;
            const firstPara = body.replace(/^#+.+$/gm, '').replace(/[#*\[\]]/g, '').trim().split('\n').find(l => l.trim().length > 20) || '';

            return {
                slug,
                title: fm['title'] || fm['Title'] || firstH1,
                excerpt: fm['Meta Description'] || fm['description'] || fm['Description'] || firstPara.slice(0, 160),
                mainImage: fm['Featured Image'] || fm['image'] || fm['featuredImage'] || null,
                publishedAt: fm['Ngày cập nhật'] || fm['date'] || fm['Date'] || fm['publishedAt'] || null,
                readTime: fm['Thời gian đọc'] || estimateReadTime(raw),
                category: fm['category'] || 'Kiến thức',
            };
        });
    } catch (e) {
        console.error('getAllPosts error:', e);
        return [];
    }
});

export const getPostBySlug = cache(async (slug: string): Promise<any | null> => {
    try {
        const filePath = path.join(process.cwd(), 'content', 'buying-guides', slug + '.md');
        if (!fs.existsSync(filePath)) return null;

        const raw = fs.readFileSync(filePath, 'utf-8');
        const fm = parseFrontmatter(raw);

        const parts = raw.split('---');
        const body = parts.length >= 3 ? parts.slice(2).join('---') : raw;

        const firstH1 = raw.match(/^#\s+(.+)/m)?.[1] || slug;

        return {
            slug,
            title: fm['title'] || fm['Title'] || firstH1,
            excerpt: fm['Meta Description'] || fm['description'] || fm['Description'] || '',
            mainImage: fm['Featured Image'] || fm['image'] || fm['featuredImage'] || null,
            publishedAt: fm['Ngày cập nhật'] || fm['date'] || fm['Date'] || null,
            readTime: fm['Thời gian đọc'] || estimateReadTime(raw),
            body,
            author: fm['Tác giả'] || fm['author'] || 'Maison de SON',
        };
    } catch (e) {
        console.error('getPostBySlug error:', e);
        return null;
    }
});
