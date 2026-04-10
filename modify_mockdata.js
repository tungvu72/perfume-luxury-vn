const fs = require('fs');
const path = require('path');
const data = require('./tempData.cjs').MASTER_PERFUMES;

const MOCK_DATA_PATH = path.join(__dirname, 'src/constants/mockData.ts');

function findExactBlock(content, targetId) {
    // Basic heuristics to find the { ... id: "targetId" ... }, block
    const idRegex = new RegExp(`id:\\s*['"\`]${targetId}['"\`]`, 's');
    const match = idRegex.exec(content);
    if (!match) return null;

    let start = match.index;
    while (start > 0 && content[start] !== '{') start--;
    
    let depth = 0;
    let end = start;
    let inString = false;
    let quoteChar = null;

    while (end < content.length) {
        let char = content[end];
        let prev = end > 0 ? content[end-1] : '';
        
        if (inString) {
            if (char === quoteChar && prev !== '\\') inString = false;
        } else {
            if (char === '"' || char === "'" || char === "`") {
                inString = true;
                quoteChar = char;
            } else if (char === '{') {
                depth++;
            } else if (char === '}') {
                depth--;
                if (depth === 0) {
                    end++;
                    return { start, end };
                }
            }
        }
        end++;
    }
    return null;
}

function processChanges() {
    let raw = fs.readFileSync(MOCK_DATA_PATH, 'utf8');

    // 1. DEDUPLICATE ULTRA MALE
    const badJpgBlock = findExactBlock(raw, 'jean-paul-gaultier-ultra-male');
    if (badJpgBlock) {
        // remove the block and maybe the trailing comma
        let pStart = badJpgBlock.start;
        let pEnd = badJpgBlock.end;
        if (raw[pEnd] === ',') pEnd++;
        // also remove trailing whitespace/newlines
        while (raw[pEnd] === ' ' || raw[pEnd] === '\n' || raw[pEnd] === '\r' || raw[pEnd] === '\t') {
            pEnd++;
        }
        raw = raw.substring(0, pStart) + raw.substring(pEnd);
        console.log('Removed jean-paul-gaultier-ultra-male');
    }

    // 2. MERGE GUCCI BLOOM
    // We want to extract images array from gucci-bloom-edp string in tempData.cjs
    // and replace the images array in bloom-edp.
    // Instead of messing with string parsing the images array, wait:
    // Gucci Bloom images string can be found similarly.
    const goodBloomBlock = findExactBlock(raw, 'bloom-edp');
    const badBloomBlock = findExactBlock(raw, 'gucci-bloom-edp');
    
    if (goodBloomBlock && badBloomBlock) {
        // Find images array string from the bad block
        const badBlockString = raw.substring(badBloomBlock.start, badBloomBlock.end);
        const imagesMatch = badBlockString.match(/images:\s*\[[\s\S]*?\](?=\s*(?:,|}|$))/);
        
        if (imagesMatch) {
            const badImagesString = imagesMatch[0];
            const goodBlockString = raw.substring(goodBloomBlock.start, goodBloomBlock.end);
            
            let gBlock = findExactBlock(raw, 'bloom-edp');
            let bBlock = findExactBlock(raw, 'gucci-bloom-edp');
            
            if (gBlock && bBlock) {
                const bStr = raw.substring(bBlock.start, bBlock.end);
                const gStr = raw.substring(gBlock.start, gBlock.end);
                const imgMatch = bStr.match(/images:\s*\[[\s\S]*?\](?=[\s\S]*(?:,|}|$))/);
                if (imgMatch) {
                    const replacingImages = imgMatch[0];
                    let updatedGStr;
                    if (gStr.includes('images:')) {
                         updatedGStr = gStr.replace(/images:\s*\[[\s\S]*?\]/, replacingImages);
                    } else {
                         updatedGStr = gStr.replace(/\s*}\s*$/, ',\n  ' + replacingImages + '\n}');
                    }

                    // Perform replacement manually using splits:
                    raw = raw.replace(gStr, updatedGStr);
                    raw = raw.replace(bStr + ',', '');
                    raw = raw.replace(bStr, '');
                    console.log('Merged Gucci Bloom and removed bad block.');
                }
            }
            // Wait, I will use regular String.replace for simplicity:
        }
    }

    fs.writeFileSync(MOCK_DATA_PATH, raw, 'utf8');

    // 3. GENERATE 76 REPORT
    let hd = `# Danh sách 76 sản phẩm cần thêm Nội Dung và Ảnh Main
Đây là các thư mục rác/nháp Sếp đã gán, bị khuyết thiếu \`description\` và \`tags\`.
Cán bộ chịu trách nhiệm chuẩn bị các hình ảnh và content cho các H1 sau:

`;
    let noImageProds = [];
    data.forEach(p => {
        const hasMain = !!(p.image && /(main\.(jpg|png|webp)|fragrantica)/i.test(p.image));
        if (!hasMain) {
            const hasTags = p.tags && p.tags.length > 0;
            const desc = p.description;
            if (!hasTags || !desc) {
                noImageProds.push(p);
            }
        }
    });

    noImageProds.forEach((p, index) => {
        const g = p.gender === 'nam' ? 'Nam' : (p.gender === 'nu' ? 'Nữ' : 'Unisex');
        const h1 = `Nước Hoa ${g} ${p.brand ? p.brand.toUpperCase() : ''} ${p.name}`;
        hd += `${index + 1}. **${h1}**\n   - Tên ID: \`${p.id}\`\n   - Link check thử: [Sửa Tên Ở Đây](#)\n\n`;
    });

    fs.writeFileSync(path.join(__dirname, 'missing_76_report.md'), hd, 'utf8');
    console.log('Generated missing_76_report.md');
}

processChanges();
