const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

// 1. We will use the same patch logic on 'good-girl' but inject the high-quality accurate data.
const upd = {
    id: "good-girl",
    data: {
      subName: "EDP", perfumer: "Louise Turner", year: 2016, gender: "nu",
      longevity: 7, sillage: 8, seasons: { spring: 30, summer: 10, fall: 85, winter: 100 }, dayNight: { day: 15, night: 85 },
      seoTitle: "Carolina Herrera Good Girl EDP chính hãng mua ở đâu?",
      metaDescription: "Đánh giá Carolina Herrera Good Girl EDP chính hãng: Biểu tượng giày gót nhọn, cacao ngọt ngào cho tiệc tùng cháy phố.",
      description: "Good Girl EDP mang đến hình ảnh chiếc giày gót nhọn lừng danh của giới sành điệu. Mùi hương ngập tràn sự quyến rũ chết người từ cacao sưởi ấm kết hợp với hoa huệ, lý tưởng cho những đêm tiệc tùng bùng nổ năng lượng.",
      score: { scent: 8.0, uniqueness: 6.0, compliments: 8.5, value: 9.0, total: 8.0 },
      topNotes: [{name: "Cacao"}, {name: "Hạnh nhân"}],
      middleNotes: [{name: "Hoa huệ (Tuberose)"}, {name: "Hoa nhài"}],
      baseNotes: [{name: "Đậu Tonka"}, {name: "Vanilla"}],
      accords: [
        {name: "Ngọt ngào", value: 100, color: "#ff3333"},
        {name: "Hoa trắng", value: 85, color: "#f0f8ff"},
        {name: "Cay ấm", value: 80, color: "#cc4400"},
        {name: "Vanilla", value: 75, color: "#ffffcc"},
        {name: "Hổ phách", value: 70, color: "#d2691e"}
      ]
    }
};

let startIdx = lines.findIndex(l => l.includes(`id: "${upd.id}",`));
let endIdx = lines.findIndex((l, i) => i > startIdx && l.includes(`isPublished: true`));

const propsToReplace = ['subName', 'perfumer', 'gender', 'year', 'longevity', 'sillage', 'seasons', 'dayNight', 'seoTitle', 'metaDescription', 'description', 'score', 'topNotes', 'middleNotes', 'baseNotes', 'accords'];

let cleanedLines = [];

for (let i = startIdx; i <= endIdx; i++) {
let line = lines[i];
let skip = false;

for (let p of propsToReplace) {
    if (line.trim().startsWith(p + ':')) {
    skip = true;
    if ((p === 'accords' || p === 'topNotes' || p === 'middleNotes' || p === 'baseNotes') && line.includes('[')) {
        let j = i + 1;
        while (j <= endIdx && !lines[j].includes('],') && !lines[j].includes('] )')) j++;
        i = j; 
    }
    break;
    }
}
if (!skip) {
    cleanedLines.push(line);
}
}

let nameFileIdx = cleanedLines.findIndex(l => l.trim().startsWith('name:'));

let injectLines = [];
for (let p of propsToReplace) {
if (upd.data[p] !== undefined) {
    let vStr = JSON.stringify(upd.data[p]);
    if (p === 'accords') {
    let accStr = `    accords: [\n`;
    upd.data[p].forEach((a, idx) => {
        accStr += `      {"name": "${a.name}", "value": ${a.value}, "color": "${a.color}"}${idx < upd.data[p].length-1 ? ',' : ''}\n`;
    });
    accStr += `    ],`;
    injectLines.push(accStr);
    } else if (p === 'description') {
    injectLines.push(`    description: ${vStr},`);
    } else if (p === 'topNotes' || p === 'middleNotes' || p === 'baseNotes') {
    let arrStr = `    ${p}: [\n` + upd.data[p].map(n => `      {"name": "${n.name}"}`).join(',\n') + `\n    ],`;
    injectLines.push(arrStr);
    } else {
    injectLines.push(`    ${p}: ${vStr},`);
    }
}
}

cleanedLines.splice(nameFileIdx + 1, 0, ...injectLines);
lines.splice(startIdx, endIdx - startIdx + 1, ...cleanedLines);

// 2. NOW DELETE 'good-girl-carolina' ENTIRELY
let ggcStartIdx = lines.findIndex(l => l.includes('id: "good-girl-carolina",'));
if (ggcStartIdx > -1) {
    // Find the opening brace before id
    let blockStart = ggcStartIdx;
    while(blockStart > 0 && !lines[blockStart].includes('{')) blockStart--;
    
    let blockEnd = lines.findIndex((l, i) => i > ggcStartIdx && l.includes('isPublished: true'));
    // Find closing brace
    let actualEnd = blockEnd;
    while(actualEnd < lines.length && !lines[actualEnd].includes('},')) actualEnd++;
    
    lines.splice(blockStart, actualEnd - blockStart + 1);
    console.log("Deleted 'good-girl-carolina' completely.");
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log("Patched 'good-girl' successfully.");
