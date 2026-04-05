const fs = require('fs');
const path = require('path');

const mockDataPath = 'src/constants/mockData.ts';
let mockContent = fs.readFileSync(mockDataPath, 'utf8');

const productsDir = 'public/images/products';
const folders = ['acqua-di-gio-profondo', 'aventus', 'black-orchid', 'bloom-edp', 'bright-crystal', 'cedrat-boise', 'dylan-blue', 'eros-flame', 'good-girl', 'jpg-ultra-male', 'libre-intense', 'spicebomb-extreme', 'toy-boy', 'y-edp'];

folders.forEach(slug => {
    const folderPath = path.join(productsDir, slug);
    if (!fs.existsSync(folderPath)) return;

    const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.jpg') || f.endsWith('.avif') || f.endsWith('.webp'));
    if (files.length === 0) return;

    // Build images array
    const imageObjects = files.map(f => {
        return `{ url: "/images/products/${slug}/${f}", source: "owner", caption: "Ảnh thực tế sản phẩm", verified: true }`;
    });

    // Find product in mockContent
    // Usually looks like: id: "black-orchid", ... images: [ ... ],
    const idRegex = new RegExp(`id:\\s*["']${slug}["']`);
    const match = idRegex.exec(mockContent);
    if (match) {
        const startIndex = match.index;
        const imagesRegex = /images:\s*\[([\s\S]*?)\]/;
        // We want to find the images array specific to this product. We can slice the content from startIndex to startIndex+1500
        const slice = mockContent.substring(startIndex, startIndex + 1500);
        const imgMatch = imagesRegex.exec(slice);

        if (imgMatch) {
            const existingImages = imgMatch[1];
            // prevent duplicate injection
            if (!existingImages.includes(files[0])) {
                const newImagesString = `images: [${existingImages}, ${imageObjects.join(', ')}]`;
                const replaceSlice = slice.replace(imagesRegex, newImagesString);
                mockContent = mockContent.substring(0, startIndex) + replaceSlice + mockContent.substring(startIndex + 1500);
                console.log('Fixed', slug);
            } else {
                console.log('Skipped (already injected)', slug);
            }
        } else {
            console.log('Images array not found for', slug);
        }
    } else {
        console.log('Product ID not found for folder', slug);
    }
});

fs.writeFileSync(mockDataPath, mockContent);
console.log('Done');
