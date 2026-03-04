import fs from 'fs';
import path from 'path';
import { cache } from 'react';

function parseFrontmatter(content: string): Record<string, string> {
    const result: Record<string, string> = {};
    const parts = content.split('---');
    if (parts.length < 3) {
        const lines = content.split('\n');
        for (const line of lines) {
            const match = line.match(/^\*\*(.+?):\*\*\s*(.+)/);
            if (match) result[match[1].trim()] = match[2].trim();
        }
        return result;
    }
    const fm = parts[1];
    for (const line of fm.split('\n')) {
        const m = line.match(/^([^:]+):\s*(.+)/);
        if (m) result[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '');
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
        if (!fs.existsSync(dir)) return [];
        const files = fs.readdirSync(dir).filter(f => f.endsWith('.md')).sort();
        return files.map(file => {
            const slug = file.replace('.md', '');
            const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
            const fm = parseFrontmatter(raw);
            const body = raw.split('---').slice(2).join('---') || raw;
            const firstH1 = raw.match(/^#\s+(.+)/m)?.[1] || slug;
            const firstPara = body.replace(/^#+.+$/gm, '').replace(/[#*\[\]]/g, '').trim().split('\n').find(l => l.trim().length > 40) || '';
            return {
                slug,
                title: fm['title'] || fm['Title'] || firstH1,
                excerpt: fm['description'] || fm['Description'] || firstPara.slice(0, 160),
                mainImage: fm['image'] || fm['Featured Image'] || fm['featuredImage'] || null,
                publishedAt: fm['date'] || fm['Date'] || fm['publishedAt'] || null,
                readTime: estimateReadTime(raw),
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
            excerpt: fm['description'] || fm['Description'] || '',
            mainImage: fm['image'] || fm['Featured Image'] || fm['featuredImage'] || null,
            publishedAt: fm['date'] || fm['Date'] || null,
            readTime: estimateReadTime(raw),
            body,
            author: fm['author'] || fm['Tác giả'] || 'Maison de SON',
        };
    } catch (e) {
        return null;
    }
});
