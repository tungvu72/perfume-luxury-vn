const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');

const items = [
    { num: 1, brand: "Acqua di Parma", name: "Colonia EDC", q: "Acqua di Parma Colonia fragrantica" },
    { num: 2, brand: "Afnan", name: "9PM EDP", q: "Afnan 9pm fragrantica" },
    { num: 3, brand: "Amouage", name: "Interlude Man EDP", q: "Amouage Interlude Man fragrantica" },
    { num: 4, brand: "Amouage", name: "Reflection 45 Man Extrait", q: "Amouage Reflection 45 Man fragrantica" },
    { num: 5, brand: "Amouage", name: "Reflection Man EDP", q: "Amouage Reflection Man fragrantica" }
];

function downloadFile(fileUrl, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const options = { headers: { 'User-Agent': 'Mozilla/5.0' } };
        https.get(fileUrl, options, (response) => {
            if (response.statusCode === 200 || response.statusCode === 301 || response.statusCode === 302) {
                response.pipe(file);
                file.on('finish', () => file.close(resolve));
            } else {
                reject(new Error(`Status: ${response.statusCode}`));
            }
        }).on('error', (err) => {
            fs.unlinkSync(dest);
            reject(err);
        });
    });
}

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/114.0.0.0 Safari/537.36');
    
    for(let item of items) {
        console.log(`Searching: ${item.q}`);
        await page.goto(`https://duckduckgo.com/html/?q=${encodeURIComponent(item.q)}`, { waitUntil: 'domcontentloaded' });
        
        let targetUrl = await page.evaluate(() => {
            let links = Array.from(document.querySelectorAll('a.result__url'));
            for(let a of links) {
                if(a.href && a.href.includes('fragrantica.com/perfume/')) {
                    return a.href;
                }
            }
            return null;
        });
        
        if(!targetUrl) {
            console.log(`  -> Failed to find fragrantica URL via DDG`);
            continue;
        }
        console.log(`  -> URL: ${targetUrl}`);
        
        try {
            await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
            let imgUrl = await page.evaluate(() => {
                let meta = document.querySelector('meta[property="og:image"]');
                return meta ? meta.content : null;
            });
            
            if(imgUrl && imgUrl.includes('fimgs.net/mdimg/perfume/social')) {
                let dest = path.join(__dirname, 'fragrantica_cards', `${item.num}. ${item.brand} ${item.name}.jpeg`);
                await downloadFile(imgUrl, dest);
                console.log(`  -> Downloaded: ${dest}`);
            } else {
                console.log(`  -> No standard social card found.`);
            }
        } catch(e) {
            console.log(`  -> Error scraping fragrantica: ${e.message}`);
        }
    }
    
    await browser.close();
})();
