const https = require('https');

function searchDDG(query) {
    return new Promise((resolve) => {
        const options = {
            hostname: 'lite.duckduckgo.com',
            path: '/lite/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        };
        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', d => data += d);
            res.on('end', () => {
                const match = data.match(/https:\/\/www\.fragrantica\.com\/perfume\/[a-zA-Z0-9\-\/]*?(\d+)\.html/i);
                resolve(match ? match[1] : null);
            });
        });
        req.on('error', () => resolve(null));
        req.write('q=' + encodeURIComponent(query + ' site:fragrantica.com'));
        req.end();
    });
}

(async () => {
    let queries = [
        "Acqua Di Parma Colonia",
        "Afnan 9PM",
        "Amouage Interlude Man",
        "Amouage Reflection 45 Man",
        "Amouage Reflection Man",
        "Dubai Musk Arabian Oud",
        "Armaf Odyssey Limoni",
        "Armaf Odyssey Mandarin Sky",
        "Armaf Club de Nuit Intense Man",
        "Armaf Effects of Uniq" // this might fail
    ];

    for (let q of queries) {
        let id = await searchDDG(q);
        if (id) {
            console.log(`✅ [${id}] ${q}`);
        } else {
            console.log(`❌ Not Found: ${q}`);
        }
        await new Promise(r => setTimeout(r, 1000));
    }
})();
