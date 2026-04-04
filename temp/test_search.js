
const Fuse = require('fuse.js');

const removeVietnameseTones = (str) => {
    if (!str) return '';
    return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
};

const SEARCH_INDEX = [
  {
    "id": "sauvage-edp",
    "name": "Sauvage",
    "brand": "DIOR",
    "subName": "Eau de Parfum",
    "isPublished": true,
    "tags": ["Nam", "Đa dụng"]
  },
  {
    "id": "eau-sauvage",
    "name": "Eau Sauvage",
    "brand": "DIOR",
    "subName": "Eau de Toilette",
    "isPublished": true,
    "tags": ["Nam", "Kinh điển"]
  }
];

const FUSE_DATA = SEARCH_INDEX.map((p) => ({
    ...p,
    normName: removeVietnameseTones(p.name),
    normBrand: removeVietnameseTones(p.brand),
    normSubName: removeVietnameseTones(p.subName),
    normTags: p.tags ? p.tags.map((t) => removeVietnameseTones(t)) : [],
    normGender: removeVietnameseTones(p.gender === 'nam' ? 'nam nuoc hoa nam' : p.gender === 'nu' ? 'nu nuoc hoa nu' : 'unisex nuoc hoa unisex'),
    normDesc: removeVietnameseTones(p.description)
}));

const fuse = new Fuse(FUSE_DATA, {
    keys: [
        { name: 'normName', weight: 0.4 },
        { name: 'normBrand', weight: 0.3 },
        { name: 'normTags', weight: 0.1 },
        { name: 'normGender', weight: 0.1 },
        { name: 'normDesc', weight: 0.1 }
    ],
    threshold: 0.4,
    ignoreLocation: true,
    ignoreFieldNorm: true,
    useExtendedSearch: true
});

const testSearch = (query) => {
    const q = removeVietnameseTones(query.trim());
    const results = fuse.search(q).map(r => r.item);
    console.log(`Query: "${query}" -> Results count: ${results.length}`);
    results.forEach(r => console.log(` - ${r.brand} ${r.name}`));
};

testSearch("Sauvage");
testSearch("Dior");
testSearch("Dior sauvage");
testSearch("dior sauvage");
testSearch("nước hoa nam");
