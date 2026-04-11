const https = require('https');

function searchDDGHtml(query) {
    return new Promise((resolve) => {
        const options = {
            hostname: 'html.duckduckgo.com',
            path: '/html/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'Mozilla/5.0'
            }
        };
        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', d => data += d);
            res.on('end', () => {
                const match = data.match(/https?:\/\/(?:www\.)?fragrantica\.com\/perfume\/[a-zA-Z0-9\-\/]*?(\d+)\.html/i);
                resolve(match ? match[1] : null);
            });
        });
        req.on('error', () => resolve(null));
        req.write('q=' + encodeURIComponent(query + ' site:fragrantica.com'));
        req.end();
    });
}

(async () => {
    let id = await searchDDGHtml('Afnan 9PM');
    console.log('Afnan 9PM ID:', id);
})();
