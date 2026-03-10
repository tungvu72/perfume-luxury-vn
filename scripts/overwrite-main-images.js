// scripts/overwrite-main-images.js
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const publicDir = path.join(root, 'public', 'images', 'products');

const slugs = [
    'sauvage-elixir',
    'armani-stronger-with-you-intensely',
    'lattafa-khamrah',
    'bleu-chanel-edp',
    'ysl-black-opium',
    'creed-aventus',
    'baccarat-rouge-540',
    'tom-ford-noir-extreme',
    'dior-sauvage-edp',
    'ysl-y-edp',
    'versace-eros-edp',
    'afnan-9pm',
    'acqua-di-gio-profondo',
];

let copied = 0;
for (const slug of slugs) {
    const src = path.join(publicDir, `${slug}.jpg`);
    const dest = path.join(publicDir, `${slug}-main.jpg`);
    if (!fs.existsSync(src)) {
        console.error(`Missing source: ${src}`);
        continue;
    }
    fs.copyFileSync(src, dest);
    console.log(`Copied: ${slug}.jpg -> ${slug}-main.jpg`);
    copied++;
}
console.log(`\nDone. ${copied}/${slugs.length} files copied.`);
