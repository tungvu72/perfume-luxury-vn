const https = require('https');

const urls = [
    'https://www.fragrantica.com/perfume/Chanel/Chanel-No-19-Eau-de-Toilette-11.html',
    'https://www.fragrantica.com/perfume/Dolce-Gabbana/Light-Blue-Eau-Intense-Pour-Homme-44778.html',
    'https://www.fragrantica.com/perfume/Jean-Paul-Gaultier/Le-Male-Elixir-81642.html',
    'https://www.fragrantica.com/perfume/Tom-Ford/Noir-Extreme-29675.html',
    'https://www.fragrantica.com/perfume/Tom-Ford/Vanilla-Sex-88126.html'
];

async function getOgImage(url) {
    return new Promise((resolve) => {
        https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
            }
        }, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                const match = data.match(/property="og:image"\s+content="(.*?)"/);
                resolve(match ? match[1] : 'NOT FOUND');
            });
        }).on('error', (e) => resolve('ERROR: ' + e.message));
    });
}

async function start() {
    for (const u of urls) {
        const img = await getOgImage(u);
        console.log(`${u} -> ${img}`);
    }
}

start();
