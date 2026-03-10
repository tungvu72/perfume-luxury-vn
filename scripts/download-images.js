/**
 * Script download ảnh từ Fragrantica về local
 * Bao gồm: ảnh chính (main) + ảnh lớn (xl) 
 * 
 * Chạy: node scripts/download-images.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const imageMap = JSON.parse(fs.readFileSync(path.join(__dirname, '../content/image-map.json'), 'utf8'));
const outputDir = path.join(__dirname, '../public/images/products');

// Create output dir
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(dest)) {
            console.log(`  SKIP (exists): ${path.basename(dest)}`);
            resolve('skipped');
            return;
        }
        const file = fs.createWriteStream(dest);
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log(`  OK: ${path.basename(dest)}`);
                    resolve('ok');
                });
            } else {
                file.close();
                fs.unlinkSync(dest);
                console.log(`  FAIL (${response.statusCode}): ${path.basename(dest)}`);
                resolve('failed');
            }
        }).on('error', (err) => {
            file.close();
            if (fs.existsSync(dest)) fs.unlinkSync(dest);
            console.log(`  ERROR: ${err.message}`);
            resolve('error');
        });
    });
}

async function main() {
    const results = { ok: 0, skipped: 0, failed: 0, error: 0 };

    for (const product of imageMap) {
        const { slug, fragranticaId } = product;
        console.log(`\n[${slug}] (Fragrantica ID: ${fragranticaId})`);

        // 1. Main image (medium - this is the verified product image)
        const mainUrl = `https://fimgs.net/mdimg/perfume/m.${fragranticaId}.jpg`;
        const mainDest = path.join(outputDir, `${slug}-main.jpg`);
        const r1 = await downloadFile(mainUrl, mainDest);
        results[r1]++;

        // Small delay to be nice
        await new Promise(r => setTimeout(r, 200));
    }

    console.log('\n=== DONE ===');
    console.log(`OK: ${results.ok}, Skipped: ${results.skipped}, Failed: ${results.failed}, Error: ${results.error}`);

    // Generate updated image map with local paths
    const localMap = imageMap.map(p => ({
        ...p,
        images: [
            {
                url: `/images/products/${p.slug}-main.jpg`,
                urlLarge: `/images/products/${p.slug}-lg.jpg`,
                urlOriginal: `https://fimgs.net/mdimg/perfume/m.${p.fragranticaId}.jpg`,
                source: 'fragrantica',
                caption: p.images[0].caption,
                verified: true,
                alt: p.images[0].alt,
            }
        ]
    }));

    fs.writeFileSync(
        path.join(__dirname, '../content/image-map-local.json'),
        JSON.stringify(localMap, null, 2),
        'utf8'
    );
    console.log('Wrote content/image-map-local.json with local paths');
}

main().catch(console.error);
