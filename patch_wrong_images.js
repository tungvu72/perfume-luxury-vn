const fs = require('fs');

const mockPath = require('path').join(__dirname, 'src', 'constants', 'mockData.ts');
let content = fs.readFileSync(mockPath, 'utf8');

// Replace Vanilla Sex
content = content.replace(
    'image: "/images/products/tom-ford-tobacco-vanille-main.jpg",\n    images: [{ url: "/images/products/tom-ford-tobacco-vanille-main.jpg", source: "fragram", caption: "Tom Ford Vanilla Sex chính hãng", verified: true }],',
    'image: "/images/products/tom-ford-vanilla-sex-main.jpg",\n    images: [{ url: "/images/products/tom-ford-vanilla-sex-main.jpg", source: "studio", caption: "Tom Ford Vanilla Sex chính hãng", verified: true }],'
);

// Replace Light Blue Intense Homme
content = content.replace(
    /image: "\/images\/products\/dg-light-blue-intense-homme-main\.jpg",\s*images: \[\s*\{\s*url: "\/images\/products\/dg-light-blue-intense-homme-main\.jpg",\s*source: "fragram",\s*caption: "[^"]+",\s*verified: true\s*\}\s*\]/,
    'image: "/images/products/dg-light-blue-intense-homme-main.jpg",\n    images: [\n      { url: "/images/products/dg-light-blue-intense-homme-main.jpg", source: "studio", caption: "Dolce & Gabbana Light Blue Eau Intense Pour Homme chính hãng", verified: true }\n    ]'
);

fs.writeFileSync(mockPath, content, 'utf8');
console.log('Fixed mappings for Vanilla Sex and Light Blue Intense Homme with source: studio.');
