/**
 * Download ảnh lớn (375x500) từ Fragrantica cho tất cả sản phẩm
 * Chạy: node scripts/download-images-hq.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const imageMap = JSON.parse(fs.readFileSync(path.join(__dirname, '../content/image-map.json'), 'utf8'));
const outputDir = path.join(__dirname, '../public/images/products');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(dest) && fs.statSync(dest).size > 5000) {
            console.log(`  SKIP (exists+good): ${path.basename(dest)}`);
            resolve('skipped');
            return;
        }
        // Remove old small file if exists
        if (fs.existsSync(dest)) fs.unlinkSync(dest);

        const file = fs.createWriteStream(dest);
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    const size = fs.statSync(dest).size;
                    console.log(`  OK: ${path.basename(dest)} (${(size / 1024).toFixed(1)}KB)`);
                    resolve('ok');
                });
            } else {
                file.close();
                if (fs.existsSync(dest)) fs.unlinkSync(dest);
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
        console.log(`\n[${slug}] (ID: ${fragranticaId})`);

        // Download HQ image (375x500)
        const hqUrl = `https://fimgs.net/mdimg/perfume/375x500.${fragranticaId}.jpg`;
        const hqDest = path.join(outputDir, `${slug}-main.jpg`);
        const r = await downloadFile(hqUrl, hqDest);
        results[r]++;

        // Rate limit
        await new Promise(r => setTimeout(r, 300));
    }

    console.log('\n=== DONE ===');
    console.log(`OK: ${results.ok}, Skipped: ${results.skipped}, Failed: ${results.failed}, Error: ${results.error}`);

    // Generate local map
    const localMap = imageMap.map(p => ({
        ...p,
        images: [
            {
                url: `/images/products/${p.slug}-main.jpg`,
                urlOriginal: `https://fimgs.net/mdimg/perfume/375x500.${p.fragranticaId}.jpg`,
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
    console.log('Updated content/image-map-local.json');
}

main().catch(console.error);
