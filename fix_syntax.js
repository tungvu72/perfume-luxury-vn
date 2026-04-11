const fs = require('fs');
const filePath = require('path').join(__dirname, 'src/constants/mockData.ts');

let content = fs.readFileSync(filePath, 'utf8');

// The problematic lines from ck-obsession
const problematicText = `    vibes: [{ label: "Powerhouse", icon: "💪" }, { label: "80s", icon: "🕶️" }, { label: "Giá rẻ", icon: "💸" }],
      { name: "Nhựa dược" },
      { name: "Nhục đậu khấu" },
      { name: "Hoa cẩm chướng" },
      { name: "Gỗ hồng" },
      { name: "Thông" },
      { name: "Xô thơm" },
      { name: "Hoa nhài" }
    ],`;

const fixedText = `    vibes: [{ label: "Powerhouse", icon: "💪" }, { label: "80s", icon: "🕶️" }, { label: "Giá rẻ", icon: "💸" }],`;

if (content.includes(problematicText)) {
    content = content.replace(problematicText, fixedText);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Successfully fixed ck-obsession formatting error.");
} else {
    console.log("Could not find the problematic text. Please check exactly how it's formatted.");
}
