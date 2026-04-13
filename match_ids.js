const fs = require('fs');

const missingList = fs.readFileSync('audit_out.txt', 'utf8').split('\n').filter(l => l.startsWith('- ') && l.includes('[ID: '));
const idMapping = fs.readFileSync('id_mapping.txt', 'utf8').split('\n').filter(l => l.includes('|'));

let hasId = [];
let noId = [];

missingList.forEach(line => {
    let name = line.match(/- (.*) \[ID/)[1].trim();
    let idSlug = line.match(/\[ID: (.*?)\]/)[1].trim();
    
    // Find in mapping
    let found = false;
    // We try to match parts of the name
    let cleanName = name.toLowerCase().replace(/edp|edt|parfum|extrait|de/g, '').replace(/[^a-z0-9]/g, '');
    let bestMatch = null;
    let maxOverlap = 0;
    
    idMapping.forEach(m => {
        let title = m.split('|')[0].toLowerCase().replace(/edp|edt|parfum|extrait|de/g, '').replace(/[^a-z0-9]/g, '');
        let fId = m.split('|')[1].trim();
        
        let overlap = 0;
        for (let i = 0; i < cleanName.length; i++) {
             if (title.includes(cleanName.substring(i, i+3))) overlap++;
        }
        
        if (overlap > maxOverlap && overlap > 5) {
            maxOverlap = overlap;
            bestMatch = fId;
        }
    });
    
    if (bestMatch) {
         hasId.push({ slug: idSlug, name: name, fId: bestMatch });
    } else {
         // also search loosely:
        let found2 = idMapping.find(m => m.toLowerCase().includes(name.toLowerCase().substring(0, 5)));
        if (found2) {
             hasId.push({ slug: idSlug, name: name, fId: found2.split('|')[1].trim() });
        } else {
             noId.push(name + ' (' + idSlug + ')');
        }
    }
});

fs.writeFileSync('auto_id_batch.json', JSON.stringify(hasId, null, 2));
console.log(`Found IDs for ${hasId.length}/${missingList.length}. Missing: ${noId.length}`);
console.log('Missing:\n' + noId.join('\n'));
