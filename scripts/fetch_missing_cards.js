const https = require('https');
const fs = require('fs');

const targets = [
  {
    idStr: 'chanel-no-19-eau-de-toilette', // id in mockData.ts
    sttStr: '039',
    url: 'https://www.fragrantica.com/perfume/Chanel/Chanel-No-19-Eau-de-Toilette-11.html'
  },
  {
    idStr: 'dolce-gabbana-light-blue-intense-homme',
    sttStr: '082',
    url: 'https://www.fragrantica.com/perfume/Dolce-Gabbana/Light-Blue-Eau-Intense-Pour-Homme-44778.html'
  },
  {
    idStr: 'jean-paul-gaultier-jpg-le-male-elixir',
    sttStr: '152',
    url: 'https://www.fragrantica.com/perfume/Jean-Paul-Gaultier/Le-Male-Elixir-81642.html'
  },
  {
    idStr: 'tom-ford-noir-extreme',
    sttStr: '231',
    url: 'https://www.fragrantica.com/perfume/Tom-Ford/Noir-Extreme-29675.html'
  },
  {
    idStr: 'tom-ford-vanilla',
    sttStr: '236', // In the screenshot, it's 236
    url: 'https://www.fragrantica.com/perfume/Tom-Ford/Vanilla-Sex-88126.html'
  }
];

function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function processTargets() {
  for (const t of targets) {
    try {
      console.log(`Fetching ${t.url}`);
      const html = await fetchHTML(t.url);
      
      let imageId = null;
      // Match o.{ID}.jpg
      const match = html.match(/fimgs\.net\/mdimg\/perfume\/o\.(\d+)\.jpg/);
      if (match) {
        imageId = match[1];
        console.log(`[${t.sttStr}] Found ID: ${imageId}`);
      } else {
        // Fallback to URL ID
        const urlMatch = t.url.match(/-(\d+)\.html/);
        if (urlMatch) {
            imageId = urlMatch[1];
            console.log(`[${t.sttStr}] Using fallback ID from URL: ${imageId}`);
        } else {
            console.log(`[${t.sttStr}] Could not find ID!`);
            continue;
        }
      }
      
      const cardUrl = `https://fimgs.net/mdimg/perfume-social-cards/en-p_c_${imageId}.jpeg`;
      // Download it (PowerShell equivalent)
      console.log(`[${t.sttStr}] Card URL: ${cardUrl}`);
      
    } catch (e) {
      console.error(`Error processing ${t.url}`, e.message);
    }
  }
}

processTargets();
