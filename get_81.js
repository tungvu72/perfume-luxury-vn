const puppeteer = require('puppeteer');
const fs = require('fs');
const https = require('https');

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const options = { headers: { 'User-Agent': 'Mozilla/5.0' } };
        https.get(url, options, (response) => {
            if (response.statusCode === 200 || response.statusCode === 301 || response.statusCode === 302) {
                if (response.headers.location) {
                    https.get(response.headers.location, options, res => {
                        res.pipe(file); file.on('finish', () => resolve(true));
                    });
                } else {
                    response.pipe(file); file.on('finish', () => resolve(true));
                }
            } else {
                reject(new Error(`Status: ${response.statusCode}`));
            }
        });
    });
}

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/114.0.0.0 Safari/537.36');
    await page.goto('https://www.google.com/search?tbm=isch&q=' + encodeURIComponent('Diptyque Do Son Eau de Parfum fragrantica'), {waitUntil: 'domcontentloaded'});
    await new Promise(r => setTimeout(r, 2000));
    
    const urls = await page.evaluate(() => {
        const results = [];
        const imgs = document.querySelectorAll('img');
        for(let img of imgs) {
            // we look for data-src or src that might contain fragrantica images. Google images usually has base64 first, but let's try to extract from links
        }
        
        // Better: look at the original links inside the javascript or hrefs
        // Usually, the raw URL is in a div or something, but "fimgs.net" is commonly in the text/html
        const matches = document.body.innerHTML.match(/https?:\/\/[a-zA-Z0-9.\-]*fimgs\.net\/mdimg\/perfume-social-cards\/[a-zA-Z0-9_\-]+\.(?:jpg|jpeg|png)/gi);
        if(matches) {
            // Deduplicate
            return [...new Set(matches)];
        }
        return [];
    });

    console.log(`Found ${urls.length} target URLs.`);
    for (let i = 0; i < Math.min(3, urls.length); i++) {
        await downloadFile(urls[i], `tmp${i}.jpg`);
        console.log(`Downloaded tmp${i}.jpg: ${urls[i]}`);
    }
    await browser.close();
})();
