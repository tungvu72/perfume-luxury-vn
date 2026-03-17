# BATCH 1A — HANDOFF CHO CODER
**Từ:** Anti (ops) | **Cho:** Coder Bot | **Date:** 2026-03-16

---

## Tình trạng
- Anti đã inject draft `seoTitle` + `metaDescription` cho 58 SP vào `mockData.ts`
- Build pass, type đã thêm, data đã vào file
- **Status: NEEDS CODER REVIEW** — draft do Anti viết, chưa phải final

## Coder cần làm gì
1. Review 58 cặp seoTitle + metaDescription bên dưới
2. Sửa/rewrite nếu cần (wording, keyword, độ dài, tone)
3. Trả lại content pack final dưới dạng object JS

## Quy tắc SEO
- `seoTitle`: 50-60 ký tự, tự nhiên, có tên SP + brand + intent tìm kiếm
- `metaDescription`: 150-160 ký tự, rõ nghĩa, không nhồi keyword
- Tiếng Việt chuẩn, đúng dấu

## File cần sửa
`src/constants/mockData.ts`

---

## Draft hiện tại (58 SP)

```javascript
const BATCH_1A_SEO = {
  "sauvage-elixir": {
    // DIOR | Sauvage Elixir
    seoTitle: "Dior Sauvage Elixir — Đánh Giá Chi Tiết & Mùi Hương 2026",
    metaDescription: "Review Dior Sauvage Elixir: mùi nam gia vị đậm, cay, lưu hương cực tốt. Phân tích nốt hương, hiệu năng thực tế và hoàn cảnh phù hợp tại Việt Nam.",
  },
  "armani-stronger-with-you-intensely": {
    // GIORGIO ARMANI | Stronger With You Intensely
    seoTitle: "Armani Stronger With You Intensely — Review & Đánh Giá 2026",
    metaDescription: "Review Armani Stronger With You Intensely EDP: mùi ngọt ấm dễ gây thiện cảm, hợp hẹn hò và đi tối. Phân tích mùi hương, độ lưu và tỏa hương thực tế.",
  },
  "lattafa-khamrah": {
    // LATTAFA | Khamrah
    seoTitle: "Lattafa Khamrah — Review Nước Hoa Unisex Ngọt Đậm 2026",
    metaDescription: "Review Lattafa Khamrah EDP: nước hoa unisex ngọt đậm, ấm, gia vị Trung Đông. Hiệu năng vượt tầm giá, hợp đi tối và trời mát tại Việt Nam.",
  },
  "bleu-chanel-edp": {
    // CHANEL | Bleu de Chanel
    seoTitle: "Bleu de Chanel EDP — Đánh Giá Chi Tiết Nước Hoa Nam 2026",
    metaDescription: "Review Bleu de Chanel Eau de Parfum: nước hoa nam sang, sạch, đa dụng hàng đầu. Phân tích mùi hương, hiệu năng và so sánh EDT vs EDP vs Parfum.",
  },
  "ysl-black-opium": {
    // YVES SAINT LAURENT | Black Opium
    seoTitle: "YSL Black Opium EDP — Review Nước Hoa Nữ Quyến Rũ 2026",
    metaDescription: "Review YSL Black Opium Eau de Parfum: nước hoa nữ ngọt cà phê, gợi cảm, cá tính. Phân tích mùi hương, độ lưu và hoàn cảnh dùng tốt nhất.",
  },
  "creed-aventus": {
    // CREED | Aventus
    seoTitle: "Creed Aventus — Review Nước Hoa Nam Cao Cấp Biểu Tượng 2026",
    metaDescription: "Review Creed Aventus EDP: nước hoa nam trái cây khói huyền thoại, khí chất lãnh đạo. Phân tích mùi hương, batch, hiệu năng và giá trị thực tế.",
  },
  "baccarat-rouge-540": {
    // MAISON FRANCIS KURKDJIAN | Baccarat Rouge 540
    seoTitle: "MFK Baccarat Rouge 540 — Review Nước Hoa Unisex Sang Trọng 2026",
    metaDescription: "Review Maison Francis Kurkdjian Baccarat Rouge 540 EDP: mùi ngọt trong, sang, độ nhận diện cao. Phân tích mùi hương, hiệu năng và giá trị.",
  },
  "tom-ford-noir-extreme": {
    // TOM FORD | Noir Extreme
    seoTitle: "Tom Ford Noir Extreme EDP — Review Nước Hoa Nam Tối Sang 2026",
    metaDescription: "Review Tom Ford Noir Extreme: nước hoa nam ấm, tối, ngọt sang theo kiểu buổi tối. Phân tích nốt hương, hiệu năng và hoàn cảnh phù hợp.",
  },
  "dior-sauvage-edp": {
    // DIOR | Sauvage
    seoTitle: "Dior Sauvage EDP — Review Nước Hoa Nam Đa Dụng Nhất 2026",
    metaDescription: "Review Dior Sauvage Eau de Parfum: nước hoa nam sạch, nam tính, đa dụng hàng đầu. So sánh EDT vs EDP vs Parfum, hiệu năng thực tế tại Việt Nam.",
  },
  "ysl-y-edp": {
    // YVES SAINT LAURENT | Y
    seoTitle: "YSL Y EDP — Review Nước Hoa Nam Trẻ Trung Hiện Đại 2026",
    metaDescription: "Review YSL Y Eau de Parfum: nước hoa nam tươi, sạch, trẻ trung, dễ khen. Phân tích mùi hương, hiệu năng và so sánh EDT vs EDP vs Le Parfum.",
  },
  "versace-eros-edp": {
    // VERSACE | Eros
    seoTitle: "Versace Eros EDP — Review Nước Hoa Nam Ngọt Mát Nổi Bật 2026",
    metaDescription: "Review Versace Eros Eau de Parfum: mùi nam ngọt mát, trẻ, party vibe. Phân tích mùi hương, hiệu năng thực tế và so sánh EDT vs EDP vs Parfum.",
  },
  "acqua-di-gio-profondo": {
    // GIORGIO ARMANI | Acqua di Giò Profondo
    seoTitle: "Armani Acqua di Giò Profondo — Review Nước Hoa Nam Biển 2026",
    metaDescription: "Review Acqua di Giò Profondo EDP: nước hoa nam biển hiện đại, sạch sâu, dễ dùng quanh năm. Phân tích mùi hương, hiệu năng và hoàn cảnh dùng.",
  },
  "afnan-9pm": {
    // AFNAN | 9PM
    seoTitle: "Afnan 9PM — Review Nước Hoa Nam Ngọt Giá Tốt 2026",
    metaDescription: "Review Afnan 9PM EDP: nước hoa nam ngọt ấm giá mềm, hiệu năng tốt, hợp đi tối và hẹn hò. Phân tích mùi hương và so sánh với JPG Ultra Male.",
  },
  "jpg-le-male-le-parfum": {
    // JEAN PAUL GAULTIER | Le Male Le Parfum
    seoTitle: "JPG Le Male Le Parfum — Review Nước Hoa Nam Ngọt Ấm 2026",
    metaDescription: "Review Jean Paul Gaultier Le Male Le Parfum: nước hoa nam ngọt vanilla, oải hương, quyến rũ. Phân tích mùi hương, hiệu năng và so sánh dòng Le Male.",
  },
  "jpg-ultra-male": {
    // JEAN PAUL GAULTIER | Ultra Male
    seoTitle: "JPG Ultra Male — Review Nước Hoa Nam Ngọt Nổi Bật 2026",
    metaDescription: "Review Jean Paul Gaultier Ultra Male: mùi nam ngọt lê, vanilla, bùng nổ, hợp đi tối và party. Phân tích mùi hương, hiệu năng thực tế tại Việt Nam.",
  },
  "montblanc-explorer": {
    // MONTBLANC | Explorer
    seoTitle: "Montblanc Explorer — Review Nước Hoa Nam Phiêu Lưu 2026",
    metaDescription: "Review Montblanc Explorer EDP: nước hoa nam gỗ, da, bergamot, phong cách phiêu lưu. Phân tích mùi hương, hiệu năng và so sánh với Aventus.",
  },
  "prada-lhomme": {
    // PRADA | L'Homme
    seoTitle: "Prada L'Homme — Review Nước Hoa Nam Thanh Lịch 2026",
    metaDescription: "Review Prada L'Homme EDT: nước hoa nam iris, xà phòng sạch, thanh lịch, hợp văn phòng. Phân tích mùi hương, hiệu năng và hoàn cảnh dùng tốt nhất.",
  },
  "terre-dhermes-edt": {
    // HERMÈS | Terre d'Hermès
    seoTitle: "Hermès Terre d'Hermès EDT — Review Nước Hoa Nam Đất 2026",
    metaDescription: "Review Terre d'Hermès Eau de Toilette: nước hoa nam cam, gỗ, đất, trưởng thành. Phân tích mùi hương, hiệu năng và hoàn cảnh phù hợp tại Việt Nam.",
  },
  "dior-homme-intense": {
    // DIOR | Dior Homme Intense
    seoTitle: "Dior Homme Intense — Review Nước Hoa Nam Iris Quyến Rũ 2026",
    metaDescription: "Review Dior Homme Intense EDP: nước hoa nam iris, cacao, quyến rũ, hợp hẹn hò và đi tối. Phân tích mùi hương, hiệu năng và so sánh dòng Dior Homme.",
  },
  "valentino-uomo-born-in-roma-intense": {
    // VALENTINO | Uomo Born In Roma Intense
    seoTitle: "Valentino Uomo Born In Roma Intense — Review Nam 2026",
    metaDescription: "Review Valentino Uomo Born In Roma Intense: nước hoa nam ngọt gia vị, smoked vanilla, mạnh mẽ. Phân tích mùi hương, hiệu năng và hoàn cảnh dùng.",
  },
  "jpg-le-beau-le-parfum": {
    // JEAN PAUL GAULTIER | Le Beau Le Parfum
    seoTitle: "JPG Le Beau Le Parfum — Review Nước Hoa Nam Dừa 2026",
    metaDescription: "Review Jean Paul Gaultier Le Beau Le Parfum: nước hoa nam dừa, vanilla, coconut, hè nhiệt đới. Phân tích mùi hương, hiệu năng thực tế tại Việt Nam.",
  },
  "mancera-cedrat-boise": {
    // MANCERA | Cedrat Boise
    seoTitle: "Mancera Cedrat Boise — Review Nước Hoa Unisex Citrus Gỗ 2026",
    metaDescription: "Review Mancera Cedrat Boise EDP: nước hoa unisex cam chanh, gỗ, da, mạnh mẽ và bền. Phân tích mùi hương, hiệu năng và so sánh với Aventus.",
  },
  "maison-margiela-jazz-club": {
    // MAISON MARGIELA | Jazz Club
    seoTitle: "Maison Margiela Jazz Club — Review Nước Hoa Nam Ấm 2026",
    metaDescription: "Review Maison Margiela Jazz Club EDT: nước hoa nam rum, thuốc lá, da, không khí quán bar. Phân tích mùi hương, hiệu năng và hoàn cảnh phù hợp.",
  },
  "kilian-angels-share": {
    // KILIAN | Angels' Share
    seoTitle: "Kilian Angels' Share — Review Nước Hoa Unisex Cognac 2026",
    metaDescription: "Review Kilian Angels' Share EDP: nước hoa unisex cognac, quế, vanilla, sang trọng. Phân tích mùi hương, hiệu năng và hoàn cảnh phù hợp tại Việt Nam.",
  },
  "ysl-libre-edp": {
    // YVES SAINT LAURENT | Libre
    seoTitle: "YSL Libre EDP — Review Nước Hoa Nữ Tự Do Cuốn Hút 2026",
    metaDescription: "Review YSL Libre Eau de Parfum: nước hoa nữ oải hương, cam, vanilla, phong cách tự do. Phân tích mùi hương, hiệu năng và so sánh dòng Libre.",
  },
  "parfums-de-marly-delina": {
    // PARFUMS DE MARLY | Delina
    seoTitle: "Parfums de Marly Delina — Review Nước Hoa Nữ Hoa Hồng 2026",
    metaDescription: "Review Parfums de Marly Delina EDP: nước hoa nữ hoa hồng, litchi, vanilla, nữ tính sang trọng. Phân tích mùi hương, hiệu năng và giá trị thực tế.",
  },
  "carolina-herrera-good-girl": {
    // CAROLINA HERRERA | Good Girl
    seoTitle: "Carolina Herrera Good Girl — Review Nước Hoa Nữ 2026",
    metaDescription: "Review Carolina Herrera Good Girl EDP: nước hoa nữ cà phê, hoa nhài, hoa tuberose, gợi cảm. Phân tích mùi hương, hiệu năng và hoàn cảnh dùng.",
  },
  "lancome-la-vie-est-belle": {
    // LANCOME | La Vie Est Belle
    seoTitle: "Lancôme La Vie Est Belle — Review Nước Hoa Nữ Ngọt 2026",
    metaDescription: "Review Lancôme La Vie Est Belle EDP: nước hoa nữ iris, praline, vanilla, ngọt sang. Phân tích mùi hương, hiệu năng và hoàn cảnh phù hợp tại Việt Nam.",
  },
  "valentino-born-in-roma-intense": {
    // VALENTINO | Born In Roma Intense
    seoTitle: "Valentino Donna Born In Roma Intense — Review Nữ 2026",
    metaDescription: "Review Valentino Donna Born In Roma Intense: nước hoa nữ vanilla, jasmine, ngọt ấm sang trọng. Phân tích mùi hương, hiệu năng và hoàn cảnh dùng.",
  },
  "azzaro-the-most-wanted-parfum": {
    // AZZARO | The Most Wanted
    seoTitle: "Azzaro The Most Wanted Parfum — Review Nước Hoa Nam 2026",
    metaDescription: "Review Azzaro The Most Wanted Parfum: nước hoa nam irresistible, ngọt ấm, toffee, hợp hẹn hò. Phân tích mùi hương, hiệu năng và hoàn cảnh dùng.",
  },
  "mancera-instant-crush": {
    // MANCERA | Instant Crush
    seoTitle: "Mancera Instant Crush — Review Nước Hoa Unisex 2026",
    metaDescription: "Review Mancera Instant Crush EDP: nước hoa unisex hoa hồng, oud, vanilla, mạnh và cuốn. Phân tích mùi hương, hiệu năng và hoàn cảnh phù hợp.",
  },
  "kayali-vanilla-28": {
    // KAYALI | Vanilla 28
    seoTitle: "Kayali Vanilla 28 — Review Nước Hoa Nữ Vanilla Ngọt 2026",
    metaDescription: "Review Kayali Vanilla 28 EDP: nước hoa nữ vanilla ngọt ngào, ấm, gourmand, dễ thương. Phân tích mùi hương, hiệu năng và hoàn cảnh dùng tốt nhất.",
  },
  "prada-luna-rossa-carbon": {
    // PRADA | Luna Rossa Carbon
    seoTitle: "Prada Luna Rossa Carbon — Review Nước Hoa Nam Thể Thao 2026",
    metaDescription: "Review Prada Luna Rossa Carbon EDT: nước hoa nam lavender, ambroxan, sạch hiện đại. Phân tích mùi hương, hiệu năng và so sánh với Sauvage.",
  },
  "dolce-gabbana-the-one-edp": {
    // DOLCE & GABBANA | The One
    seoTitle: "Dolce & Gabbana The One EDP — Review Nước Hoa Nam 2026",
    metaDescription: "Review D&G The One Eau de Parfum: nước hoa nam ấm, gia vị, hổ phách, quý phái. Phân tích mùi hương, hiệu năng và hoàn cảnh dùng tại Việt Nam.",
  },
  "giorgio-armani-my-way": {
    // GIORGIO ARMANI | My Way
    seoTitle: "Armani My Way — Review Nước Hoa Nữ Hoa Tươi 2026",
    metaDescription: "Review Giorgio Armani My Way EDP: nước hoa nữ hoa nhài, tuberose, vanilla, tươi nữ tính. Phân tích mùi hương, hiệu năng và hoàn cảnh dùng.",
  },
  "burberry-her-edp": {
    // BURBERRY | Her
    seoTitle: "Burberry Her EDP — Review Nước Hoa Nữ Quả Mọng 2026",
    metaDescription: "Review Burberry Her Eau de Parfum: nước hoa nữ dâu tây, quả mọng, vanilla, ngọt trẻ trung. Phân tích mùi hương, hiệu năng và hoàn cảnh dùng.",
  },
  "gucci-bloom-edp": {
    // GUCCI | Bloom
    seoTitle: "Gucci Bloom — Review Nước Hoa Nữ Hoa Trắng 2026",
    metaDescription: "Review Gucci Bloom EDP: nước hoa nữ hoa nhài, tuberose, rangoon creeper, hoa trắng nồng nàn. Phân tích mùi hương, hiệu năng thực tế tại Việt Nam.",
  },
  "miss-dior-blooming-bouquet": {
    // DIOR | Miss Dior
    seoTitle: "Miss Dior Blooming Bouquet — Review Nước Hoa Nữ 2026",
    metaDescription: "Review Miss Dior Blooming Bouquet EDT: nước hoa nữ hoa mẫu đơn, hoa hồng, tươi nhẹ nữ tính. Phân tích mùi hương, hiệu năng và hoàn cảnh dùng.",
  },
  "chloe-signature-edp": {
    // CHLOE | Signature
    seoTitle: "Chloé Signature EDP — Review Nước Hoa Nữ Hoa Hồng 2026",
    metaDescription: "Review Chloé Signature Eau de Parfum: nước hoa nữ hoa hồng, mẫu đơn, thanh lịch, nữ tính. Phân tích mùi hương, hiệu năng và hoàn cảnh dùng.",
  },
  "narciso-rodriguez-for-her-edp": {
    // NARCISO RODRIGUEZ | For Her
    seoTitle: "Narciso Rodriguez For Her EDP — Review Nước Hoa Nữ 2026",
    metaDescription: "Review Narciso Rodriguez For Her EDP: nước hoa nữ xạ hương, ấm, gợi cảm, tinh tế. Phân tích mùi hương, hiệu năng và hoàn cảnh phù hợp tại Việt Nam.",
  },
  "ysl-mon-paris-edp": {
    // YVES SAINT LAURENT | Mon Paris
    seoTitle: "YSL Mon Paris EDP — Review Nước Hoa Nữ Lãng Mạn 2026",
    metaDescription: "Review YSL Mon Paris Eau de Parfum: nước hoa nữ dâu tây, hoa mẫu đơn, vanilla, lãng mạn. Phân tích mùi hương, hiệu năng và hoàn cảnh dùng.",
  },
  "versace-bright-crystal": {
    // VERSACE | Bright Crystal
    seoTitle: "Versace Bright Crystal — Review Nước Hoa Nữ Tươi Mát 2026",
    metaDescription: "Review Versace Bright Crystal EDT: nước hoa nữ tươi, hoa, mát, dễ dùng hằng ngày. Phân tích mùi hương, hiệu năng và hoàn cảnh phù hợp tại Việt Nam.",
  },
  "dolce-gabbana-light-blue-pour-femme": {
    // DOLCE & GABBANA | Light Blue Pour Femme
    seoTitle: "D&G Light Blue Pour Femme — Review Nước Hoa Nữ Biển 2026",
    metaDescription: "Review Dolce & Gabbana Light Blue Pour Femme EDT: nước hoa nữ cam chanh, táo, biển, mát tươi. Phân tích mùi hương, hiệu năng và hoàn cảnh dùng.",
  },
  "armani-si-edp": {
    // GIORGIO ARMANI | Sì
    seoTitle: "Armani Sì EDP — Review Nước Hoa Nữ Thanh Lịch 2026",
    metaDescription: "Review Giorgio Armani Sì Eau de Parfum: nước hoa nữ lý chua đen, vanilla, thanh lịch nữ tính. Phân tích mùi hương, hiệu năng và hoàn cảnh dùng.",
  },
  "chanel-coco-mademoiselle-edp": {
    // CHANEL | Coco Mademoiselle
    seoTitle: "Chanel Coco Mademoiselle EDP — Review Nước Hoa Nữ 2026",
    metaDescription: "Review Chanel Coco Mademoiselle Eau de Parfum: nước hoa nữ cam, hoa hồng, hoắc hương, sang trọng. Phân tích mùi hương, hiệu năng thực tế.",
  },
  "armaf-club-de-nuit-intense-man": {
    // ARMAF | Club de Nuit Intense Man
    seoTitle: "Armaf Club de Nuit Intense Man — Review Nước Hoa Nam 2026",
    metaDescription: "Review Armaf Club de Nuit Intense Man EDP: nước hoa nam citrus, gỗ, khói, giá tốt. Phân tích mùi hương, hiệu năng và so sánh với Creed Aventus.",
  },
  "givenchy-gentleman-reserve-privee": {
    // GIVENCHY | Gentleman Réserve Privée
    seoTitle: "Givenchy Gentleman Réserve Privée — Review Nam 2026",
    metaDescription: "Review Givenchy Gentleman Réserve Privée EDP: nước hoa nam iris, gỗ, ấm sang trọng. Phân tích mùi hương, hiệu năng và so sánh dòng Gentleman.",
  },
  "viktor-rolf-spicebomb-extreme": {
    // VIKTOR&ROLF | Spicebomb Extreme
    seoTitle: "Viktor & Rolf Spicebomb Extreme — Review Nước Hoa Nam 2026",
    metaDescription: "Review Spicebomb Extreme EDP: nước hoa nam gia vị, thuốc lá, vanilla, mạnh bùng nổ. Phân tích mùi hương, hiệu năng và hoàn cảnh dùng tại Việt Nam.",
  },
  "issey-miyake-leau-dissey-pour-homme": {
    // ISSEY MIYAKE | L'Eau d'Issey Pour Homme
    seoTitle: "Issey Miyake L'Eau d'Issey Pour Homme — Review Nam 2026",
    metaDescription: "Review Issey Miyake L'Eau d'Issey Pour Homme EDT: nước hoa nam citrus, biển, gỗ, sạch nhẹ. Phân tích mùi hương, hiệu năng và hoàn cảnh dùng.",
  },
  "bvlgari-man-in-black": {
    // BVLGARI | Man In Black
    seoTitle: "Bvlgari Man In Black — Review Nước Hoa Nam Gia Vị 2026",
    metaDescription: "Review Bvlgari Man In Black EDP: nước hoa nam rum, gia vị, da, tối quyến rũ. Phân tích mùi hương, hiệu năng và hoàn cảnh phù hợp tại Việt Nam.",
  },
  "boss-bottled-edp": {
    // HUGO BOSS | Boss Bottled
    seoTitle: "Hugo Boss Bottled EDP — Review Nước Hoa Nam Lịch Lãm 2026",
    metaDescription: "Review Hugo Boss Bottled Eau de Parfum: nước hoa nam gỗ, gia vị, iris, lịch lãm công sở. Phân tích mùi hương, hiệu năng và hoàn cảnh dùng.",
  },
  "coach-for-men": {
    // COACH | For Men
    seoTitle: "Coach For Men — Review Nước Hoa Nam Tươi Mát 2026",
    metaDescription: "Review Coach For Men EDT: nước hoa nam lê, gỗ, da thuộc, tươi hiện đại. Phân tích mùi hương, hiệu năng và hoàn cảnh dùng tốt nhất tại Việt Nam.",
  },
  "moschino-toy-boy": {
    // MOSCHINO | Toy Boy
    seoTitle: "Moschino Toy Boy — Review Nước Hoa Nam Gia Vị Hoa 2026",
    metaDescription: "Review Moschino Toy Boy EDP: nước hoa nam gia vị, hoa hồng, gỗ đàn hương, cá tính nổi bật. Phân tích mùi hương, hiệu năng và hoàn cảnh dùng.",
  },
  "initio-side-effect": {
    // INITIO | Side Effect
    seoTitle: "Initio Side Effect — Review Nước Hoa Unisex Rum Vanilla 2026",
    metaDescription: "Review Initio Side Effect EDP: nước hoa unisex rum, vanilla, hổ phách, ngọt ấm sang. Phân tích mùi hương, hiệu năng và hoàn cảnh phù hợp.",
  },
  "xerjoff-erba-pura": {
    // XERJOFF | Erba Pura
    seoTitle: "Xerjoff Erba Pura — Review Nước Hoa Unisex Trái Cây 2026",
    metaDescription: "Review Xerjoff Erba Pura EDP: nước hoa unisex trái cây, xạ hương trắng, ngọt sáng. Phân tích mùi hương, hiệu năng và hoàn cảnh dùng tại Việt Nam.",
  },
  "mugler-alien-edp": {
    // MUGLER | Alien
    seoTitle: "Mugler Alien EDP — Review Nước Hoa Nữ Hổ Phách Gỗ 2026",
    metaDescription: "Review Mugler Alien Eau de Parfum: nước hoa nữ hoa nhài, hổ phách, gỗ, mạnh mẽ cuốn hút. Phân tích mùi hương, hiệu năng và hoàn cảnh dùng.",
  },
  "elie-saab-le-parfum": {
    // ELIE SAAB | Le Parfum
    seoTitle: "Elie Saab Le Parfum — Review Nước Hoa Nữ Hoa Cam 2026",
    metaDescription: "Review Elie Saab Le Parfum EDP: nước hoa nữ hoa cam, hoa nhài, hoắc hương, sang trọng nữ tính. Phân tích mùi hương, hiệu năng thực tế.",
  },
  "maison-francis-kurkdjian-gentle-fluidity-gold": {
    // MAISON FRANCIS KURKDJIAN | Gentle Fluidity Gold
    seoTitle: "MFK Gentle Fluidity Gold — Review Nước Hoa Unisex 2026",
    metaDescription: "Review MFK Gentle Fluidity Gold EDP: nước hoa unisex vanilla, xạ hương, ấm mượt thanh lịch. Phân tích mùi hương, hiệu năng và hoàn cảnh dùng.",
  },
};
```

---

## Format Coder trả lại

```
✅ Content pack ready
- File: src/constants/mockData.ts
- Slugs covered: 58
- Ready to paste: Yes
```

Kèm object JS final với seoTitle + metaDescription đã review/rewrite. Anti sẽ chạy script inject, build, verify, report.
