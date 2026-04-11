const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    
    async function searchBing(query) {
        const page = await browser.newPage();
        try {
            await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36');
            await page.goto(`https://www.bing.com/search?q=${encodeURIComponent(query + ' site:fragrantica.com')}`, { waitUntil: 'domcontentloaded' });
            
            const href = await page.evaluate(() => {
                const els = document.querySelectorAll('h2 a');
                for (let a of els) {
                    if (a.href && a.href.includes('fragrantica.com/perfume')) return a.href;
                }
                return null;
            });
            
            if (href) {
                const match = href.match(/-(\d+)\.html/i);
                return match ? match[1] : null;
            }
        } catch(e) {}
        finally {
            await page.close();
        }
        return null;
    }

    let id = await searchBing('Afnan 9PM');
    console.log('Afnan 9PM ID:', id);

    await browser.close();
})();
