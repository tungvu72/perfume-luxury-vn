// AUTO-GENERATED — do not edit manually
// Run: node scripts/generate-search-index.mjs to regenerate
// Lightweight search index: ~30KB vs 687KB full mockData
// Only contains fields needed for client-side search: id, name, brand, subName, image, gender, brandSlug, tags

export type SearchProduct = {
  id: string;
  name: string;
  brand: string;
  subName?: string;
  image?: string;
  gender?: string;
  brandSlug?: string;
  isPublished?: boolean;
  tags?: string[];
};

export const SEARCH_INDEX: SearchProduct[] = [
  {
    "id": "montblanc-signature-edp",
    "name": "Signature EDP",
    "brand": "MONTBLANC",
    "subName": "Eau de Parfum",
    "image": "/images/products/montblanc-signature-main.jpg",
    "gender": "nu",
    "brandSlug": "montblanc",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Văn phòng",
      "Hiền dịu",
      "An toàn"
    ]
  },
  {
    "id": "24-faubourg",
    "name": "24 Faubourg EDP",
    "brand": "HERMÈS",
    "subName": "EDP",
    "image": "/images/products/hermes-24-faubourg-main.jpg",
    "gender": "nu",
    "brandSlug": "hermes",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Quý phái",
      "Trưởng thành",
      "Hermès"
    ]
  },
  {
    "id": "9pm",
    "name": "9PM EDP",
    "brand": "AFNAN",
    "subName": "EDP",
    "image": "/images/products/afnan-9pm-main.jpg",
    "gender": "nam",
    "brandSlug": "afnan",
    "isPublished": true,
    "tags": [
      "Nam",
      "Buổi tối",
      "Giá mềm",
      "Trẻ trung"
    ]
  },
  {
    "id": "absolu-aventus",
    "name": "Absolu Aventus EDP",
    "brand": "CREED",
    "subName": "EDP",
    "image": "/images/products/creed-absolu-aventus-main.jpg",
    "gender": "nam",
    "brandSlug": "creed",
    "isPublished": true,
    "tags": [
      "Nam",
      "Niche",
      "Sang trọng",
      "Đặc biệt"
    ]
  },
  {
    "id": "acqua-di-gio",
    "name": "Acqua di Giò EDT",
    "brand": "GIORGIO ARMANI",
    "subName": "EDT",
    "image": "/images/products/giorgio-armani-acqua-di-gio-main.jpg",
    "gender": "nam",
    "brandSlug": "giorgio-armani",
    "isPublished": true,
    "tags": [
      "Nam",
      "Kinh điển",
      "Mùa hè",
      "Biển"
    ]
  },
  {
    "id": "acqua-di-gio-parfum",
    "name": "Acqua di Giò Parfum",
    "brand": "GIORGIO ARMANI",
    "subName": "Parfum",
    "image": "/images/products/armani-acqua-di-gio-parfum-main.jpg",
    "gender": "nam",
    "brandSlug": "giorgio-armani",
    "isPublished": true,
    "tags": [
      "Nam",
      "Biển",
      "Office",
      "Parfum"
    ]
  },
  {
    "id": "acqua-di-gio-profondo",
    "name": "Acqua di Giò Profondo EDP",
    "brand": "GIORGIO ARMANI",
    "subName": "EDP (2020)",
    "image": "/images/products/007-acqua-di-gio-profondo-main.jpg",
    "gender": "nam",
    "brandSlug": "giorgio-armani",
    "isPublished": true,
    "tags": [
      "Nam",
      "Biển",
      "Hiện đại",
      "Office"
    ]
  },
  {
    "id": "acqua-di-gio-profumo",
    "name": "Acqua di Giò Profumo Parfum",
    "brand": "GIORGIO ARMANI",
    "subName": "Parfum",
    "image": "/images/products/008-acqua-di-gio-profumo-main.jpg",
    "gender": "nam",
    "brandSlug": "armani",
    "isPublished": true,
    "tags": [
      "Nam",
      "Đa dụng",
      "Biển",
      "Thảo mộc"
    ]
  },
  {
    "id": "addict-edp",
    "name": "Addict EDP",
    "brand": "DIOR",
    "subName": "EDP",
    "image": "/images/products/dior-addict-edp-main.jpg",
    "gender": "nu",
    "brandSlug": "dior",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Gây nghiện",
      "Sexy",
      "Hoa trắng"
    ]
  },
  {
    "id": "african-leather",
    "name": "African Leather EDP",
    "brand": "MEMO PARIS",
    "subName": "EDP",
    "image": "/images/products/memo-african-leather-main.jpg",
    "gender": "unisex",
    "brandSlug": "memo",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Niche",
      "Hoang dã",
      "Da thuộc"
    ]
  },
  {
    "id": "alexandria-ii",
    "name": "Alexandria II EDP",
    "brand": "XERJOFF",
    "subName": "EDP",
    "image": "/images/products/xerjoff-alexandria-ii-main.jpg",
    "gender": "unisex",
    "brandSlug": "xerjoff",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Ultra-luxury",
      "Oud",
      "Collector"
    ]
  },
  {
    "id": "alien-edp",
    "name": "Alien EDP",
    "brand": "MUGLER",
    "subName": "EDP",
    "image": "/images/products/mugler-alien-edp-main.jpg",
    "gender": "nu",
    "brandSlug": "mugler",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Gây nghiện",
      "Compliment getter",
      "Buổi tối"
    ]
  },
  {
    "id": "allure-edp",
    "name": "Allure EDP",
    "brand": "CHANEL",
    "subName": "EDP",
    "image": "/images/products/chanel-allure-edp-main.jpg",
    "gender": "nu",
    "brandSlug": "chanel",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Thanh lịch",
      "Trưởng thành",
      "Đa dụng"
    ]
  },
  {
    "id": "allure-homme-edition-blanche",
    "name": "Allure Homme Édition Blanche EDP",
    "brand": "CHANEL",
    "subName": "EDP",
    "image": "/images/products/014-allure-homme-edition-blanche-main.jpg",
    "gender": "nam",
    "brandSlug": "chanel",
    "isPublished": true,
    "tags": [
      "Nam",
      "Sáng sạch",
      "Hidden gem",
      "Office"
    ]
  },
  {
    "id": "allure-homme-edt",
    "name": "Allure Homme EDT",
    "brand": "CHANEL",
    "subName": "EDT",
    "image": "/images/products/chanel-allure-homme-edt-main.jpg",
    "gender": "nam",
    "brandSlug": "chanel",
    "isPublished": true,
    "tags": [
      "Nam",
      "Gentleman",
      "Đa dụng",
      "Lịch sự"
    ]
  },
  {
    "id": "allure-homme-sport",
    "name": "Allure Homme Sport EDT",
    "brand": "CHANEL",
    "subName": "EDT",
    "image": "/images/products/chanel-allure-homme-sport-main.jpg",
    "gender": "nam",
    "brandSlug": "chanel",
    "isPublished": true,
    "tags": [
      "Nam",
      "Sporty",
      "An toàn",
      "Mùa hè"
    ]
  },
  {
    "id": "allure-homme-sport-eau-extreme",
    "name": "Allure Homme Sport Eau Extrême",
    "brand": "CHANEL",
    "subName": "Eau Extrême",
    "image": "/images/products/chanel-allure-homme-sport-eau-extreme-main.jpg",
    "gender": "nam",
    "brandSlug": "chanel",
    "isPublished": true,
    "tags": [
      "Nam",
      "Sporty",
      "An toàn",
      "Đa dụng"
    ]
  },
  {
    "id": "althair",
    "name": "Althaïr EDP",
    "brand": "PARFUMS DE MARLY",
    "subName": "EDP",
    "image": "/images/products/parfums-de-marly-althair-main.jpg",
    "gender": "nam",
    "brandSlug": "parfums-de-marly",
    "isPublished": true,
    "tags": [
      "Nam",
      "Niche",
      "Vani",
      "Hiện đại"
    ]
  },
  {
    "id": "angel",
    "name": "Angel EDP",
    "brand": "MUGLER",
    "subName": "EDP",
    "image": "/images/products/mugler-angel-main.jpg",
    "gender": "nu",
    "brandSlug": "mugler",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Huyền thoại",
      "Gourmand",
      "Polarizing"
    ]
  },
  {
    "id": "angel-muse",
    "name": "Angel Muse EDP",
    "brand": "MUGLER",
    "subName": "EDP",
    "image": "/images/products/mugler-angel-muse-main.jpg",
    "gender": "nu",
    "brandSlug": "mugler",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Gourmand",
      "Độc đáo",
      "Discontinued"
    ]
  },
  {
    "id": "angelique-noire",
    "name": "Angélique Noire EDP",
    "brand": "GUERLAIN",
    "subName": "EDP",
    "image": "/images/products/guerlain-angelique-noire-main.jpg",
    "gender": "unisex",
    "brandSlug": "guerlain",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Niche",
      "Nghệ thuật",
      "Vani xanh"
    ]
  },
  {
    "id": "angels-share",
    "name": "Angels' Share EDP",
    "brand": "KILIAN",
    "subName": "EDP",
    "image": "/images/products/kilian-angels-share-main.jpg",
    "gender": "unisex",
    "brandSlug": "kilian",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Niche",
      "Sang trọng",
      "Thu đông"
    ]
  },
  {
    "id": "ani",
    "name": "Ani Extrait",
    "brand": "NISHANE",
    "subName": "Extrait de Parfum",
    "image": "/images/products/nishane-ani-main.jpg",
    "gender": "unisex",
    "brandSlug": "nishane",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Niche",
      "Vani",
      "Dễ mến"
    ]
  },
  {
    "id": "antaeus",
    "name": "Antaeus EDT",
    "brand": "CHANEL",
    "subName": "EDT",
    "image": "/images/products/chanel-antaeus-main.jpg",
    "gender": "nam",
    "brandSlug": "chanel",
    "isPublished": true,
    "tags": [
      "Nam",
      "Powerhouse",
      "Old school",
      "Mùa đông"
    ]
  },
  {
    "id": "armani-si-edp",
    "name": "Sì EDP",
    "brand": "GIORGIO ARMANI",
    "subName": "EDP",
    "image": "/images/products/025-armani-si-edp-main.jpg",
    "gender": "nu",
    "brandSlug": "giorgio-armani",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Thanh lịch",
      "Đi làm",
      "Đa dụng"
    ]
  },
  {
    "id": "bal-dafrique",
    "name": "Bal d'Afrique EDP",
    "brand": "BYREDO",
    "subName": "EDP",
    "image": "/images/products/byredo-bal-dafrique-main.jpg",
    "gender": "unisex",
    "brandSlug": "byredo",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Niche",
      "Artistic",
      "Đa dụng"
    ]
  },
  {
    "id": "bianco-latte",
    "name": "Bianco Latte EDP",
    "brand": "GIARDINI DI TOSCANA",
    "subName": "EDP",
    "image": "/images/products/giardini-di-toscana-bianco-latte-main.jpg",
    "gender": "unisex",
    "brandSlug": "giardini-di-toscana",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Gourmand",
      "Viral",
      "Comfort"
    ]
  },
  {
    "id": "black-opium",
    "name": "Black Opium EDP",
    "brand": "YVES SAINT LAURENT",
    "subName": "EDP",
    "image": "/images/products/ysl-black-opium-main.jpg",
    "gender": "nu",
    "brandSlug": "ysl",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Buổi tối",
      "Hẹn hò",
      "Cà phê"
    ]
  },
  {
    "id": "black-opium-le-parfum",
    "name": "Black Opium Le Parfum",
    "brand": "YVES SAINT LAURENT",
    "subName": "Parfum",
    "image": "/images/products/ysl-black-opium-le-parfum-main.jpg",
    "gender": "nu",
    "brandSlug": "ysl",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Gây nghiện",
      "Buổi tối",
      "Vani"
    ]
  },
  {
    "id": "bleu-de-chanel-eau-de-parfum",
    "name": "Bleu de Chanel Eau de Parfum",
    "brand": "CHANEL",
    "subName": "EDP",
    "image": "/images/products/bleu-chanel-edp-main.jpg",
    "gender": "nam",
    "brandSlug": "chanel",
    "isPublished": true,
    "tags": [
      "Văn phòng",
      "Đa dụng",
      "Cao cấp",
      "Dễ dùng"
    ]
  },
  {
    "id": "bleu-de-chanel-parfum",
    "name": "Bleu de Chanel Parfum",
    "brand": "CHANEL",
    "subName": "Parfum",
    "image": "/images/products/031-bleu-de-chanel-parfum-main.jpg",
    "gender": "nam",
    "brandSlug": "chanel",
    "isPublished": true,
    "tags": [
      "Nam",
      "Lịch thiệp",
      "Đa dụng",
      "Cao cấp"
    ]
  },
  {
    "id": "bloom-edp",
    "name": "Bloom EDP",
    "brand": "GUCCI",
    "subName": "EDP",
    "image": "/images/products/032-bloom-edp-main.jpg",
    "gender": "nu",
    "brandSlug": "gucci",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Hoa trắng",
      "Tự nhiên",
      "Tinh tế"
    ]
  },
  {
    "id": "bois-imperial",
    "name": "Bois Impérial EDP",
    "brand": "ESSENTIAL PARFUMS",
    "subName": "EDP",
    "image": "/images/products/essential-parfums-bois-imperial-main.jpg",
    "gender": "unisex",
    "brandSlug": "essential-parfums",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Niche",
      "Best value",
      "Đa dụng"
    ]
  },
  {
    "id": "born-in-roma-intense",
    "name": "Donna Born in Roma Intense",
    "brand": "VALENTINO",
    "subName": "EDP",
    "image": "/images/products/valentino-born-in-roma-intense-main.jpg",
    "gender": "nu",
    "brandSlug": "valentino",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Vani",
      "Cozy",
      "Thu đông"
    ]
  },
  {
    "id": "boss-bottled-edp",
    "name": "Boss Bottled EDP",
    "brand": "HUGO BOSS",
    "subName": "EDP",
    "image": "/images/products/035-boss-bottled-edp-main.jpg",
    "gender": "nam",
    "brandSlug": "hugo-boss",
    "isPublished": true,
    "tags": [
      "Nam",
      "Đi làm",
      "Lịch sự",
      "Đa dụng"
    ]
  },
  {
    "id": "bottled-absolu",
    "name": "Bottled Absolu EDP",
    "brand": "HUGO BOSS",
    "subName": "Parfum Intense",
    "image": "/images/products/boss-bottled-absolu-main.jpg",
    "gender": "nam",
    "brandSlug": "hugo-boss",
    "isPublished": true,
    "tags": [
      "Nam",
      "Tối",
      "Gỗ",
      "Giá tốt"
    ]
  },
  {
    "id": "carlisle",
    "name": "Carlisle EDP",
    "brand": "PARFUMS DE MARLY",
    "subName": "EDP",
    "image": "/images/products/parfums-de-marly-carlisle-main.jpg",
    "gender": "unisex",
    "brandSlug": "parfums-de-marly",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Niche",
      "Sang trọng",
      "Thu đông"
    ]
  },
  {
    "id": "carnal-flower",
    "name": "Carnal Flower EDP",
    "brand": "FREDERIC MALLE",
    "subName": "EDP",
    "image": "/images/products/frederic-malle-carnal-flower-main.jpg",
    "gender": "unisex",
    "brandSlug": "frederic-malle",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Niche",
      "Tượng đài",
      "Hoa trắng"
    ]
  },
  {
    "id": "champs-elysees-edp",
    "name": "Champs-Élysées EDP",
    "brand": "GUERLAIN",
    "subName": "EDP",
    "image": "/images/products/guerlain-champs-elysees-edp-main.jpg",
    "gender": "nu",
    "brandSlug": "guerlain",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Paris",
      "Lãng mạn",
      "Mùa xuân"
    ]
  },
  {
    "id": "chance-eau-tendre",
    "name": "Chance Eau Tendre EDP",
    "brand": "CHANEL",
    "subName": "EDP",
    "image": "/images/products/chanel-chance-eau-tendre-main.jpg",
    "gender": "nu",
    "brandSlug": "chanel",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Dịu dàng",
      "Thanh lịch",
      "Hằng ngày"
    ]
  },
  {
    "id": "cinema",
    "name": "Cinéma EDP",
    "brand": "YVES SAINT LAURENT",
    "subName": "EDP",
    "image": "/images/products/ysl-cinema-main.jpg",
    "gender": "nu",
    "brandSlug": "ysl",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Drama",
      "Hollywood",
      "Buổi tối"
    ]
  },
  {
    "id": "ck-obsession",
    "name": "Obsession EDT",
    "brand": "CALVIN KLEIN",
    "subName": "EDT",
    "image": "/images/products/042-ck-obsession-main.jpg",
    "gender": "nam",
    "brandSlug": "calvin-klein",
    "isPublished": true,
    "tags": [
      "Nam",
      "Powerhouse",
      "80s",
      "Giá rẻ"
    ]
  },
  {
    "id": "club-de-nuit-intense-man",
    "name": "Club de Nuit Intense Man",
    "brand": "ARMAF",
    "subName": "Parfum",
    "image": "/images/products/armaf-club-de-nuit-intense-man-main.jpg",
    "gender": "nam",
    "brandSlug": "armaf",
    "isPublished": true,
    "tags": [
      "Nam",
      "Giá mềm",
      "Clone Aventus",
      "Đa dụng"
    ]
  },
  {
    "id": "coco-eau-de-parfum",
    "name": "Coco Eau de Parfum",
    "brand": "CHANEL",
    "subName": "Eau de Parfum",
    "image": "/images/products/chanel-coco-eau-de-parfum-main.jpg",
    "gender": "nu",
    "brandSlug": "chanel",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Kinh điển",
      "Oriental",
      "Trang trọng"
    ]
  },
  {
    "id": "coco-eau-de-toilette",
    "name": "Coco Eau de Toilette",
    "brand": "CHANEL",
    "subName": "Eau de Toilette",
    "image": "/images/products/chanel-coco-eau-de-toilette-main.jpg",
    "gender": "nu",
    "brandSlug": "chanel",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Cổ điển",
      "Oriental",
      "Ban ngày"
    ]
  },
  {
    "id": "coco-mademoiselle-edp",
    "name": "Coco Mademoiselle EDP",
    "brand": "CHANEL",
    "subName": "EDP",
    "image": "/images/products/chanel-coco-mademoiselle-edp-main.jpg",
    "gender": "nu",
    "brandSlug": "chanel",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Thanh lịch",
      "Đi làm",
      "Kinh điển"
    ]
  },
  {
    "id": "coco-noir",
    "name": "Coco Noir EDP",
    "brand": "CHANEL",
    "subName": "EDP",
    "image": "/images/products/chanel-coco-noir-main.jpg",
    "gender": "nu",
    "brandSlug": "chanel",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Quyến rũ",
      "Buổi tối",
      "Sang trọng"
    ]
  },
  {
    "id": "code-parfum",
    "name": "Armani Code Parfum",
    "brand": "GIORGIO ARMANI",
    "subName": "Parfum",
    "image": "/images/products/armani-code-parfum-main.jpg",
    "gender": "nam",
    "brandSlug": "armani",
    "isPublished": true,
    "tags": [
      "Nam",
      "Lịch thiệp",
      "Đa dụng",
      "Hiện đại"
    ]
  },
  {
    "id": "colonia",
    "name": "Colonia EDC",
    "brand": "ACQUA DI PARMA",
    "subName": "EDC",
    "image": "/images/products/acqua-di-parma-colonia-main.jpg",
    "gender": "unisex",
    "brandSlug": "acqua-di-parma",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Kinh điển",
      "Citrus",
      "Mùa hè"
    ]
  },
  {
    "id": "cool-water",
    "name": "Cool Water EDT",
    "brand": "DAVIDOFF",
    "subName": "EDT",
    "image": "/images/products/davidoff-cool-water-main.jpg",
    "gender": "nam",
    "brandSlug": "davidoff",
    "isPublished": true,
    "tags": [
      "Nam",
      "Mùa hè",
      "Giá mềm",
      "Kinh điển"
    ]
  },
  {
    "id": "coromandel-eau-de-parfum",
    "name": "Coromandel",
    "brand": "CHANEL",
    "subName": "EDP",
    "image": "/images/products/chanel-coromandel-eau-de-parfum-main.jpg",
    "gender": "unisex",
    "brandSlug": "chanel",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Exclusive",
      "Hoắc hương",
      "Bí mật"
    ]
  },
  {
    "id": "crystal-noir-eau-de-toilette",
    "name": "Crystal Noir EDT",
    "brand": "VERSACE",
    "subName": "EDT",
    "image": "/images/products/versace-crystal-noir-eau-de-toilette-main.jpg",
    "gender": "nu",
    "brandSlug": "versace",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Bí ẩn",
      "Buổi tối",
      "Giá tốt"
    ]
  },
  {
    "id": "dama-bianca",
    "name": "Dama Bianca EDP",
    "brand": "XERJOFF",
    "subName": "EDP",
    "image": "/images/products/xerjoff-dama-bianca-main.jpg",
    "gender": "nu",
    "brandSlug": "xerjoff",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Niche",
      "Thanh lịch",
      "Feminine"
    ]
  },
  {
    "id": "delina",
    "name": "Delina EDP",
    "brand": "PARFUMS DE MARLY",
    "subName": "EDP",
    "image": "/images/products/parfums-de-marly-delina-main.jpg",
    "gender": "nu",
    "brandSlug": "parfums-de-marly",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Hoa hồng",
      "Sang trọng",
      "Cao cấp"
    ]
  },
  {
    "id": "diorissimo",
    "name": "Diorissimo EDT",
    "brand": "DIOR",
    "subName": "EDT",
    "image": "/images/products/dior-diorissimo-main.jpg",
    "gender": "nu",
    "brandSlug": "dior",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Kiệt tác",
      "Thuần khiết",
      "Mùa xuân"
    ]
  },
  {
    "id": "dolce-vita",
    "name": "Dolce Vita EDT",
    "brand": "DIOR",
    "subName": "EDT",
    "image": "/images/products/dior-dolce-vita-main.jpg",
    "gender": "nu",
    "brandSlug": "dior",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Vintage",
      "La Dolce Vita",
      "Discontinued"
    ]
  },
  {
    "id": "drakkar-noir",
    "name": "Drakkar Noir EDT",
    "brand": "GUY LAROCHE",
    "subName": "EDT",
    "image": "/images/products/guy-laroche-drakkar-noir-main.jpg",
    "gender": "nam",
    "brandSlug": "guy-laroche",
    "isPublished": true,
    "tags": [
      "Nam",
      "Huyền thoại",
      "Old school",
      "Giá rẻ"
    ]
  },
  {
    "id": "dune-edt",
    "name": "Dune EDT",
    "brand": "DIOR",
    "subName": "EDT",
    "image": "/images/products/dior-dune-edt-main.jpg",
    "gender": "nu",
    "brandSlug": "dior",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Abstract",
      "Heritage",
      "Dreamer"
    ]
  },
  {
    "id": "dylan-blue",
    "name": "Pour Homme Dylan Blue EDT",
    "brand": "VERSACE",
    "subName": "EDT",
    "image": "/images/products/pour-homme-dylan-blue-main.jpg",
    "gender": "nam",
    "brandSlug": "versace",
    "isPublished": true,
    "tags": [
      "Nam",
      "Đa dụng",
      "Giá tốt",
      "Safe choice"
    ]
  },
  {
    "id": "eau-de-parfum",
    "name": "Chloé EDP",
    "brand": "CHLOÉ",
    "subName": "EDP",
    "image": "/images/products/chloe-eau-de-parfum-main.jpg",
    "gender": "nu",
    "brandSlug": "chloe",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Thanh lịch",
      "Hoa hồng",
      "Hằng ngày"
    ]
  },
  {
    "id": "eau-sauvage",
    "name": "Eau Sauvage EDT",
    "brand": "DIOR",
    "subName": "EDT",
    "image": "/images/products/dior-eau-sauvage-main.jpg",
    "gender": "nam",
    "brandSlug": "dior",
    "isPublished": true,
    "tags": [
      "Nam",
      "Kinh điển",
      "Citrus",
      "Gentleman"
    ]
  },
  {
    "id": "eau-sauvage-parfum",
    "name": "Eau Sauvage Parfum",
    "brand": "DIOR",
    "subName": "Parfum",
    "image": "/images/products/dior-eau-sauvage-parfum-main.jpg",
    "gender": "nam",
    "brandSlug": "dior",
    "isPublished": true,
    "tags": [
      "Nam",
      "Quý ông",
      "Khoáng",
      "Thu đông"
    ]
  },
  {
    "id": "egoiste",
    "name": "Égoïste EDT",
    "brand": "CHANEL",
    "subName": "EDT",
    "image": "/images/products/chanel-egoiste-main.jpg",
    "gender": "nam",
    "brandSlug": "chanel",
    "isPublished": true,
    "tags": [
      "Nam",
      "Vintage",
      "Nội tâm",
      "Gỗ hồng"
    ]
  },
  {
    "id": "egoiste-platinum",
    "name": "Égoïste Platinum EDT",
    "brand": "CHANEL",
    "subName": "EDT",
    "image": "/images/products/chanel-egoiste-platinum-main.jpg",
    "gender": "nam",
    "brandSlug": "chanel",
    "isPublished": true,
    "tags": [
      "Nam",
      "Văn phòng",
      "Kinh điển",
      "Sạch sắc"
    ]
  },
  {
    "id": "elixir-des-merveilles",
    "name": "Elixir des Merveilles EDP",
    "brand": "HERMÈS",
    "subName": "EDP",
    "image": "/images/products/065-elixir-des-merveilles-main.jpg",
    "gender": "nu",
    "brandSlug": "hermes",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Độc đáo",
      "Ấm",
      "Hermès"
    ]
  },
  {
    "id": "erba-pura",
    "name": "Erba Pura EDP",
    "brand": "XERJOFF",
    "subName": "EDP",
    "image": "/images/products/xerjoff-erba-pura-main.jpg",
    "gender": "unisex",
    "brandSlug": "xerjoff",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Compliment beast",
      "Niche",
      "Trái cây"
    ]
  },
  {
    "id": "eros-edp",
    "name": "Eros EDP",
    "brand": "VERSACE",
    "subName": "EDP",
    "image": "/images/products/versace-eros-edp-main.jpg",
    "gender": "nam",
    "brandSlug": "versace",
    "isPublished": true,
    "tags": [
      "Buổi tối",
      "Trẻ trung",
      "Đi chơi",
      "Ngọt mát"
    ]
  },
  {
    "id": "explorer",
    "name": "Explorer EDP",
    "brand": "MONTBLANC",
    "subName": "EDP",
    "image": "/images/products/montblanc-explorer-main.jpg",
    "gender": "nam",
    "brandSlug": "montblanc",
    "isPublished": true,
    "tags": [
      "Nam",
      "Đa dụng",
      "Giá tốt",
      "Phiêu lưu"
    ]
  },
  {
    "id": "fahrenheit",
    "name": "Fahrenheit EDT",
    "brand": "DIOR",
    "subName": "EDT",
    "image": "/images/products/dior-fahrenheit-main.jpg",
    "gender": "nam",
    "brandSlug": "dior",
    "isPublished": true,
    "tags": [
      "Nam",
      "Huyền thoại",
      "Da thuộc",
      "Bold"
    ]
  },
  {
    "id": "fahrenheit-le-parfum",
    "name": "Fahrenheit Le Parfum",
    "brand": "DIOR",
    "subName": "Parfum",
    "image": "/images/products/dior-fahrenheit-le-parfum-main.jpg",
    "gender": "nam",
    "brandSlug": "dior",
    "isPublished": true,
    "tags": [
      "Nam",
      "Da thuộc",
      "Intense",
      "Mùa đông"
    ]
  },
  {
    "id": "for-men",
    "name": "Coach For Men EDT",
    "brand": "COACH",
    "subName": "EDT",
    "image": "/images/products/coach-for-men-main.jpg",
    "gender": "nam",
    "brandSlug": "coach",
    "isPublished": true,
    "tags": [
      "Nam",
      "Hằng ngày",
      "Trẻ trung",
      "Giá mềm"
    ]
  },
  {
    "id": "ganymede",
    "name": "Ganymede EDP",
    "brand": "MARC-ANTOINE BARROIS",
    "subName": "EDP",
    "image": "/images/products/marc-antoine-barrois-ganymede-main.jpg",
    "gender": "unisex",
    "brandSlug": "marc-antoine-barrois",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Niche",
      "Unique",
      "Khoáng"
    ]
  },
  {
    "id": "gentle-fluidity-gold",
    "name": "Gentle Fluidity Gold EDP",
    "brand": "MAISON FRANCIS KURKDJIAN",
    "subName": "EDP",
    "image": "/images/products/maison-francis-kurkdjian-gentle-fluidity-gold-main.jpg",
    "gender": "unisex",
    "brandSlug": "maison-francis-kurkdjian",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Quiet luxury",
      "Vani",
      "Mọi lúc"
    ]
  },
  {
    "id": "gentleman-reserve-privee",
    "name": "Gentleman Réserve Privée EDP",
    "brand": "GIVENCHY",
    "subName": "EDP",
    "image": "/images/products/givenchy-gentleman-reserve-privee-main.jpg",
    "gender": "nam",
    "brandSlug": "givenchy",
    "isPublished": true,
    "tags": [
      "Nam",
      "Boozy",
      "Phòng cigar",
      "Giá tốt"
    ]
  },
  {
    "id": "good-girl",
    "name": "Good Girl EDP",
    "brand": "CAROLINA HERRERA",
    "subName": "EDP",
    "image": "/images/products/carolina-herrera-good-girl-main.jpg",
    "gender": "nu",
    "brandSlug": "carolina-herrera",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Hẹn hò",
      "Buổi tối",
      "Sexy"
    ]
  },
  {
    "id": "grand-soir",
    "name": "Grand Soir EDP",
    "brand": "MAISON FRANCIS KURKDJIAN",
    "subName": "EDP",
    "image": "/images/products/mfk-grand-soir-main.jpg",
    "gender": "unisex",
    "brandSlug": "mfk",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Niche",
      "Amber",
      "Sang trọng"
    ]
  },
  {
    "id": "green-irish-tweed",
    "name": "Green Irish Tweed EDP",
    "brand": "CREED",
    "subName": "EDP",
    "image": "/images/products/creed-green-irish-tweed-main.jpg",
    "gender": "nam",
    "brandSlug": "creed",
    "isPublished": true,
    "tags": [
      "Nam",
      "Niche",
      "Old money",
      "Xanh"
    ]
  },
  {
    "id": "grey-vetiver",
    "name": "Grey Vetiver EDP",
    "brand": "TOM FORD",
    "subName": "EDP",
    "image": "/images/products/tom-ford-grey-vetiver-main.jpg",
    "gender": "nam",
    "brandSlug": "tom-ford",
    "isPublished": true,
    "tags": [
      "Nam",
      "CEO",
      "Office",
      "Vetiver"
    ]
  },
  {
    "id": "habit-rouge-eau-de-toilette",
    "name": "Habit Rouge Eau de Toilette",
    "brand": "GUERLAIN",
    "subName": "EDT",
    "image": "/images/products/guerlain-habit-rouge-edt-main.jpg",
    "gender": "nam",
    "brandSlug": "guerlain",
    "isPublished": true,
    "tags": [
      "Nam",
      "Heritage",
      "Pioneer",
      "Oriental"
    ]
  },
  {
    "id": "habit-rouge-parfum",
    "name": "Habit Rouge Parfum",
    "brand": "GUERLAIN",
    "subName": "Parfum",
    "image": "/images/products/080-habit-rouge-parfum-main.jpg",
    "gender": "nam",
    "brandSlug": "guerlain",
    "isPublished": true,
    "tags": [
      "Nam",
      "Kinh điển",
      "Gentleman",
      "Thu đông"
    ]
  },
  {
    "id": "hacivat",
    "name": "Hacivat Extrait",
    "brand": "NISHANE",
    "subName": "Extrait de Parfum",
    "image": "/images/products/nishane-hacivat-main.jpg",
    "gender": "unisex",
    "brandSlug": "nishane",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Niche",
      "Premium",
      "Đa dụng"
    ]
  },
  {
    "id": "halfeti",
    "name": "Halfeti EDP",
    "brand": "PENHALIGON'S",
    "subName": "EDP",
    "image": "/images/products/penhaligons-halfeti-main.jpg",
    "gender": "unisex",
    "brandSlug": "penhaligons",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Niche",
      "Bí ẩn",
      "Oud"
    ]
  },
  {
    "id": "her-edp",
    "name": "Her EDP",
    "brand": "BURBERRY",
    "subName": "EDP",
    "image": "/images/products/burberry-her-edp-main.jpg",
    "gender": "nu",
    "brandSlug": "burberry",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Dễ thương",
      "Berry",
      "Hằng ngày"
    ]
  },
  {
    "id": "herod",
    "name": "Herod EDP",
    "brand": "PARFUMS DE MARLY",
    "subName": "EDP",
    "image": "/images/products/parfums-de-marly-herod-main.jpg",
    "gender": "nam",
    "brandSlug": "parfums-de-marly",
    "isPublished": true,
    "tags": [
      "Nam",
      "Niche",
      "Gentleman",
      "Thu đông"
    ]
  },
  {
    "id": "homme-cologne",
    "name": "Dior Homme Cologne",
    "brand": "DIOR",
    "subName": "Cologne",
    "image": "/images/products/dior-homme-cologne-main.jpg",
    "gender": "nam",
    "brandSlug": "dior",
    "isPublished": true,
    "tags": [
      "Nam",
      "Sạch",
      "Mùa hè",
      "Skin scent"
    ]
  },
  {
    "id": "homme-intense",
    "name": "Homme Intense",
    "brand": "DIOR",
    "subName": "EDP",
    "image": "/images/products/dior-homme-intense-main.jpg",
    "gender": "nam",
    "brandSlug": "dior",
    "isPublished": true,
    "tags": [
      "Nam",
      "Thanh lịch",
      "Iris",
      "Date night"
    ]
  },
  {
    "id": "homme-parfum",
    "name": "Dior Homme Parfum",
    "brand": "DIOR",
    "subName": "Parfum",
    "image": "/images/products/dior-homme-parfum-main.jpg",
    "gender": "nam",
    "brandSlug": "dior",
    "isPublished": true,
    "tags": [
      "Nam",
      "Cult classic",
      "Discontinued",
      "Holy grail"
    ]
  },
  {
    "id": "homme-sport-2021",
    "name": "Dior Homme Sport (2021) EDT",
    "brand": "DIOR",
    "subName": "EDT",
    "image": "/images/products/dior-homme-sport-2021-main.jpg",
    "gender": "nam",
    "brandSlug": "dior",
    "isPublished": true,
    "tags": [
      "Nam",
      "Sporty",
      "Mùa hè",
      "Gym"
    ]
  },
  {
    "id": "hundred-silent-ways",
    "name": "Hundred Silent Ways Extrait",
    "brand": "NISHANE",
    "subName": "Extrait de Parfum",
    "image": "/images/products/nishane-hundred-silent-ways-main.jpg",
    "gender": "unisex",
    "brandSlug": "nishane",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Niche",
      "Creamy",
      "Hoa"
    ]
  },
  {
    "id": "hypnotic-poison",
    "name": "Hypnotic Poison EDT",
    "brand": "DIOR",
    "subName": "EDT",
    "image": "/images/products/dior-hypnotic-poison-main.jpg",
    "gender": "nu",
    "brandSlug": "dior",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Gây nghiện",
      "Buổi tối",
      "Gourmand"
    ]
  },
  {
    "id": "imagination",
    "name": "Imagination EDP",
    "brand": "LOUIS VUITTON",
    "subName": "EDP",
    "image": "/images/products/louis-vuitton-imagination-main.jpg",
    "gender": "nam",
    "brandSlug": "louis-vuitton",
    "isPublished": true,
    "tags": [
      "Nam",
      "Ultra-luxury",
      "Đa dụng",
      "Citrus"
    ]
  },
  {
    "id": "infusion-diris",
    "name": "Infusion d'Iris EDP",
    "brand": "PRADA",
    "subName": "EDP",
    "image": "/images/products/prada-infusion-diris-main.jpg",
    "gender": "nu",
    "brandSlug": "prada",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Quiet luxury",
      "Tối giản",
      "Office"
    ]
  },
  {
    "id": "insolence-edp",
    "name": "Insolence EDP",
    "brand": "GUERLAIN",
    "subName": "EDP",
    "image": "/images/products/guerlain-insolence-edp-main.jpg",
    "gender": "nu",
    "brandSlug": "guerlain",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Feminine",
      "Powdery",
      "Buổi tối"
    ]
  },
  {
    "id": "instant-crush",
    "name": "Instant Crush EDP",
    "brand": "MANCERA",
    "subName": "EDP",
    "image": "/images/products/mancera-instant-crush-main.jpg",
    "gender": "unisex",
    "brandSlug": "mancera",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Buổi tối",
      "Bám tốt",
      "Cao cấp"
    ]
  },
  {
    "id": "interlude-man",
    "name": "Interlude Man EDP",
    "brand": "AMOUAGE",
    "subName": "EDP",
    "image": "/images/products/amouage-interlude-man-main.jpg",
    "gender": "nam",
    "brandSlug": "amouage",
    "isPublished": true,
    "tags": [
      "Nam",
      "Niche",
      "Quyền lực",
      "Đặc biệt"
    ]
  },
  {
    "id": "jadore-edp",
    "name": "J'adore EDP",
    "brand": "DIOR",
    "subName": "EDP",
    "image": "/images/products/dior-jadore-edp-main.jpg",
    "gender": "nu",
    "brandSlug": "dior",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Sang trọng",
      "Hoa",
      "Đa dụng"
    ]
  },
  {
    "id": "jazz-club",
    "name": "Replica Jazz Club EDT",
    "brand": "MAISON MARGIELA",
    "subName": "Replica EDT",
    "image": "/images/products/maison-margiela-jazz-club-main.jpg",
    "gender": "nam",
    "brandSlug": "maison-margiela",
    "isPublished": true,
    "tags": [
      "Nam",
      "Mood",
      "Boozy",
      "Thu đông"
    ]
  },
  {
    "id": "jpg-classique-edt",
    "name": "Classique EDT",
    "brand": "JEAN PAUL GAULTIER",
    "subName": "EDT",
    "image": "/images/products/098-jpg-classique-edt-main.jpg",
    "gender": "nu",
    "brandSlug": "jpg",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Iconic",
      "90s",
      "Gợi cảm"
    ]
  },
  {
    "id": "jpg-la-belle-edp",
    "name": "La Belle EDP",
    "brand": "JEAN PAUL GAULTIER",
    "subName": "EDP",
    "image": "/images/products/099-jpg-la-belle-edp-main.jpg",
    "gender": "nu",
    "brandSlug": "jean-paul-gaultier",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Sexy",
      "Vani",
      "Buổi tối"
    ]
  },
  {
    "id": "jpg-la-belle-le-parfum",
    "name": "La Belle Le Parfum",
    "brand": "JEAN PAUL GAULTIER",
    "subName": "Le Parfum",
    "image": "/images/products/100-jpg-la-belle-le-parfum-main.jpg",
    "gender": "nu",
    "brandSlug": "jpg",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Vani",
      "Giá tốt",
      "Buổi tối"
    ]
  },
  {
    "id": "jpg-le-beau-le-parfum",
    "name": "Le Beau Le Parfum",
    "brand": "JEAN PAUL GAULTIER",
    "subName": "Le Parfum (Intense)",
    "image": "/images/products/101-jpg-le-beau-le-parfum-main.jpg",
    "gender": "nam",
    "brandSlug": "jean-paul-gaultier",
    "isPublished": true,
    "tags": [
      "Nam",
      "Đi chơi",
      "Buổi tối",
      "Cao cấp"
    ]
  },
  {
    "id": "jpg-le-male-edt",
    "name": "Le Male EDT",
    "brand": "JEAN PAUL GAULTIER",
    "subName": "EDT",
    "image": "/images/products/102-jpg-le-male-edt-main.jpg",
    "gender": "nam",
    "brandSlug": "jean-paul-gaultier",
    "isPublished": true,
    "tags": [
      "Nam",
      "Kinh điển",
      "Hẹn hò",
      "Barbershop"
    ]
  },
  {
    "id": "jpg-le-male-elixir",
    "name": "Le Male Elixir Parfum",
    "brand": "JEAN PAUL GAULTIER",
    "subName": "Elixir Parfum",
    "image": "/images/products/103-jpg-le-male-elixir-main.jpg",
    "gender": "nam",
    "brandSlug": "jean-paul-gaultier",
    "isPublished": true,
    "tags": [
      "Nam",
      "Date night",
      "Compliment beast",
      "Giá tốt"
    ]
  },
  {
    "id": "jpg-le-male-le-parfum",
    "name": "Le Male Le Parfum",
    "brand": "JEAN PAUL GAULTIER",
    "subName": "Le Parfum",
    "image": "/images/products/104-jpg-le-male-le-parfum-main.jpg",
    "gender": "nam",
    "brandSlug": "jean-paul-gaultier",
    "isPublished": true,
    "tags": [
      "Nam",
      "Hẹn hò",
      "Thu đông",
      "Quyến rũ"
    ]
  },
  {
    "id": "jpg-ultra-male",
    "name": "Ultra Male",
    "brand": "JEAN PAUL GAULTIER",
    "subName": "EDT Intense",
    "image": "/images/products/105-jpg-ultra-male-main.jpg",
    "gender": "nam",
    "brandSlug": "jean-paul-gaultier",
    "isPublished": true,
    "tags": [
      "Nam",
      "Buổi tối",
      "Trẻ trung",
      "Cao cấp"
    ]
  },
  {
    "id": "khamrah",
    "name": "Khamrah EDP",
    "brand": "LATTAFA",
    "subName": "EDP",
    "image": "/images/products/lattafa-khamrah-main.jpg",
    "gender": "unisex",
    "brandSlug": "lattafa",
    "isPublished": true,
    "tags": [
      "Gourmand",
      "Unisex",
      "Thu đông",
      "Giá mềm"
    ]
  },
  {
    "id": "l-homme-ideal-eau-de-parfum",
    "name": "L'Homme Idéal Eau de Parfum",
    "brand": "GUERLAIN",
    "subName": "EDP",
    "image": "/images/products/guerlain-l-homme-ideal-eau-de-parfum-main.jpg",
    "gender": "nam",
    "brandSlug": "guerlain",
    "isPublished": true,
    "tags": [
      "Nam",
      "Lãng mạn",
      "Gentleman",
      "Hẹn hò"
    ]
  },
  {
    "id": "l-interdit-eau-de-parfum",
    "name": "L'Interdit EDP",
    "brand": "GIVENCHY",
    "subName": "EDP",
    "image": "/images/products/givenchy-l-interdit-eau-de-parfum-main.jpg",
    "gender": "nu",
    "brandSlug": "givenchy",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Best seller",
      "Hoa trắng",
      "Đối lập"
    ]
  },
  {
    "id": "l-interdit-eau-de-parfum-rouge",
    "name": "L'Interdit Rouge EDP",
    "brand": "GIVENCHY",
    "subName": "EDP",
    "image": "/images/products/givenchy-l-interdit-eau-de-parfum-rouge-main.jpg",
    "gender": "nu",
    "brandSlug": "givenchy",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Cấm kỵ",
      "Hoa trắng",
      "Buổi tối"
    ]
  },
  {
    "id": "la-nuit-de-lhomme",
    "name": "La Nuit de L'Homme EDT",
    "brand": "YVES SAINT LAURENT",
    "subName": "EDT",
    "image": "/images/products/110-la-nuit-de-lhomme-main.jpg",
    "gender": "nam",
    "brandSlug": "ysl",
    "isPublished": true,
    "tags": [
      "Nam",
      "Hẹn hò",
      "Buổi tối",
      "Huyền thoại"
    ]
  },
  {
    "id": "la-nuit-de-lhomme-bleu-electrique",
    "name": "La Nuit de L'Homme Bleu Électrique EDT",
    "brand": "YVES SAINT LAURENT",
    "subName": "EDT",
    "image": "/images/products/ysl-la-nuit-de-lhomme-bleu-electrique-main.jpg",
    "gender": "nam",
    "brandSlug": "ysl",
    "isPublished": true,
    "tags": [
      "Nam",
      "Electric",
      "Date night",
      "Quanh năm"
    ]
  },
  {
    "id": "la-vie-est-belle",
    "name": "La Vie Est Belle EDP",
    "brand": "LANCÔME",
    "subName": "EDP",
    "image": "/images/products/lancome-la-vie-est-belle-main.jpg",
    "gender": "nu",
    "brandSlug": "lancome",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Best seller",
      "An toàn",
      "Đa dụng"
    ]
  },
  {
    "id": "layton",
    "name": "Layton EDP",
    "brand": "PARFUMS DE MARLY",
    "subName": "EDP",
    "image": "/images/products/parfums-de-marly-layton-main.jpg",
    "gender": "unisex",
    "brandSlug": "parfums-de-marly",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Niche",
      "Best seller",
      "Đa dụng"
    ]
  },
  {
    "id": "le-parfum-elie-saab",
    "name": "Le Parfum",
    "brand": "Elie Saab",
    "subName": "EDP",
    "image": "/images/products/elie-saab-le-parfum-main.jpg",
    "gender": "nu",
    "brandSlug": "elie-saab",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "le-parfum-lolita",
    "name": "Le Parfum",
    "brand": "LOLITA LEMPICKA",
    "subName": "Le Parfum",
    "image": "/images/products/lolita-lempicka-le-parfum-main.jpg",
    "gender": "nu",
    "brandSlug": "lolita-lempicka",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Gothic",
      "Hidden gem",
      "Giá rẻ"
    ]
  },
  {
    "id": "leau-dissey-pour-homme",
    "name": "L'Eau d'Issey Pour Homme EDT",
    "brand": "ISSEY MIYAKE",
    "subName": "EDT",
    "image": "/images/products/issey-miyake-leau-dissey-pour-homme-main.jpg",
    "gender": "nam",
    "brandSlug": "issey-miyake",
    "isPublished": true,
    "tags": [
      "Nam",
      "Mùa hè",
      "Tối giản",
      "Sạch sẽ"
    ]
  },
  {
    "id": "l-heure-bleue-eau-de-parfum",
    "name": "L'Heure Bleue Eau de Parfum",
    "brand": "GUERLAIN",
    "subName": "EDP",
    "image": "/images/products/guerlain-lheure-bleue-edp-main.jpg",
    "gender": "nu",
    "brandSlug": "guerlain",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Kiệt tác",
      "Heritage",
      "Hoàng hôn"
    ]
  },
  {
    "id": "l-heure-bleue-eau-de-toilette",
    "name": "L'Heure Bleue Eau de Toilette",
    "brand": "GUERLAIN",
    "subName": "EDT",
    "image": "/images/products/guerlain-lheure-bleue-edt-main.jpg",
    "gender": "nu",
    "brandSlug": "guerlain",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Kinh điển",
      "Nhẹ nhàng",
      "Ban ngày"
    ]
  },
  {
    "id": "lhomme",
    "name": "L'Homme EDT",
    "brand": "PRADA",
    "subName": "EDT",
    "image": "/images/products/prada-lhomme-main.jpg",
    "gender": "nam",
    "brandSlug": "prada",
    "isPublished": true,
    "tags": [
      "Nam",
      "Văn phòng",
      "Lịch sự",
      "Cao cấp"
    ]
  },
  {
    "id": "lhomme-ideal-parfum",
    "name": "L'Homme Idéal Parfum",
    "brand": "GUERLAIN",
    "subName": "Parfum",
    "image": "/images/products/guerlain-lhomme-ideal-parfum-main.jpg",
    "gender": "nam",
    "brandSlug": "guerlain",
    "isPublished": true,
    "tags": [
      "Nam",
      "Trưởng thành",
      "Da thuộc",
      "Parfum"
    ]
  },
  {
    "id": "lhomme-intense",
    "name": "L'Homme Intense",
    "brand": "PRADA",
    "subName": "EDP",
    "image": "/images/products/prada-lhomme-intense-main.jpg",
    "gender": "nam",
    "brandSlug": "prada",
    "isPublished": true,
    "tags": [
      "Nam",
      "Tinh tế",
      "Iris",
      "Buổi tối"
    ]
  },
  {
    "id": "libre-edp",
    "name": "Libre EDP",
    "brand": "YVES SAINT LAURENT",
    "subName": "EDP",
    "image": "/images/products/ysl-libre-edp-main.jpg",
    "gender": "nu",
    "brandSlug": "ysl",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Phá cách",
      "Tự tin",
      "Unisex"
    ]
  },
  {
    "id": "libre-intense",
    "name": "Libre Intense",
    "brand": "YVES SAINT LAURENT",
    "subName": "EDP",
    "image": "/images/products/ysl-libre-intense-main.jpg",
    "gender": "nu",
    "brandSlug": "ysl",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Tối",
      "Vani",
      "Thu đông"
    ]
  },
  {
    "id": "libre-le-parfum",
    "name": "Libre Le Parfum",
    "brand": "YVES SAINT LAURENT",
    "subName": "Parfum",
    "image": "/images/products/ysl-libre-le-parfum-main.jpg",
    "gender": "nu",
    "brandSlug": "ysl",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Statement",
      "Vani",
      "Mùa đông"
    ]
  },
  {
    "id": "light-blue-intense-homme",
    "name": "Light Blue Eau Intense",
    "brand": "Dolce & Gabbana",
    "subName": "EDP",
    "image": "/images/products/dg-light-blue-intense-homme-main.jpg",
    "gender": "nam",
    "brandSlug": "dolce-gabbana",
    "isPublished": true,
    "tags": [
      "Mùa hè",
      "Phóng khoáng",
      "Thể thao",
      "Đi biển"
    ]
  },
  {
    "id": "light-blue-pour-femme",
    "name": "Light Blue Pour Femme EDT",
    "brand": "Dolce & Gabbana",
    "subName": "EDT",
    "image": "/images/products/dolce-gabbana-light-blue-pour-femme-main.jpg",
    "gender": "nu",
    "brandSlug": "dolce-gabbana",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "limmensite",
    "name": "L'Immensité EDP",
    "brand": "LOUIS VUITTON",
    "subName": "EDP",
    "image": "/images/products/louis-vuitton-limmensite-main.jpg",
    "gender": "nam",
    "brandSlug": "louis-vuitton",
    "isPublished": true,
    "tags": [
      "Nam",
      "Ultra-luxury",
      "Đa dụng",
      "Tươi mát"
    ]
  },
  {
    "id": "linstant-de-guerlain-femme",
    "name": "L'Instant de Guerlain EDP",
    "brand": "GUERLAIN",
    "subName": "EDP",
    "image": "/images/products/guerlain-linstant-de-guerlain-femme-main.jpg",
    "gender": "nu",
    "brandSlug": "guerlain",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Comfort",
      "Mật ong",
      "Quanh năm"
    ]
  },
  {
    "id": "linstant-homme-edp",
    "name": "L'Instant de Guerlain Pour Homme EDP",
    "brand": "GUERLAIN",
    "subName": "EDP",
    "image": "/images/products/linstant-de-guerlain-pour-homme-main.jpg",
    "gender": "nam",
    "brandSlug": "guerlain",
    "isPublished": true,
    "tags": [
      "Nam",
      "Hidden gem",
      "Cacao",
      "Thu đông"
    ]
  },
  {
    "id": "lira",
    "name": "Lira EDP",
    "brand": "XERJOFF",
    "subName": "EDP",
    "image": "/images/products/xerjoff-lira-main.jpg",
    "gender": "nu",
    "brandSlug": "xerjoff",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Gourmand",
      "Niche",
      "Gây nghiện"
    ]
  },
  {
    "id": "lost-cherry",
    "name": "Lost Cherry EDP",
    "brand": "TOM FORD",
    "subName": "EDP",
    "image": "/images/products/tom-ford-lost-cherry-main.jpg",
    "gender": "unisex",
    "brandSlug": "tom-ford",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Gây nghiện",
      "Cherry",
      "Sang trọng"
    ]
  },
  {
    "id": "love-dont-be-shy",
    "name": "Love, don't be shy EDP",
    "brand": "KILIAN",
    "subName": "EDP",
    "image": "/images/products/kilian-love-dont-be-shy-main.jpg",
    "gender": "nu",
    "brandSlug": "kilian",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Niche",
      "Ngọt ngào",
      "Intimate"
    ]
  },
  {
    "id": "luna-rossa-black",
    "name": "Luna Rossa Black EDP",
    "brand": "PRADA",
    "subName": "EDP",
    "image": "/images/products/prada-luna-rossa-black-main.jpg",
    "gender": "nam",
    "brandSlug": "prada",
    "isPublished": true,
    "tags": [
      "Nam",
      "Ấm",
      "Gỗ",
      "Thu đông"
    ]
  },
  {
    "id": "luna-rossa-carbon",
    "name": "Luna Rossa Carbon EDT",
    "brand": "PRADA",
    "subName": "EDT",
    "image": "/images/products/prada-luna-rossa-carbon-main.jpg",
    "gender": "nam",
    "brandSlug": "prada",
    "isPublished": true,
    "tags": [
      "Nam",
      "Office",
      "An toàn",
      "Hằng ngày"
    ]
  },
  {
    "id": "man-in-black",
    "name": "Man In Black EDP",
    "brand": "BVLGARI",
    "subName": "EDP",
    "image": "/images/products/bvlgari-man-in-black-main.jpg",
    "gender": "nam",
    "brandSlug": "bvlgari",
    "isPublished": true,
    "tags": [
      "Nam",
      "Buổi tối",
      "Trưởng thành",
      "Gia vị"
    ]
  },
  {
    "id": "midnight-poison",
    "name": "Midnight Poison EDP",
    "brand": "DIOR",
    "subName": "EDP",
    "image": "/images/products/dior-midnight-poison-main.jpg",
    "gender": "nu",
    "brandSlug": "dior",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Discontinued",
      "Cult classic",
      "Buổi tối"
    ]
  },
  {
    "id": "miss-dior-blooming-bouquet",
    "name": "Miss Dior",
    "brand": "DIOR",
    "subName": "EDT",
    "image": "/images/products/137-miss-dior-blooming-bouquet-main.jpg",
    "gender": "nu",
    "brandSlug": "dior",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Nhẹ nhàng",
      "Ban ngày",
      "Hoa"
    ]
  },
  {
    "id": "miss-dior-cherie",
    "name": "Miss Dior Chérie EDP",
    "brand": "DIOR",
    "subName": "EDP",
    "image": "/images/products/dior-miss-dior-cherie-main.jpg",
    "gender": "nu",
    "brandSlug": "dior",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Discontinued",
      "Gourmand",
      "Collector"
    ]
  },
  {
    "id": "mitsouko-edp",
    "name": "Mitsouko EDP",
    "brand": "GUERLAIN",
    "subName": "EDP",
    "image": "/images/products/mitsouko-main.jpg",
    "gender": "nu",
    "brandSlug": "guerlain",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Kiệt tác",
      "Chypre",
      "Nghệ thuật"
    ]
  },
  {
    "id": "mon-guerlain",
    "name": "Mon Guerlain EDP",
    "brand": "GUERLAIN",
    "subName": "EDP",
    "image": "/images/products/guerlain-mon-guerlain-main.jpg",
    "gender": "nu",
    "brandSlug": "guerlain",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Thanh lịch",
      "Vani",
      "Hằng ngày"
    ]
  },
  {
    "id": "mon-guerlain-intense",
    "name": "Mon Guerlain Intense",
    "brand": "GUERLAIN",
    "subName": "EDP Intense",
    "image": "/images/products/guerlain-mon-guerlain-intense-main.jpg",
    "gender": "nu",
    "brandSlug": "guerlain",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Đêm",
      "Vani",
      "Thu đông"
    ]
  },
  {
    "id": "mon-paris-edp",
    "name": "Mon Paris EDP",
    "brand": "YVES SAINT LAURENT",
    "subName": "EDP",
    "image": "/images/products/ysl-mon-paris-edp-main.jpg",
    "gender": "nu",
    "brandSlug": "ysl",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Paris",
      "Yêu",
      "Giá tốt"
    ]
  },
  {
    "id": "musc-noir-rose-for-her",
    "name": "Musc Noir Rose For Her EDP",
    "brand": "NARCISO RODRIGUEZ",
    "subName": "EDP",
    "image": "/images/products/narciso-rodriguez-musc-noir-rose-for-her-main.jpg",
    "gender": "nu",
    "brandSlug": "narciso-rodriguez",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Hoa hồng",
      "Dark",
      "Elegant"
    ]
  },
  {
    "id": "musc-ravageur",
    "name": "Musc Ravageur EDP",
    "brand": "FREDERIC MALLE",
    "subName": "EDP",
    "image": "/images/products/frederic-malle-musc-ravageur-main.jpg",
    "gender": "unisex",
    "brandSlug": "frederic-malle",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Niche",
      "Sex",
      "Legend"
    ]
  },
  {
    "id": "musk-therapy",
    "name": "Musk Therapy EDP",
    "brand": "INITIO",
    "subName": "EDP",
    "image": "/images/products/initio-musk-therapy-main.jpg",
    "gender": "unisex",
    "brandSlug": "initio",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Trị liệu",
      "Comfort",
      "Niche"
    ]
  },
  {
    "id": "no-19-eau-de-toilette",
    "name": "N°19 Eau de Toilette",
    "brand": "CHANEL",
    "subName": "EDT",
    "image": "/images/products/146-no-19-eau-de-toilette-main.jpg",
    "gender": "nu",
    "brandSlug": "chanel",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "naxos",
    "name": "Naxos EDP",
    "brand": "XERJOFF",
    "subName": "EDP",
    "image": "/images/products/xerjoff-naxos-main.jpg",
    "gender": "unisex",
    "brandSlug": "xerjoff",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Niche",
      "Gourmand",
      "Thu đông"
    ]
  },
  {
    "id": "no-19-eau-de-parfum",
    "name": "N°19 Eau de Parfum",
    "brand": "CHANEL",
    "subName": "EDP",
    "image": "/images/products/chanel-no-19-eau-de-parfum-main.jpg",
    "gender": "nu",
    "brandSlug": "chanel",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Elégant",
      "Xanh",
      "Heritage"
    ]
  },
  {
    "id": "no-19-poudre",
    "name": "N°19 Poudré EDP",
    "brand": "CHANEL",
    "subName": "EDP",
    "image": "/images/products/chanel-no-19-poudre-main.jpg",
    "gender": "nu",
    "brandSlug": "chanel",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Phấn",
      "Elégant",
      "Office"
    ]
  },
  {
    "id": "no-5-eau-de-parfum",
    "name": "N°5 Eau de Parfum",
    "brand": "CHANEL",
    "subName": "EDP",
    "image": "/images/products/chanel-no-5-eau-de-parfum-main.jpg",
    "gender": "nu",
    "brandSlug": "chanel",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Kinh điển",
      "Sang trọng",
      "Huyền thoại"
    ]
  },
  {
    "id": "no-5-eau-de-toilette",
    "name": "N°5 Eau de Toilette",
    "brand": "CHANEL",
    "subName": "EDT",
    "image": "/images/products/chanel-no-5-eau-de-toilette-main.jpg",
    "gender": "nu",
    "brandSlug": "chanel",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Kinh điển",
      "Thanh lịch",
      "Hằng ngày"
    ]
  },
  {
    "id": "no-5-parfum",
    "name": "N°5 Parfum",
    "brand": "CHANEL",
    "subName": "Parfum",
    "image": "/images/products/chanel-no-5-parfum-main.jpg",
    "gender": "nu",
    "brandSlug": "chanel",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Legend",
      "Quyền lực",
      "Heritage"
    ]
  },
  {
    "id": "noir-extreme",
    "name": "Noir Extreme",
    "brand": "TOM FORD",
    "subName": "EDP",
    "image": "/images/products/153-noir-extreme-main.jpg",
    "gender": "nam",
    "brandSlug": "tom-ford",
    "isPublished": true,
    "tags": [
      "Tom Ford",
      "Buổi tối",
      "Thu đông",
      "Cao cấp"
    ]
  },
  {
    "id": "nomade-edp",
    "name": "Nomade EDP",
    "brand": "CHLOÉ",
    "subName": "EDP",
    "image": "/images/products/chloe-nomade-edp-main.jpg",
    "gender": "nu",
    "brandSlug": "chloe",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Tự do",
      "Thanh lịch",
      "Hiện đại"
    ]
  },
  {
    "id": "ombre-leather",
    "name": "Ombré Leather EDP",
    "brand": "TOM FORD",
    "subName": "EDP",
    "image": "/images/products/tom-ford-ombre-leather-main.jpg",
    "gender": "unisex",
    "brandSlug": "tom-ford",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Da thuộc",
      "Sang trọng",
      "Thu đông"
    ]
  },
  {
    "id": "ombre-nomade",
    "name": "Ombre Nomade EDP",
    "brand": "LOUIS VUITTON",
    "subName": "EDP",
    "image": "/images/products/louis-vuitton-ombre-nomade-main.jpg",
    "gender": "unisex",
    "brandSlug": "louis-vuitton",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Oud",
      "Luxury",
      "VIP"
    ]
  },
  {
    "id": "opium-edt",
    "name": "Opium EDT",
    "brand": "YVES SAINT LAURENT",
    "subName": "EDT",
    "image": "/images/products/ysl-opium-edt-main.jpg",
    "gender": "nu",
    "brandSlug": "ysl",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Huyền thoại",
      "Oriental",
      "Bold"
    ]
  },
  {
    "id": "organza",
    "name": "Organza EDP",
    "brand": "GIVENCHY",
    "subName": "EDP",
    "image": "/images/products/givenchy-organza-main.jpg",
    "gender": "nu",
    "brandSlug": "givenchy",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Elegant",
      "Giá tốt",
      "Vintage"
    ]
  },
  {
    "id": "oud-satin-mood",
    "name": "Oud Satin Mood EDP",
    "brand": "MAISON FRANCIS KURKDJIAN",
    "subName": "EDP",
    "image": "/images/products/mfk-oud-satin-mood-main.jpg",
    "gender": "unisex",
    "brandSlug": "mfk",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Niche",
      "Opulent",
      "Dịp đặc biệt"
    ]
  },
  {
    "id": "oud-wood",
    "name": "Oud Wood EDP",
    "brand": "TOM FORD",
    "subName": "EDP",
    "image": "/images/products/tom-ford-oud-wood-main.jpg",
    "gender": "unisex",
    "brandSlug": "tom-ford",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Niche",
      "Tối giản",
      "Sang trọng"
    ]
  },
  {
    "id": "philosykos-edp",
    "name": "Philosykos EDP",
    "brand": "Diptyque",
    "image": "/images/products/diptyque-philosykos-edp-main.jpg",
    "gender": "unisex",
    "brandSlug": "diptyque",
    "isPublished": true,
    "tags": [
      "Thơm lâu",
      "Hương tinh chọn"
    ]
  },
  {
    "id": "poison",
    "name": "Poison EDT",
    "brand": "DIOR",
    "subName": "EDT",
    "image": "/images/products/dior-poison-main.jpg",
    "gender": "nu",
    "brandSlug": "dior",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Powerhouse",
      "80s",
      "Monster"
    ]
  },
  {
    "id": "portrait-of-a-lady",
    "name": "Portrait of a Lady EDP",
    "brand": "FREDERIC MALLE",
    "subName": "EDP",
    "image": "/images/products/frederic-malle-portrait-of-a-lady-main.jpg",
    "gender": "nu",
    "brandSlug": "frederic-malle",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Ultra-niche",
      "Masterpiece",
      "Opulent"
    ]
  },
  {
    "id": "pure-musc-for-her",
    "name": "Pure Musc For Her EDP",
    "brand": "NARCISO RODRIGUEZ",
    "subName": "EDP",
    "image": "/images/products/narciso-rodriguez-pure-musc-for-her-main.jpg",
    "gender": "nu",
    "brandSlug": "narciso-rodriguez",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "pure-poison",
    "name": "Pure Poison EDP",
    "brand": "DIOR",
    "subName": "EDP",
    "image": "/images/products/dior-pure-poison-main.jpg",
    "gender": "nu",
    "brandSlug": "dior",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Sạch",
      "Nhài",
      "Hàng ngày"
    ]
  },
  {
    "id": "reflection-45-man",
    "name": "Reflection 45 Man Extrait",
    "brand": "AMOUAGE",
    "subName": "Extrait",
    "image": "/images/products/amouage-reflection-45-man-main.jpg",
    "gender": "nam",
    "brandSlug": "amouage",
    "isPublished": true,
    "tags": [
      "Nam",
      "Holy grail",
      "Niche",
      "Royal"
    ]
  },
  {
    "id": "reflection-man",
    "name": "Reflection Man EDP",
    "brand": "AMOUAGE",
    "subName": "EDP",
    "image": "/images/products/amouage-reflection-man-main.jpg",
    "gender": "nam",
    "brandSlug": "amouage",
    "isPublished": true,
    "tags": [
      "Nam",
      "Niche",
      "Gentleman",
      "Sạch"
    ]
  },
  {
    "id": "rive-gauche",
    "name": "Rive Gauche EDT",
    "brand": "YVES SAINT LAURENT",
    "subName": "EDT",
    "image": "/images/products/ysl-rive-gauche-main.jpg",
    "gender": "nu",
    "brandSlug": "ysl",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Paris",
      "Vintage",
      "Bohemian"
    ]
  },
  {
    "id": "samsara-edp",
    "name": "Samsara EDP",
    "brand": "GUERLAIN",
    "subName": "EDP",
    "image": "/images/products/guerlain-samsara-edp-main.jpg",
    "gender": "nu",
    "brandSlug": "guerlain",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Spiritual",
      "Đàn hương",
      "Heritage"
    ]
  },
  {
    "id": "sauvage-edp",
    "name": "Sauvage EDP",
    "brand": "DIOR",
    "subName": "EDP",
    "image": "/images/products/dior-sauvage-edp-main.jpg",
    "gender": "nam",
    "brandSlug": "dior",
    "isPublished": true,
    "tags": [
      "Nam",
      "Đa dụng",
      "Văn phòng",
      "Cao cấp"
    ]
  },
  {
    "id": "sauvage-elixir",
    "name": "Sauvage Elixir",
    "brand": "DIOR",
    "subName": "Parfum Elixir",
    "image": "/images/products/171-sauvage-elixir-main.jpg",
    "gender": "nam",
    "brandSlug": "dior",
    "isPublished": true,
    "tags": [
      "Hẹn hò",
      "Thu đông",
      "Đi chơi tối",
      "Nước hoa mạnh"
    ]
  },
  {
    "id": "sedley",
    "name": "Sedley EDP",
    "brand": "PARFUMS DE MARLY",
    "subName": "EDP",
    "image": "/images/products/parfums-de-marly-sedley-main.jpg",
    "gender": "unisex",
    "brandSlug": "parfums-de-marly",
    "isPublished": true,
    "tags": [
      "Nam",
      "Niche",
      "Tươi mát",
      "Đa dụng"
    ]
  },
  {
    "id": "shalimar-eau-de-parfum",
    "name": "Shalimar Eau de Parfum",
    "brand": "GUERLAIN",
    "subName": "EDP",
    "image": "/images/products/guerlain-shalimar-edp-main.jpg",
    "gender": "nu",
    "brandSlug": "guerlain",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Huyền thoại",
      "Oriental",
      "Kinh điển"
    ]
  },
  {
    "id": "shalimar-lessence",
    "name": "Shalimar L'Essence EDP",
    "brand": "GUERLAIN",
    "subName": "L'Essence",
    "image": "/images/products/guerlain-shalimar-lessence-main.jpg",
    "gender": "nu",
    "brandSlug": "guerlain",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Heritage",
      "Modern",
      "Hoa"
    ]
  },
  {
    "id": "shalimar-parfum",
    "name": "Shalimar Parfum",
    "brand": "GUERLAIN",
    "subName": "Parfum Extrait",
    "image": "/images/products/guerlain-shalimar-parfum-main.jpg",
    "gender": "nu",
    "brandSlug": "guerlain",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Legend",
      "Kiệt tác",
      "Parfum"
    ]
  },
  {
    "id": "side-effect",
    "name": "Side Effect EDP",
    "brand": "INITIO",
    "subName": "EDP",
    "image": "/images/products/initio-side-effect-main.jpg",
    "gender": "unisex",
    "brandSlug": "initio",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Niche",
      "Addictive",
      "Thu đông"
    ]
  },
  {
    "id": "spicebomb-extreme",
    "name": "Spicebomb Extreme",
    "brand": "VIKTOR & ROLF",
    "subName": "EDP",
    "image": "/images/products/viktor-rolf-spicebomb-extreme-main.jpg",
    "gender": "nam",
    "brandSlug": "viktor-rolf",
    "isPublished": true,
    "tags": [
      "Nam",
      "Gia vị",
      "Mùa đông",
      "Sexy"
    ]
  },
  {
    "id": "stronger-with-you-intensely",
    "name": "Stronger With You Intensely",
    "brand": "GIORGIO ARMANI",
    "subName": "EDP",
    "image": "/images/products/armani-stronger-with-you-intensely-main.jpg",
    "gender": "nam",
    "brandSlug": "armani",
    "isPublished": true,
    "tags": [
      "Hẹn hò",
      "Thu đông",
      "Ngọt ấm",
      "Dễ được khen"
    ]
  },
  {
    "id": "terre-dhermes-eau-givree",
    "name": "Terre d'Hermès Eau Givrée EDP",
    "brand": "HERMÈS",
    "subName": "Eau Givrée",
    "image": "/images/products/hermes-terre-dhermes-eau-givree-main.jpg",
    "gender": "nam",
    "brandSlug": "hermes",
    "isPublished": true,
    "tags": [
      "Nam",
      "Tươi",
      "Mùa hè",
      "Hermès"
    ]
  },
  {
    "id": "terre-dhermes-eau-de-toilette",
    "name": "Terre d'Hermès Eau de Toilette",
    "brand": "HERMÈS",
    "subName": "EDT",
    "image": "/images/products/terre-dhermes-edt-main.jpg",
    "gender": "nam",
    "brandSlug": "hermes",
    "isPublished": true,
    "tags": [
      "Nam",
      "Trưởng thành",
      "Lịch sự",
      "Cao cấp"
    ]
  },
  {
    "id": "terre-dhermes-parfum",
    "name": "Terre d'Hermès Parfum",
    "brand": "HERMÈS",
    "subName": "Parfum",
    "image": "/images/products/hermes-terre-dhermes-parfum-main.jpg",
    "gender": "nam",
    "brandSlug": "hermes",
    "isPublished": true,
    "tags": [
      "Nam",
      "Tinh tế",
      "Sang trọng",
      "Đa dụng"
    ]
  },
  {
    "id": "the-most-wanted-parfum",
    "name": "The Most Wanted Parfum",
    "brand": "AZZARO",
    "subName": "Parfum",
    "image": "/images/products/azzaro-the-most-wanted-parfum-main.jpg",
    "gender": "nam",
    "brandSlug": "azzaro",
    "isPublished": true,
    "tags": [
      "Nam",
      "Buổi tối",
      "Hẹn hò",
      "Giá tốt"
    ]
  },
  {
    "id": "the-one-edp",
    "name": "The One EDP",
    "brand": "Dolce & Gabbana",
    "subName": "EDP",
    "image": "/images/products/dolce-gabbana-the-one-edp-main.jpg",
    "gender": "nu",
    "brandSlug": "dolce-gabbana",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "the-one-for-men-eau-de-parfum",
    "name": "The One for Men EDP",
    "brand": "Dolce & Gabbana",
    "subName": "EDP",
    "image": "/images/products/dg-the-one-for-men-eau-de-parfum-main.jpg",
    "gender": "nam",
    "brandSlug": "dolce-gabbana",
    "isPublished": true,
    "tags": [
      "Nam",
      "Designer"
    ]
  },
  {
    "id": "this-is-her",
    "name": "This Is Her! EDP",
    "brand": "ZADIG & VOLTAIRE",
    "subName": "EDP",
    "image": "/images/products/zadig-voltaire-this-is-her-main.jpg",
    "gender": "nu",
    "brandSlug": "zadig-voltaire",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Rock chic",
      "Cozy",
      "Giá tốt"
    ]
  },
  {
    "id": "tobacco-vanille",
    "name": "Tobacco Vanille EDP",
    "brand": "TOM FORD",
    "subName": "EDP",
    "image": "/images/products/tom-ford-tobacco-vanille-main.jpg",
    "gender": "unisex",
    "brandSlug": "tom-ford",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Niche",
      "Đỉnh cao",
      "Mùa đông"
    ]
  },
  {
    "id": "tresor",
    "name": "Trésor EDP",
    "brand": "LANCÔME",
    "subName": "EDP",
    "image": "/images/products/lancome-tresor-main.jpg",
    "gender": "nu",
    "brandSlug": "lancome",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Kinh điển",
      "Lãng mạn",
      "Oriental"
    ]
  },
  {
    "id": "tuscan-leather",
    "name": "Tuscan Leather EDP",
    "brand": "TOM FORD",
    "subName": "EDP",
    "image": "/images/products/tom-ford-tuscan-leather-main.jpg",
    "gender": "unisex",
    "brandSlug": "tom-ford",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Da thuộc",
      "Huyền thoại",
      "Cá tính"
    ]
  },
  {
    "id": "tuxedo",
    "name": "Tuxedo",
    "brand": "YVES SAINT LAURENT",
    "subName": "EDP",
    "image": "/images/products/ysl-tuxedo-main.jpg",
    "gender": "unisex",
    "brandSlug": "ysl",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Niche",
      "Le Smoking",
      "Sharp"
    ]
  },
  {
    "id": "un-jardin-sur-le-nil",
    "name": "Un Jardin sur le Nil EDT",
    "brand": "HERMÈS",
    "subName": "EDT",
    "image": "/images/products/hermes-un-jardin-sur-le-nil-main.jpg",
    "gender": "unisex",
    "brandSlug": "hermes",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Mùa hè",
      "Du lịch",
      "Unique"
    ]
  },
  {
    "id": "uomo-born-in-roma-intense",
    "name": "Uomo Born In Roma Intense",
    "brand": "VALENTINO",
    "subName": "EDP",
    "image": "/images/products/valentino-uomo-born-in-roma-intense-main.jpg",
    "gender": "nam",
    "brandSlug": "valentino",
    "isPublished": true,
    "tags": [
      "Nam",
      "Hẹn hò",
      "Buổi tối",
      "Hiện đại"
    ]
  },
  {
    "id": "vanilla",
    "name": "Vanilla Sex EDP",
    "brand": "TOM FORD",
    "subName": "EDP",
    "image": "/images/products/192-vanilla-main.jpg",
    "gender": "unisex",
    "brandSlug": "tom-ford",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Sex",
      "Boozy",
      "Private Blend"
    ]
  },
  {
    "id": "vanilla-28",
    "name": "Vanilla 28 EDP",
    "brand": "KAYALI",
    "subName": "EDP",
    "image": "/images/products/kayali-vanilla-28-main.jpg",
    "gender": "unisex",
    "brandSlug": "kayali",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Vani",
      "Phối mùi",
      "Hằng ngày"
    ]
  },
  {
    "id": "vetiver",
    "name": "Vetiver EDT",
    "brand": "GUERLAIN",
    "subName": "EDT",
    "image": "/images/products/guerlain-vetiver-main.jpg",
    "gender": "nam",
    "brandSlug": "guerlain",
    "isPublished": true,
    "tags": [
      "Nam",
      "Pioneer",
      "Blueprint",
      "Gentleman"
    ]
  },
  {
    "id": "vibrato",
    "name": "Vibrato EDP",
    "brand": "SOSPIRO",
    "subName": "EDP",
    "image": "/images/products/sospiro-vibrato-main.jpg",
    "gender": "unisex",
    "brandSlug": "sospiro",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Niche",
      "Thanh lịch",
      "Đa dụng"
    ]
  },
  {
    "id": "libre-leau-nue",
    "name": "Libre L'Eau Nue EDT",
    "brand": "YVES SAINT LAURENT",
    "subName": "EDT",
    "image": "/images/products/ysl-libre-leau-nue-main.jpg",
    "gender": "nu",
    "brandSlug": "ysl",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Sạch sẽ",
      "Văn phòng",
      "Mùa hè"
    ]
  },
  {
    "id": "versace-eros-edt",
    "name": "Eros EDT",
    "brand": "VERSACE",
    "subName": "EDT",
    "image": "/images/products/197-versace-eros-edt-main.jpg",
    "gender": "nam",
    "brandSlug": "versace",
    "isPublished": true,
    "tags": [
      "Nam",
      "Trẻ trung",
      "Đi chơi",
      "Beast mode"
    ]
  },
  {
    "id": "gris-charnel-extrait",
    "name": "Gris Charnel Extrait",
    "brand": "BDK PARFUMS",
    "subName": "Extrait",
    "image": "/images/products/bdk-gris-charnel-extrait-main.webp",
    "gender": "unisex",
    "brandSlug": "bdk-parfums",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Niche",
      "Gợi cảm",
      "Skin scent"
    ]
  },
  {
    "id": "armaf-effects-of-uniq",
    "name": "Effects of Uniq",
    "brand": "ARMAF",
    "subName": "EDP",
    "image": "/images/products/199-armaf-effects-of-uniq-main.jpg",
    "gender": "unisex",
    "brandSlug": "armaf",
    "isPublished": true,
    "tags": [
      "Tươi mát",
      "Nam tính",
      "Trái cây",
      "Đa dụng",
      "Đi dạo",
      "Thể thao",
      "Mùa hè",
      "Mùa xuân"
    ]
  },
  {
    "id": "black-phantom-by-kilian",
    "name": "Black Phantom",
    "brand": "Kilian",
    "subName": "Memento Mori",
    "image": "/images/products/200-black-phantom-by-kilian-main.jpg",
    "gender": "unisex",
    "brandSlug": "kilian",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "blanche-bete",
    "name": "Blanche Bête",
    "brand": "Liquides Imaginaires",
    "subName": "EDP",
    "image": "/images/products/201-blanche-bete-main.jpg",
    "gender": "unisex",
    "brandSlug": "liquides-imaginaires",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "byredo-blanche-edp",
    "name": "Blanche EDP",
    "brand": "Byredo",
    "subName": "EDP",
    "image": "/images/products/202-byredo-blanche-edp-main.jpg",
    "gender": "nu",
    "brandSlug": "byredo",
    "isPublished": true,
    "tags": [
      "Thơm lâu",
      "Tôn lên vẻ đẹp",
      "Theo dòng xu hướng"
    ]
  },
  {
    "id": "byredo-la-tulipe",
    "name": "La Tulipe",
    "brand": "Byredo",
    "subName": "EDP",
    "image": "/images/products/203-byredo-la-tulipe/nuoc-hoa-byredo-la-tulipe-thuc-te-1.webp",
    "gender": "nu",
    "brandSlug": "byredo",
    "isPublished": true,
    "tags": [
      "Thơm lâu",
      "Tôn lên vẻ đẹp",
      "Theo dòng xu hướng"
    ]
  },
  {
    "id": "chloe-atelier-des-fleurs-rosa-damascena",
    "name": "Rosa Damascena",
    "brand": "Chloé",
    "subName": "EDP",
    "image": "/images/products/204-chloe-atelier-des-fleurs-rosa-damascena-main.jpg",
    "gender": "nu",
    "brandSlug": "chloe",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "chloe-atelier-des-fleurs-santalum",
    "name": "Santalum",
    "brand": "Chloé",
    "subName": "EDP",
    "image": "/images/products/205-chloe-atelier-des-fleurs-santalum-main.jpg",
    "gender": "nu",
    "brandSlug": "chloe",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "creed-aventus",
    "name": "Aventus",
    "brand": "Creed",
    "subName": "EDP",
    "image": "/images/products/206-creed-aventus-main.jpg",
    "gender": "nam",
    "brandSlug": "creed",
    "isPublished": true,
    "tags": [
      "Nam",
      "Designer"
    ]
  },
  {
    "id": "creed-love-in-white",
    "name": "Love In White",
    "brand": "Creed",
    "subName": "EDP",
    "image": "/images/products/207-creed-love-in-white-main.jpg",
    "gender": "nu",
    "brandSlug": "creed",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "creed-silver-moutain-water",
    "name": "Silver Mountain Water",
    "brand": "Creed",
    "subName": "EDP",
    "image": "/images/products/208-creed-silver-moutain-water/nuoc-hoa-creed-silver-moutain-water-thuc-te-1.webp",
    "gender": "unisex",
    "brandSlug": "creed",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "deliah-blanc",
    "name": "Deliah Blanc",
    "brand": "Maison Alhambra",
    "subName": "Delilah Pour Femme EDP",
    "image": "/images/products/209-deliah-blanc/nuoc-hoa-deliah-blanc-thuc-te-1.webp",
    "gender": "nu",
    "brandSlug": "maison-alhambra",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "diptyque-doson-edp",
    "name": "Doson EDP",
    "brand": "Diptyque",
    "subName": "Eau de Parfum",
    "image": "/images/products/210-diptyque-doson-edp/nuoc-hoa-diptyque-doson-edp-thuc-te-1.webp",
    "gender": "unisex",
    "brandSlug": "diptyque",
    "isPublished": true,
    "tags": [
      "Unisex",
      "Hoa huệ",
      "Hoài niệm",
      "Việt Nam"
    ]
  },
  {
    "id": "diptyque-fleur-de-peau",
    "name": "Fleur de Peau",
    "brand": "Diptyque",
    "image": "/images/products/211-diptyque-fleur-de-peau/nuoc-hoa-diptyque-fleur-de-peau-thuc-te-1.webp",
    "gender": "unisex",
    "brandSlug": "diptyque",
    "isPublished": true,
    "tags": [
      "Thơm lâu",
      "Hương tinh chọn"
    ]
  },
  {
    "id": "dubai-musk",
    "name": "Dubai Musk",
    "brand": "Arabian Oud",
    "image": "/images/products/212-dubai-musk/nuoc-hoa-dubai-musk-thuc-te-1.webp",
    "gender": "nam",
    "brandSlug": "arabian-oud",
    "isPublished": true,
    "tags": [
      "Thơm lâu",
      "Tôn lên vẻ đẹp",
      "Theo dòng xu hướng"
    ]
  },
  {
    "id": "elizabeth-arden-white-tea-edt",
    "name": "White Tea EDT",
    "brand": "Elizabeth Arden",
    "subName": "EDT",
    "image": "/images/products/213-elizabeth-arden-white-tea-edt/nuoc-hoa-elizabeth-arden-white-tea-edt-thuc-te-1.webp",
    "gender": "nu",
    "brandSlug": "elizabeth-arden",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "ella-k-pluie-sur-ha-long",
    "name": "Pluie Sur Ha Long",
    "brand": "Ella K",
    "subName": "EDP",
    "image": "/images/products/214-ella-k-pluie-sur-ha-long/nuoc-hoa-ella-k-pluie-sur-ha-long-thuc-te-1.webp",
    "gender": "unisex",
    "brandSlug": "ella-k",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "ex-nihilo-blue-talisman",
    "name": "Blue Talisman",
    "brand": "Ex Nihilo",
    "subName": "EDP",
    "image": "/images/products/215-ex-nihilo-blue-talisman-main.jpg",
    "gender": "unisex",
    "brandSlug": "ex-nihilo",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "giorgio-armani-acqua-di-gio-profondo",
    "name": "Acqua di Gio Profondo",
    "brand": "Giorgio Armani",
    "subName": "EDP (2024)",
    "image": "/images/products/giorgio-armani-007-acqua-di-gio-profondo-main.jpg",
    "gender": "nam",
    "brandSlug": "giorgio-armani",
    "isPublished": true,
    "tags": [
      "Nam",
      "Designer"
    ]
  },
  {
    "id": "gritti-tutu-extrait",
    "name": "TuTu Extrait de Parfum",
    "brand": "Gritti",
    "subName": "Extrait",
    "image": "/images/products/217-gritti-tutu-extrait-main.jpg",
    "gender": "nu",
    "brandSlug": "gritti",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "gucci-flora-gorgeous-gardenia",
    "name": "Flora Gorgeous Gardenia",
    "brand": "Gucci",
    "subName": "EDP",
    "image": "/images/products/218-gucci-flora-gorgeous-gardenia-main.jpg",
    "gender": "nu",
    "brandSlug": "gucci",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "guerlain-aqua-allegoria-forte-rosa-palissandro-edp",
    "name": "Aqua Allegoria Forte Rosa Palissandro EDP",
    "brand": "Guerlain",
    "subName": "Forte EDP",
    "image": "/images/products/219-guerlain-aqua-allegoria-forte-rosa-palissandro-edp-main.jpg",
    "gender": "unisex",
    "brandSlug": "guerlain",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "guerlain-aqua-allegoria-nerolia-vetiver-edp",
    "name": "Aqua Allegoria Forte Nerolia Vetiver",
    "brand": "Guerlain",
    "subName": "Forte EDP",
    "image": "/images/products/220-guerlain-aqua-allegoria-nerolia-vetiver-edp-main.jpg",
    "gender": "unisex",
    "brandSlug": "guerlain",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "guerlain-aqua-allegoria-nettare-di-sole",
    "name": "Aqua Allegoria Nettare Di Sole",
    "brand": "Guerlain",
    "subName": "EDT",
    "image": "/images/products/221-guerlain-aqua-allegoria-nettare-di-sole-main.jpg",
    "gender": "nu",
    "brandSlug": "guerlain",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "hermes-bleue",
    "name": "Eau des Merveilles Bleue",
    "brand": "Hermès",
    "subName": "EDT",
    "image": "/images/products/222-hermes-bleue-main.jpg",
    "gender": "nu",
    "brandSlug": "hermes",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "hermes-twilly-eau-poivree",
    "name": "Twilly d'Hermès Eau Poivrée",
    "brand": "Hermès",
    "subName": "Eau Poivrée EDP",
    "image": "/images/products/223-hermes-twilly-eau-poivree-main.jpg",
    "gender": "nu",
    "brandSlug": "hermes",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "jimmy-choo-i-want-choo",
    "name": "I Want Choo EDP",
    "brand": "Jimmy Choo",
    "subName": "EDP",
    "image": "/images/products/224-jimmy-choo-i-want-choo-main.jpg",
    "gender": "nu",
    "brandSlug": "jimmy-choo",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "kilan-good-girl-gone-bad",
    "name": "Good Girl Gone Bad",
    "brand": "Kilian",
    "subName": "EDP",
    "image": "/images/products/225-kilan-good-girl-gone-bad-main.jpg",
    "gender": "nu",
    "brandSlug": "kilian",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "kilian-rolling-in-love",
    "name": "Rolling In Love",
    "brand": "Kilian",
    "subName": "EDP",
    "image": "/images/products/226-kilian-rolling-in-love-main.jpg",
    "gender": "unisex",
    "brandSlug": "kilian",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "lorchestre-piano-santal",
    "name": "Piano Santal",
    "brand": "L'Orchestre",
    "subName": "EDP",
    "image": "/images/products/227-lorchestre-piano-santal-main.jpg",
    "gender": "unisex",
    "brandSlug": "lorchestre",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "lalique-encre-noir-edt",
    "name": "Encre Noire EDT",
    "brand": "Lalique",
    "subName": "EDT",
    "image": "/images/products/228-lalique-encre-noir-edt-main.jpg",
    "gender": "nam",
    "brandSlug": "lalique",
    "isPublished": true,
    "tags": [
      "Nam",
      "Designer"
    ]
  },
  {
    "id": "le-labo-santal",
    "name": "Santal 33",
    "brand": "Le Labo",
    "subName": "EDP",
    "image": "/images/products/229-le-labo-santal-main.jpg",
    "gender": "unisex",
    "brandSlug": "le-labo",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "mcm-zen-elephant",
    "name": "Eau de Parfum",
    "brand": "MCM",
    "subName": "Eau de Parfum",
    "image": "/images/products/230-mcm-zen-elephant-main.jpg",
    "gender": "unisex",
    "brandSlug": "mcm",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "maison-francis-kurkdjian-kurky",
    "name": "Aqua Universalis",
    "brand": "Maison Francis Kurkdjian",
    "subName": "Aqua Universalis EDT",
    "image": "/images/products/231-maison-francis-kurkdjian-kurky-main.jpg",
    "gender": "unisex",
    "brandSlug": "maison-francis-kurkdjian",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "mancera-sicily",
    "name": "Sicily EDP",
    "brand": "Mancera",
    "subName": "EDP",
    "image": "/images/products/232-mancera-sicily-main.jpg",
    "gender": "unisex",
    "brandSlug": "mancera",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "mancera-cedrat-boise",
    "name": "Cedrat Boise",
    "brand": "Mancera",
    "subName": "EDP",
    "image": "/images/products/233-mancera-cedrat-boise-main.jpg",
    "gender": "unisex",
    "brandSlug": "mancera",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "mfk-baccarat-54-edp",
    "name": "Baccarat Rouge 540 EDP",
    "brand": "Maison Francis Kurkdjian",
    "subName": "Baccarat Rouge 540 EDP",
    "image": "/images/products/baccarat-rouge-540-main.jpg",
    "gender": "unisex",
    "brandSlug": "maison-francis-kurkdjian",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "mfk-a-la-rose",
    "name": "À la rose",
    "brand": "Maison Francis Kurkdjian",
    "subName": "EDP",
    "image": "/images/products/235-mfk-a-la-rose/nuoc-hoa-mfk-a-la-rose-thuc-te-1.webp",
    "gender": "nu",
    "brandSlug": "maison-francis-kurkdjian",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "miss-dior-essence-new-2025",
    "name": "Miss Dior Essence Parfum",
    "brand": "Dior",
    "subName": "Esprit de Parfum",
    "image": "/images/products/236-miss-dior-essence-new-2025-main.jpg",
    "gender": "nu",
    "brandSlug": "dior",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "miss-dior-parfum-new-2024",
    "name": "Miss Dior Parfum 2024",
    "brand": "Dior",
    "subName": "Parfum",
    "image": "/images/products/237-miss-dior-parfum-new-2024/nuoc-hoa-miss-dior-parfum-new-2024-thuc-te-1.webp",
    "gender": "nu",
    "brandSlug": "dior",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "moschino-toy-boy",
    "name": "Toy Boy",
    "brand": "Moschino",
    "subName": "Eau de Parfum",
    "image": "/images/products/238-moschino-toy-boy-main.jpg",
    "gender": "nam",
    "brandSlug": "moschino",
    "isPublished": true,
    "tags": [
      "Nam",
      "Designer"
    ]
  },
  {
    "id": "musk-kashmir",
    "name": "Musk Kashmir",
    "brand": "Attar Collection",
    "subName": "EDP",
    "image": "/images/products/239-musk-kashmir-main.jpg",
    "gender": "unisex",
    "brandSlug": "attar-collection",
    "isPublished": true,
    "tags": [
      "Thơm lâu",
      "Hương tinh chọn"
    ]
  },
  {
    "id": "my-way-edp",
    "name": "My Way EDP",
    "brand": "Giorgio Armani",
    "subName": "EDP",
    "image": "/images/products/240-my-way-edp-main.jpg",
    "gender": "nu",
    "brandSlug": "giorgio-armani",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "nar-cristal-edp",
    "name": "Cristal EDP",
    "brand": "Narciso Rodriguez",
    "subName": "EDP",
    "image": "/images/products/241-nar-cristal-edp-main.jpg",
    "gender": "nu",
    "brandSlug": "narciso-rodriguez",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "nar-poudree",
    "name": "Poudrée",
    "brand": "Narciso Rodriguez",
    "subName": "EDP",
    "image": "/images/products/242-nar-poudree-main.jpg",
    "gender": "nu",
    "brandSlug": "narciso-rodriguez",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "narciso-ambree",
    "name": "Ambrée",
    "brand": "Narciso Rodriguez",
    "subName": "EDP",
    "image": "/images/products/243-narciso-ambree/nuoc-hoa-narciso-ambree-thuc-te-1.webp",
    "gender": "nu",
    "brandSlug": "narciso-rodriguez",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "narciso-for-her-edp-intense-new-2025",
    "name": "For Her EDP Intense",
    "brand": "Narciso Rodriguez",
    "subName": "Musc EDP Intense",
    "image": "/images/products/244-narciso-for-her-edp-intense-new-2025-main.jpg",
    "gender": "nu",
    "brandSlug": "narciso-rodriguez",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "narciso-musc-nude",
    "name": "Musc Nude",
    "brand": "Narciso Rodriguez",
    "subName": "Musc Nude EDP",
    "image": "/images/products/245-narciso-musc-nude-main.jpg",
    "gender": "nu",
    "brandSlug": "narciso-rodriguez",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "narciso-rodriguez-all-of-me-floral",
    "name": "All of Me Floral",
    "brand": "Narciso Rodriguez",
    "subName": "EDP",
    "image": "/images/products/246-narciso-rodriguez-all-of-me-floral-main.jpg",
    "gender": "nu",
    "brandSlug": "narciso-rodriguez",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "narciso-rodriguez-for-her-eau-de-parfum",
    "name": "For Her EDP",
    "brand": "Narciso Rodriguez",
    "subName": "EDP",
    "image": "/images/products/247-narciso-rodriguez-for-her-eau-de-parfum-main.jpg",
    "gender": "nu",
    "brandSlug": "narciso-rodriguez",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "odyssey-limoni",
    "name": "Odyssey Limoni",
    "brand": "Armaf",
    "subName": "EDP",
    "image": "/images/products/248-odyssey-limoni/nuoc-hoa-odyssey-limoni-thuc-te-1.webp",
    "gender": "unisex",
    "brandSlug": "armaf",
    "isPublished": true,
    "tags": [
      "Thơm lâu",
      "Hương tinh chọn"
    ]
  },
  {
    "id": "odyssey-mandarin-sky",
    "name": "Odyssey Mandarin Sky",
    "brand": "Armaf",
    "subName": "EDP",
    "image": "/images/products/249-odyssey-mandarin-sky/nuoc-hoa-odyssey-mandarin-sky-thuc-te-1.webp",
    "gender": "nam",
    "brandSlug": "armaf",
    "isPublished": true,
    "tags": [
      "Thơm lâu",
      "Hương tinh chọn"
    ]
  },
  {
    "id": "oud-forever",
    "name": "Oud Forever",
    "brand": "Lattafa",
    "subName": "Oud For Glory EDP",
    "image": "/images/products/250-oud-forever-main.jpg",
    "gender": "unisex",
    "brandSlug": "lattafa",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "paco-pure-xs",
    "name": "Pure XS",
    "brand": "Paco Rabanne",
    "subName": "EDT",
    "image": "/images/products/251-paco-pure-xs-main.jpg",
    "gender": "nam",
    "brandSlug": "paco-rabanne",
    "isPublished": true,
    "tags": [
      "Nam",
      "Designer"
    ]
  },
  {
    "id": "parfums-de-marly-palatine",
    "name": "Palatine",
    "brand": "Parfums de Marly",
    "subName": "EDP",
    "image": "/images/products/252-parfums-de-marly-palatine-main.jpg",
    "gender": "nu",
    "brandSlug": "parfums-de-marly",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "parfums-de-marly-valaya",
    "name": "Valaya",
    "brand": "Parfums de Marly",
    "subName": "EDP",
    "image": "/images/products/253-parfums-de-marly-valaya-main.jpg",
    "gender": "nu",
    "brandSlug": "parfums-de-marly",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "parfums-de-marly-valaya-exclusif",
    "name": "Valaya Exclusif",
    "brand": "Parfums de Marly",
    "subName": "Exclusif Extrait",
    "image": "/images/products/254-parfums-de-marly-valaya-exclusif-main.jpg",
    "gender": "nu",
    "brandSlug": "parfums-de-marly",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "rj-burlington-1819",
    "name": "Burlington 1819",
    "brand": "Roja Dove",
    "subName": "Extrait de Parfum",
    "image": "/images/products/255-rj-burlington-1819-main.jpg",
    "gender": "unisex",
    "brandSlug": "roja",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "replica-by-the-fireplace",
    "name": "By The Fireplace",
    "brand": "Maison Margiela Replica",
    "subName": "Replica EDT",
    "image": "/images/products/256-replica-by-the-fireplace-main.jpg",
    "gender": "unisex",
    "brandSlug": "maison-margiela",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "replica-lazy-sunday-morning",
    "name": "Lazy Sunday Morning",
    "brand": "Maison Margiela Replica",
    "subName": "Replica EDT",
    "image": "/images/products/257-replica-lazy-sunday-morning-main.jpg",
    "gender": "unisex",
    "brandSlug": "maison-margiela",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "the-noir",
    "name": "Thé Noir 29",
    "brand": "Le Labo",
    "subName": "EDP",
    "image": "/images/products/258-the-noir-main.jpg",
    "gender": "unisex",
    "brandSlug": "le-labo",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "thomas-kosmala-no",
    "name": "No 4 Apres l'Amour",
    "brand": "Thomas Kosmala",
    "subName": "EDP",
    "image": "/images/products/259-thomas-kosmala-no-main.jpg",
    "gender": "unisex",
    "brandSlug": "thomas-kosmala",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "tom-ford-black-orchid",
    "name": "Black Orchid",
    "brand": "Tom Ford",
    "subName": "EDP",
    "image": "/images/products/260-tom-ford-black-orchid-main.jpg",
    "gender": "unisex",
    "brandSlug": "tom-ford",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "versace-bright-crystal",
    "name": "Bright Crystal",
    "brand": "Versace",
    "subName": "EDT",
    "image": "/images/products/261-versace-bright-crystal-main.jpg",
    "gender": "nu",
    "brandSlug": "versace",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "versace-eros-energy-edp",
    "name": "Eros Energy",
    "brand": "Versace",
    "subName": "EDP",
    "image": "/images/products/262-versace-eros-energy-edp-main.jpg",
    "gender": "nam",
    "brandSlug": "versace",
    "isPublished": true,
    "tags": [
      "Nam",
      "Designer"
    ]
  },
  {
    "id": "versace-eros-flame",
    "name": "Eros Flame",
    "brand": "Versace",
    "subName": "EDP",
    "image": "/images/products/263-versace-eros-flame-main.jpg",
    "gender": "nam",
    "brandSlug": "versace",
    "isPublished": true,
    "tags": [
      "Nam",
      "Designer"
    ]
  },
  {
    "id": "versce-pour-homme",
    "name": "Pour Homme",
    "brand": "Versace",
    "subName": "EDT",
    "image": "/images/products/264-versce-pour-homme-main.jpg",
    "gender": "nam",
    "brandSlug": "versace",
    "isPublished": true,
    "tags": [
      "Nam",
      "Designer"
    ]
  },
  {
    "id": "xerjoff-casamorati-mefisto",
    "name": "Casamorati Mefisto",
    "brand": "Xerjoff",
    "subName": "EDP",
    "image": "/images/products/265-xerjoff-casamorati-mefisto-main.jpg",
    "gender": "nam",
    "brandSlug": "xerjoff",
    "isPublished": true,
    "tags": [
      "Nam",
      "Designer"
    ]
  },
  {
    "id": "xerjoff-torino",
    "name": "Torino 21",
    "brand": "Xerjoff",
    "subName": "EDP",
    "image": "/images/products/266-xerjoff-torino-main.jpg",
    "gender": "nam",
    "brandSlug": "xerjoff",
    "isPublished": true,
    "tags": [
      "Nam",
      "Designer"
    ]
  },
  {
    "id": "ysl-black-opium-glitter-edp",
    "name": "Black Opium Glitter",
    "brand": "YSL",
    "subName": "EDP",
    "image": "/images/products/267-ysl-black-opium-glitter-edp-main.jpg",
    "gender": "nu",
    "brandSlug": "yves-saint-laurent",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "ysl-libre-intense-edp",
    "name": "Libre Intense EDP",
    "brand": "YSL",
    "subName": "EDP",
    "image": "/images/products/268-ysl-libre-intense-edp-main.jpg",
    "gender": "nu",
    "brandSlug": "yves-saint-laurent",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  },
  {
    "id": "ysl-y-eau-de-parfum",
    "name": "Y EDP",
    "brand": "YSL",
    "subName": "EDP",
    "image": "/images/products/269-ysl-y-eau-de-parfum-main.jpg",
    "gender": "nam",
    "brandSlug": "yves-saint-laurent",
    "isPublished": true,
    "tags": [
      "Nam",
      "Designer"
    ]
  },
  {
    "id": "rmni-prive-the-yulong",
    "name": "The Yulong",
    "brand": "Armani Prive",
    "subName": "EDT",
    "image": "/images/products/270-rmni-prive-the-yulong/nuoc-hoa-rmni-prive-the-yulong-thuc-te-1.webp",
    "gender": "unisex",
    "brandSlug": "giorgio-armani",
    "isPublished": true,
    "tags": [
      "Thơm lâu",
      "Hương tinh chọn"
    ]
  },
  {
    "id": "ventus-for-her",
    "name": "Aventus For Her",
    "brand": "Creed",
    "subName": "EDP",
    "image": "/images/products/271-ventus-for-her-main.jpg",
    "gender": "nu",
    "brandSlug": "creed",
    "isPublished": true,
    "tags": [
      "Nữ",
      "Designer"
    ]
  }
];
