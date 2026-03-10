const fs = require('fs');
const path = 'src/constants/mockData.ts';
let s = fs.readFileSync(path, 'utf8');
const extra = `,
  {
    id: "mugler-alien-edp",
    brandSlug: "mugler",
    brand: "MUGLER",
    name: "Alien",
    subName: "Eau de Parfum",
    perfumer: "Dominique Ropion & Laurent Bruyere",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [
      { url: PENDING_IMAGE, source: "studio", caption: "?nh Alien dang du?c xác minh d? tránh nh?m phiên b?n", verified: false }
    ],
    description: "Phiên b?n dang du?c b? sung nhanh vào catalog Maison de SON d? hoàn thi?n thu vi?n s?n ph?m live.",
    article: "Alien dang du?c Maison de SON b? sung vào catalog live. N?i dung review chi ti?t s? ti?p t?c du?c nâng chu?n sau.",
    verdict: "Mùi d? x?p dúng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "nu", icon: "?" },
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
    tags: ["nu", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 2390000,
    shopeeOffers: []
  },
  {
    id: "elie-saab-le-parfum",
    brandSlug: "elie-saab",
    brand: "ELIE SAAB",
    name: "Le Parfum",
    subName: "Eau de Parfum",
    perfumer: "Francis Kurkdjian",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [
      { url: PENDING_IMAGE, source: "studio", caption: "?nh Le Parfum dang du?c xác minh d? tránh nh?m phiên b?n", verified: false }
    ],
    description: "Phiên b?n dang du?c b? sung nhanh vào catalog Maison de SON d? hoàn thi?n thu vi?n s?n ph?m live.",
    article: "Le Parfum dang du?c Maison de SON b? sung vào catalog live. N?i dung review chi ti?t s? ti?p t?c du?c nâng chu?n sau.",
    verdict: "Mùi d? x?p dúng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "nu", icon: "?" },
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
    tags: ["nu", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 2290000,
    shopeeOffers: []
  },
  {
    id: "maison-francis-kurkdjian-gentle-fluidity-gold",
    brandSlug: "maison-francis-kurkdjian",
    brand: "MAISON FRANCIS KURKDJIAN",
    name: "Gentle Fluidity Gold",
    subName: "Eau de Parfum",
    perfumer: "Francis Kurkdjian",
    gender: "unisex",
    image: PENDING_IMAGE,
    images: [
      { url: PENDING_IMAGE, source: "studio", caption: "?nh Gentle Fluidity Gold dang du?c xác minh d? tránh nh?m phiên b?n", verified: false }
    ],
    description: "Phiên b?n dang du?c b? sung nhanh vào catalog Maison de SON d? hoàn thi?n thu vi?n s?n ph?m live.",
    article: "Gentle Fluidity Gold dang du?c Maison de SON b? sung vào catalog live. N?i dung review chi ti?t s? ti?p t?c du?c nâng chu?n sau.",
    verdict: "Mùi d? x?p dúng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "unisex", icon: "?" },
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
    tags: ["unisex", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 4990000,
    shopeeOffers: []
  }`;
s = s.replace(/\n\];\s*$/, extra + '\n];\n');
fs.writeFileSync(path, s, 'utf8');
console.log('added final 3');
