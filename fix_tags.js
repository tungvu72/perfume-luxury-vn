const fs = require('fs');
let lines = fs.readFileSync('src/constants/mockData.ts', 'utf8').split('\n');
let modified = false;
for(let i=0; i<lines.length; i++) {
  if (lines[i].includes('id: ')) {
    let hasTags = false;
    let endIdx = i;
    while(endIdx < lines.length && !lines[endIdx].includes('isPublished: true')) {
      if (lines[endIdx].trim().startsWith('tags:')) hasTags = true;
      endIdx++;
    }
    if (!hasTags) {
      let genderStr = lines.slice(i, endIdx).find(l => l.includes('gender:'));
      let gender = genderStr && genderStr.includes('nam') ? 'Nam' : 'Nữ';
      lines.splice(endIdx, 0, '    tags: ["' + gender + '", "Designer"],');
      modified = true;
    }
  }
}
if(modified) {
  fs.writeFileSync('src/constants/mockData.ts', lines.join('\n'), 'utf8');
  console.log('Fixed missing tags');
} else {
  console.log('All tags exist');
}
