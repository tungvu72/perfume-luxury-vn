const fs = require('fs');
let text2 = fs.readFileSync('fill_batch2.js', 'utf8');
let items2 = [];
let m;
let regex = /id:\s*"([^"]+)"/g;
while((m = regex.exec(text2)) !== null) items2.push(m[1]);

let text3 = fs.readFileSync('fill_batch3.js', 'utf8');
let items3 = [];
while((m = regex.exec(text3)) !== null) items3.push(m[1]);

let text4 = fs.readFileSync('fill_batch_final.js', 'utf8');
let items4 = [];
while((m = regex.exec(text4)) !== null) items4.push(m[1]);

let all = ['armaf-effects-of-uniq', 'black-phantom-by-kilian', 'blanche-bete', ...items2, ...items3, ...items4];
console.log('Bottle 5:', all[4]);
console.log('Bottle 30:', all[29]);
console.log('Bottle 70:', all[69]);
