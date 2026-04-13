const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    // Example: Searching for Diptyque Doson EDP
    const query = "Diptyque Do Son Eau de Parfum site:fragrantica.com/perfume/";
    console.log("Searching DDG for:", query);
    
    await page.goto(`https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`);
    
    // Get first fragrantica link
    const firstLink = await page.evaluate(() => {
        const a = document.querySelector('.result__url');
        return a ? a.href : null;
    });
    
    console.log("Found Fragrantica link:", firstLink);
    
    if (firstLink && firstLink.includes('fragrantica.com/perfume/')) {
        await page.goto(firstLink, {waitUntil: 'domcontentloaded', timeout: 30000});
        
        const ogImage = await page.evaluate(() => {
            const meta = document.querySelector('meta[property="og:image"]');
            return meta ? meta.content : null;
        });
        
        console.log("OG Image (Social Card):", ogImage);
    }
    
    await browser.close();
})();
