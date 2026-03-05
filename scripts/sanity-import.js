// scripts/sanity-import.js
// Generates & imports products into Sanity via the Sanity client (write token required)
// Usage: SANITY_TOKEN=<your-token> node scripts/sanity-import.js

const { createClient } = require('@sanity/client');

const TOKEN = process.env.SANITY_TOKEN;
if (!TOKEN) {
    console.error('❌ Missing SANITY_TOKEN. Get it from https://sanity.io/manage → API → Tokens');
    console.error('   Run: $env:SANITY_TOKEN="your-token"; node scripts/sanity-import.js');
    process.exit(1);
}

const client = createClient({
    projectId: 'ww1zzidl',
    dataset: 'production',
    apiVersion: '2024-02-27',
    token: TOKEN,
    useCdn: false,
});

// ─── Brands ──────────────────────────────────────────────────────────────────
const brands = [
    { _id: "brand-dior", name: "DIOR", slug: "dior" },
    { _id: "brand-chanel", name: "CHANEL", slug: "chanel" },
    { _id: "brand-giorgio-armani", name: "GIORGIO ARMANI", slug: "giorgio-armani" },
    { _id: "brand-yves-saint-laurent", name: "YVES SAINT LAURENT", slug: "yves-saint-laurent" },
    { _id: "brand-creed", name: "CREED", slug: "creed" },
    { _id: "brand-maison-francis-kurkdjian", name: "MAISON FRANCIS KURKDJIAN", slug: "maison-francis-kurkdjian" },
    { _id: "brand-tom-ford", name: "TOM FORD", slug: "tom-ford" },
    { _id: "brand-lattafa", name: "LATTAFA", slug: "lattafa" },
];

// ─── Products — 1 per brand, full data ───────────────────────────────────────
const products = [
    {
        _id: "product-sauvage-elixir",
        slug: "sauvage-elixir",
        brandId: "brand-dior",
        name: "Sauvage Elixir",
        subName: "Parfum",
        gender: "nam",
        description: "Siêu phẩm đậm đặc nhất của dòng Sauvage — định nghĩa mới về sự nam tính hiện đại với nồng độ cực đại.",
        verdict: "Kì quan của François Demachy. Quyền lực, nam tính và khả năng tỏa hương Enormous vượt xa mọi giới hạn của nước hoa Designer.",
        verdictShort: "UY LỰC & NAM TÍNH TUYỆT ĐỐI",
        scoreScents: 9.3, scoreUniqueness: 9.0, scoreCompliments: 9.5, scoreValue: 8.5,
        vibes: [
            { _key: "v1", label: "Quyền lực", icon: "👑" },
            { _key: "v2", label: "Tiệc tối", icon: "🍸" },
            { _key: "v3", label: "Gây ấn tượng", icon: "💥" },
            { _key: "v4", label: "Trưởng thành", icon: "🧔" }
        ],
        longevity: 9, sillage: 10,
        seasonSpring: 40, seasonSummer: 20, seasonFall: 90, seasonWinter: 100,
        dayUse: 30, nightUse: 100,
        topNotes: ["Quế", "Bạch đậu khấu", "Nhục đậu khấu", "Bưởi"],
        middleNotes: ["Hoa oải hương"],
        baseNotes: ["Cam thảo", "Gỗ đàn hương", "Hổ phách", "Tiêu", "Hoắc hương"],
        accords: [
            { _key: "a1", name: "Gia vị ấm", value: 100, color: "#e67e22" },
            { _key: "a2", name: "Gia vị tươi", value: 85, color: "#2ecc71" },
            { _key: "a3", name: "Gỗ", value: 80, color: "#8B4513" },
            { _key: "a4", name: "Aromatic", value: 75, color: "#1abc9c" },
            { _key: "a5", name: "Oải hương", value: 65, color: "#9b59b6" }
        ],
        tags: ["Sát Thủ Hẹn Hò", "Siêu Lưu Toả", "Tiệc Tối", "Mùa Đông"],
        sizes: ["10ml Chiết", "60ml Fullbox", "100ml Fullbox"],
        basePrice: 4200000,
    },
    {
        _id: "product-bleu-de-chanel-edp",
        slug: "bleu-de-chanel-edp",
        brandId: "brand-chanel",
        name: "Bleu de Chanel",
        subName: "Eau de Parfum",
        gender: "nam",
        description: "Tiêu chuẩn vàng của nước hoa nam hiện đại — tươi mát, sạch sẽ, đủ chiều sâu để không bao giờ lỗi thời.",
        verdict: "Versatile số 1 cho mọi bộ sưu tập nam. Clean, sang trọng, không bao giờ gây phiền — thế tục nhưng không nhàm.",
        verdictShort: "THANH LỊCH BẤT HỦ",
        scoreScents: 8.8, scoreUniqueness: 7.5, scoreCompliments: 9.0, scoreValue: 8.0,
        vibes: [
            { _key: "v1", label: "Văn phòng", icon: "💼" },
            { _key: "v2", label: "Hẹn hò casual", icon: "☕" },
            { _key: "v3", label: "Quanh năm", icon: "🔄" }
        ],
        longevity: 8, sillage: 7,
        seasonSpring: 80, seasonSummer: 70, seasonFall: 85, seasonWinter: 75,
        dayUse: 80, nightUse: 60,
        topNotes: ["Chanh", "Cam Bergamot", "Bưởi"],
        middleNotes: ["Gỗ tuyết tùng", "Gừng", "Nhũ hương"],
        baseNotes: ["Gỗ đàn hương", "Xạ hương", "Labdanum"],
        accords: [
            { _key: "a1", name: "Gỗ", value: 95, color: "#8B4513" },
            { _key: "a2", name: "Cam chanh", value: 80, color: "#f7c242" },
            { _key: "a3", name: "Aromatic", value: 75, color: "#2c7a4b" },
            { _key: "a4", name: "Tươi mát", value: 70, color: "#5bc8f5" }
        ],
        tags: ["All-rounder", "Văn Phòng", "Classy", "Bestseller"],
        sizes: ["10ml Chiết", "50ml Fullbox", "100ml Fullbox"],
        basePrice: 4200000,
    },
    {
        _id: "product-armani-stronger-intensely",
        slug: "armani-stronger-with-you-intensely",
        brandId: "brand-giorgio-armani",
        name: "Stronger With You Intensely",
        subName: "Eau de Parfum",
        gender: "nam",
        description: "Mùi hương ngọt ngào, ấm áp và có sức hút mãnh liệt — vũ khí tối thượng cho những buổi hẹn hò đêm đông.",
        verdict: "Mùi hương đại diện cho sự ấm áp, chiều chuộng nhưng vẫn đầy nam tính. Độ bám tỏa của chai này cực kỳ kinh khủng, phù hợp cho những đêm tiệc hay buổi hẹn hò quan trọng.",
        verdictShort: "SÁT THỦ HẸN HÒ",
        scoreScents: 9.5, scoreUniqueness: 8.5, scoreCompliments: 10.0, scoreValue: 9.0,
        vibes: [
            { _key: "v1", label: "Hẹn hò", icon: "❤️" },
            { _key: "v2", label: "Tiệc tối", icon: "🍸" },
            { _key: "v3", label: "Mùa đông", icon: "❄️" }
        ],
        longevity: 9, sillage: 10,
        seasonSpring: 8, seasonSummer: 4, seasonFall: 39, seasonWinter: 100,
        dayUse: 31, nightUse: 100,
        topNotes: ["Hồng tiêu", "Cây bách xù", "Hoa tím"],
        middleNotes: ["Kẹo Toffee", "Quế", "Hoa oải hương", "Xô thơm"],
        baseNotes: ["Vanilla", "Hổ phách", "Đậu Tonka", "Da thuộc lộn"],
        accords: [
            { _key: "a1", name: "Vani", value: 100, color: "#f5deb3" },
            { _key: "a2", name: "Ngọt ngào", value: 89, color: "#FF6D00" },
            { _key: "a3", name: "Hổ phách", value: 60, color: "#FF8F00" },
            { _key: "a4", name: "Gia vị ấm", value: 56, color: "#BF360C" }
        ],
        tags: ["Hẹn Hò", "Mùa Đông", "Siêu Toả"],
        sizes: ["10ml Chiết", "100ml Fullbox"],
        basePrice: 2850000,
    },
    {
        _id: "product-ysl-black-opium",
        slug: "ysl-black-opium",
        brandId: "brand-yves-saint-laurent",
        name: "Black Opium",
        subName: "Eau de Parfum",
        gender: "nu",
        description: "Huyền thoại nước hoa nữ của YSL — cà phê đen, hoa trắng và vani tạo nên rock-chic, táo bạo nhưng vẫn nữ tính.",
        verdict: "Định nghĩa lại nước hoa nữ hiện đại. Bestseller có lý do — cà phê + hoa + vani = không thể nhầm lẫn với bất kỳ chai nào.",
        verdictShort: "ROCK-CHIC FEMININITY",
        scoreScents: 9.2, scoreUniqueness: 8.8, scoreCompliments: 9.5, scoreValue: 8.5,
        vibes: [
            { _key: "v1", label: "Hẹn hò", icon: "🖤" },
            { _key: "v2", label: "Tiệc tối", icon: "🍸" },
            { _key: "v3", label: "Cá tính", icon: "⚡" }
        ],
        longevity: 8, sillage: 8,
        seasonSpring: 60, seasonSummer: 40, seasonFall: 90, seasonWinter: 95,
        dayUse: 40, nightUse: 95,
        topNotes: ["Cà phê", "Quả lê", "Hoa cam"],
        middleNotes: ["Hoa nhài", "Hoa cam trắng", "Cây bách xù"],
        baseNotes: ["Vani", "Hoắc hương", "Gỗ tuyết tùng"],
        accords: [
            { _key: "a1", name: "Ngọt ngào", value: 100, color: "#8B0000" },
            { _key: "a2", name: "Cà phê", value: 95, color: "#3e1f00" },
            { _key: "a3", name: "Hoa cỏ", value: 75, color: "#e75480" },
            { _key: "a4", name: "Vani", value: 70, color: "#f5deb3" }
        ],
        tags: ["Best Seller", "Hẹn Hò", "Tiệc Tối", "Thu Đông"],
        sizes: ["10ml Chiết", "30ml Fullbox", "90ml Fullbox"],
        basePrice: 3800000,
    },
    {
        _id: "product-creed-aventus",
        slug: "creed-aventus",
        brandId: "brand-creed",
        name: "Aventus",
        subName: "Eau de Parfum",
        gender: "nam",
        description: "Vua nước hoa — DNA dứa + birch smoke + ambergris không có dupe nào thật sự thay thế được.",
        verdict: "DNA birch smoke + pineapple không thể clone hoàn toàn. Collector phải có ít nhất 1 lần — không phải vì hype mà vì nó thực sự unique.",
        verdictShort: "HUYỀN THOẠI BẤT HỦ",
        scoreScents: 9.5, scoreUniqueness: 9.8, scoreCompliments: 9.0, scoreValue: 6.0,
        vibes: [
            { _key: "v1", label: "Đẳng cấp", icon: "👑" },
            { _key: "v2", label: "All-occasion", icon: "🔄" },
            { _key: "v3", label: "Collector", icon: "💎" }
        ],
        longevity: 7, sillage: 7,
        seasonSpring: 70, seasonSummer: 50, seasonFall: 90, seasonWinter: 85,
        dayUse: 75, nightUse: 80,
        topNotes: ["Dứa", "Cam Bergamot", "Lý chua đen"],
        middleNotes: ["Hoa hồng", "Gỗ bạch dương", "Hoắc hương"],
        baseNotes: ["Long diên hương", "Xạ hương", "Địa y", "Vani"],
        accords: [
            { _key: "a1", name: "Trái cây", value: 90, color: "#f39c12" },
            { _key: "a2", name: "Tươi mát", value: 80, color: "#2ecc71" },
            { _key: "a3", name: "Gỗ khói", value: 75, color: "#616161" },
            { _key: "a4", name: "Aromatic", value: 65, color: "#1abc9c" }
        ],
        tags: ["Niche", "Flagship", "Thu Đông", "Collector"],
        sizes: ["5ml Chiết", "10ml Chiết", "100ml Fullbox"],
        basePrice: 8500000,
    },
    {
        _id: "product-mfk-baccarat-rouge-540",
        slug: "mfk-baccarat-rouge-540",
        brandId: "brand-maison-francis-kurkdjian",
        name: "Baccarat Rouge 540",
        subName: "Eau de Parfum",
        gender: "unisex",
        description: "Hiện tượng nước hoa của thập kỷ. Amberwood + hoa nhài + nhựa thông = mùi hương không thể định nghĩa nhưng không thể quên.",
        verdict: "Cultural phenomenon của nước hoa hiện đại. Amberwood + jasmine + fir = không thể định nghĩa nhưng không thể quên. Benchmark mà mọi chai ngọt đều bị so sánh.",
        verdictShort: "PHENOMENON CỦA THẬP KỶ",
        scoreScents: 9.8, scoreUniqueness: 9.5, scoreCompliments: 9.2, scoreValue: 7.5,
        vibes: [
            { _key: "v1", label: "Sang trọng", icon: "💎" },
            { _key: "v2", label: "Đêm", icon: "🌙" },
            { _key: "v3", label: "Memorable", icon: "✨" }
        ],
        longevity: 9, sillage: 8,
        seasonSpring: 65, seasonSummer: 45, seasonFall: 90, seasonWinter: 95,
        dayUse: 55, nightUse: 95,
        topNotes: ["Hoa nhài", "Nghệ tây"],
        middleNotes: ["Amberwood", "Long diên hương"],
        baseNotes: ["Nhựa thông", "Xạ hương"],
        accords: [
            { _key: "a1", name: "Hổ phách", value: 100, color: "#d4a017" },
            { _key: "a2", name: "Ngọt ấm", value: 90, color: "#FF6D00" },
            { _key: "a3", name: "Hoa cỏ", value: 70, color: "#e75480" },
            { _key: "a4", name: "Gỗ khói", value: 65, color: "#614326" }
        ],
        tags: ["Niche", "Unisex", "Bestseller", "Statement"],
        sizes: ["5ml Chiết", "10ml Chiết", "70ml EDP", "70ml Extrait"],
        basePrice: 6500000,
    },
    {
        _id: "product-tom-ford-noir-extreme",
        slug: "tom-ford-noir-extreme",
        brandId: "brand-tom-ford",
        name: "Noir Extreme",
        subName: "Eau de Parfum",
        gender: "nam",
        description: "Câu trả lời cho ai muốn ngọt ngào exotic nhưng vẫn giữ đẳng cấp luxury. Cardamom + hoa nhài + sandalwood = bí ẩn, quyến rũ.",
        verdict: "Spicy oriental refined — không beast, không vanilla, mà là luxury statement thực sự. Tom Ford đỉnh nhất cho buổi tối exotic.",
        verdictShort: "LUXURY ORIENTAL",
        scoreScents: 9.0, scoreUniqueness: 8.5, scoreCompliments: 9.3, scoreValue: 7.8,
        vibes: [
            { _key: "v1", label: "Tiệc tối", icon: "🍸" },
            { _key: "v2", label: "Sự kiện", icon: "🎭" },
            { _key: "v3", label: "Exotic", icon: "🌙" }
        ],
        longevity: 9, sillage: 8,
        seasonSpring: 50, seasonSummer: 25, seasonFall: 90, seasonWinter: 100,
        dayUse: 30, nightUse: 100,
        topNotes: ["Bạch đậu khấu", "Nhục đậu khấu", "Tiêu"],
        middleNotes: ["Hoa hồng", "Hoa nhài", "Hoa diên vĩ", "Hổ phách"],
        baseNotes: ["Gỗ đàn hương", "Cỏ vetiver", "Benzoin", "Xạ hương"],
        accords: [
            { _key: "a1", name: "Gia vị ấm", value: 95, color: "#e67e22" },
            { _key: "a2", name: "Ngọt exotic", value: 85, color: "#8B0000" },
            { _key: "a3", name: "Gỗ", value: 80, color: "#8B4513" },
            { _key: "a4", name: "Hoa cỏ", value: 65, color: "#e75480" }
        ],
        tags: ["Tom Ford", "Niche", "Tiệc Tối", "Thu Đông"],
        sizes: ["5ml Chiết", "10ml Chiết", "50ml EDP", "100ml EDP"],
        basePrice: 5200000,
    },
    {
        _id: "product-lattafa-khamrah",
        slug: "lattafa-khamrah",
        brandId: "brand-lattafa",
        name: "Khamrah",
        subName: "Eau de Parfum",
        gender: "unisex",
        description: "Kiệt tác hương phương Đông ngọt ngào — sự kết hợp hoàn hảo của chà là, vani và các loại gia vị ấm áp.",
        verdict: "Một trong những chai nước hoa đáng mua nhất tầm giá dưới 2 triệu. Độ bám tỏa cực tốt, mùi hương sang trọng, thiết kế như tác phẩm nghệ thuật.",
        verdictShort: "QUYẾN RŨ & SANG TRỌNG",
        scoreScents: 9.0, scoreUniqueness: 8.8, scoreCompliments: 9.2, scoreValue: 10.0,
        vibes: [
            { _key: "v1", label: "Quyến rũ", icon: "❤️" },
            { _key: "v2", label: "Sang trọng", icon: "✨" },
            { _key: "v3", label: "Ấm áp", icon: "🔥" }
        ],
        longevity: 9, sillage: 9,
        seasonSpring: 30, seasonSummer: 10, seasonFall: 90, seasonWinter: 100,
        dayUse: 20, nightUse: 100,
        topNotes: ["Quế", "Nhục đậu khấu", "Cam Bergamot"],
        middleNotes: ["Chà là", "Kẹo Praline", "Hoa huệ", "Mahonial"],
        baseNotes: ["Vani", "Đậu Tonka", "Amberwood", "Nhựa Myrrh", "Benzoin"],
        accords: [
            { _key: "a1", name: "Ngọt ngào", value: 100, color: "#ff69b4" },
            { _key: "a2", name: "Gia vị ấm", value: 95, color: "#e67e22" },
            { _key: "a3", name: "Vani", value: 90, color: "#f5deb3" },
            { _key: "a4", name: "Hổ phách", value: 85, color: "#d4a017" },
            { _key: "a5", name: "Gỗ", value: 70, color: "#8B4513" }
        ],
        tags: ["Best Seller", "Thu Đông", "Ngọt Ngào", "Siêu Toả", "Giá Tốt"],
        sizes: ["10ml Chiết", "100ml Fullbox"],
        basePrice: 1250000,
    },
];

async function run() {
    console.log('🚀 Starting Sanity import...\n');

    // 1. Import brands
    console.log(`📦 Importing ${brands.length} brands...`);
    const tx = client.transaction();
    brands.forEach(b => {
        tx.createOrReplace({
            _id: b._id,
            _type: 'brand',
            name: b.name,
            slug: { _type: 'slug', current: b.slug },
        });
    });
    await tx.commit();
    console.log(`   ✅ ${brands.length} brands imported\n`);

    // 2. Import products
    console.log(`🌸 Importing ${products.length} products...`);
    for (const p of products) {
        const doc = {
            _id: p._id,
            _type: 'product',
            name: p.name,
            subName: p.subName,
            slug: { _type: 'slug', current: p.slug },
            brand: { _type: 'reference', _ref: p.brandId },
            gender: p.gender,
            description: p.description,
            verdict: p.verdict,
            verdictShort: p.verdictShort,
            scoreScents: p.scoreScents,
            scoreUniqueness: p.scoreUniqueness,
            scoreCompliments: p.scoreCompliments,
            scoreValue: p.scoreValue,
            vibes: p.vibes,
            longevity: p.longevity,
            sillage: p.sillage,
            seasonSpring: p.seasonSpring,
            seasonSummer: p.seasonSummer,
            seasonFall: p.seasonFall,
            seasonWinter: p.seasonWinter,
            dayUse: p.dayUse,
            nightUse: p.nightUse,
            topNotes: p.topNotes,
            middleNotes: p.middleNotes,
            baseNotes: p.baseNotes,
            accords: p.accords,
            tags: p.tags,
            sizes: p.sizes,
            basePrice: p.basePrice,
        };
        await client.createOrReplace(doc);
        console.log(`   ✅ ${p.name} (${p.slug})`);
    }

    console.log(`\n🎉 Done! ${products.length} products published to Sanity.`);
    console.log(`\n📌 NOTE: Images must be uploaded manually in Sanity Studio.`);
    console.log(`   Go to: https://ww1zzidl.sanity.studio/production`);
    console.log(`   For each product, upload mainImage from Fragrantica.`);
}

run().catch(err => {
    console.error('❌ Error:', err.message);
    if (err.statusCode === 401) {
        console.error('\n💡 Your token is invalid or missing permissions.');
        console.error('   Get a write token at: https://sanity.io/manage/personal/project/ww1zzidl/api');
    }
    process.exit(1);
});
