import fs from 'fs';
import path from 'path';

function parseFrontmatter(content) {
    const result = {};
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
        if (matchBold) {
            result[matchBold[1].trim()] = matchBold[2].trim();
        }
    }
    return result;
}

const dir = path.join(process.cwd(), 'content', 'buying-guides');
console.log('Checking directory:', dir);
if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
    console.log('Found files:', files.length);
    if (files.length > 0) {
        const firstFile = files[0];
        const raw = fs.readFileSync(path.join(dir, firstFile), 'utf-8');
        const fm = parseFrontmatter(raw);
        console.log('Sample Data from first file:', {
            file: firstFile,
            title: fm['title'] || fm['Title'],
            desc: fm['Meta Description'] || fm['description']
        });
    }
} else {
    console.log('Directory not found!');
}
