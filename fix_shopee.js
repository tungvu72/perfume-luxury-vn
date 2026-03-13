const fs = require('fs');
let d = fs.readFileSync('D:/anti/perfume-luxury-vn/src/constants/mockData.ts', 'utf8');
// Add shopeeOffers: [] before closing } of pipeline items
let c = 0;
d = d.replace(/verdictShort: "(NEEDS_SOURCE|BLOCKED_REVIEW)"\n  }/g, (match) => {
    c++;
    return match.replace('\n  }', ',\n    shopeeOffers: []\n  }');
});
fs.writeFileSync('D:/anti/perfume-luxury-vn/src/constants/mockData.ts', d, 'utf8');
console.log('Added shopeeOffers to', c, 'items');
