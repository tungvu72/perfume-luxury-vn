const fs = require('fs');
const path = require('path');

const mockPath = path.join(__dirname, '../src/constants/mockData.ts');
let content = fs.readFileSync(mockPath, 'utf8');

const mappings = [
    { slug: "y-edp", brand: "ysl", name: "y edp", gender: "nam", folder: "𝐘𝐒𝐋 𝐘 𝐄𝐚𝐮 𝐝𝐞 𝐏𝐚𝐫𝐟𝐮𝐦" }
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

    let searchId = `id: "${m.slug}"`;
    let startIndex = content.indexOf(searchId);
    if (startIndex === -1) {
        console.log(`❌ Could not find product ID ${m.slug} in mockData.ts`);
        return;
    }

    let nextIndex = content.indexOf('id: "', startIndex + searchId.length);
    if (nextIndex === -1) nextIndex = content.length;

    let productBlock = content.substring(startIndex, nextIndex);

    let imagesIndex = productBlock.indexOf('images: [');
    let replacedBlock = '';

    if (imagesIndex !== -1) {
        let closeIndex = productBlock.indexOf(']', imagesIndex);
        let innerImagesStr = productBlock.substring(imagesIndex + 'images: ['.length, closeIndex);

        let firstObjMatch = innerImagesStr.match(/^(\{[^\}]+\})/);
        let keepStr = firstObjMatch ? firstObjMatch[1] : '{ url: "", source: "fragram", caption: "", verified: true }';

        if (keepStr.includes('url: ""')) {
            // Find main image from `image:` key
            let matchImage = productBlock.match(/(image:\s*["'][^"']+["'],?)/);
            if (matchImage) {
                let mainUrl = matchImage[0].match(/["']([^"']+)["']/)[1];
                keepStr = `{ url: "${mainUrl}", source: "fragram", caption: "Ảnh studio", verified: true }`;
            }
        }

        let newImagesStr = `images: [${keepStr}, ${addedImages.join(', ')}]`;
        replacedBlock = productBlock.substring(0, imagesIndex) + newImagesStr + productBlock.substring(closeIndex + 1);
    } else {
        let singleImageRegex = /(image:\s*["'][^"']+["'],?)/;
        let matchImage = productBlock.match(singleImageRegex);
        if (matchImage) {
            let mainImageUrl = matchImage[0].match(/["']([^"']+)["']/)[1];
            let firstObj = `{ url: "${mainImageUrl}", source: "fragram", caption: "Ảnh studio", verified: true }`;
            let newImagesStr = `\n    images: [${firstObj}, ${addedImages.join(', ')}],`;
            replacedBlock = productBlock.replace(singleImageRegex, matchImage[0] + newImagesStr);
        } else {
            replacedBlock = productBlock.replace(/(year:\s*\d+,?)/, `$1\n    images: [${addedImages.join(', ')}],`);
        }
    }

    content = content.substring(0, startIndex) + replacedBlock + content.substring(nextIndex);
    console.log(`✅ Injected safely using exact bounds for ${m.slug}`);
});

fs.writeFileSync(mockPath, content, 'utf8');
console.log("ALL DONE");
