const fs = require('fs');
const path = require('path');

const mockPath = path.join(__dirname, '../src/constants/mockData.ts');
let content = fs.readFileSync(mockPath, 'utf8');

const mappings = [
    { slug: "toy-boy", brand: "moschino", name: "toy boy", gender: "nam", folder: "moschino-toy-boy" },
    { slug: "spicebomb-extreme", brand: "viktor rolf", name: "spicebomb extreme", gender: "nam", folder: "spicebomb extreme" },
    { slug: "eros-flame", brand: "versace", name: "eros flame", gender: "nam", folder: "Versace-eros-flame" },
    { slug: "good-girl", brand: "carolina herrera", name: "good girl", gender: "nu", folder: "good girl carolina" }
];

const sourceBase = 'd:/anti/ảnh nước hoa';

function cleanSeo(name) {
    let s = name.toLowerCase();
    s = s.replace(/[^a-z0-9\-\.]/g, '-');
    while (s.includes('--')) s = s.replace('--', '-');
    return s;
}

mappings.forEach(m => {
    let sourceFolder = path.join(sourceBase, m.folder);
    if (!fs.existsSync(sourceFolder)) {
        console.log(`❌ Source folder ${sourceFolder} missing!`);
        return;
    }

    let files = fs.readdirSync(sourceFolder).filter(f => f.match(/\.(jpg|jpeg|png|webp)$/i)).sort();
    if (files.length === 0) {
        console.log(`❌ No files found for ${m.slug}`);
        return;
    }

    if (files.length > 5) files = files.slice(0, 5);

    let destFolder = path.join(__dirname, '../public/images/products', m.slug);
    if (!fs.existsSync(destFolder)) fs.mkdirSync(destFolder, { recursive: true });

    let addedImages = [];
    files.forEach((file, index) => {
        let ext = path.extname(file);
        let seoName = cleanSeo(`nuoc-hoa-${m.gender}-${m.brand}-${m.name}-thuc-te-${index + 1}${ext}`);
        fs.copyFileSync(path.join(sourceFolder, file), path.join(destFolder, seoName));
        addedImages.push(`{ url: "/images/products/${m.slug}/${seoName}", source: "owner", caption: "Ảnh thực tế sản phẩm", verified: true }`);
    });

    // Find the exact block for the item. The item starts with `id: "slug",`
    let searchId = `id: "${m.slug}"`;
    let startIndex = content.indexOf(searchId);
    if (startIndex === -1) {
        console.log(`❌ Could not find product ID ${m.slug} in mockData.ts`);
        return;
    }

    // find the end of this product block (the next id: or the end of file)
    let nextIndex = content.indexOf('id: "', startIndex + searchId.length);
    if (nextIndex === -1) nextIndex = content.length;

    let productBlock = content.substring(startIndex, nextIndex);

    // Check if `images:` array exists in this specific product block
    let imagesIndex = productBlock.indexOf('images: [');
    let replacedBlock = '';

    if (imagesIndex !== -1) {
        // It has images: [. Find the close bracket
        let closeIndex = productBlock.indexOf(']', imagesIndex);
        let innerImagesStr = productBlock.substring(imagesIndex + 'images: ['.length, closeIndex);

        let firstObjMatch = innerImagesStr.match(/^(\{[^\}]+\})/);
        let keepStr = firstObjMatch ? firstObjMatch[1] : '{ url: "", source: "fragram", caption: "", verified: true }';

        let newImagesStr = `images: [${keepStr}, ${addedImages.join(', ')}]`;
        replacedBlock = productBlock.substring(0, imagesIndex) + newImagesStr + productBlock.substring(closeIndex + 1);
    } else {
        // It DOES NOT have images:. We inject it immediately after `image: `
        let singleImageRegex = /(image:\s*["'][^"']+["'],?)/;
        let matchImage = productBlock.match(singleImageRegex);
        if (matchImage) {
            // we will create the first image item dynamically based on the single image
            let mainImageUrl = matchImage[0].match(/["']([^"']+)["']/)[1];
            let firstObj = `{ url: "${mainImageUrl}", source: "fragram", caption: "Ảnh studio", verified: true }`;
            let newImagesStr = `\n    images: [${firstObj}, ${addedImages.join(', ')}],`;
            replacedBlock = productBlock.replace(singleImageRegex, matchImage[0] + newImagesStr);
        } else {
            // Edge case, just inject after `year: ` or something
            replacedBlock = productBlock.replace(/(year:\s*\d+,?)/, `$1\n    images: [${addedImages.join(', ')}],`);
        }
    }

    content = content.substring(0, startIndex) + replacedBlock + content.substring(nextIndex);
    console.log(`✅ Injected safely using exact bounds for ${m.slug}`);
});

fs.writeFileSync(mockPath, content, 'utf8');
console.log("ALL DONE");
