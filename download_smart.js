const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');

const listPath = path.join(__dirname, 'danh_sach_sp.md');
const DIR = path.join(__dirname, 'fragrantica_cards');

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => file.close(resolve));
            } else {
                reject(new Error(`Status: ${response.statusCode}`));
            }
        }).on('error', (err) => {
            fs.unlinkSync(dest);
            reject(err);
        });
    });
}

function normalizeStr(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

(async () => {
    let lines = fs.readFileSync(listPath, 'utf8').split('\n');
    const queries = [];
    
    for (let line of lines) {
        const m = line.match(/^\*\*(\d+)\.\*\*\s+Nước Hoa [^\s]+\s+(.*)$/);
        if (m) {
            let num = parseInt(m[1], 10);
            let fullName = m[2]; // e.g. "CHANEL Bleu de Chanel Parfum"
            
            // Format cho filename: "1. ACQUA DI PARMA Colonia EDC.jpeg" -> Thực ra file đang lưu có Casing gốc
            let fileName = `${num}. ${fullName}`;
            
            queries.push({ num, fullName, fileName });
        }
    }

    const browser = await puppeteer.launch({ headless: true });
    
    let success = 0;
    
    for (let item of queries) {
        const files = fs.readdirSync(DIR);
        if (files.some(f => f.startsWith(`${item.num}.`))) {
            continue; // Đã có card
        }

        const dest = path.join(DIR, `${item.fileName}.jpeg`);
        let searchQ = encodeURIComponent(`${item.fullName} fragrantica`);
        
        console.log(`[>>] Đang tìm: ${item.num}. ${item.fullName}`);
        const page = await browser.newPage();
        
        try {
            await page.goto(`https://duckduckgo.com/?q=${searchQ}+site%3Afimgs.net%2Fmdimg%2Fperfume-social-cards&t=h_&iax=images&ia=images`, { waitUntil: 'domcontentloaded', timeout: 30000 });
            await new Promise(r => setTimeout(r, 4000));
            
            const foundUrls = await page.evaluate(() => {
                const urls = [];
                const imgs = document.querySelectorAll('img');
                for (let img of imgs) {
                    if (img.src && img.src.includes('fimgs.net/mdimg/perfume-social-cards')) {
                        urls.push(img.src);
                    }
                }
                const html = document.body.innerHTML;
                const matches = html.match(/https?:\/\/[^\s"'<]*fimgs\.net\/mdimg\/perfume-social-cards\/[^\s"'<]+\.(?:jpg|jpeg|png)/ig);
                if (matches) urls.push(...matches);
                return [...new Set(urls)];
            });

            // Lọc ra URL chính xác nhất: filename trên Fragrantica phải chứa brand/name
            let bestUrl = null;
            let targetTokens = item.fullName.toLowerCase().replace(/edp|edt|parfum|extrait/g, '').split(' ').filter(x => x.length > 2);
            
            if (foundUrls && foundUrls.length > 0) {
                // Ưu tiên url nào có filename chứa nhiều token nhất
                let maxScore = -1;
                for (let url of foundUrls) {
                    if (url.includes('proxy')) continue;
                    let urlFileName = normalizeStr(url.split('/').pop());
                    let score = 0;
                    for (let t of targetTokens) {
                        if (urlFileName.includes(normalizeStr(t))) score++;
                    }
                    if (score > maxScore && score > 0) { // Phải trúng ít nhất 1 từ khóa (vd Dior, Sauvage)
                        maxScore = score;
                        bestUrl = url;
                    }
                }
                
                // Trực tiếp xài cái đầu tiên nếu DuckDuckGo search exact site: fimgs.net
                if (!bestUrl && !foundUrls[0].includes('proxy')) bestUrl = foundUrls[0];
            }

            if (bestUrl) {
                await downloadFile(bestUrl, dest);
                console.log(`  ✅ ĐÃ TẢI: ${bestUrl.split('/').pop()}`);
                success++;
            } else {
                console.log(`  ❌ THẤT BẠI: Không tìm thấy card khớp tên`);
            }
            
        } catch(e) {
            console.log(`  ❌ LỖI: ${e.message}`);
        }
        await page.close();
    }
    
    await browser.close();
    console.log(`\n=> CẢO XONG. Tải mới: ${success} card.`);
})();
