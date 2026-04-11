const fs = require('fs');
const path = require('path');

const MOCK_DATA_PATH = path.join(__dirname, 'src/constants/mockData.ts');

function replaceProductData(id, newCode) {
    let content = fs.readFileSync(MOCK_DATA_PATH, 'utf8');
    const idRegex = new RegExp(`id:\\s*['"\`]${id}['"\`]`, 's');
    const match = idRegex.exec(content);
    if (!match) return false;

    let start = match.index;
    while (start > 0 && content[start] !== '{') start--;
    let depth = 0, end = start;
    let inString = false, quoteChar = null;

    while (end < content.length) {
        let char = content[end], prev = end > 0 ? content[end-1] : '';
        if (inString) {
            if (char === quoteChar && prev !== '\\') inString = false;
        } else {
            if (char === '"' || char === "'" || char === "\`") { inString = true; quoteChar = char; }
            else if (char === '{') depth++;
            else if (char === '}') {
                depth--;
                if (depth === 0) {
                    end++;
                    let oldBlock = content.substring(start, end);
                    let imgMatch = oldBlock.match(/image:\s*['"][^'"]*['"]/);
                    let imgsMatch = oldBlock.match(/images:\s*\[[\s\S]*?\](?=\s*(?:,|}|$))/);
                    let finalCode = newCode.replace('__IMAGE_FIELD__', imgMatch ? imgMatch[0] : '').replace('__IMAGES_FIELD__', imgsMatch ? imgsMatch[0] : 'images: []');
                    content = content.substring(0, start) + finalCode + content.substring(end);
                    fs.writeFileSync(MOCK_DATA_PATH, content, 'utf8');
                    console.log(`Updated ${id}`);
                    return true;
                }
            }
        }
        end++;
    }
    return false;
}

const struct = `{
    id: "diptyque-doson-edp",
    brand: "Diptyque",
    brandSlug: "diptyque",
    name: "Doson EDP",
    gender: "unisex",
    __IMAGE_FIELD__,
    __IMAGES_FIELD__,
    description: "Ký ức tuổi thơ tại Đồ Sơn dưới làn gió biển. Do Son EDP mang nét gợi cảm tự nhiên của hoa huệ, xanh ngát và quyến luyến hoang dã.",
    verdict: "Hương thơm xuất sắc, chuẩn bị cập nhật bài phân tích...",
    verdictShort: "Đang cập nhật",
    score: { scent: Math.floor(Math.random()*2)+8, uniqueness: 8, compliments: 8, value: 8, total: 8.5 },
    vibes: [{"label":"Hoài niệm","icon":"🌊"},{"label":"Xanh tươi","icon":"🍃"}],
    topNotes: [{"name":"Hoa huệ (Tuberose)"},{"name":"Tinh dầu lá cam (Petitgrain)"}],
    middleNotes: [{"name":"Hồng tiêu (Pink Pepper)"}],
    baseNotes: [{"name":"Xạ hương (Musk)"}],
    accords: [{"name":"Hoa huệ","value":100,"color":"#e6ffe6"},{"name":"Hoa trắng","value":85,"color":"#f8f8ff"},{"name":"Xạ hương","value":60,"color":"#e6e6fa"},{"name":"Động vật hoang dã","value":55,"color":"#8b4513"},{"name":"Xanh ngát","value":50,"color":"#228b22"}],
    tags: ["Thơm lâu", "Hương tinh chọn"],
    sizes: ["100ml"],
    basePrice: 0,
    shopeeOffers: [],
    isPublished: true
}`;

let res = replaceProductData("diptyque-doson-edp", struct);
if (!res) console.log("FAILED TO MAP");
