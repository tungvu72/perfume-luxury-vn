const puppeteer = require('puppeteer');

(async () => {
    const queries = [
        "Acqua Di Parma Colonia fragrantica",
        "Afnan 9PM fragrantica",
        "Amouage Interlude Man fragrantica",
        "Amouage Reflection 45 Man fragrantica",
        "Amouage Reflection Man fragrantica",
        "Arabian Oud Dubai Musk fragrantica",
        "Armaf Odyssey Limoni fragrantica",
        "Armaf Odyssey Mandarin Sky fragrantica",
        "Armaf Club de Nuit Intense Man fragrantica",
        "Armaf Effects of Uniq fragrantica"
    ];

    const browser = await puppeteer.launch({ headless: true });
    
    for (let q of queries) {
        const page = await browser.newPage();
        try {
            await page.goto(`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(q)}`, { waitUntil: 'domcontentloaded' });
            
            // Wait for images to load
            await page.waitForTimeout(2000);
            
            // Extract the first image that has 'perfume-social-cards' or 'fimgs.net'
            const imgUrl = await page.evaluate(() => {
                const imgs = document.querySelectorAll('img');
                for (let img of imgs) {
                    if (img.src && (img.src.includes('perfume-social-cards') || img.src.includes('fimgs.net'))) {
                        return img.src;
                    }
                    // Google images uses base64 thumbnails initially, but the actual URL is in the anchor or dataset.
                }
                // Try to find the original image URL in the page source via regex
                const html = document.body.innerHTML;
                const match = html.match(/https?:\/\/fimgs\.net\/mdimg\/perfume-social-cards\/[a-zA-Z0-9_\-]+\.(?:jpg|jpeg|png)/i);
                if (match) return match[0];
                return null;
            });

            console.log(`[${q}] => ${imgUrl || 'Not Found'}`);
        } catch(e) {
            console.log(`[${q}] => Error`);
        }
        await page.close();
    }
    
    await browser.close();
})();
