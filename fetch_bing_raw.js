const https = require('https');

function searchBingRaw(query) {
    return new Promise((resolve) => {
        const options = {
            hostname: 'www.bing.com',
            path: '/search?q=' + encodeURIComponent(query + ' site:fragrantica.com/perfume/'),
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
            }
        };
        const req = https.get(options, (res) => {
            let data = '';
            res.on('data', d => data += d);
            res.on('end', () => {
                const match = data.match(/https?:\/\/(?:www\.)?fragrantica\.com\/perfume\/[a-zA-Z0-9\-\/]+-(\d+)\.html/i);
                resolve(match ? match[1] : null);
            });
        });
        req.on('error', () => resolve(null));
    });
}

(async () => {
    let id = await searchBingRaw('Afnan 9PM');
    console.log('Afnan 9PM ID:', id);
})();
