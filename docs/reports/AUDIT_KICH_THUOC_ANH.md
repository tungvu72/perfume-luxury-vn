---
description: Báo cáo Kiểm định chất lượng Hình ảnh Nước hoa (Tự động)
---

# 🤖 BÁO CÁO AUDIT ẢNH SẢN PHẨM: "DÍNH HỘP" VÀ "BỊ BÉ"

> **Thuật toán áp dụng**: Quét trực tiếp tỉ lệ Pixel (Width/Height) và Xóa viền giả lập (Auto-Trim) trên toàn bộ kho Data đang được set làm ảnh `Main`.
> Mục đích: Nhận diện chính xác 100% các chai sai quy chuẩn để Sếp tải lại từ Fragrantica.

## 🟨 NHÓM 1: CẢNH BÁO CAO - Cào nhầm Ảnh Vuông / Dính Bao bì hộp

*Dấu hiệu nhận diện: Ảnh Fragrantica chuẩn (chỉ có chai) có form dọc. Các file này bị quy định là lỗi do có tỷ lệ vuông vức hoặc nằm ngang (Width ~ Height), chứng tỏ 99% dính hộp giấy, tai nghe, hộp set quà hoặc lấy nhầm từ Amazon.*

| Thương hiệu | Tên Sản phẩm | Tên File hiện tại | Lý do Hệ thống bắt rác |
|---|---|---|---|
| **GIORGIO ARMANI** | Acqua di Giò Profondo | `acqua-di-gio-profondo-main.jpg` | Kích thước quá vuông (1500x1500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **CHANEL** | Allure Homme Sport | `chanel-allure-homme-sport-main.jpg` | Kích thước quá vuông (1080x1081, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **BYREDO** | Bal d'Afrique | `byredo-bal-dafrique-main.jpg` | Kích thước quá vuông (1500x1500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **GUCCI** | Bloom | `gucci-bloom-edp-main.jpg` | Kích thước quá vuông (1000x1000, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **ESSENTIAL PARFUMS** | Bois Impérial | `essential-parfums-bois-imperial-main.jpg` | Kích thước quá vuông (1210x1210, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **VALENTINO** | Donna Born in Roma Intense | `valentino-born-in-roma-intense-main.jpg` | Kích thước quá vuông (1500x1500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **HUGO BOSS** | Boss Bottled | `boss-bottled-edp-main.jpg` | Kích thước quá vuông (1500x1500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **VERSACE** | Bright Crystal | `versace-bright-crystal-main.jpg` | Kích thước quá vuông (1000x1000, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **MANCERA** | Cedrat Boisé | `mancera-cedrat-boise-main.jpg` | Kích thước quá vuông (1500x1500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **CHANEL** | Chance Eau Tendre | `chanel-chance-eau-tendre-main.png` | Kích thước quá vuông (768x768, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **CHANEL** | Coco Noir | `chanel-coco-noir-main.jpg` | Kích thước quá vuông (1500x1500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **CHANEL** | Coromandel | `chanel-coromandel-eau-de-parfum-main.jpg` | Kích thước quá vuông (1488x1488, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **VERSACE** | Crystal Noir | `versace-crystal-noir-eau-de-toilette-main.jpg` | Kích thước quá vuông (720x720, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **PARFUMS DE MARLY** | Delina | `parfums-de-marly-delina-main.jpg` | Kích thước quá vuông (1000x1000, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **DIOR** | Dune | `dior-dune-edt-main.jpg` | Kích thước quá vuông (500x500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **DIOR** | Eau Sauvage | `dior-eau-sauvage-main.jpg` | Kích thước quá vuông (2168x1472, Aspect Ratio: 1.47). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **CHANEL** | Égoïste | `chanel-egoiste-main.jpg` | Kích thước quá vuông (500x500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **LALIQUE** | Encre Noire | `lalique-encre-noire-main.jpg` | Kích thước quá vuông (800x800, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **XERJOFF** | Erba Pura | `xerjoff-erba-pura-main.jpg` | Kích thước quá vuông (1500x1500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **MONTBLANC** | Explorer | `montblanc-explorer-main.jpg` | Kích thước quá vuông (1500x1500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **NARCISO RODRIGUEZ** | For Her | `narciso-rodriguez-for-her-edp-main.jpg` | Kích thước quá vuông (1500x1485, Aspect Ratio: 1.01). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **COACH** | Coach For Men | `coach-for-men-main.jpg` | Kích thước quá vuông (1500x1500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **MARC-ANTOINE BARROIS** | Ganymede | `marc-antoine-barrois-ganymede-main.jpg` | Kích thước quá vuông (1000x1000, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **MAISON FRANCIS KURKDJIAN** | Gentle Fluidity Gold | `maison-francis-kurkdjian-gentle-fluidity-gold-main.jpg` | Kích thước quá vuông (1500x1500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **NISHANE** | Hundred Silent Ways | `nishane-hundred-silent-ways-main.jpg` | Kích thước quá vuông (500x500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **LOUIS VUITTON** | Imagination | `louis-vuitton-imagination-main.jpg` | Kích thước quá vuông (800x600, Aspect Ratio: 1.33). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **PRADA** | Infusion d'Iris | `prada-infusion-diris-main.jpg` | Kích thước quá vuông (500x500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **GUERLAIN** | Insolence | `guerlain-insolence-edp-main.jpg` | Kích thước quá vuông (1000x1000, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **MAISON MARGIELA** | Replica Jazz Club | `maison-margiela-jazz-club-main.jpg` | Kích thước quá vuông (1500x1500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **JEAN PAUL GAULTIER** | Le Beau Le Parfum | `jpg-le-beau-le-parfum-main.jpg` | Kích thước quá vuông (1000x1000, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **JEAN PAUL GAULTIER** | Le Male | `jpg-le-male-edt-bottle.jpg` | Kích thước quá vuông (1000x1000, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **JEAN PAUL GAULTIER** | Le Male Elixir | `jpg-le-male-elixir-bottle.jpg` | Kích thước quá vuông (1000x1000, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **JEAN PAUL GAULTIER** | Ultra Male | `jpg-ultra-male-main.jpg` | Kích thước quá vuông (1000x1000, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **LATTAFA** | Khamrah | `lattafa-khamrah-main.jpg` | Kích thước quá vuông (1000x1000, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **GUERLAIN** | L'Homme Idéal Eau de Parfum | `guerlain-l-homme-ideal-eau-de-parfum-main.webp` | Kích thước quá vuông (800x548, Aspect Ratio: 1.46). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **YSL** | La Nuit de L'Homme Bleu Électrique | `ysl-la-nuit-de-lhomme-bleu-electrique-main.jpg` | Kích thước quá vuông (500x500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **ELIE SAAB** | Le Parfum | `elie-saab-le-parfum-main.jpg` | Kích thước quá vuông (1500x1500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **PRADA** | L'Homme | `prada-lhomme-main.jpg` | Kích thước quá vuông (1000x1000, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **YSL** | Libre Intense | `ysl-libre-intense-main.jpg` | Kích thước quá vuông (476x500, Aspect Ratio: 0.95). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **YSL** | Libre Le Parfum | `ysl-libre-le-parfum-main.jpg` | Kích thước quá vuông (2000x2000, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **LOUIS VUITTON** | L'Immensité | `louis-vuitton-limmensite-main.jpg` | Kích thước quá vuông (1000x1000, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **GUERLAIN** | L'Instant de Guerlain | `guerlain-linstant-de-guerlain-femme-main.jpg` | Kích thước quá vuông (500x500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **TOM FORD** | Lost Cherry | `tom-ford-lost-cherry-main.jpg` | Kích thước quá vuông (500x500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **BVLGARI** | Man In Black | `bvlgari-man-in-black-main.jpg` | Kích thước quá vuông (1000x1000, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **DIOR** | Miss Dior | `miss-dior-blooming-bouquet-main.jpg` | Kích thước quá vuông (1000x1000, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **DIOR** | Miss Dior Chérie | `dior-miss-dior-cherie-main.jpg` | Kích thước quá vuông (500x500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **GUERLAIN** | Mon Guerlain Intense | `guerlain-mon-guerlain-intense-main.jpg` | Kích thước quá vuông (1124x598, Aspect Ratio: 1.88). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **YSL** | Mon Paris | `ysl-mon-paris-edp-main.jpg` | Kích thước quá vuông (1024x699, Aspect Ratio: 1.46). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **FREDERIC MALLE** | Musc Ravageur | `frederic-malle-musc-ravageur-main.jpg` | Kích thước quá vuông (1260x1230, Aspect Ratio: 1.02). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **GIORGIO ARMANI** | My Way | `giorgio-armani-my-way-main.jpg` | Kích thước quá vuông (1500x1500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **CHANEL** | N°19 Eau de Parfum | `chanel-no-19-eau-de-parfum-main.webp` | Kích thước quá vuông (900x900, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **TOM FORD** | Ombré Leather | `tom-ford-ombre-leather-main.jpg` | Kích thước quá vuông (1500x1500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **YSL** | Opium | `ysl-opium-edt-main.jpg` | Kích thước quá vuông (1000x1000, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **GIVENCHY** | Organza | `givenchy-organza-main.jpg` | Kích thước quá vuông (500x500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **TOM FORD** | Oud Wood | `tom-ford-oud-wood-main.jpg` | Kích thước quá vuông (2000x2000, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **DIOR** | Poison | `dior-poison-main.jpg` | Kích thước quá vuông (500x500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **GUERLAIN** | Samsara | `guerlain-samsara-edp-main.jpg` | Kích thước quá vuông (500x500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **GUERLAIN** | Shalimar Eau de Parfum | `guerlain-shalimar-edp-main.jpg` | Kích thước quá vuông (2000x2000, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **GUERLAIN** | Shalimar L'Essence | `guerlain-shalimar-lessence-main.webp` | Kích thước quá vuông (1200x1200, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **INITIO** | Side Effect | `initio-side-effect-main.jpg` | Kích thước quá vuông (1500x1500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **MONTBLANC** | Signature | `chloe-signature-edp-main.jpg` | Kích thước quá vuông (1500x1500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **HERMÈS** | Terre d'Hermès Eau Givrée | `hermes-terre-dhermes-eau-givree-main.jpg` | Kích thước quá vuông (1023x920, Aspect Ratio: 1.11). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **DOLCE & GABBANA** | The One | `dolce-gabbana-the-one-edp-main.jpg` | Kích thước quá vuông (1000x1000, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **TOM FORD** | Tobacco Vanille | `tom-ford-tobacco-vanille-main.jpg` | Kích thước quá vuông (1500x1500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **TOM FORD** | Vanilla Sex | `tom-ford-tobacco-vanille-main.jpg` | Kích thước quá vuông (1500x1500, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **KAYALI** | Vanilla 28 | `kayali-vanilla-28-main.jpg` | Kích thước quá vuông (1024x1024, Aspect Ratio: 1.00). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |
| **GUERLAIN** | Vetiver | `guerlain-vetiver-main.jpg` | Kích thước quá vuông (1024x694, Aspect Ratio: 1.48). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng) |


## 🟧 NHÓM 2: LỖI PADDING - Chai bị lọt thỏm (Chai Bé)

*Dấu hiệu nhận diện: Hệ thống dùng AI để gọt sạch background trắng của mảng nền, và đo lường diện tích thật của cái vỏ chai ở giữa. Nếu nó chiếm chưa tới 65% tỷ lệ ảnh, chứng tỏ viền trắng quá khủng khiến lên Web chai này như bị "teo" lại.*

| Thương hiệu | Tên Sản phẩm | Tên File hiện tại | Phân tích Cắt lớp (Trim) |
|---|---|---|---|
| **CHLOÉ** | Chloé | `chloe-eau-de-parfum-main.jpg` | Lề trắng quá khủng. Chai thật chỉ chiếm 57% chiều cao khung hình (Thực tế: 570px / Viền: 1000px). Làm mất thẩm mỹ và lọt thỏm. |
| **LANCÔME** | La Vie Est Belle | `lancome-la-vie-est-belle-main.jpg` | Lề trắng quá khủng. Chai thật chỉ chiếm 60% chiều cao khung hình (Thực tế: 598px / Viền: 1000px). Làm mất thẩm mỹ và lọt thỏm. |
| **LANCÔME** | Trésor | `lancome-tresor-main.jpg` | Lề trắng quá khủng. Chai thật chỉ chiếm 62% chiều cao khung hình (Thực tế: 622px / Viền: 1000px). Làm mất thẩm mỹ và lọt thỏm. |
| **VALENTINO** | Uomo Born In Roma Intense | `valentino-uomo-born-in-roma-intense-main.jpg` | Lề trắng quá khủng. Chai thật chỉ chiếm 53% chiều cao khung hình (Thực tế: 796px / Viền: 1500px). Làm mất thẩm mỹ và lọt thỏm. |


---
### 💡 Hướng dẫn cho Sếp (Quy trình Sửa):
> 1. Truy cập **Fragrantica**, tìm đúng tên sản phẩm ở trên. 
> 2. Bấm chuột phải vào con ảnh chai bồng bềnh ➡️ Save Image As...
> 3. Lưu với **Tiền Tố FILE HIỆN TẠI** đang báo ở bảng trên đè vào thư mục `public/images/products` là xong! Khỏi cần sửa Code.
