const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    
    async function searchBing(query) {
        const page = await browser.newPage();
        try {
            await page.goto(`https://www.bing.com/search?q=${encodeURIComponent(query + ' site:fragrantica.com/perfume/')}`, { waitUntil: 'domcontentloaded' });
            
            const href = await page.evaluate(() => {
                const els = document.querySelectorAll('h2 a');
                for (let a of els) {
                    if (a.href && a.href.includes('fragrantica.com/perfume/')) return a.href;
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
