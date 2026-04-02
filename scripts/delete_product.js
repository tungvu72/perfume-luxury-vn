const fs = require('fs');
const filepath = 'src/constants/mockData.ts';
let code = fs.readFileSync(filepath, 'utf8');

// The product item looks like:
//   {
//     id: "dior-homme-original",  (or something like that)
//     name: "Dior Homme Original",
//     ...
//   },
const itemNameMatch = code.match(/name:\s*["']?Dior Homme Original["']?,?/i);
if (!itemNameMatch) {
    console.log("Không tìm thấy dòng chứa name: Dior Homme Original");
} else {
    const startIndex = code.lastIndexOf('{', itemNameMatch.index);
    let openCount = 0;
    let endIndex = -1;
    for (let i = startIndex; i < code.length; i++) {
        if (code[i] === '{') openCount++;
        if (code[i] === '}') openCount--;
        if (openCount === 0) {
            endIndex = i;
            break;
        }
    }
    
    // We want to remove from startIndex to endIndex. And the trailing comma if it exists.
    if (endIndex !== -1) {
        let textToRemove = code.substring(startIndex, endIndex + 1);
        // check trailing spaces and comma
        let postText = code.substring(endIndex + 1, endIndex + 10);
        if (postText.trim().startsWith(',')) {
            const commaIdx = code.indexOf(',', endIndex);
            textToRemove = code.substring(startIndex, commaIdx + 1);
        }
        
        code = code.replace(textToRemove, '');
        fs.writeFileSync(filepath, code, 'utf8');
        console.log("Đã xoá hoàn toàn object Dior Homme Original khỏi mockData.ts!");
    }
}

// remove image file if it exists
const fs2 = require('fs');
const imgPath = 'public/images/products/dior-homme-original-main.jpg';
if (fs2.existsSync(imgPath)) {
    fs2.unlinkSync(imgPath);
    console.log("Đã xoá file ảnh!");
}
