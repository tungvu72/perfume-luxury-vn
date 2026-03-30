const fs = require('fs');
const filepath = 'src/constants/mockData.ts';
let data = fs.readFileSync(filepath, 'utf8');

const targetId = 'montblanc-signature-edp';
if (data.includes(targetId) || data.includes('MONTBLANC Signature') || data.includes('montblanc-signature-main.jpg')) {
    console.log('Montblanc Signature may already exist in mockData.ts');
} else {
    // Insert after "export const MASTER_PERFUMES: Perfume[] = ["
    const insertPoint = 'export const MASTER_PERFUMES: Perfume[] = [';
    
    const newProduct = `
  {
    id: "montblanc-signature-edp",
    brandSlug: "montblanc",
    brand: "MONTBLANC",
    name: "Signature",
    subName: "Eau de Parfum",
    perfumer: "Guillaume Flavigny & Natalie Gracia-Cetto",
    gender: "nu",
    year: 2020,
    image: "/images/products/montblanc-signature-main.jpg",
    images: [{ url: "/images/products/montblanc-signature-main.jpg", source: "fragram", caption: "Montblanc Signature EDP chính hãng", verified: true }],
    description: "Chai nữ sữa chua cam-vani bồng bềnh và thanh lịch — quýt clementine, ngọc lan tây, mộc lan, mẫu đơn, vani, benzoin và xạ hương trắng. Ngọt nhẹ, sạch sẽ, an toàn cho văn phòng.",
    article: \`### Ai không nên mua?

Nếu bạn tìm kiếm một mùi hương cá tính mạnh, phá cách hay sexy mời gọi thì Signature không dành cho bạn. Đây là mùi hương siêu "an toàn", nữ tính nhẹ nhàng kiểu clean girl. Ai ghét nốt vani sữa ngọt kem cũng có thể thấy nó hơi ngậy lúc ban đầu.

### Có đáng tiền không?

Nằm ở mức giá designer rất phải chăng, cực kỳ đáng tiền cho một mùi hương nịnh mũi, bám tỏa tốt (7-8 tiếng). Mùi thơm thoang thoảng giống hệt một hộp sữa chua cam hoặc kem vani tan chảy, ai ngửi cũng thấy dễ chịu.

### Nên dùng khi nào?

Hoàn hảo cho môi trường văn phòng, đi làm hằng ngày, dạo phố cuối tuần, hoặc khi không biết xịt gì. Dùng được quanh năm, tuyệt nhất là mùa xuân và thu mát mẻ.\`,
    verdict: "Chai nữ vani-cam sữa chua nịnh mũi — sạch sẽ, hiền dịu, rẻ nhất nhà Montblanc. Mùi hương 10 điểm cho dân văn phòng kiếm sự an toàn.",
    verdictShort: "SỮA CHUA CAM, AN TOÀN, VĂN PHÒNG",
    score: { scent: 8.5, uniqueness: 7.0, compliments: 8.5, value: 9.0, total: 8.2 },
    vibes: [{ label: "Nữ tính", icon: "🌸" }, { label: "Sạch sẽ", icon: "✨" }, { label: "Văn phòng", icon: "💻" }],
    longevity: 7,
    sillage: 6,
    seasons: { spring: 85, summer: 60, fall: 80, winter: 75 },
    dayNight: { day: 90, night: 40 },
    topNotes: [{ name: "Quýt Clementine" }],
    middleNotes: [{ name: "Hoa mộc lan" }, { name: "Ngọc lan tây" }, { name: "Hoa mẫu đơn" }],
    baseNotes: [{ name: "Vani" }, { name: "Xạ hương trắng" }, { name: "Cánh kiến trắng" }],
    accords: [
      { name: "Vani", value: 100, color: "#F5DEB3" },
      { name: "Hoa", value: 85, color: "#fc0384" },
      { name: "Cam chanh", value: 80, color: "#f1c40f" },
      { name: "Xạ hương", value: 75, color: "#bdc3c7" },
      { name: "Ngọt", value: 70, color: "#e74c3c" }
    ],
    seoTitle: "Nước hoa nữ Montblanc Signature EDP chính hãng mua ở đâu? Review",
    metaDescription: "Đánh giá nước hoa Montblanc Signature EDP cho nữ: mùi hương sữa chua cam dịu dàng, độ bám tỏa thực tế và tư vấn nơi mua uy tín.",
    tags: ["Nữ", "Văn phòng", "Hiền dịu", "An toàn"],
    sizes: ["10ml Chiết", "30ml Fullbox", "50ml Fullbox", "90ml Fullbox"],
    basePrice: 1650000,
    shopeeOffers: [],
    isPublished: true
  },`;
    
    data = data.replace(insertPoint, insertPoint + newProduct);
    fs.writeFileSync(filepath, data, 'utf8');
    console.log('Successfully inserted Montblanc Signature EDP into mockData.ts');
}
