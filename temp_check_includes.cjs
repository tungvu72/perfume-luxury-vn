const fs = require('fs');
const content = fs.readFileSync('src/constants/mockData.ts', 'utf8');
const checks = ['acqua-di-gio-profondo', 'aventus', 'black-orchid', 'bloom-edp', 'bright-crystal', 'cedrat-boise', 'dylan-blue', 'eros-flame', 'good-girl', 'jpg-ultra-male', 'libre-intense', 'spicebomb-extreme', 'toy-boy', 'y-edp'];
checks.forEach(c => {
    console.log(c + ':', content.includes(c));
});
