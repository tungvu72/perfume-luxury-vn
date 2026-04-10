const fs = require('fs');
const path = require('path');

const MOCK_DATA_PATH = path.join(__dirname, 'src/constants/mockData.ts');

function replaceProductData(id, newCode) {
    let content = fs.readFileSync(MOCK_DATA_PATH, 'utf8');
    const idRegex = new RegExp(`id:\\s*['"\`]${id}['"\`]`, 's');
    const match = idRegex.exec(content);
    if (!match) {
        console.error(`ID ${id} not found`);
        return;
    }

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
                    
                    // We found the boundaries of the object.
                    // Instead of a clean replacement wiping out images, we should ONLY replace specific fields!
                    // Wait, the newCode could just be the full object string representation.
                    // But images array might have `nuoc-hoa-X-y-thuc-te-Z.webp`! We want to PRESERVE the `image` and `images` fields.
                    const oldBlock = content.substring(start, end);
                    const imgMatch = oldBlock.match(/image:\s*['"][^'"]*['"]/);
                    const imgsMatch = oldBlock.match(/images:\s*\[[\s\S]*?\](?=\s*(?:,|}|$))/);
                    
                    const oldImage = imgMatch ? imgMatch[0] : '';
                    const oldImages = imgsMatch ? imgsMatch[0] : 'images: []';
                    
                    // Construct final code:
                    let finalCode = newCode;
                    finalCode = finalCode.replace('__IMAGE_FIELD__', oldImage);
                    finalCode = finalCode.replace('__IMAGES_FIELD__', oldImages);
                    
                    content = content.substring(0, start) + finalCode + content.substring(end);
                    fs.writeFileSync(MOCK_DATA_PATH, content, 'utf8');
                    console.log(`Successfully updated ${id}`);
                    return;
                }
            }
        }
        end++;
    }
}

// 1. ARMAF
const armafCode = `{
    id: "armaf-effects-of-uniq",
    brand: "ARMAF",
    brandSlug: "armaf",
    name: "Effects of Uniq",
    gender: "nam",
    __IMAGE_FIELD__,
    __IMAGES_FIELD__,
    description: "Effects of Uniq là sự pha trộn tinh tế giữa những nốt hương trái cây mọng nước và rêu sồi nam tính. Mùi hương mang lại hiệu ứng bùng nổ sảng khoái và độ lưu tỏa cực kỳ ấn tượng dành cho những anh chàng thích sự hiện đại.",
    verdict: "Hương trái cây tươi mát, đa dụng, lưu tỏa rất tốt.",
    verdictShort: "Tươi mới, Đa dụng",
    score: { scent: 8.5, uniqueness: 8, compliments: 9, value: 9, total: 8.6 },
    vibes: [{label: "Nam tính", icon: "💪"}, {label: "Trẻ trung", icon: "👟"}, {label: "Trái cây", icon: "🍍"}, {label: "Mùa hè", icon: "☀️"}],
    topNotes: [{name: "Cam Bergamot"}, {name: "Dứa"}, {name: "Táo xanh"}],
    middleNotes: [{name: "Hoa nhài"}, {name: "Hoắc hương"}, {name: "Gỗ trầm"}],
    baseNotes: [{name: "Vani"}, {name: "Xạ hương trắng"}, {name: "Rêu sồi"}],
    accords: [{name: "Trái cây", value: 100, color: "#f1c40f"}, {name: "Gỗ tươi", value: 80, color: "#8B4513"}, {name: "Năng động", value: 70, color: "#3498db"}],
    tags: ["Tươi mát", "Nam tính", "Trái cây", "Đa dụng", "Đi dạo", "Thể thao", "Mùa hè", "Mùa xuân"],
    sizes: ["100ml"],
    basePrice: 0,
    shopeeOffers: [],
    isPublished: true
}`;

// 2. KILIAN Black Phantom
const kilianCode = `{
    id: "black-phantom-by-kilian",
    brand: "Kilian",
    brandSlug: "kilian",
    name: "Black Phantom",
    gender: "unisex",
    __IMAGE_FIELD__,
    __IMAGES_FIELD__,
    description: "Hương vị bóng đêm từ rượu rum, cà phê đắng, socola đen và caramel ngọt lịm. Black Phantom với câu khẩu hiệu 'Memento Mori' là một tuyệt tác đậm chất Gourmand: đầy mị hoặc, cuốn hút, sang trọng và bí ẩn dành cho những buổi tiệc đêm hoang dại.",
    verdict: "Mùi hương ngọt ngào, say đắm và cực kì nịnh mũi cho mùa đông.",
    verdictShort: "Rượu Rum, Cà phê đen",
    score: { scent: 9, uniqueness: 9, compliments: 9, value: 8, total: 8.7 },
    vibes: [{label: "Bí ẩn", icon: "💀"}, {label: "Ngọt ngào", icon: "🍬"}, {label: "Lôi cuốn", icon: "🔥"}, {label: "Buổi tối", icon: "🌙"}],
    topNotes: [{name: "Rượu Rum"}, {name: "Đường mía"}, {name: "Hạnh nhân"}],
    middleNotes: [{name: "Cà phê đen"}, {name: "Socola đen"}, {name: "Caramel"}],
    baseNotes: [{name: "Gỗ đàn hương"}, {name: "Vòi voi"}, {name: "Hương khói"}],
    accords: [{name: "Ngọt ấm", value: 100, color: "#e74c3c"}, {name: "Rượu/Cà phê", value: 85, color: "#6F4E37"}, {name: "Gourmand", value: 60, color: "#D2691E"}],
    tags: ["Gourmand", "Sáng trọng", "Buổi tối", "Ngọt ngào", "Mùa đông", "Bí ẩn", "Ngọt ngào"],
    sizes: ["50ml", "100ml"],
    basePrice: 0,
    shopeeOffers: [],
    isPublished: true
}`;

// 3. LIQUIDES IMAGINAIRES Blanche Bête
const blancheCode = `{
    id: "blanche-bete",
    brand: "Liquides Imaginaires",
    brandSlug: "liquides-imaginaires",
    name: "Blanche Bête",
    gender: "nu",
    __IMAGE_FIELD__,
    __IMAGES_FIELD__,
    description: "Hương thơm tựa dòng sữa ấm, mềm mại mờ ảo đúng như tên gọi 'Bạch Thú'. Một bầu không khí lactonic ngọt ngào hòa quyện cùng xạ hương trắng, hoa huệ và cacao, khơi gợi nét thanh khiết nhưng cực kì gợi cảm.",
    verdict: "Ly sữa ấm rắc phấn thơm bám dính cực lâu trên da phái nữ.",
    verdictShort: "Sữa ngọt, Xạ hương",
    score: { scent: 9, uniqueness: 9, compliments: 8.5, value: 8.5, total: 8.7 },
    vibes: [{label: "Mềm mại", icon: "☁️"}, {label: "Lactonic", icon: "🥛"}, {label: "Gợi cảm", icon: "💋"}, {label: "Thư giãn", icon: "🧘‍♀️"}],
    topNotes: [{name: "Sữa ấm"}, {name: "Cây Ambrette"}, {name: "Hương sương mù"}],
    middleNotes: [{name: "Hoa huệ"}, {name: "Hoa nhài"}, {name: "Nhang (Incense)"}],
    baseNotes: [{name: "Xạ hương trắng"}, {name: "Vương vải (Vanilla)"}, {name: "Cacao"}],
    accords: [{name: "Sữa ấm (Lactonic)", value: 100, color: "#faebd7"}, {name: "Phấn trắng", value: 80, color: "#f0f8ff"}, {name: "Xạ hương hoa", value: 70, color: "#ffb6c1"}],
    tags: ["Sữa ngọt", "Xạ hương", "Mềm mại", "Nịnh mũi", "Nữ tính", "Quyến rũ", "Mùa thu", "Mùa đông"],
    sizes: ["100ml"],
    basePrice: 0,
    shopeeOffers: [],
    isPublished: true
}`;

replaceProductData("armaf-effects-of-uniq", armafCode);
replaceProductData("black-phantom-by-kilian", kilianCode);
replaceProductData("blanche-bete", blancheCode);
