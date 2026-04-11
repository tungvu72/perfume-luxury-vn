const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');

const queries = [
    { name: "81. Diptyque Doson EDP", q: "Diptyque Do Son Eau de Parfum fragrantica" },
    { name: "82. Diptyque Fleur de Peau", q: "Diptyque Fleur de Peau fragrantica" },
    { name: "83. Diptyque Philosykos EDP", q: "Diptyque Philosykos Eau de Parfum fragrantica" },
    { name: "84. Dolce Gabbana Light Blue Eau Intense", q: "Dolce & Gabbana Light Blue Eau Intense Pour Homme fragrantica" },
    { name: "85. Dolce Gabbana Light Blue Pour Femme", q: "Dolce & Gabbana Light Blue women fragrantica" },
    { name: "86. Dolce Gabbana The One EDP", q: "Dolce & Gabbana The One Eau de Parfum women fragrantica" },
    { name: "87. Dolce Gabbana The One for Men EDP", q: "Dolce & Gabbana The One for Men Eau de Parfum fragrantica" },
    { name: "88. Elie Saab Le Parfum", q: "Elie Saab Le Parfum fragrantica" },
    { name: "89. Elizabeth Arden White Tea EDT", q: "Elizabeth Arden White Tea fragrantica" },
    { name: "90. Ella K Pluie Sur Ha Long", q: "Ella K Pluie Sur Ha Long fragrantica" }
];

const DIR = path.join(__dirname, 'fragrantica_cards');
if (!fs.existsSync(DIR)) fs.mkdirSync(DIR);

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => { file.close(resolve); });
            } else {
                reject(new Error(`Failed with status code: ${response.statusCode}`));
            }
        }).on('error', (err) => {
            fs.unlinkSync(dest);
            reject(err);
        });
    });
}

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    
    for (let item of queries) {
        const dest = path.join(DIR, `${item.name}.jpeg`);
        if (fs.existsSync(dest)) {
            console.log(`[SKIPPED] ${item.name} already exists.`);
            continue;
        }

        const page = await browser.newPage();
        try {
            await page.goto(`https://duckduckgo.com/?q=${encodeURIComponent(item.q + " fimgs.net perfume-social-cards")}&t=h_&iax=images&ia=images`, { waitUntil: 'domcontentloaded' });
            
            await page.waitForTimeout(3000);
            
            const imgUrl = await page.evaluate(() => {
                const imgs = document.querySelectorAll('img');
                for (let img of imgs) {
                    if (img.src && typeof img.src === 'string' && img.src.includes('fimgs.net') && !img.src.includes('proxy')) {
                        return img.src;
                    }
                }
                const html = document.body.innerHTML;
                const match = html.match(/https?:\/\/[a-zA-Z0-9.\-]*fimgs\.net\/mdimg\/perfume-social-cards\/[a-zA-Z0-9_\-]+\.(?:jpg|jpeg|png)/i);
                if (match) return match[0];
                return null;
            });

            if (imgUrl) {
                console.log(`[FOUND] ${item.name} => ${imgUrl}`);
                try {
                    await downloadFile(imgUrl, dest);
                    console.log(`   -> Downloaded ${item.name}.jpeg`);
                } catch(err) {
                    console.log(`   -> Download FAILED: ${err.message}`);
                }
            } else {
                console.log(`[MISSING] ${item.name}`);
            }
        } catch(e) {
            console.log(`[ERROR] ${item.name} => ${e.message}`);
        }
        await page.close();
    }
    
    await browser.close();
})();
