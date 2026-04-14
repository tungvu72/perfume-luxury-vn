const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/constants/mockData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const updatedValaya = {
    id: "parfums-de-marly-valaya-exclusif",
    brandSlug: "parfums-de-marly",
    brand: "PARFUMS DE MARLY",
    name: "Valaya Exclusif",
    subName: "Exclusif Extrait",
    perfumer: "Quentin Bisch",
    year: 2024,
    gender: "nu",
    longevity: 8,
    sillage: 9,
    seasons: {"spring":35,"summer":25,"fall":25,"winter":15},
    dayNight: {"day":65,"night":35},
    seoTitle: "Nước hoa Parfums De Marly Valaya Exclusif - Đẳng cấp vương giả",
    metaDescription: "Khám phá Parfums De Marly Valaya Exclusif: Sự kết hợp hoàn hảo giữa hương phấn kiêu sa, hạnh nhân béo ngậy và gỗ Akigalawood rực rỡ. Đỉnh cao của sự quyến rũ.",
    description: "Valaya Exclusif là một chương mới đầy quyền năng trong câu chuyện về sự thuần khiết. Bản 'Exclusif' này không chỉ giữ lại tinh thần rực rỡ của nguyên bản mà còn được bồi đắp thêm sự ngọt ngào, ấm áp từ Hạnh nhân (Almond) và Vani (Vanilla). Hương thơm mở đầu bằng sự thanh khiết của Hương phấn (Powdery Notes) đỉnh cao, sau đó chuyển mình mềm mại sang Hoa cam và Hoa nhài quý phái. Hậu vị là sự lên ngôi của Ambroxan liều cao và Gỗ Akigalawood, tạo nên một dải hương bền bỉ, sang trọng và đầy kiêu hãnh trên làn da.",
    score: {"scent": 9.0, "uniqueness": 8.5, "compliments": 9.5, "value": 8.0, "total": 4.1},
    topNotes: [
      {"name": "Hương phấn (Powdery Notes)"},
      {"name": "Hạnh nhân (Almond)"}
    ],
    middleNotes: [
      {"name": "Hoa cam (Orange Blossom)"},
      {"name": "Hoa nhài (Jasmine)"}
    ],
    baseNotes: [
      {"name": "Vani (Vanilla)"},
      {"name": "Ambroxan"},
      {"name": "Gỗ Akigalawood"}
    ],
    accords: [
      {"name": "Hương phấn", "value": 100, "color": "#EDE7E3"},
      {"name": "Cam chanh", "value": 85, "color": "#FFF000"},
      {"name": "Hạnh nhân", "value": 80, "color": "#F3E5AB"},
      {"name": "Gỗ", "value": 75, "color": "#8B4513"},
      {"name": "Hoa trắng", "value": 60, "color": "#FFFFFF"}
    ],
    vibes: [
      { label: "Sang trọng", icon: "👑" },
      { label: "Sống động", icon: "✨" }
    ],
    image: "/images/products/218-parfums-de-marly-valaya-exclusif-main.jpg",
    images: [
      { url: "/images/products/218-parfums-de-marly-valaya-exclusif-main.jpg", source: "studio", caption: "Parfums de Marly Valaya Exclusif chính hãng", verified: true },
      { url: "/images/products/218-parfums-de-marly-valaya-exclusif-card.jpg", source: "fragram", caption: "Valaya Exclusif Fragrantica Card", verified: true }
    ],
    article: `### Ai không nên mua?

Nếu bạn chỉ yêu thích sự sạch sẽ, tinh tươm như tờ giấy trắng của bản Valaya EDP, bản Exclusif có thể sẽ khiến bạn thấy "nặng" hơn một chút. Sự xuất hiện của Hạnh nhân và Vani mang lại chiều sâu và độ ngậy, biến nó thành một mùi hương Floral-Gourmand nhẹ, kén những ai thích phong cách tối giản tuyệt đối.

### Có đáng tiền không?

PDM Exclusif luôn ở phân khúc giá cao nhất của hãng, nhưng đổi lại bạn có một nồng độ tinh chất (Extrait) với hiệu năng bám tỏa đáng kinh ngạc. 10 giờ lưu hương và khả năng thu hút lời khen (compliment beast) mãnh liệt khiến đây là khoản đầu tư xứng đáng cho những dịp quan trọng nhất đời bạn.

### Nên dùng khi nào?

Tiệc tối sang trọng, lễ cưới hoặc những buổi hẹn hò mà bạn muốn mình là tâm điểm của mọi ánh nhìn. Nó rực rỡ dưới ánh đèn và quyến rũ trong những không gian máy lạnh. Một mùi hương đại diện cho sự vương giả thời hiện đại.`,
    verdict: "Bản 'Exclusif' đầy quyền năng. Musk và Petalia rực rỡ nay được phủ thêm lớp hạnh nhân béo ngậy và vani say đắm. Tuyệt phẩm vương giả.",
    verdictShort: "VƯƠNG GIẢ, QUYẾN RŨ, ĐẶNG CẤP",
    tags: ["Nữ", "Sang trọng", "Hẹn hò", "Exclusif"],
    sizes: ["10ml Chiết", "75ml Fullbox"],
    basePrice: 5800000,
    shopeeOffers: [],
    isPublished: true
};

// Replace the entire object starting from id: "parfums-de-marly-valaya-exclusif"
const startTag = 'id: "parfums-de-marly-valaya-exclusif",';
const startIndex = content.indexOf(startTag);

if (startIndex !== -1) {
    // Find the end of the object
    let openBraces = 0;
    let endIndex = -1;
    let foundStart = false;

    for (let i = startIndex; i >= 0; i--) {
        if (content[i] === '{') {
            openBraces = 1;
            foundStart = true;
            let currentIdx = i + 1;
            while (openBraces > 0 && currentIdx < content.length) {
                if (content[currentIdx] === '{') openBraces++;
                if (content[currentIdx] === '}') openBraces--;
                currentIdx++;
            }
            endIndex = currentIdx;
            
            const oldObject = content.substring(i, endIndex);
            const newObject = JSON.stringify(updatedValaya, null, 2).replace(/"([^"]+)":/g, '$1:'); // Mock TS style
            
            content = content.substring(0, i) + newObject + content.substring(endIndex);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log("Patched Valaya Exclusif successfully.");
            break;
        }
    }
} else {
    console.error("Could not find Valaya Exclusif in database.");
}
