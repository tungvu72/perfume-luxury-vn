const fs = require('fs');
const path = 'src/constants/mockData.ts';
let s = fs.readFileSync(path, 'utf8');

function removeSecondOccurrence(str, id) {
  const marker = `id: "${id}"`;
  const first = str.indexOf(marker);
  if (first === -1) return str;
  const second = str.indexOf(marker, first + marker.length);
  if (second === -1) return str;
  const start = str.lastIndexOf('  {', second);
  let end = str.indexOf('\n  },', second);
  if (end !== -1) end += 5;
  else {
    end = str.indexOf('\n  }\n];', second);
    if (end !== -1) end += 4;
  }
  if (start === -1 || end === -1) return str;
  return str.slice(0, start) + str.slice(end);
}

['dior-homme-intense','jpg-le-beau-le-parfum','versace-eros-edp','ysl-y-edp'].forEach(id => {
  s = removeSecondOccurrence(s, id);
});

const products = [
  ['giorgio-armani-my-way','giorgio-armani','GIORGIO ARMANI','My Way','Eau de Parfum','Carlos Benaim & Bruno Jovanovic','nu'],
  ['burberry-her-edp','burberry','BURBERRY','Her','Eau de Parfum','Francis Kurkdjian','nu'],
  ['gucci-bloom-edp','gucci','GUCCI','Bloom','Eau de Parfum','Alberto Morillas','nu'],
  ['miss-dior-blooming-bouquet','dior','DIOR','Miss Dior','Blooming Bouquet','Louise Turner','nu'],
  ['chloe-signature-edp','chloe','CHLOE','Signature','Eau de Parfum','Amandine Clerc-Marie & Michel Almairac','nu'],
  ['narciso-rodriguez-for-her-edp','narciso-rodriguez','NARCISO RODRIGUEZ','For Her','Eau de Parfum','Christine Nagel & Francis Kurkdjian','nu'],
  ['ysl-mon-paris-edp','ysl','YVES SAINT LAURENT','Mon Paris','Eau de Parfum','Olivier Cresp, Dora Baghriche & Harry Fremont','nu'],
  ['versace-bright-crystal','versace','VERSACE','Bright Crystal','Eau de Toilette','Alberto Morillas','nu'],
  ['dolce-gabbana-light-blue-pour-femme','dolce-gabbana','DOLCE & GABBANA','Light Blue Pour Femme','Eau de Toilette','Olivier Cresp','nu'],
  ['armani-si-edp','giorgio-armani','GIORGIO ARMANI','Sì','Eau de Parfum','Christine Nagel','nu'],
  ['chanel-coco-mademoiselle-edp','chanel','CHANEL','Coco Mademoiselle','Eau de Parfum','Jacques Polge','nu'],
  ['armaf-club-de-nuit-intense-man','armaf','ARMAF','Club de Nuit Intense Man','Eau de Toilette','Armaf','nam'],
  ['givenchy-gentleman-reserve-privee','givenchy','GIVENCHY','Gentleman','Reserve Privée','Nathalie Lorson & Olivier Cresp','nam'],
  ['viktor-rolf-spicebomb-extreme','viktor-rolf','VIKTOR&ROLF','Spicebomb Extreme','Eau de Parfum','Carlos Benaim','nam'],
  ['issey-miyake-leau-dissey-pour-homme','issey-miyake','ISSEY MIYAKE','L’Eau d’Issey Pour Homme','Eau de Toilette','Jacques Cavallier','nam'],
  ['bvlgari-man-in-black','bvlgari','BVLGARI','Man In Black','Eau de Parfum','Alberto Morillas','nam'],
  ['boss-bottled-edp','hugo-boss','HUGO BOSS','Boss Bottled','Eau de Parfum','Honorine Blanc','nam'],
  ['coach-for-men','coach','COACH','For Men','Eau de Toilette','Anne Flipo & Bruno Jovanovic','nam'],
  ['moschino-toy-boy','moschino','MOSCHINO','Toy Boy','Eau de Parfum','Yann Vasnier','nam'],
  ['initio-side-effect','initio','INITIO','Side Effect','Eau de Parfum','Initio','unisex'],
  ['xerjoff-erba-pura','xerjoff','XERJOFF','Erba Pura','Eau de Parfum','Christian Carbonnel','unisex']
];

const blocks = products.map(([id, brandSlug, brand, name, subName, perfumer, gender]) => `,
  {
    id: "${id}",
    brandSlug: "${brandSlug}",
    brand: "${brand}",
    name: "${name}",
    subName: "${subName}",
    perfumer: "${perfumer}",
    gender: "${gender}",
    image: PENDING_IMAGE,
    images: [
      { url: PENDING_IMAGE, source: "studio", caption: "?nh ${name} dang du?c xác minh d? tránh nh?m phiên b?n", verified: false }
    ],
    description: "Phiên b?n dang du?c b? sung nhanh vào catalog Maison de SON d? hoàn thi?n thu vi?n s?n ph?m live.",
    article: "${name} dang du?c Maison de SON b? sung vào catalog live. N?i dung review chi ti?t s? ti?p t?c du?c nâng chu?n sau.",
    verdict: "Mùi d? x?p dúng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "${gender}", icon: "?" },
      { label: "D? dùng", icon: "??" },
      { label: "Catalog live", icon: "??" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 68, summer: 52, fall: 82, winter: 78 },
    dayNight: { day: 58, night: 82 },
    topNotes: [{ name: "Top note" }],
    middleNotes: [{ name: "Middle note" }],
    baseNotes: [{ name: "Base note" }],
    accords: [
      { name: "Ch? d?o", value: 58, color: "#8B4513" },
      { name: "D? dùng", value: 32, color: "#1abc9c" },
      { name: "Hi?n d?i", value: 24, color: "#9b59b6" },
      { name: "?m", value: 20, color: "#e67e22" }
    ],
    tags: ["${gender}", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 1990000,
    shopeeOffers: []
  }`).join('');

s = s.replace(/\n\];\s*$/, blocks + '\n];\n');
fs.writeFileSync(path, s, 'utf8');
console.log('patched', products.length, 'products');
