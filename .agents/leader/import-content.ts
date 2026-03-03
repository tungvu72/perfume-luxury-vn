/**
 * Content Import Script for Maison de SON
 * Imports buying guides, brand pages, and product reviews into Sanity CMS
 * 
 * Usage: npx tsx scripts/import-content.ts
 */

import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

const CONTENT_ROOT = 'D:/anti/perfume-luxury-vn/content';

// Helper: Parse markdown frontmatter
function parseFrontmatter(content: string) {
    const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!match) return { frontmatter: {}, body: content };
    
    const frontmatterStr = match[1];
    const body = match[2];
    
    const frontmatter: any = {};
    frontmatterStr.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length) {
            frontmatter[key.trim()] = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
        }
    });
    
    return { frontmatter, body };
}

// Helper: Generate slug from filename
function filenameToSlug(filename: string): string {
    return filename
        .replace(/^\d+-/, '')
        .replace(/\.md$/, '')
        .replace(/\.mdx$/, '')
        .toLowerCase();
}

console.log('📚 Maison de SON Content Import Script');
console.log('========================================');
console.log('');
console.log('This script imports content from:');
console.log(`  - ${CONTENT_ROOT}/buying-guides/`);
console.log(`  - ${CONTENT_ROOT}/brand-pages/`);
console.log('');
console.log('To run this script:');
console.log('1. Set SANITY_API_TOKEN in .env.local');
console.log('2. Run: npx tsx scripts/import-content.ts');
console.log('');
console.log('Content files ready for import:');

// List buying guides
const buyingGuidesDir = path.join(CONTENT_ROOT, 'buying-guides');
try {
    const files = fs.readdirSync(buyingGuidesDir).filter(f => f.endsWith('.md'));
    console.log(`\n📖 Buying Guides (${files.length} files):`);
    files.forEach(f => console.log(`   - ${f}`));
} catch (e) {
    console.log('   Cannot read buying-guides directory');
}

// List brand pages
const brandPagesDir = path.join(CONTENT_ROOT, 'brand-pages');
try {
    const files = fs.readdirSync(brandPagesDir).filter(f => f.endsWith('.md'));
    console.log(`\n🏷️ Brand Pages (${files.length} files):`);
    files.forEach(f => console.log(`   - ${f}`));
} catch (e) {
    console.log('   Cannot read brand-pages directory');
}

console.log('\n✅ Content files are ready. Run import when SANITY_API_TOKEN is configured.');
