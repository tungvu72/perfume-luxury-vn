import fs from 'fs';
import path from 'path';

// Build product URL map: old slug -> new URL
const d = 'data/products';
const files = fs.readdirSync(d).filter(f => f.endsWith('.json'));
const urlMap = {};

for (const f of files) {
  const j = JSON.parse(fs.readFileSync(path.join(d, f), 'utf8'));
  const g = j.gender || 'unisex';
  const b = j.brandSlug || j.brand.toLowerCase().replace(/\s+/g, '-');
  const newUrl = `/nuoc-hoa-${g}-${b}-${j.id}`;
  
  // Map old slug (= product id) to new URL
  urlMap[j.id] = newUrl;
}

// Also add known old slugs that don't match product IDs
// These are aliases used in articles
const aliases = {
  'prada-lhomme-edt': urlMap['lhomme'] || null,
  'prada-lhomme': urlMap['lhomme'] || null,
  'ysl-y-edp': urlMap['y-edp'] || null,
  'acqua-di-gio-profondo-edp': urlMap['acqua-di-gio-profondo'] || null,
  'montblanc-explorer-edp': urlMap['explorer'] || null,
  'coach-for-men-edt': null, // Product doesn't exist - will remove link
  'creed-aventus-review-2026': null, // This is an article slug, keep as-is
  'edt-va-edp-khac-nhau-the-nao': null, // This is an article slug, keep as-is
  'cach-chon-nuoc-hoa-nam-di-lam-trong-khi-hau-nong-am-viet-nam': null, // Article
  'top-7-nuoc-hoa-nam-di-lam-mua-he-2026': null, // Article
};

// Merge aliases
Object.assign(urlMap, aliases);

console.log('=== URL Map (sample) ===');
['bleu-chanel-edp', 'sauvage-elixir', 'lhomme', 'y-edp', 'terre-dhermes-edt', 
 'acqua-di-gio-profondo', 'explorer', 'prada-lhomme-edt', 'ysl-y-edp',
 'creed-aventus', 'ysl-black-opium', 'armani-stronger-with-you-intensely'].forEach(k => {
  console.log(`  ${k} -> ${urlMap[k] || 'NOT FOUND'}`);
});

// Now scan and fix content files
console.log('\n=== Fixing content files ===\n');

const contentDirs = ['content/buying-guides', 'content/product-reviews', 'content/brand-pages'];
let totalFixes = 0;

for (const dir of contentDirs) {
  if (!fs.existsSync(dir)) continue;
  const mdFiles = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  
  for (const f of mdFiles) {
    const fp = path.join(dir, f);
    let content = fs.readFileSync(fp, 'utf8');
    let changed = false;
    let fixes = [];
    
    // Find markdown links: [text](/slug)
    // Replace product slugs with new URLs
    const newContent = content.replace(/\]\(\/((?!nuoc-hoa-|bang-xep-hang|thuong-hieu|images|kien-thuc|tac-gia|so-sanh|theo-|ve-chung|#|http)[a-z0-9-]+)\)/g, (match, slug) => {
      // Skip article slugs (they don't need nuoc-hoa- prefix)
      const articleSlugs = [
        'creed-aventus-review-2026',
        'edt-va-edp-khac-nhau-the-nao',
        'cach-chon-nuoc-hoa-nam-di-lam-trong-khi-hau-nong-am-viet-nam',
        'top-7-nuoc-hoa-nam-di-lam-mua-he-2026',
        'top-7-nuoc-hoa-nam-van-phong-lich-lam-2026',
      ];
      if (articleSlugs.includes(slug)) return match; // Keep article links as-is
      
      // Check if it's a brand slug (these stay flat)
      const brandSlugs = ['chanel', 'dior', 'creed', 'tom-ford', 'ysl', 'lattafa', 'armani', 
        'maison-francis-kurkdjian', 'hermes', 'guerlain', 'versace', 'prada', 'givenchy',
        'mugler', 'narciso-rodriguez', 'montblanc', 'valentino', 'burberry'];
      if (brandSlugs.includes(slug)) return match; // Keep brand links as-is
      
      // Look up new URL
      const newUrl = urlMap[slug];
      if (newUrl) {
        fixes.push(`  ${slug} -> ${newUrl}`);
        changed = true;
        return `](${newUrl})`;
      }
      
      // If not found in map, check aliases
      if (aliases[slug] !== undefined) {
        if (aliases[slug] === null) {
          fixes.push(`  ${slug} -> SKIPPED (no product / is article)`);
          return match;
        }
        fixes.push(`  ${slug} -> ${aliases[slug]}`);
        changed = true;
        return `](${aliases[slug]})`;
      }
      
      fixes.push(`  ${slug} -> NOT FOUND (keeping)`);
      return match;
    });
    
    if (changed) {
      fs.writeFileSync(fp, newContent);
      console.log(`FIXED: ${fp}`);
      fixes.forEach(fix => console.log(fix));
      totalFixes++;
    }
  }
}

console.log(`\nTotal files fixed: ${totalFixes}`);
