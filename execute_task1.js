const fs = require('fs');
let content = fs.readFileSync('src/constants/mockData.ts', 'utf-8');

// The brands specifically targeted:
content = content.replace(/brand:\s*["']YSL["']/g, 'brand: "YVES SAINT LAURENT"');
content = content.replace(/brand:\s*["']MFK["']/g, 'brand: "MAISON FRANCIS KURKDJIAN"');
content = content.replace(/brand:\s*["']VERS𝑨CE["']/g, 'brand: "VERSACE"');
content = content.replace(/brand:\s*["']VERSACE-EROS-FLAME["']/g, 'brand: "VERSACE"');
content = content.replace(/brand:\s*["']GUER_LAIN["']/g, 'brand: "GUERLAIN"');
content = content.replace(/brand:\s*["']KILAN["']/g, 'brand: "KILIAN"');
content = content.replace(/brand:\s*["']MOSCHINO-TOY-BOY["']/g, 'brand: "MOSCHINO"');
content = content.replace(/brand:\s*["']M\.C\.M["']/g, 'brand: "MCM"');

// Using regex block by block
content = content.replace(/(\{\s*id:\s*["'][^"']+["'][\s\S]*?\n\s*\})/g, (block) => {
    const isPublishedMatch = block.match(/isPublished:\s*(false)/);
    if (isPublishedMatch) {
       return block; // Skip drafts entirely as requested!
    }

    // Attempt to fix name
    const subNameMatch = block.match(/subName:\s*"([^"]+)"/);
    const nameMatch = block.match(/name:\s*"([^"]+)"/);

    if (nameMatch && subNameMatch) {
        let name = nameMatch[1];
        let subName = subNameMatch[1];
        
        let shortSub = '';
        const subLower = subName.toLowerCase();
        if (subLower === 'eau de parfum') shortSub = 'EDP';
        else if (subLower === 'eau de toilette') shortSub = 'EDT';
        else if (subLower === 'eau de cologne') shortSub = 'EDC';
        else if (subLower === 'extrait de parfum' || subLower === 'extrait') shortSub = 'Extrait';
        else if (subLower === 'parfum') shortSub = 'Parfum';

        const nameUpper = name.toUpperCase();
        if (shortSub &&
            !nameUpper.includes(shortSub.toUpperCase()) && 
            !(shortSub === 'EDP' && nameUpper.includes('PARFUM')) &&
            !(shortSub === 'EDT' && nameUpper.includes('TOILETTE')) &&
            !(shortSub === 'Parfum' && nameUpper.includes('PARFUM')) &&
            !nameUpper.includes('EXTREME') && !nameUpper.includes('INTENSE')) {
            
            let newName = name.trim() + ' ' + shortSub;
            // Provide exact string replacement so we don't mess up
            block = block.replace(`name: "${name}"`, `name: "${newName}"`);
        }
    }
    return block;
});

fs.writeFileSync('src/constants/mockData.ts', content, 'utf-8');
console.log('Fixed Database');
