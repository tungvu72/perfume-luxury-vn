const fs = require('fs');
const path = require('path');

const mockPath = path.join(__dirname, '../src/constants/mockData.ts');
let content = fs.readFileSync(mockPath, 'utf8');

const sourceBase = 'd:/anti/ảnh nước hoa';
const allDirs = fs.readdirSync(sourceBase);

// Find precisely by indexing allDirs which returns the OS's exact representation
function findFolder(substrs) {
    for (let i = 0; i < allDirs.length; i++) {
        let f = allDirs[i];
        let foundAll = true;
        for (let j = 0; j < substrs.length; j++) {
            if (!f.includes(substrs[j])) {
                foundAll = false;
                break;
            }
        }
        if (foundAll) return f;
    }
    return null;
}

const mappings = [
    { slug: "jpg-ultra-male", brand: "jean paul gaultier", name: "ultra male", gender: "nam", exactStrs: ['Ultra', 'Male'] },
    { slug: "bright-crystal", brand: "versace", name: "bright crystal", gender: "nu", exactStrs: ['Bright', 'Crystal'] },
    { slug: "cedrat-boise", brand: "mancera", name: "cedrat boise", gender: "unisex", exactStrs: ['Cedrat', 'Boise'] },
    { slug: "acqua-di-gio-profondo", brand: "giorgio armani", name: "acqua di gio profondo", gender: "nam", exactStrs: ['Gio', 'Profondo'] },
    { slug: "toy-boy", brand: "moschino", name: "toy boy", gender: "nam", exactStrs: ['TOY', 'BOY'] },
    { slug: "spicebomb-extreme", brand: "viktor rolf", name: "spicebomb extreme", gender: "nam", exactStrs: ['SpiceBomb'] },
    { slug: "eros-flame", brand: "versace", name: "eros flame", gender: "nam", exactStrs: ['Flame'] },
    { slug: "libre-intense", brand: "ysl", name: "libre intense", gender: "nu", exactStrs: ['𝗘𝗗𝗣', '𝗜𝗻𝘁𝗲𝗻𝘀𝗲'] }, // using the unicode chars directly from list_dir JSON
    { slug: "good-girl", brand: "carolina herrera", name: "good girl", gender: "nu", exactStrs: ['𝑮𝑶𝑶𝑫', '𝑮𝑰𝑹𝑳'] },
    { slug: "black-orchid", brand: "tom ford", name: "black orchid", gender: "unisex", exactStrs: ['𝑩𝒍𝒂𝒄𝒌', '𝑶𝒓𝒄𝒉𝒊𝒅'] },
    { slug: "dylan-blue", brand: "versace", name: "dylan blue", gender: "nam", exactStrs: ['𝑷𝒐𝒖𝒓', '𝑯𝒐𝒎𝒎𝒆'] }
];

function cleanSeo(name) {
    let s = name.toLowerCase();
    s = s.replace(/[^a-z0-9\-\.]/g, '-');
    while (s.includes('--')) s = s.replace('--', '-');
    return s;
}

mappings.forEach(m => {
    let folder = findFolder(m.exactStrs);
    if (!folder) {
        console.log(`❌ Source folder for ${m.slug} missing!`);
        return;
    }

    let sourceFolder = path.join(sourceBase, folder);
    let files = fs.readdirSync(sourceFolder).filter(f => f.match(/\.(jpg|jpeg|png|webp)$/i)).sort();
    if (files.length === 0) {
        console.log(`❌ No files found for ${m.slug}`);
        return;
    }
    if (files.length > 5) files = files.slice(0, 5); // Just take first 5 deterministic

    let destFolder = path.join(__dirname, '../public/images/products', m.slug);
    if (!fs.existsSync(destFolder)) fs.mkdirSync(destFolder, { recursive: true });

    let addedImages = [];
    files.forEach((file, index) => {
        let ext = path.extname(file);
        let seoName = cleanSeo(`nuoc-hoa-${m.gender}-${m.brand}-${m.name}-thuc-te-${index + 1}${ext}`);
        fs.copyFileSync(path.join(sourceFolder, file), path.join(destFolder, seoName));
        addedImages.push(`{ url: "/images/products/${m.slug}/${seoName}", source: "owner", caption: "Ảnh thực tế sản phẩm", verified: true }`);
    });

    // Inject safely
    const productRegex = new RegExp(`(id:\\s*["']${m.slug}["'][\\s\\S]*?)(images:\\s*\\[)(.*?)(\\])`, 'm');
    const match = content.match(productRegex);
    if (match) {
        let existingInner = match[3].trim();
        let firstObjMatch = existingInner.match(/^(\{[^\}]+\})/);
        let keepStr = firstObjMatch ? firstObjMatch[1] : existingInner;

        let newInner = `${keepStr}, ${addedImages.join(', ')}`;
        let replacedBlock = match[1] + match[2] + newInner + match[4];
        content = content.replace(productRegex, replacedBlock);
        console.log(`✅ Injected safe for ${m.slug}`);
    } else {
        console.log(`❌ Regex failed for ${m.slug}`);
    }
});

fs.writeFileSync(mockPath, content, 'utf8');
console.log("ALL DONE");
