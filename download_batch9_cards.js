const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const destDir = path.join(__dirname, 'fragrantica_cards');

const cards = [
  { num: 82, name: "82. DG Light Blue Eau Intense.jpeg", url: "https://fimgs.net/mdimg/perfume-social-cards/en-social-44034.jpeg" },
  { num: 83, name: "83. DG Light Blue Pour Femme EDT.jpeg", url: "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_485.jpeg" },
  { num: 84, name: "84. DG The One EDP.jpeg", url: "https://fimgs.net/mdimg/perfume-social-cards/en-social-698.jpeg" },
  { num: 85, name: "85. DG The One for Men EDP.jpeg", url: "https://fimgs.net/mdimg/perfume-social-cards/en-social-31909.jpeg" },
  { num: 86, name: "86. Elie Saab Le Parfum.jpeg", url: "https://fimgs.net/mdimg/perfume-social-cards/en-social-12258.jpeg" },
  { num: 87, name: "87. Elizabeth Arden White Tea EDT.jpeg", url: "https://fimgs.net/mdimg/perfume-social-cards/en-social-42439.jpeg" },
  { num: 88, name: "88. Ella K Pluie Sur Ha Long.jpeg", url: "https://fimgs.net/mdimg/perfume-social-cards/en-social-48468.jpeg" },
  { num: 89, name: "89. Essential Parfums Bois Imperial EDP.jpeg", url: "https://fimgs.net/mdimg/perfume-social-cards/en-social-64338.jpeg" },
  { num: 90, name: "90. Ex Nihilo Blue Talisman.jpeg", url: "https://fimgs.net/mdimg/perfume-social-cards/en-social-84224.jpeg" },
  { num: 91, name: "91. Frederic Malle Carnal Flower EDP.jpeg", url: "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_1024.jpeg" }
];

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        download(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error('HTTP ' + res.statusCode + ' for ' + url));
        return;
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', reject);
  });
}

(async () => {
  for (const card of cards) {
    const dest = path.join(destDir, card.name);
    try {
      await download(card.url, dest);
      const size = fs.statSync(dest).size;
      if (size < 5000) {
        console.log('[FAIL] ' + card.name + ' - too small (' + size + ' bytes)');
      } else {
        console.log('[OK] ' + card.name + ' (' + Math.round(size/1024) + 'KB)');
      }
    } catch (e) {
      console.log('[ERR] ' + card.name + ': ' + e.message);
    }
  }
  console.log('Done.');
})();
