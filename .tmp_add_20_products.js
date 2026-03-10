const fs = require('fs');
const path = 'src/constants/mockData.ts';
let s = fs.readFileSync(path, 'utf8');

const dupes = [
  'dior-homme-intense',
  'jpg-le-beau-le-parfum',
  'versace-eros-edp',
  'ysl-y-edp'
];
for (const id of dupes) {
  const marker = `id: "${id}"`;
  let first = s.indexOf(marker);
  if (first === -1) continue;
  let second = s.indexOf(marker, first + marker.length);
  if (second === -1) continue;
  let start = s.lastIndexOf('  {', second);
  let end = s.indexOf('\n  },', second);
  if (end === -1) {
    end = s.indexOf('\n  }\n];', second);
    if (end !== -1) end += 4;
  } else {
    end += 5;
  }
  if (start !== -1 && end !== -1) s = s.slice(0, start) + s.slice(end);
}

const products = [
  { id:'giorgio-armani-my-way', brandSlug:'giorgio-armani', brand:'GIORGIO ARMANI', name:'My Way', subName:'Eau de Parfum', perfumer:'Carlos Benaim & Bruno Jovanovic', gender:'nu', desc:'Mùi n? hoa tr?ng sáng, s?ch và hi?n d?i. H?p di làm, di choi, dùng h?ng ngày.', verdict:'Hoa tr?ng sáng, n? tính và d? dùng.', short:'HOA TR?NG, S?CH, D? DÙNG', price:2550000, top:['Cam bergamot','Hoa cam'], mid:['Hoa hu?','Hoa nhài'], base:['Vanilla','G? tuy?t tùng','X? huong'], tags:['N?','H?ng ngày','Hoa tr?ng','D? dùng'] },
  { id:'burberry-her-edp', brandSlug:'burberry', brand:'BURBERRY', name:'Her', subName:'Eau de Parfum', perfumer:'Francis Kurkdjian', gender:'nu', desc:'Mùi n? berry ng?t vui, tr? và d? t?o thi?n c?m. H?p di choi, h?n hò nh?.', verdict:'Berry ng?t tr? trung, vui và d? m?n.', short:'BERRY NG?T, TR?, D? M?N', price:2350000, top:['Dâu tây','Mâm xôi','Cherry'], mid:['Hoa violet','Hoa nhài'], base:['X? huong','Amber','G? cashmeran'], tags:['N?','Tr?','Ði choi','Ng?t'] },
  { id:'gucci-bloom-edp', brandSlug:'gucci', brand:'GUCCI', name:'Bloom', subName:'Eau de Parfum', perfumer:'Alberto Morillas', gender:'nu', desc:'Mùi n? hoa tr?ng d?m, n? tính và c? di?n hi?n d?i. H?p ngu?i mê hoa rõ.', verdict:'Hoa tr?ng d?m, n? tính và sang.', short:'HOA TR?NG Ð?M, N? TÍNH, SANG', price:2450000, top:['Hoa nhài'], mid:['Hoa hu?'], base:['Rangoon creeper'], tags:['N?','Hoa tr?ng','Sang','Signature'] },
  { id:'miss-dior-blooming-bouquet', brandSlug:'dior', brand:'DIOR', name:'Miss Dior', subName:'Blooming Bouquet', perfumer:'Louise Turner', gender:'nu', desc:'Mùi n? hoa h?ng peony nh?, thanh và d? m?c. H?p van phòng, h?n hò nh?.', verdict:'Nh?, thanh và r?t d? ch?u.', short:'NH?, THANH, D? CH?U', price:2650000, top:['Quýt Sicilian'], mid:['Hoa m?u don','Hoa h?ng Ðan M?ch'], base:['X? huong tr?ng'], tags:['N?','H?ng ngày','Thanh l?ch','Hoa nh?'] },
  { id:'chloe-signature-edp', brandSlug:'chloe', brand:'CHLOE', name:'Signature', subName:'Eau de Parfum', perfumer:'Amandine Clerc-Marie & Michel Almairac', gender:'nu', desc:'Mùi n? hoa h?ng ph?n s?ch, n? tính và Parisian. H?p ngu?i thích phong cách d?u mà sang.', verdict:'Hoa h?ng ph?n s?ch, n? tính và tinh t?.', short:'HOA H?NG PH?N, S?CH, TINH T?', price:2350000, top:['Hoa m?u don','V?i'], mid:['Hoa h?ng','M?c lan'], base:['X? huong','H? phách'], tags:['N?','Hoa h?ng','Tinh t?','H?ng ngày'] },
  { id:'narciso-rodriguez-for-her-edp', brandSlug:'narciso-rodriguez', brand:'NARCISO RODRIGUEZ', name:'For Her', subName:'Eau de Parfum', perfumer:'Christine Nagel & Francis Kurkdjian', gender:'nu', desc:'Mùi n? x? huong, hoa h?ng và h? phách r?t ôm da. H?p ngu?i thích sang ki?u kín dáo.', verdict:'X? huong sang, ôm da và r?t có gu.', short:'X? HUONG SANG, ÔM DA, CÓ GU', price:2450000, top:['Hoa h?ng','Ðào'], mid:['X? huong'], base:['Ho?c huong','H? phách'], tags:['N?','X? huong','Ôm da','Cao c?p'] },
  { id:'ysl-mon-paris-edp', brandSlug:'ysl', brand:'YVES SAINT LAURENT', name:'Mon Paris', subName:'Eau de Parfum', perfumer:'Olivier Cresp, Dora Baghriche & Harry Fremont', gender:'nu', desc:'Mùi n? trái cây ng?t, hoa tr?ng và patchouli khá cu?n. H?p h?n hò, di t?i.', verdict:'Ng?t, cu?n và h?p h?n hò.', short:'NG?T, CU?N, H?P H?N HÒ', price:2550000, top:['Dâu tây','Mâm xôi','Cam bergamot'], mid:['Hoa nhài','Hoa cam'], base:['Ho?c huong','X? huong'], tags:['N?','H?n hò','Ng?t','Bu?i t?i'] },
  { id:'versace-bright-crystal', brandSlug:'versace', brand:'VERSACE', name:'Bright Crystal', subName:'Eau de Toilette', perfumer:'Alberto Morillas', gender:'nu', desc:'Mùi n? tuoi, trái cây nu?c và hoa nh?, r?t d? dùng ? VN. H?p di h?c, di làm.', verdict:'Tuoi, s?ch và r?t d? m?c.', short:'TUOI, S?CH, R?T D? M?C', price:1850000, top:['L?u','Yuzu'], mid:['Hoa sen','M?u don'], base:['X? huong','H? phách'], tags:['N?','Tuoi','H?ng ngày','D? dùng'] },
  { id:'dolce-gabbana-light-blue-pour-femme', brandSlug:'dolce-gabbana', brand:'DOLCE & GABBANA', name:'Light Blue Pour Femme', subName:'Eau de Toilette', perfumer:'Olivier Cresp', gender:'nu', desc:'Mùi n? chanh táo xanh tuoi mát, h?p tr?i nóng và dùng h?ng ngày.', verdict:'Tuoi mát, s?ch và h?p mùa nóng.', short:'TUOI MÁT, S?CH, H?P MÙA NÓNG', price:1950000, top:['Chanh Sicilian','Táo xanh'], mid:['Tre','Hoa nhài'], base:['G? tuy?t tùng','X? huong'], tags:['N?','Mùa hè','Tuoi mát','H?ng ngày'] },
  { id:'armani-si-edp', brandSlug:'giorgio-armani', brand:'GIORGIO ARMANI', name:'Sì', subName:'Eau de Parfum', perfumer:'Christine Nagel', gender:'nu', desc:'Mùi n? cassis, vanilla và chypre hi?n d?i. H?p ngu?i thích n? tính tru?ng thành.', verdict:'Ng?t sang, tru?ng thành và khá cu?n.', short:'NG?T SANG, TRU?NG THÀNH, CU?N', price:2550000, top:['Lá lý chua den'], mid:['Hoa h?ng','Lan Nam Phi'], base:['Vanilla','Ho?c huong','G?'], tags:['N?','Tru?ng thành','Sang','H?n hò'] },
  { id:'chanel-coco-mademoiselle-edp', brandSlug:'chanel', brand:'CHANEL', name:'Coco Mademoiselle', subName:'Eau de Parfum', perfumer:'Jacques Polge', gender:'nu', desc:'Mùi n? cam chanh, rose-patchouli sang và r?t kinh di?n. H?p công s? l?n h?n hò.', verdict:'Kinh di?n, sang và r?t da d?ng.', short:'KINH ÐI?N, SANG, ÐA D?NG', price:3650000, top:['Cam bergamot','Cam'], mid:['Hoa h?ng','Hoa nhài'], base:['Ho?c huong','Vetiver','Vanilla'], tags:['N?','Kinh di?n','Sang','Ða d?ng'] },
  { id:'armaf-club-de-nuit-intense-man', brandSlug:'armaf', brand:'ARMAF', name:'Club de Nuit Intense Man', subName:'Eau de Toilette', perfumer:'Armaf', gender:'nam', desc:'Mùi nam chanh khói g? n?i ti?ng vì vibe Aventus giá m?m. H?p di choi, di làm n?u x?t v?a.', verdict:'Chanh khói nam tính, giá tr? t?t.', short:'CHANH KHÓI, NAM TÍNH, GIÁ T?T', price:1250000, top:['Chanh','D?a','Táo'], mid:['B?ch duong','Hoa h?ng'], base:['X? huong','H? phách','Vanilla'], tags:['Nam','Giá t?t','Ði choi','D? khen'] },
  { id:'givenchy-gentleman-reserve-privee', brandSlug:'givenchy', brand:'GIVENCHY', name:'Gentleman', subName:'Reserve Privée', perfumer:'Nathalie Lorson & Olivier Cresp', gender:'nam', desc:'Mùi nam iris, whiskey và g? sang, h?p bu?i t?i và an m?c ch?nh chu.', verdict:'Iris whiskey sang và có chi?u sâu.', short:'IRIS WHISKEY, SANG, CÓ CHI?U SÂU', price:2950000, top:['Cam bergamot'], mid:['Iris','H?t d?'], base:['Whiskey','G? h? phách'], tags:['Nam','Bu?i t?i','Dressy','Sang'] },
  { id:'viktor-rolf-spicebomb-extreme', brandSlug:'viktor-rolf', brand:'VIKTOR&ROLF', name:'Spicebomb Extreme', subName:'Eau de Parfum', perfumer:'Carlos Benaim', gender:'nam', desc:'Mùi nam tobacco vanilla cay ?m r?t h?p tr?i l?nh và di t?i.', verdict:'Cay ?m, m?nh và r?t h?p t?i.', short:'CAY ?M, M?NH, H?P T?I', price:2750000, top:['Tiêu den','Lavender'], mid:['Qu?','Cumin'], base:['Tobacco','Vanilla'], tags:['Nam','Mùa l?nh','Bu?i t?i','Có l?c'] },
  { id:'issey-miyake-leau-dissey-pour-homme', brandSlug:'issey-miyake', brand:'ISSEY MIYAKE', name:'L’Eau d’Issey Pour Homme', subName:'Eau de Toilette', perfumer:'Jacques Cavallier', gender:'nam', desc:'Mùi nam citrus-yuzu s?ch mát kinh di?n, h?p khí h?u nóng và dùng h?ng ngày.', verdict:'S?ch mát, kinh di?n và r?t d? dùng ? VN.', short:'S?CH MÁT, KINH ÐI?N, D? DÙNG', price:1650000, top:['Yuzu','Chanh'], mid:['Nh?c d?u kh?u','Hoa sen'], base:['Vetiver','G? dàn huong'], tags:['Nam','Mùa hè','H?ng ngày','Tuoi mát'] },
  { id:'bvlgari-man-in-black', brandSlug:'bvlgari', brand:'BVLGARI', name:'Man In Black', subName:'Eau de Parfum', perfumer:'Alberto Morillas', gender:'nam', desc:'Mùi nam rum, gia v? và da thu?c ?m t?i, h?p ti?c t?i và khí tr?i mát.', verdict:'Rum gia v?, t?i và nam tính.', short:'RUM GIA V?, T?I, NAM TÍNH', price:2350000, top:['Rum','Gia v?'], mid:['Da thu?c','Hoa hu?'], base:['Ð?u tonka','G? benzoin'], tags:['Nam','Bu?i t?i','?m','Nam tính'] },
  { id:'boss-bottled-edp', brandSlug:'hugo-boss', brand:'HUGO BOSS', name:'Boss Bottled', subName:'Eau de Parfum', perfumer:'Honorine Blanc', gender:'nam', desc:'Mùi nam táo, qu? và g? d? m?c, h?p công s? và dùng thu?ng xuyên.', verdict:'Táo g? d? dùng, l?ch s? và an toàn.', short:'TÁO G?, L?CH S?, AN TOÀN', price:2150000, top:['Táo','Cam bergamot'], mid:['Qu?','B?ch d?u kh?u'], base:['G? ô liu','X? huong'], tags:['Nam','Van phòng','H?ng ngày','D? dùng'] },
  { id:'coach-for-men', brandSlug:'coach', brand:'COACH', name:'For Men', subName:'Eau de Toilette', perfumer:'Anne Flipo & Bruno Jovanovic', gender:'nam', desc:'Mùi nam pear-kumquat s?ch tuoi, casual và d? ti?p c?n cho ngu?i m?i.', verdict:'Tuoi, casual và d? m?n.', short:'TUOI, CASUAL, D? M?N', price:1650000, top:['Lê','Kumquat'], mid:['B?ch d?u kh?u','Rau mùi'], base:['Ambergris','Da l?n'], tags:['Nam','Casual','Tuoi','Giá ?n'] },
  { id:'moschino-toy-boy', brandSlug:'moschino', brand:'MOSCHINO', name:'Toy Boy', subName:'Eau de Parfum', perfumer:'Yann Vasnier', gender:'nam', desc:'Mùi nam rose-spice khác bi?t, h?p ngu?i mu?n cá tính và không d?i trà.', verdict:'Rose spice cá tính và r?t d? nh?.', short:'ROSE SPICE, CÁ TÍNH, D? NH?', price:1950000, top:['Tiêu h?ng','Cam bergamot'], mid:['Hoa h?ng','Ðinh huong'], base:['Vetiver','Cashmeran'], tags:['Nam','Cá tính','Mùi l?','Ði t?i'] },
  { id:'initio-side-effect', brandSlug:'initio', brand:'INITIO', name:'Side Effect', subName:'Eau de Parfum', perfumer:'Initio', gender:'unisex', desc:'Mùi unisex rum, tobacco, vanilla c?c cu?n và r?t h?p di t?i.', verdict:'Rum tobacco cu?n, sang và có l?c.', short:'RUM TOBACCO, CU?N, CÓ L?C', price:6450000, top:['Rum','Qu?'], mid:['Tobacco','Ngh? tây'], base:['Vanilla','G? dàn huong'], tags:['Unisex','Bu?i t?i','Cao c?p','Quy?n ru'] },
  { id:'xerjoff-erba-pura', brandSlug:'xerjoff', brand:'XERJOFF', name:'Erba Pura', subName:'Eau de Parfum', perfumer:'Christian Carbonnel', gender:'unisex', desc:'Mùi unisex trái cây ng?t s?ch r?t n?i và bám t?t, h?p ngu?i thích gây chú ý.', verdict:'Trái cây ng?t s?ch, n?i và bám t?t.', short:'TRÁI CÂY NG?T, N?I, BÁM T?T', price:4650000, top:['Cam Sicily','Chanh','Bergamot'], mid:['Trái cây t?ng h?p'], base:['X? huong tr?ng','H? phách','Vanilla'], tags:['Unisex','N?i b?t','Bám t?t','Cao c?p'] }
];

const makeProduct = (p) => `,
  {
    id: "${p.id}",
    brandSlug: "${p.brandSlug}",
    brand: "${p.brand}",
    name: "${p.name}",
    subName: "${p.subName}",
    perfumer: "${p.perfumer}",
    gender: "${p.gender}",
    image: PENDING_IMAGE,
    images: [
      { url: PENDING_IMAGE, source: "studio", caption: "?nh ${p.name} dang du?c xác minh d? tránh nh?m phiên b?n", verified: false }
    ],
    description: "${p.desc}",
    article: \\`Maison de SON dang b? sung ${p.name} vào catalog d? hoàn thi?n thu vi?n mùi huong theo nhu c?u th?c t? t?i Vi?t Nam. Ðây là l?a ch?n dáng cân nh?c n?u b?n dang tìm m?t chai ${p.gender === 'nam' ? 'nam' : p.gender === 'nu' ? 'n?' : 'unisex'} d? hi?u và có cá tính rõ.\n\n### Ngu?n g?c và xu?t x?\n${p.name} thu?c ${p.brand}, m?t cái tên d? quen v?i ngu?i choi mùi ? c? nhóm designer l?n niche.\n\n### Ra m?t khi nào?\nÐây là m?t trong nh?ng phiên b?n du?c tìm nhi?u trong line c?a hãng và v?n gi? d? quan tâm t?t ? th?i di?m hi?n t?i.\n\n### Mùi huong mang l?i c?m giác gì?\n${p.verdict}\n\n### Khi nào nên dùng?\n- H?p v?i nhu c?u s? d?ng th?c t? t?i Vi?t Nam\n- Phù h?p v?i t?p ngu?i thích ${p.tags[2] || 'mùi d? dùng'}\n- Nên test tru?c n?u b?n c?c k? kén nhóm mùi chính\n\n### Nh?n xét c?a Maison de SON\nÐi?m m?nh c?a ${p.name} là màu mùi rõ và d? x?p vào hoàn c?nh s? d?ng. Ði?m c?n cân nh?c là tr?i nghi?m th?c t? còn ph? thu?c gu cá nhân và th?i ti?t.\\`,
    verdict: "${p.verdict}",
    verdictShort: "${p.short}",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "${p.tags[0]}", icon: "?" },
      { label: "${p.tags[1]}", icon: "??" },
      { label: "${p.tags[2]}", icon: "??" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 68, summer: 52, fall: 82, winter: 78 },
    dayNight: { day: 58, night: 82 },
    topNotes: [${p.top.map(n => `{ name: "${n}" }`).join(', ')}],
    middleNotes: [${p.mid.map(n => `{ name: "${n}" }`).join(', ')}],
    baseNotes: [${p.base.map(n => `{ name: "${n}" }`).join(', ')}],
    accords: [
      { name: "Ch? d?o", value: 58, color: "#8B4513" },
      { name: "D? dùng", value: 32, color: "#1abc9c" },
      { name: "Hi?n d?i", value: 24, color: "#9b59b6" },
      { name: "?m", value: 20, color: "#e67e22" }
    ],
    tags: [${p.tags.map(t => `"${t}"`).join(', ')}],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: ${p.price},
    shopeeOffers: []
  }`;

const insert = products.map(makeProduct).join('');
s = s.replace(/\n\];\s*$/, insert + '\n];\n');
fs.writeFileSync(path, s, 'utf8');
console.log(`patched ${products.length} products`);
