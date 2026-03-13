// M01 NEW_WRITE: Create product shells (metadata only, no content)
// Coder sẽ fill productCopy + article sau
const fs = require('fs');
const file = 'D:/anti/perfume-luxury-vn/src/constants/mockData.ts';
let data = fs.readFileSync(file, 'utf8');

const PENDING = 'PENDING_IMAGE';
const CODER_TODO = '(Chờ Coder viết bài)';

const newProducts = [
    {
        id: "ysl-la-nuit-de-lhomme", brandSlug: "ysl", brand: "YVES SAINT LAURENT",
        name: "La Nuit de l'Homme", subName: "Eau de Toilette",
        perfumer: "Anne Flipo, Pierre Wargnye & Dominique Ropion", gender: "nam",
        description: "Mùi nam quyến rũ với bạch đậu khấu, oải hương và gỗ tuyết tùng. Hợp hẹn hò và buổi tối.",
        verdict: "Quyến rũ kinh điển, mềm và sang. Hợp hẹn hò, buổi tối.",
        verdictShort: "QUYẾN RŨ, MỀM, KINH ĐIỂN",
        score: { scent: 9.2, uniqueness: 8.5, compliments: 9.3, value: 8.0, total: 8.8 },
        vibes: [{ label: "Hẹn hò", icon: "❤️" }, { label: "Buổi tối", icon: "🌙" }, { label: "Quyến rũ", icon: "✨" }],
        longevity: 6, sillage: 6,
        seasons: { spring: 55, summer: 30, fall: 90, winter: 85 },
        dayNight: { day: 30, night: 100 },
        topNotes: [{ name: "Bạch đậu khấu" }, { name: "Cam bergamot" }, { name: "Oải hương" }],
        middleNotes: [{ name: "Vetiver" }, { name: "Gỗ tuyết tùng" }, { name: "Hoa violet" }],
        baseNotes: [{ name: "Đậu tonka" }, { name: "Carob" }, { name: "Coumarin" }],
        accords: [
            { name: "Gia vị ấm", value: 92, color: "#e67e22" },
            { name: "Thơm thảo mộc", value: 78, color: "#2c7a4b" },
            { name: "Gỗ", value: 62, color: "#8B4513" },
            { name: "Ngọt", value: 48, color: "#8B0000" }
        ],
        tags: ["Hẹn hò", "Buổi tối", "Nam", "Quyến rũ"],
        sizes: ["10ml Chiết", "60ml Fullbox", "100ml Fullbox"], basePrice: 2650000
    },
    {
        id: "xerjoff-naxos", brandSlug: "xerjoff", brand: "XERJOFF",
        name: "XJ 1861 Naxos", subName: "Eau de Parfum",
        perfumer: "Chris Maurice", gender: "nam",
        description: "Mùi nam ngọt ấm với thuốc lá, mật ong và oải hương. Hợp buổi tối và mùa mát.",
        verdict: "Thuốc lá ngọt, mật ong, oải hương. Sang, ấm và cực cuốn.",
        verdictShort: "THUỐC LÁ NGỌT, MẬT ONG, SANG",
        score: { scent: 9.5, uniqueness: 9.2, compliments: 9.0, value: 7.8, total: 8.9 },
        vibes: [{ label: "Niche", icon: "💎" }, { label: "Buổi tối", icon: "🌙" }, { label: "Thu đông", icon: "🍂" }],
        longevity: 9, sillage: 8,
        seasons: { spring: 40, summer: 15, fall: 95, winter: 100 },
        dayNight: { day: 25, night: 100 },
        topNotes: [{ name: "Oải hương" }, { name: "Cam bergamot" }, { name: "Chanh" }],
        middleNotes: [{ name: "Thuốc lá" }, { name: "Mật ong" }, { name: "Quế" }, { name: "Hoa nhài" }],
        baseNotes: [{ name: "Vani" }, { name: "Cashmeran" }, { name: "Đậu tonka" }, { name: "Xạ hương" }],
        accords: [
            { name: "Thuốc lá", value: 95, color: "#5D4037" },
            { name: "Ngọt", value: 85, color: "#FF6D00" },
            { name: "Gia vị ấm", value: 78, color: "#e67e22" },
            { name: "Thơm thảo mộc", value: 62, color: "#2c7a4b" }
        ],
        tags: ["Niche", "Buổi tối", "Thu đông", "Nam"], sizes: ["5ml", "10ml Chiết", "50ml", "100ml"], basePrice: 6500000
    },
    {
        id: "louis-vuitton-imagination", brandSlug: "louis-vuitton", brand: "LOUIS VUITTON",
        name: "Imagination", subName: "Eau de Parfum",
        perfumer: "Jacques Cavallier Belletrud", gender: "nam",
        description: "Mùi nam tươi sáng với cam, trà và gỗ tuyết tùng. Sang, sạch và dễ dùng quanh năm.",
        verdict: "Tươi sáng, sang trọng, thanh lịch. Dễ dùng quanh năm cho người thích sự tinh tế.",
        verdictShort: "TƯƠI SÁNG, SANG, DỄ DÙNG",
        score: { scent: 9.0, uniqueness: 8.8, compliments: 8.5, value: 6.5, total: 8.2 },
        vibes: [{ label: "Sang trọng", icon: "💎" }, { label: "Đa dụng", icon: "🔄" }, { label: "Thanh lịch", icon: "🕴️" }],
        longevity: 7, sillage: 7,
        seasons: { spring: 85, summer: 75, fall: 70, winter: 55 },
        dayNight: { day: 85, night: 55 },
        topNotes: [{ name: "Cam" }, { name: "Cam bergamot" }, { name: "Quýt" }],
        middleNotes: [{ name: "Trà" }, { name: "Hoa nhài" }, { name: "Gừng" }],
        baseNotes: [{ name: "Gỗ tuyết tùng" }, { name: "Ambroxan" }, { name: "Xạ hương trắng" }],
        accords: [
            { name: "Cam chanh", value: 90, color: "#f7c242" },
            { name: "Tươi", value: 78, color: "#2ecc71" },
            { name: "Gỗ", value: 55, color: "#8B4513" },
            { name: "Thơm thảo mộc", value: 42, color: "#2c7a4b" }
        ],
        tags: ["Sang trọng", "Đa dụng", "Nam", "Xa xỉ"], sizes: ["10ml Chiết", "100ml Fullbox", "200ml Fullbox"], basePrice: 8500000
    },
    {
        id: "parfums-de-marly-layton", brandSlug: "parfums-de-marly", brand: "PARFUMS DE MARLY",
        name: "Layton", subName: "Eau de Parfum",
        perfumer: "Hamid Merati-Kashani", gender: "nam",
        description: "Mùi nam táo, vani, gia vị và gỗ đàn hương. Cân bằng hoàn hảo giữa ngọt và nam tính.",
        verdict: "Táo, vani, gia vị — cân bằng hoàn hảo. Dễ dùng, dễ được khen, rất đáng đầu tư.",
        verdictShort: "CÂN BẰNG HOÀN HẢO, DỄ KHEN",
        score: { scent: 9.3, uniqueness: 8.8, compliments: 9.5, value: 7.5, total: 8.8 },
        vibes: [{ label: "Đa dụng", icon: "🔄" }, { label: "Cao cấp", icon: "💎" }, { label: "Dễ khen", icon: "👍" }],
        longevity: 9, sillage: 8,
        seasons: { spring: 70, summer: 35, fall: 100, winter: 95 },
        dayNight: { day: 60, night: 90 },
        topNotes: [{ name: "Táo" }, { name: "Cam bergamot" }, { name: "Oải hương" }],
        middleNotes: [{ name: "Hoa nhài" }, { name: "Hoa violet" }, { name: "Phong lữ" }],
        baseNotes: [{ name: "Vani" }, { name: "Gỗ đàn hương" }, { name: "Tiêu" }, { name: "Hoắc hương" }],
        accords: [
            { name: "Gia vị ấm", value: 88, color: "#e67e22" },
            { name: "Ngọt", value: 75, color: "#FF6D00" },
            { name: "Gỗ", value: 68, color: "#8B4513" },
            { name: "Tươi", value: 52, color: "#2ecc71" }
        ],
        tags: ["Niche", "Đa dụng", "Nam", "Dễ khen"], sizes: ["10ml Chiết", "75ml Fullbox", "125ml Fullbox"], basePrice: 6200000
    },
    {
        id: "amouage-reflection-man", brandSlug: "amouage", brand: "AMOUAGE",
        name: "Reflection Man", subName: "Eau de Parfum",
        perfumer: "Lucas Sieuzac", gender: "nam",
        description: "Mùi nam thanh lịch với hoa nhài, gỗ đàn hương và neroli. Kiểu lịch lãm cổ điển rất sang.",
        verdict: "Thanh lịch cổ điển, nhài trắng sang trọng. Hợp người thích sự tinh tế tối thượng.",
        verdictShort: "THANH LỊCH, HOA NHÀI, CỰC SANG",
        score: { scent: 9.4, uniqueness: 9.0, compliments: 8.5, value: 7.2, total: 8.5 },
        vibes: [{ label: "Thanh lịch", icon: "🕴️" }, { label: "Niche", icon: "💎" }, { label: "Kinh điển", icon: "👑" }],
        longevity: 8, sillage: 7,
        seasons: { spring: 90, summer: 60, fall: 80, winter: 65 },
        dayNight: { day: 80, night: 60 },
        topNotes: [{ name: "Neroli" }, { name: "Quýt" }, { name: "Tiêu hồng" }],
        middleNotes: [{ name: "Hoa nhài" }, { name: "Hoa hồng" }, { name: "Hoa diên vĩ" }],
        baseNotes: [{ name: "Gỗ đàn hương" }, { name: "Vetiver" }, { name: "Gỗ tuyết tùng" }, { name: "Xạ hương trắng" }],
        accords: [
            { name: "Hoa trắng", value: 92, color: "#e75480" },
            { name: "Gỗ", value: 72, color: "#8B4513" },
            { name: "Tươi", value: 65, color: "#2ecc71" },
            { name: "Cam chanh", value: 48, color: "#f7c242" }
        ],
        tags: ["Niche", "Thanh lịch", "Nam", "Hoa"], sizes: ["5ml Chiết", "10ml Chiết", "100ml Fullbox"], basePrice: 6800000
    },
    {
        id: "dior-fahrenheit", brandSlug: "dior", brand: "DIOR",
        name: "Fahrenheit", subName: "Eau de Toilette",
        perfumer: "Jean-Louis Sieuzac & Maurice Roger", gender: "nam",
        description: "Mùi nam huyền thoại với violet lá, xăng nhẹ và da thuộc. Cá tính mạnh, không giống ai.",
        verdict: "Huyền thoại nam tính. Violet, xăng, da — hoặc yêu hoặc không hợp.",
        verdictShort: "HUYỀN THOẠI, CÁ TÍNH, ĐỘC ĐÁO",
        score: { scent: 9.0, uniqueness: 9.8, compliments: 7.5, value: 8.5, total: 8.7 },
        vibes: [{ label: "Cá tính", icon: "🔥" }, { label: "Kinh điển", icon: "👑" }, { label: "Thu đông", icon: "🍂" }],
        longevity: 8, sillage: 7,
        seasons: { spring: 50, summer: 25, fall: 90, winter: 85 },
        dayNight: { day: 45, night: 85 },
        topNotes: [{ name: "Violet lá" }, { name: "Cam bergamot" }, { name: "Oải hương" }],
        middleNotes: [{ name: "Nhục đậu khấu" }, { name: "Da thuộc" }, { name: "Hoa violet" }],
        baseNotes: [{ name: "Gỗ tuyết tùng" }, { name: "Vetiver" }, { name: "Hổ phách" }],
        accords: [
            { name: "Da thuộc", value: 88, color: "#5D4037" },
            { name: "Gỗ", value: 75, color: "#8B4513" },
            { name: "Thơm thảo mộc", value: 65, color: "#2c7a4b" },
            { name: "Gia vị ấm", value: 52, color: "#e67e22" }
        ],
        tags: ["Kinh điển", "Cá tính", "Nam", "Thu đông"], sizes: ["10ml Chiết", "50ml", "100ml", "200ml"], basePrice: 3200000
    },
    {
        id: "tom-ford-ombre-leather", brandSlug: "tom-ford", brand: "TOM FORD",
        name: "Ombré Leather", subName: "Eau de Parfum",
        perfumer: "Sonia Constant", gender: "nam",
        description: "Mùi da thuộc sang trọng với hoắc hương, hoa nhài và hổ phách. Nam tính và quyền lực.",
        verdict: "Da thuộc sang, hoắc hương mạnh. Quyền lực, không phải cho người thích nhẹ.",
        verdictShort: "DA THUỘC, MẠNH, QUYỀN LỰC",
        score: { scent: 9.1, uniqueness: 8.8, compliments: 8.5, value: 7.5, total: 8.5 },
        vibes: [{ label: "Nam tính", icon: "🖤" }, { label: "Buổi tối", icon: "🌙" }, { label: "Sang trọng", icon: "✨" }],
        longevity: 9, sillage: 8,
        seasons: { spring: 40, summer: 15, fall: 95, winter: 100 },
        dayNight: { day: 30, night: 95 },
        topNotes: [{ name: "Bạch đậu khấu" }, { name: "Quế" }],
        middleNotes: [{ name: "Da thuộc" }, { name: "Hoa nhài" }, { name: "Hoa hồng" }],
        baseNotes: [{ name: "Hoắc hương" }, { name: "Hổ phách" }, { name: "Rêu" }, { name: "Xạ hương" }],
        accords: [
            { name: "Da thuộc", value: 100, color: "#5D4037" },
            { name: "Gỗ", value: 72, color: "#8B4513" },
            { name: "Hoa trắng", value: 55, color: "#e75480" },
            { name: "Gia vị ấm", value: 48, color: "#e67e22" }
        ],
        tags: ["Tom Ford", "Da thuộc", "Nam", "Thu đông"], sizes: ["10ml Chiết", "50ml", "100ml"], basePrice: 4500000
    },
    {
        id: "tom-ford-oud-wood", brandSlug: "tom-ford", brand: "TOM FORD",
        name: "Oud Wood", subName: "Eau de Parfum",
        perfumer: "Richard Herpin", gender: "unisex",
        description: "Mùi gỗ trầm thanh lịch với oud, gỗ đàn hương và vetiver. Unisex, sang và rất tinh tế.",
        verdict: "Gỗ trầm thanh lịch, oud mềm mại. Unisex hoàn hảo, sang theo cách rất kín đáo.",
        verdictShort: "OUD MỀM, GỖ SANG, UNISEX",
        score: { scent: 9.3, uniqueness: 9.0, compliments: 8.2, value: 7.0, total: 8.4 },
        vibes: [{ label: "Phi giới tính", icon: "✨" }, { label: "Sang trọng", icon: "💎" }, { label: "Gỗ", icon: "🌳" }],
        longevity: 8, sillage: 7,
        seasons: { spring: 65, summer: 35, fall: 90, winter: 88 },
        dayNight: { day: 55, night: 85 },
        topNotes: [{ name: "Gỗ trầm (Oud)" }, { name: "Hồng Hoa" }, { name: "Bạch đậu khấu" }],
        middleNotes: [{ name: "Gỗ đàn hương" }, { name: "Vetiver" }, { name: "Đậu tonka" }],
        baseNotes: [{ name: "Hổ phách" }, { name: "Xạ hương" }],
        accords: [
            { name: "Gỗ", value: 100, color: "#8B4513" },
            { name: "Oud", value: 85, color: "#3E2723" },
            { name: "Gia vị ấm", value: 55, color: "#e67e22" },
            { name: "Hổ phách", value: 42, color: "#d4a017" }
        ],
        tags: ["Tom Ford", "Unisex", "Gỗ", "Sang trọng"], sizes: ["5ml Chiết", "10ml Chiết", "50ml", "100ml"], basePrice: 5500000
    },
    {
        id: "dior-homme-parfum", brandSlug: "dior", brand: "DIOR",
        name: "Dior Homme Parfum", subName: "Parfum",
        perfumer: "François Demachy", gender: "nam",
        description: "Phiên bản đậm nhất của Dior Homme. Iris da thuộc sâu, tối và rất có lực. Hợp buổi tối sang.",
        verdict: "Iris tối, da thuộc, sâu. Bản mạnh nhất dòng Homme. Hợp buổi tối và mùa mát.",
        verdictShort: "IRIS TỐI, DA, RẤT CÓ LỰC",
        score: { scent: 9.4, uniqueness: 9.0, compliments: 8.8, value: 7.5, total: 8.7 },
        vibes: [{ label: "Buổi tối", icon: "🌙" }, { label: "Sang trọng", icon: "✨" }, { label: "Nam tính", icon: "🖤" }],
        longevity: 9, sillage: 8,
        seasons: { spring: 45, summer: 20, fall: 95, winter: 100 },
        dayNight: { day: 30, night: 100 },
        topNotes: [{ name: "Oải hương" }, { name: "Cam bergamot" }],
        middleNotes: [{ name: "Iris" }, { name: "Da thuộc" }, { name: "Vetiver" }],
        baseNotes: [{ name: "Gỗ đàn hương" }, { name: "Gỗ tuyết tùng" }, { name: "Hổ phách" }],
        accords: [
            { name: "Iris / Phấn", value: 95, color: "#9b59b6" },
            { name: "Da thuộc", value: 78, color: "#5D4037" },
            { name: "Gỗ", value: 65, color: "#8B4513" },
            { name: "Thơm thảo mộc", value: 48, color: "#2c7a4b" }
        ],
        tags: ["Buổi tối", "Cao cấp", "Nam", "Iris"], sizes: ["10ml Chiết", "100ml Fullbox"], basePrice: 5200000
    },
    {
        id: "acqua-di-gio-profumo", brandSlug: "armani", brand: "GIORGIO ARMANI",
        name: "Acqua di Giò Profumo", subName: "Parfum",
        perfumer: "Alberto Morillas", gender: "nam",
        description: "Phiên bản đậm hơn của Acqua di Giò với trầm hương và hoắc hương. Biển sâu, nam tính và sang hơn.",
        verdict: "Biển sâu, trầm hương, nam tính. Bản nâng cấp hoàn hảo của AdG gốc.",
        verdictShort: "BIỂN SÂU, TRẦM HƯƠNG, NAM TÍNH",
        score: { scent: 9.1, uniqueness: 8.2, compliments: 9.0, value: 8.0, total: 8.6 },
        vibes: [{ label: "Đa dụng", icon: "🔄" }, { label: "Thanh lịch", icon: "🕴️" }, { label: "Biển", icon: "🌊" }],
        longevity: 8, sillage: 7,
        seasons: { spring: 85, summer: 65, fall: 80, winter: 55 },
        dayNight: { day: 80, night: 65 },
        topNotes: [{ name: "Cam bergamot" }, { name: "Hương biển" }],
        middleNotes: [{ name: "Phong lữ" }, { name: "Hoa hồng" }, { name: "Xô thơm" }],
        baseNotes: [{ name: "Trầm hương" }, { name: "Hoắc hương" }, { name: "Hổ phách" }],
        accords: [
            { name: "Biển / Aquatic", value: 88, color: "#1abc9c" },
            { name: "Gỗ", value: 72, color: "#8B4513" },
            { name: "Thơm thảo mộc", value: 58, color: "#2c7a4b" },
            { name: "Hổ phách", value: 48, color: "#d4a017" }
        ],
        tags: ["Đa dụng", "Nam", "Biển", "Cao cấp"], sizes: ["10ml Chiết", "75ml", "125ml", "180ml"], basePrice: 3500000
    },
    {
        id: "bleu-de-chanel-parfum", brandSlug: "chanel", brand: "CHANEL",
        name: "Bleu de Chanel", subName: "Parfum",
        perfumer: "Olivier Polge", gender: "nam",
        description: "Phiên bản Parfum đậm và sâu nhất của Bleu de Chanel. Gỗ đàn hương, trầm hương mềm mượt.",
        verdict: "Bản Parfum sang nhất dòng Bleu. Gỗ đàn hương, sâu, mượt. Hợp dịp quan trọng.",
        verdictShort: "GỖ ĐÀN HƯƠNG, SÂU, CỰC MƯỢT",
        score: { scent: 9.2, uniqueness: 8.0, compliments: 9.0, value: 7.5, total: 8.4 },
        vibes: [{ label: "Sang trọng", icon: "✨" }, { label: "Đa dụng", icon: "🔄" }, { label: "Thanh lịch", icon: "🕴️" }],
        longevity: 9, sillage: 8,
        seasons: { spring: 75, summer: 55, fall: 90, winter: 85 },
        dayNight: { day: 70, night: 85 },
        topNotes: [{ name: "Cam chanh" }, { name: "Bạc hà" }],
        middleNotes: [{ name: "Gỗ đàn hương" }, { name: "Hoa nhài" }, { name: "Oải hương" }],
        baseNotes: [{ name: "Gỗ tuyết tùng" }, { name: "Trầm hương" }, { name: "Đậu tonka" }],
        accords: [
            { name: "Gỗ", value: 95, color: "#8B4513" },
            { name: "Cam chanh", value: 62, color: "#f7c242" },
            { name: "Thơm thảo mộc", value: 55, color: "#2c7a4b" },
            { name: "Gia vị ấm", value: 45, color: "#e67e22" }
        ],
        tags: ["Sang trọng", "Đa dụng", "Nam", "Gỗ"], sizes: ["10ml Chiết", "50ml", "100ml", "150ml"], basePrice: 4800000
    }
];

// Build TS entries
function buildEntry(p) {
    return `  {
    id: "${p.id}",
    brandSlug: "${p.brandSlug}",
    brand: "${p.brand}",
    name: "${p.name}",
    subName: "${p.subName}",
    perfumer: "${p.perfumer}",
    gender: "${p.gender}",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "pending", caption: "${p.brand} ${p.name} chính hãng", verified: false }],
    description: "${p.description}",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    verdict: "${p.verdict}",
    verdictShort: "${p.verdictShort}",
    score: { scent: ${p.score.scent}, uniqueness: ${p.score.uniqueness}, compliments: ${p.score.compliments}, value: ${p.score.value}, total: ${p.score.total} },
    vibes: [${p.vibes.map(v => `{ label: "${v.label}", icon: "${v.icon}" }`).join(', ')}],
    longevity: ${p.longevity},
    sillage: ${p.sillage},
    seasons: { spring: ${p.seasons.spring}, summer: ${p.seasons.summer}, fall: ${p.seasons.fall}, winter: ${p.seasons.winter} },
    dayNight: { day: ${p.dayNight.day}, night: ${p.dayNight.night} },
    topNotes: [${p.topNotes.map(n => `{ name: "${n.name}" }`).join(', ')}],
    middleNotes: [${p.middleNotes.map(n => `{ name: "${n.name}" }`).join(', ')}],
    baseNotes: [${p.baseNotes.map(n => `{ name: "${n.name}" }`).join(', ')}],
    accords: [${p.accords.map(a => `\n      { name: "${a.name}", value: ${a.value}, color: "${a.color}" }`).join(',')}
    ],
    tags: [${p.tags.map(t => `"${t}"`).join(', ')}],
    sizes: [${p.sizes.map(s => `"${s}"`).join(', ')}],
    basePrice: ${p.basePrice},
    shopeeOffers: []
  }`;
}

const entriesStr = newProducts.map(buildEntry).join(',\n');

// Insert before final "];"
data = data.replace(/\n\];\s*$/, ',\n' + entriesStr + '\n];\n');

fs.writeFileSync(file, data, 'utf8');
console.log('✅ Added', newProducts.length, 'products to mockData.ts');
newProducts.forEach(p => console.log('  ', p.id));
