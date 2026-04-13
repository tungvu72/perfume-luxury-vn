const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');

const listPath = path.join(__dirname, 'danh_sach_sp.md');
const DIR = path.join(__dirname, 'fragrantica_cards');
if (!fs.existsSync(DIR)) fs.mkdirSync(DIR);

// 1. Read the list and parse
let lines = fs.readFileSync(listPath, 'utf8').split('\n');
const queries = [];

for (let line of lines) {
    // Match line like: **21.** Nước Hoa Nữ CAROLINA HERRERA Good Girl EDP
    const m = line.match(/^\*\*(\d+)\.\*\*\s+Nước Hoa [^\s]+\s+(.*)$/);
    if (m) {
        let num = m[1];
        let name = m[2];
        let fileName = `${num}. ${name}`;
        let query = `${name} fragrantica`;
        // Exclude specific words to make the search more generic
        query = query.replace(/ EDP| EDT| Parfum| Extrait/ig, '');
        queries.push({ num: parseInt(num, 10), name: fileName, q: query });
    }
}

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
    console.log(`Loaded ${queries.length} items from danh_sach_sp.md`);
    const browser = await puppeteer.launch({ headless: true });
    
    let downloadedCount = 0;
    let missingCount = 0;
    
    for (let item of queries) {
        // Find existing file matching the number prefix precisely.
        const files = fs.readdirSync(DIR);
        const exists = files.find(f => f.startsWith(`${item.num}. `) && (f.endsWith('.jpeg') || f.endsWith('.jpg')));
        
        if (exists) {
            continue; // Already downloaded
        }

        const dest = path.join(DIR, `${item.name}.jpeg`);
        console.log(`[START] Missing: ${item.num} -> ${item.q}`);

        const page = await browser.newPage();
        try {
            const searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(item.q + " fimgs.net perfume-social-cards")}&t=h_&iax=images&ia=images`;
            await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
            
            await new Promise(r => setTimeout(r, 6000));
            
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
                try {
                    await downloadFile(imgUrl, dest);
                    console.log(`   [FOUND & SAVED] ${item.name}.jpeg`);
                    downloadedCount++;
                    await new Promise(r => setTimeout(r, 1000)); // Be polite
                } catch(err) {
                    console.log(`   [FAIL FILE] ${err.message}`);
                    missingCount++;
                }
            } else {
                console.log(`   [NO CATCH] Could not find card for: ${item.name}`);
                missingCount++;
            }
        } catch(e) {
            console.log(`   [ERROR LAUNCH] ${e.message}`);
            missingCount++;
        }
        await page.close();
    }
    
    await browser.close();
    console.log(`\n=== DOWNLOAD PIPELINE COMPLETE ===`);
    console.log(`New downloads: ${downloadedCount}`);
    console.log(`Missed/Failed: ${missingCount}`);
})();
