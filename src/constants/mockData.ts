import { Perfume } from "../types";

export const MASTER_PERFUMES: Perfume[] = [
    {
        id: "sauvage-elixir",
        brandSlug: "dior",
        brand: "DIOR",
        name: "Sauvage Elixir",
        subName: "Parfum",
        perfumer: "François Demachy",
        gender: "nam",
        image: "https://fimgs.net/images/perfume/o.68415.png",
        images: [
            { url: "https://fimgs.net/photogram/p1200/sj/sr/wJM8xkxTDAklwkjT.jpg", source: "fragram", caption: "Thiết kế đậm nét nam tính Dior" },
            { url: "https://fimgs.net/photogram/p1200/me/ej/DvNET49ViI73vLmi.jpg", source: "fragram", caption: "Cận cảnh thân chai và nắp sang trọng" },
            { url: "https://fimgs.net/photogram/p1200/lz/66/idIA4dIrymIVcQFO.jpg", source: "fragram", caption: "Màu nước đêm xanh sâu thẳm" }
        ],
        description: "Siêu phẩm đậm đặc và uy lực nhất của dòng Sauvage, mang đến một định nghĩa mới về sự nam tính hiện đại. Một kỳ quan của François Demachy với các nốt gia vị ấm nóng quyện với gỗ đàn hương thượng hạng.",
        article: `Dior Sauvage Elixir không chỉ là một chai nước hoa, mà là một kỳ quan của mùi hương nam giới thế kỷ 21.

### 1. Lịch sử Ra đời & Bối cảnh
Ra mắt năm 2021 tại Pháp, được sáng tác bởi nhà tạo hương **François Demachy** - Giám đốc Sáng tạo hương độc quyền của Dior từ 2006. Elixir là đỉnh cao của dòng Sauvage, ra đời với sứ mệnh tạo ra phiên bản "hoàn toàn trưởng thành và quyền lực" nhất.

### 2. Câu chuyện & Các phiên bản Sauvage
Cảm hứng từ vùng hoang dã nước Pháp - cao nguyên Provence với oải hương thuần khiết, cùng núi đá Massif Central. Dior Sauvage là câu chuyện về người đàn ông tự do và phong trần.

**Tất cả phiên bản Sauvage:**
- **Sauvage EDT (2015)** - bản gốc, tươi mát nhất
- **Sauvage EDP (2018)** - đậm hơn, thêm lavender Provence
- **Sauvage Parfum (2019)** - sandalwood dẫn đầu, ấm và sang
- **Sauvage Elixir (2021)** - nồng độ cao nhất, uy lực tuyệt đối

### 3. Đánh giá Thị trường
Được cộng đồng Fragrantica đánh giá **4.4/5** với hơn 22.000 ratings. Thuộc top 5 nước hoa nam được tìm kiếm nhiều nhất tại VN trên Google (2023-2024). Bán chạy nhất tại: Pháp, Mỹ, Anh, UAE. Đối tượng chính: Nam 25-40 tuổi, phong cách lịch sự-phong trần.

### 4. Maison de SON's Verdict & Cam kết
Dior Sauvage Elixir là khoản đầu tư xứng đáng. Hiệu năng vượt xa mọi chai cùng phân khúc Designer - chỉ 2-3 xịt là đủ cho cả ngày dài.

**Maison de SON cam kết:** Chúng tôi là địa chỉ uy tín số 1 về nước hoa chính hãng tại Việt Nam. Phát hiện không đúng chính hãng - **đền bù 10 triệu đồng**.

**Nhận biết Sauvage Elixir thật:**
- Nước có màu xanh đậm trong suốt, không đục
- Nắp chai nặng, logo Dior dập nổi sắc nét
- Mùi mở đầu bùng mạnh gia vị - không có alcohol harsh
- Tem hologram chính hãng ở đáy hộp`,
        verdict: "Kỳ quan của François Demachy. Quyền lực, nam tính và khả năng tỏa hương khổng lồ vượt xa mọi giới hạn nước hoa Designer.",
        verdictShort: "UY LỰC & NAM TÍNH TUYỆT ĐỐI",
        score: { scent: 9.3, uniqueness: 9.0, compliments: 9.5, value: 8.5, total: 9.1 },
        vibes: [
            { label: "Quyền lực", icon: "👑" },
            { label: "Tiệc tối", icon: "🍸" },
            { label: "Gây ấn tượng", icon: "💥" },
            { label: "Trưởng thành", icon: "🧔" }
        ],
        longevity: 9,
        sillage: 10,
        seasons: { spring: 40, summer: 20, fall: 90, winter: 100 },
        dayNight: { day: 30, night: 100 },
        topNotes: [{ name: "Quế" }, { name: "Bạch đậu khấu" }, { name: "Nhục đậu khấu" }, { name: "Bưởi" }],
        middleNotes: [{ name: "Hoa oải hương" }],
        baseNotes: [{ name: "Cam thảo" }, { name: "Gỗ đàn hương" }, { name: "Hổ phách" }, { name: "Tiêu" }, { name: "Hoắc hương" }],
        accords: [
            { name: "Gia vị ấm", value: 100, color: "#e67e22" },
            { name: "Gia vị tươi", value: 85, color: "#2ecc71" },
            { name: "Gỗ", value: 80, color: "#8B4513" },
            { name: "Aromatic", value: 75, color: "#1abc9c" },
            { name: "Oải hương", value: 65, color: "#9b59b6" }
        ],
        sizes: ["10ml Chiết", "60ml Fullbox", "100ml Fullbox"],
        basePrice: 5400000,
        tags: ["Sát Thủ Hẹn Hò", "Siêu Lưu Toả", "Tiệc Tối", "Mùa Đông"],
        shopeeOffers: []
    },
    {
        id: "armani-stronger-with-you",
        brandSlug: "armani",
        brand: "GIORGIO ARMANI",
        name: "Stronger With You Intensely",
        subName: "Eau de Parfum",
        perfumer: "Antoine Maisondieu & Fabrice Pellegrin",
        gender: "nam",
        image: "https://fimgs.net/images/perfume/o.52802.jpg",
        images: [
            { url: "https://fimgs.net/photogram/p1200/o9/52/OaM5Gh5gSyEBgZZO.jpg", source: "fragram", caption: "Cận cảnh thiết kế chai mạnh mẽ" },
            { url: "https://fimgs.net/photogram/p1200/dn/jf/NGDPqasxuHSvIorx.jpg", source: "fragram", caption: "Màu nước hổ phách đầy quyến rũ" },
            { url: "https://fimgs.net/photogram/p1200/kj/ab/Rp3mQcXbNjTaKsLw.jpg", source: "fragram", caption: "Stronger With You Intensely - vũ khí mùa đông" }
        ],
        description: "Mùi hương ngọt ngào, ấm áp và có sức hút mãnh liệt, là vũ khí tối thượng cho những buổi hẹn hò đêm đông.",
        article: `Giorgio Armani Stronger With You Intensely (SWYI) là định nghĩa hoàn hảo cho một mùi hương nịnh mũi nhưng vẫn đầy đẳng cấp.

### 1. Lịch sử Ra đời & Bối cảnh
Ra mắt năm **2019** tại Ý/Pháp, sáng tác bởi **Antoine Maisondieu & Fabrice Pellegrin** (Givaudan). Được thiết kế là phiên bản "mạnh mẽ hơn, ấm hơn, quyện hơn" so với Stronger With You EDP gốc (2017). Chai được truyền cảm hứng từ cảm giác cầm tay người thương giữa đêm đông lạnh.

### 2. Câu chuyện & Các phiên bản
**Tất cả phiên bản Stronger With You:**
- **Stronger With You EDT (2017)** - bản gốc, nhẹ và tươi hơn
- **Stronger With You EDP (2019)** - đầy đặn, sang hơn
- **Stronger With You Intensely (2019)** - ngọt nhất, beast mode
- **Stronger With You Absolutely (2022)** - phiên bản Parfum, bám lâu nhất

### 3. Đánh giá Thị trường
Fragrantica: **4.19/5** với hơn 30.000 ratings. Liên tục nằm trong top 10 "Best Compliment Getters" mỗi năm trên Reddit r/fragrance. Bán chạy nhất mùa Thu/Đông tại: Ý, Tây Ban Nha, VN, Đông Nam Á. Đối tượng: Nam 22-35 tuổi.

### 4. Maison de SON's Verdict & Cam kết
SWYI là chai "không thể sai" cho mùa lạnh. Ngọt ngào, sang trọng và là compliment magnet đỉnh nhất tầm giá.

**Maison de SON cam kết:** 100% hàng chính hãng. Phát hiện không đúng - **đền bù 10 triệu đồng**.

**Nhận biết SWYI Intensely thật:**
- Màu nước hổ phách sẫm, trong suốt
- Logo Armani dập chìm trên thân chai kim loại
- Mùi toffee ngọt xuất hiện ngay trong 5 giây đầu
- Serial number khắc dưới đáy chai khớp với hộp`,
        verdict: "Mùi hương đại diện cho sự ấm áp, chiều chuộng nhưng vẫn đầy nam tính. Độ bám tỏa cực mạnh, phù hợp cho những đêm tiệc hay buổi hẹn hò quan trọng.",
        verdictShort: "SÁT THỦ HẸN HÒ",
        score: { scent: 9.5, uniqueness: 8.5, compliments: 10, value: 9, total: 9.3 },
        vibes: [{ label: "Hẹn hò", icon: "❤️" }, { label: "Tiệc tối", icon: "🍸" }, { label: "Mùa đông", icon: "❄️" }],
        longevity: 9,
        sillage: 10,
        seasons: { spring: 8, summer: 4, fall: 39, winter: 100 },
        dayNight: { day: 31, night: 100 },
        topNotes: [{ name: "Hồng tiêu" }, { name: "Cây bách xù" }, { name: "Hoa tím" }],
        middleNotes: [{ name: "Kẹo Toffee" }, { name: "Quế" }, { name: "Hoa oải hương" }, { name: "Xô thơm" }],
        baseNotes: [{ name: "Vanilla" }, { name: "Hổ phách" }, { name: "Đậu Tonka" }, { name: "Da thuộc lộn" }],
        accords: [
            { name: "Vani", value: 100, color: "#f5deb3" },
            { name: "Ngọt ngào", value: 89, color: "#FF6D00" },
            { name: "Hổ phách", value: 60, color: "#FF8F00" },
            { name: "Gia vị ấm", value: 56, color: "#BF360C" },
            { name: "Bóng tối", value: 40, color: "#3E2723" }
        ],
        tags: ["Hẹn Hò", "Mùa Đông", "Siêu Toả"],
        sizes: ["10ml Chiết", "50ml Fullbox", "100ml Fullbox"],
        basePrice: 2850000,
        shopeeOffers: []
    },
    {
        id: "lattafa-khamrah",
        brandSlug: "lattafa",
        brand: "LATTAFA",
        name: "Khamrah",
        subName: "Eau de Parfum",
        perfumer: "Lattafa In-house",
        gender: "unisex",
        image: "https://fimgs.net/images/perfume/o.75805.png",
        images: [
            { url: "https://fimgs.net/images/perfume/o.75805.png", source: "studio", caption: "Thiết kế sang trọng kiểu Trung Đông" },
            { url: "https://fimgs.net/photogram/p1200/dt/hc/MUpUzcXkyrz09FHQ.jpg", source: "fragram", caption: "Cận cảnh nắp chai chạm khắc tinh xảo" },
            { url: "https://fimgs.net/photogram/p1200/gv/cm/oIBaXWckCsljEWm0.jpg", source: "fragram", caption: "Khamrah - hương Trung Đông quyến rũ" }
        ],
        description: "Một kiệt tác hương phương Đông ngọt ngào, quyến rũ với sự kết hợp hoàn hảo của chà là, vani và các loại gia vị ấm áp.",
        article: `Lattafa Khamrah là một trong những hiện tượng đình đám nhất trong cộng đồng yêu nước hoa những năm gần đây.

### 1. Lịch sử Ra đời & Bối cảnh
Ra mắt năm **2021** bởi nhà Lattafa Perfumes, thành lập tại **UAE (Dubai)**. Khamrah (tiếng Ả Rập: rượu/hương say) được tạo ra như một lời tuyên ngôn về sự xa hoa Trung Đông với mức giá dễ tiếp cận.

### 2. Câu chuyện & Phiên bản
Cảm hứng từ các loại rượu và gia vị đặc trưng Trung Đông. Lattafa không công bố tên Perfumer cụ thể - công thức được bảo mật nội bộ.

**Phiên bản:**
- **Khamrah EDP (2021)** - bản gốc và duy nhất hiện tại

### 3. Đánh giá Thị trường
Fragrantica: **4.21/5** với hơn 12.000 ratings. Viral mạnh trên TikTok với hashtag #khamrah vượt 800 triệu views. Được mệnh danh là "dupe killer" - chai budget có mùi đẳng cấp luxury. Bán chạy nhất tại: UAE, Ấn Độ, Pakistan, VN (2022-2024).

### 4. Maison de SON's Verdict & Cam kết
Khamrah là món hời thực sự - budget chai nhưng trải nghiệm luxury. Must-have cho ai yêu Gourmand.

**Maison de SON cam kết:** 100% hàng chính hãng. Phát hiện không đúng - **đền bù 10 triệu đồng**.

**Nhận biết Khamrah thật:**
- Chai thủy tinh nặng, nắp chạm khắc sắc nét không bị mờ
- Màu nước hổ phách sẫm, trong suốt
- Mùi chà là + praline ngọt bùng ngay khi xịt
- Tem Lattafa chính hãng ở đáy hộp`,
        verdict: "Một trong những chai nước hoa đáng mua nhất tầm giá dưới 2 triệu. Độ bám tỏa cực tốt, mùi hương sang trọng và thiết kế chai như tác phẩm nghệ thuật.",
        verdictShort: "QUYẾN RŨ & SANG TRỌNG",
        score: { scent: 9.0, uniqueness: 8.8, compliments: 9.2, value: 10.0, total: 9.2 },
        vibes: [
            { label: "Quyến rũ", icon: "❤️" },
            { label: "Sang trọng", icon: "✨" },
            { label: "Ấm áp", icon: "🔥" }
        ],
        longevity: 9,
        sillage: 9,
        seasons: { spring: 30, summer: 10, fall: 90, winter: 100 },
        dayNight: { day: 20, night: 100 },
        topNotes: [{ name: "Quế" }, { name: "Nhục đậu khấu" }, { name: "Cam Bergamot" }],
        middleNotes: [{ name: "Chà là" }, { name: "Kẹo Praline" }, { name: "Hoa huệ" }, { name: "Mahonial" }],
        baseNotes: [{ name: "Vani" }, { name: "Đậu Tonka" }, { name: "Amberwood" }, { name: "Nhựa Myrrh" }, { name: "Benzoin" }, { name: "Akigalawood" }],
        accords: [
            { name: "Ngọt ngào", value: 100, color: "#ff69b4" },
            { name: "Gia vị ấm", value: 95, color: "#e67e22" },
            { name: "Vani", value: 90, color: "#f5deb3" },
            { name: "Hổ phách", value: 85, color: "#d4a017" },
            { name: "Gỗ", value: 70, color: "#8B4513" }
        ],
        tags: ["Best Seller", "Thu Đông", "Ngọt Ngào", "Siêu Toả"],
        sizes: ["10ml Chiết", "100ml Fullbox"],
        basePrice: 1250000,
        shopeeOffers: []
    },
    {
        id: "bleu-chanel-edp",
        brandSlug: "chanel",
        brand: "CHANEL",
        name: "Bleu de Chanel",
        subName: "Eau de Parfum",
        perfumer: "Olivier Polge",
        gender: "nam",
        image: "https://fimgs.net/images/perfume/o.20477.jpg?v=2",
        images: [
            { url: "https://fimgs.net/photogram/p1200/r0/jh/v3WD9dpMHiKQCANv.jpg", source: "fragram", caption: "Bleu de Chanel trong không gian hiện đại" },
            { url: "https://fimgs.net/photogram/p1200/tx/uc/StD7ym9jNPfntflA.jpg", source: "fragram", caption: "Chai Bleu de Chanel EDP sang trọng" },
            { url: "https://fimgs.net/photogram/p1200/lp/0x/Tcp2wAYGZrFnrLwl.jpg", source: "fragram", caption: "Bleu de Chanel - vẻ đẹp bất hủ" }
        ],
        description: "Mùi hương nam tính cổ điển và bất hủ của Chanel - tươi mát, sạch sẽ, đủ chiều sâu để không bao giờ lỗi thời.",
        article: `Bleu de Chanel EDP - chai nước hoa "không bao giờ sai" cho mọi người đàn ông.

### 1. Lịch sử Ra đời & Bối cảnh
**Bleu de Chanel EDP** ra mắt năm **2016** tại Pháp, được tạo ra bởi **Olivier Polge** - con trai của huyền thoại Jacques Polge, người kế thừa vị trí Giám đốc Sáng tạo hương của Chanel từ 2015. Đây là chai đánh dấu sự chuyển giao thế hệ tại House of Chanel. Bleu (xanh) - màu của tự do, bầu trời và sự sáng tạo.

### 2. Câu chuyện & Các phiên bản
Cảm hứng từ người đàn ông tự do, không bị ràng buộc bởi quy tắc xã hội - một sự đối lập tinh tế với hình ảnh quý tộc kinh điển của Chanel.

**Tất cả phiên bản Bleu de Chanel:**
- **Bleu de Chanel EDT (2010)** - bản gốc, tươi mát nhất, Jacques Polge
- **Bleu de Chanel EDP (2016)** - sâu hơn, gợi cảm hơn, thêm patchouli và sandalwood
- **Bleu de Chanel Parfum (2018)** - nồng độ cao nhất, gỗ đàn hương Mysore, bông bạch

### 3. Đánh giá Thị trường
Fragrantica: **4.01/5** với hơn **38.000 ratings** - top 5 nước hoa nam bán chạy nhất thế giới liên tục từ 2012-2026. Số liệu này nói lên tất cả - đây là chai của số đông. Bán chạy nhất tại: Pháp, Mỹ, Trung Quốc, VN. Đối tượng: Nam 20-50 tuổi mọi phong cách.

### 4. Maison de SON's Verdict & Cam kết
Bleu de Chanel EDP là "bộ vest xám" của nước hoa - không bao giờ sai, không bao giờ lỗi thời. Chai all-rounder số 1 cho người mới bắt đầu và collector kỳ cựu.

**Maison de SON cam kết:** 100% hàng chính hãng. Phát hiện không đúng - **đền bù 10 triệu đồng**.

**Nhận biết Bleu de Chanel EDP thật:**
- Nắp chai nặng, logo Chanel dập nổi sắc nét, không bị mờ hay lệch
- Màu nước trắng trong suốt, không có cặn
- Mùi citrus tươi bùng ngay đầu, không có alcohol gắt
- Hộp Chanel khắc serial number khớp với thân chai`,
        verdict: "Versatile số 1 cho mọi bộ sưu tập nam. Sạch sẽ, sang trọng, không bao giờ gây phiền - thế tục nhưng không nhàm.",
        verdictShort: "THANH LỊCH BẤT HỦ",
        score: { scent: 8.8, uniqueness: 7.5, compliments: 9.0, value: 8.0, total: 8.4 },
        vibes: [{ label: "Văn phòng", icon: "💼" }, { label: "Hẹn hò casual", icon: "☕" }, { label: "Quanh năm", icon: "🔄" }],
        longevity: 8, sillage: 7,
        seasons: { spring: 80, summer: 70, fall: 85, winter: 75 },
        dayNight: { day: 80, night: 60 },
        topNotes: [{ name: "Chanh" }, { name: "Cam Bergamot" }, { name: "Bưởi" }],
        middleNotes: [{ name: "Gỗ Tuyết Tùng" }, { name: "Gừng" }, { name: "Nhũ hương" }],
        baseNotes: [{ name: "Gỗ đàn hương" }, { name: "Xạ hương" }, { name: "Labdanum" }],
        accords: [
            { name: "Gỗ", value: 95, color: "#8B4513" },
            { name: "Citrus", value: 80, color: "#f7c242" },
            { name: "Aromatic", value: 75, color: "#2c7a4b" },
            { name: "Tươi mát", value: 70, color: "#5bc8f5" }
        ],
        tags: ["All-rounder", "Văn Phòng", "Classy", "Bestseller"],
        sizes: ["10ml Chiết", "50ml Fullbox", "100ml Fullbox"],
        basePrice: 4200000,
        shopeeOffers: []
    },
    {
        id: "ysl-black-opium",
        brandSlug: "ysl",
        brand: "YVES SAINT LAURENT",
        name: "Black Opium",
        subName: "Eau de Parfum",
        perfumer: "Nathalie Lorson, Marie Salamagne, Olivier Cresp & Honorine Blanc",
        gender: "nu",
        image: "https://fimgs.net/images/perfume/o.34170.jpg?v=2",
        images: [
            { url: "https://fimgs.net/photogram/p1200/pg/do/gPZJu6HCF1k6vNi0.jpg", source: "fragram", caption: "Black Opium trong không gian tối bí ẩn" },
            { url: "https://fimgs.net/photogram/p1200/yb/yz/Y0Y4yQtuzSrnukfa.jpg", source: "fragram", caption: "Cận cảnh chai Black Opium quyến rũ" },
            { url: "https://fimgs.net/photogram/p1200/ar/ho/x0nQ7ILJhEsUUMvt.jpg", source: "fragram", caption: "Black Opium - huyền thoại nước hoa nữ" }
        ],
        description: "Huyền thoại nước hoa nữ của YSL - cà phê đen, hoa nhài và vani tạo rock-chic, táo bạo nhưng vẫn nữ tính. Bestseller toàn cầu hơn một thập kỷ.",
        article: `YSL Black Opium - Định nghĩa lại nước hoa nữ hiện đại.

### 1. Lịch sử Ra đời & Bối cảnh
**Black Opium EDP** ra mắt năm **2013** bởi YSL Beauty (thuộc L'Oréal Group), được sáng tác bởi **Nathalie Lorson, Marie Salamagne, Olivier Cresp và Honorine Blanc** (Firmenich). Đây là sự đổi mới hoàn toàn so với Opium gốc (1977) - thay vì floral oriental cổ điển, Black Opium chọn cà phê + rock aesthetic. Quảng cáo châu Âu: người phụ nữ làm chết phục đàn ông bằng mùi hương của mình.

### 2. Câu chuyện & Các phiên bản
Cảm hứng từ hình ảnh người phụ nữ rock - mạnh mẽ, tự tin, bí ẩn. Logo lấy cảm hứng từ vải sequin đen lấp lánh của thời trang YSL.

**Tất cả phiên bản Black Opium:**
- **Black Opium EDP (2013)** - bản gốc, cà phê + hoa nhài + vani
- **Black Opium Floral Shock (2016)** - thêm hoa anh túc hồng rực, trẻ trung hơn
- **Black Opium Extreme (2020)** - đậm hơn, thêm quế
- **Black Opium Le Parfum (2021)** - extrait, bám da 14+ tiếng
- **Black Opium Over Red (2023)** - phiên bản mới nhất, cherry + cà phê

### 3. Đánh giá Thị trường
Fragrantica: **4.17/5** với hơn **62.000 ratings** - top 10 nước hoa nữ được rating nhiều nhất mọi thời. Năm 2023, hashtag #blackopium trên TikTok vượt **2.8 tỷ lượt** xem. Bán chạy nhất tại: Pháp, Mỹ, Úc, Anh. Đối tượng: Nữ 20-35 tuổi phong cách cá tính, hiện đại.

### 4. Maison de SON's Verdict & Cam kết
Nếu bạn muốn một chai nữ có dấu ấn cá nhân không thể nhầm lẫn - Black Opium là chuẩn. Cà phê + hoa + vani = công thức không thể quên.

**Maison de SON cam kết:** 100% hàng chính hãng. Phát hiện không đúng - **đền bù 10 triệu đồng**.

**Nhận biết Black Opium EDP thật:**
- Chai thủy tinh đen lấp lánh sequin - hạt nhựa phủ đều, không bị rụng
- Màu nước hổ phách nhạt, trong suốt
- Mùi cà phê espresso đậm ngay khi xịt - không có mùi alcohol hash
- Logo YSL dập nổi trên đầu vòi xịt kim loại`,
        verdict: "Định nghĩa lại nước hoa nữ hiện đại. Bestseller có lý do - cà phê + hoa + vani = không thể nhầm lẫn với bất kỳ chai nào.",
        verdictShort: "CÁ TÍNH & QUYẾN RŨ",
        score: { scent: 9.2, uniqueness: 8.8, compliments: 9.5, value: 8.5, total: 9.0 },
        vibes: [{ label: "Hẹn hò", icon: "🖤" }, { label: "Tiệc tối", icon: "🍸" }, { label: "Cá tính", icon: "⚡" }],
        longevity: 8, sillage: 8,
        seasons: { spring: 60, summer: 40, fall: 90, winter: 95 },
        dayNight: { day: 40, night: 95 },
        topNotes: [{ name: "Cà phê" }, { name: "Quả lê" }, { name: "Hoa cam" }],
        middleNotes: [{ name: "Hoa nhài" }, { name: "Hoa cam trắng" }, { name: "Cây bách xù" }],
        baseNotes: [{ name: "Vani" }, { name: "Hoắc hương" }, { name: "Gỗ tuyết tùng" }],
        accords: [
            { name: "Ngọt ngào", value: 100, color: "#8B0000" },
            { name: "Cà phê", value: 95, color: "#3e1f00" },
            { name: "Hoa", value: 75, color: "#e75480" },
            { name: "Vani", value: 70, color: "#f5deb3" }
        ],
        tags: ["Best Seller", "Hẹn Hò", "Tiệc Tối", "Thu Đông"],
        sizes: ["10ml Chiết", "30ml Fullbox", "90ml Fullbox"],
        basePrice: 2550000,
        shopeeOffers: []
    },
    {
        id: "creed-aventus",
        brandSlug: "creed",
        brand: "CREED",
        name: "Aventus",
        subName: "Eau de Parfum",
        perfumer: "Olivier Creed & Erwin Creed",
        gender: "nam",
        image: "https://fimgs.net/images/perfume/o.9828.jpg",
        images: [
            { url: "https://fimgs.net/photogram/p1200/xh/ea/B2pTPj9ytDVenm98.jpg", source: "fragram", caption: "Creed Aventus - huyền thoại nước hoa nam" },
            { url: "https://fimgs.net/photogram/p1200/mc/qx/aNatsz0VTWmOw49w.jpg", source: "fragram", caption: "Thiết kế chai Creed đặc trưng" },
            { url: "https://fimgs.net/photogram/p1200/bk/km/71DlRERxLHUIGVd1.jpg", source: "fragram", caption: "Aventus - mùi hương của sự chiến thắng" }
        ],
        description: "Vua nước hoa - Creed Aventus là chai được nhắc đến nhiều nhất trên Fragrantica. Chất mùi dứa, khói gỗ bạch dương và long diên hương tạo nên cá tính rất khó thay thế.",
        article: `Creed Aventus - Vua của nước hoa nam.

### 1. Lịch sử Ra đời & Bối cảnh
**Aventus** ra mắt tháng 9 năm **2010**, được sáng tác bởi **Olivier Creed và con trai Erwin Creed**. Tên Aventus (tiếng Latin: "tôi đến, tôi bắt đầu"). House of Creed thành lập từ **1760 tại London**, sau đó chuyển sang Paris - nhà nước hoa "tailor-made" cho hoàng gia châu Âu.

### 2. Câu chuyện & Các phiên bản
Cảm hứng từ cuộc đời **Napoleon Bonaparte** - chiến thắng, mạnh mẽ, khát vọng. Birch smoke (khói gỗ bạch dương) tượng trưng cho những trận chiến của Napoleon; dứa tươi là sự trẻ trung và chiến thắng.

**Tất cả phiên bản Aventus:**
- **Aventus EDP (2010)** - bản gốc và vẫn là bestseller
- **Aventus Cologne (2017)** - nhẹ nhất, tươi mát EDT-style
- **Aventus for Her (2016)** - phiên bản nữ, floral + fruity
- **Silver Mountain Water (2003)** - chai có tinh thần gần Aventus nhất, xanh sơn núi

**Batch controversy:** Aventus thay đổi công thức sau 2015 - birch smoky giảm, longevity thấp hơn. Chủ đề nóng nhất trên r/fragrance mỗi năm.

### 3. Đánh giá Thị trường
Fragrantica: **4.28/5** với hơn **50.000 ratings** - kỷ lục chưa chai nào đạt trước đó. Được bầu chọn là "Best Masculine Fragrance" nhiều lần trên Basenotes.net. Bán chạy nhất tại: Mỹ, Anh, Pháp, UAE, VN (phân khúc niche).

### 4. Maison de SON's Verdict & Cam kết
Aventus không phải chai "wow ngay" - là chai bạn muốn đeo mãi sau nhiều lần thử. Chất khói gỗ bạch dương của Aventus là thứ rất khó tìm lại trọn vẹn ở nơi khác.

**Maison de SON cam kết:** 100% hàng chính hãng. Phát hiện không đúng - **đền bù 10 triệu đồng**.

**Nhận biết Aventus thật:**
- Chai thủy tinh nặng, stopper (nắp bần) tròn khắc logo Creed
- Màu nước vàng nhạt trong suốt
- Mùi dứa tươi rõ ràng ngay đầu - không bị synthetic
- Batch code trên đáy chai có thể verify tại Creed official`,
        verdict: "Chất mùi khói gỗ bạch dương và dứa gần như không thể sao chép trọn vẹn. Người chơi nước hoa nên thử ít nhất một lần — không phải vì hype mà vì nó thực sự khác biệt.",
        verdictShort: "HUYỀN THOẠI BẤT HỦ",
        score: { scent: 9.5, uniqueness: 9.8, compliments: 9.0, value: 6.0, total: 8.2 },
        vibes: [{ label: "Đẳng cấp", icon: "👑" }, { label: "Mọi dịp", icon: "🔄" }, { label: "Collector", icon: "💎" }],
        longevity: 7, sillage: 7,
        seasons: { spring: 70, summer: 50, fall: 90, winter: 85 },
        dayNight: { day: 75, night: 80 },
        topNotes: [{ name: "Dứa" }, { name: "Cam Bergamot" }, { name: "Lý chua đen" }],
        middleNotes: [{ name: "Hoa hồng" }, { name: "Gỗ bạch dương" }, { name: "Hoắc hương" }],
        baseNotes: [{ name: "Long diên hương" }, { name: "Xạ hương" }, { name: "Địa y" }, { name: "Vani" }],
        accords: [
            { name: "Trái cây", value: 90, color: "#f39c12" },
            { name: "Tươi mát", value: 80, color: "#2ecc71" },
            { name: "Gỗ khói", value: 75, color: "#616161" },
            { name: "Aromatic", value: 65, color: "#1abc9c" }
        ],
        tags: ["Niche", "Flagship", "Thu Đông", "Collector"],
        sizes: ["5ml Chiết", "10ml Chiết", "100ml Fullbox"],
        basePrice: 8000000,
        shopeeOffers: []
    },
    {
        id: "baccarat-rouge-540",
        brandSlug: "maison-francis-kurkdjian",
        brand: "MAISON FRANCIS KURKDJIAN",
        name: "Baccarat Rouge 540",
        subName: "Eau de Parfum",
        perfumer: "Francis Kurkdjian",
        gender: "unisex",
        image: "https://fimgs.net/images/perfume/o.57088.jpg?v=2",
        images: [
            { url: "https://fimgs.net/photogram/p1200/kx/1f/hjWb9IjXjjnGgG5Z.jpg", source: "fragram", caption: "Baccarat Rouge 540 - chai của thập kỷ" },
            { url: "https://fimgs.net/photogram/p1200/ay/ib/PMAZHYUMNNXlNvIY.jpg", source: "fragram", caption: "Cận cảnh chai pha lê Baccarat trứ danh" },
            { url: "https://fimgs.net/photogram/p1200/oo/rz/huWZtIG3jiBsGFRL.jpg", source: "fragram", caption: "BR540 - hiện tượng văn hóa nước hoa" }
        ],
        description: "Hiện tượng nước hoa của thập kỷ. Amberwood + hoa nhài + nhựa thông = mùi hương không thể định nghĩa nhưng không thể quên.",
        article: `Baccarat Rouge 540 - Cultural phenomenon của nước hoa hiện đại.

### 1. Lịch sử Ra đời & Bối cảnh
Năm **2015**, nhà **Baccarat** (làm pha lê từ 1764) kỷ niệm **250 năm** thành lập. Họ liên hệ **Francis Kurkdjian** - perfumer người Pháp gốc Armenia, người đã tạo ra Jean Paul Gaultier Le Male năm 1995 lúc 25 tuổi - để tạo ra một mùi hương độc quyền. Con số **540** là nhiệt độ nung pha lê Baccarat (°F) để có màu đỏ đặc trưng. Ban đầu chỉ **250 chai** toàn cầu, giá 250 EUR/chai.

### 2. Câu chuyện & Các phiên bản
Cảm hứng từ sự hoàn hảo của pha lê Baccarat - trong suốt, rực rỡ và không thể bắt chước. Francis Kurkdjian muốn tạo ra "mùi hương mà da người không thể hiển thị đầy đủ - chỉ không khí mới làm được."

**Các phiên bản BR540:**
- **Baccarat Rouge 540 EDP (2015)** - bản gốc
- **Baccarat Rouge 540 Extrait (2017)** - nồng độ cao hơn, bám da 14+ tiếng
- **BR540 Limited Edition - chai pha lê Baccarat thật (2023)** - phiên bản sưu tập

### 3. Đánh giá Thị trường
Fragrantica: **4.09/5** với **43.000+ ratings**. Hashtag #baccaratrouge540 trên TikTok: **2.4 tỷ views**. Đây là chai nước hoa đầu tiên trở thành viral trendsetter hoàn toàn nhờ social media. Clone fragrances của BR540 tạo nên một ngành riêng - Lattafa Fakhar, Maison Alhambra Rouge 540, Rasasi Rumz Al Rasasi bán hàng triệu chai.

### 4. Maison de SON's Verdict & Cam kết
BR540 là cultural phenomenon xứng đáng với giá tiền nếu bạn hiểu mình đang mua gì và đã sẵn sàng cho mức niche.

**Maison de SON cam kết:** 100% hàng chính hãng. Phát hiện không đúng - **đền bù 10 triệu đồng**.

**Nhận biết BR540 EDP thật:**
- Chai vuông MFK - góc cạnh sắc nét, nắp vàng nặng
- Màu nước trong suốt, không vàng
- Mùi Amberwood ngọt gỗ ấm rõ ràng ngay 10 giây sau khi xịt
- Tem hologram MFK + số batch ở đáy hộp`,
        verdict: "Cultural phenomenon của nước hoa hiện đại. Amberwood + hoa nhài + nhựa thông = không thể định nghĩa nhưng không thể quên. Benchmark mà mọi chai ngọt đều bị so sánh.",
        verdictShort: "HIỆN TƯỢNG CỦA THẬP KỶ",
        score: { scent: 9.8, uniqueness: 9.5, compliments: 9.2, value: 7.5, total: 9.0 },
        vibes: [{ label: "Sang trọng", icon: "💎" }, { label: "Đêm khuya", icon: "🌙" }, { label: "Khó quên", icon: "✨" }],
        longevity: 9, sillage: 8,
        seasons: { spring: 65, summer: 45, fall: 90, winter: 95 },
        dayNight: { day: 55, night: 95 },
        topNotes: [{ name: "Hoa nhài" }, { name: "Nghệ tây" }],
        middleNotes: [{ name: "Amberwood" }, { name: "Long diên hương" }],
        baseNotes: [{ name: "Nhựa thông" }, { name: "Xạ hương" }],
        accords: [
            { name: "Hổ phách", value: 100, color: "#d4a017" },
            { name: "Ngọt ấm", value: 90, color: "#FF6D00" },
            { name: "Hoa", value: 70, color: "#e75480" },
            { name: "Gỗ khói", value: 65, color: "#614326" }
        ],
        tags: ["Niche", "Unisex", "Bestseller", "Statement"],
        sizes: ["5ml Chiết", "10ml Chiết", "70ml EDP", "70ml Extrait"],
        basePrice: 6700000,
        shopeeOffers: []
    },
    {
        id: "tom-ford-noir-extreme",
        brandSlug: "tom-ford",
        brand: "TOM FORD",
        name: "Noir Extreme",
        subName: "Eau de Parfum",
        perfumer: "Sonia Constant (Givaudan)",
        gender: "nam",
        image: "https://fimgs.net/images/perfume/o.30516.jpg?v=2",
        images: [
            { url: "https://fimgs.net/photogram/p1200/oi/vc/EqaG5B5K1A7gIOsc.jpg", source: "fragram", caption: "Tom Ford Noir Extreme - bóng tối sang trọng" },
            { url: "https://fimgs.net/photogram/p1200/os/ig/0pYeqgAhpFvBveOW.jpg", source: "fragram", caption: "Cận cảnh chai đen bóng Tom Ford" },
            { url: "https://fimgs.net/photogram/p1200/md/8a/VAXrNjDLljYS6S76.jpg", source: "fragram", caption: "Noir Extreme - luxury oriental statement" }
        ],
        description: "Tom Ford Noir Extreme là câu trả lời cho ai muốn ngọt ngào exotic nhưng vẫn giữ đẳng cấp luxury. Bạch đậu khấu + hoa nhài + đàn hương = bí ẩn, quyến rũ, sang trọng.",
        article: `Tom Ford Noir Extreme - Sweet spot của luxury oriental.

### 1. Lịch sử Ra đời & Bối cảnh
**Noir Extreme** ra mắt năm **2015** như sự mở rộng của dòng Noir (2012), sáng tác bởi **Sonia Constant** (Givaudan). Tom Ford - người sáng lập thương hiệu vào 2005 sau khi rời Gucci/YSL - muốn tạo ra mùi hương "cực độ của sự quyến rũ tối tối" - đậm hơn, spicy hơn và exotic hơn Noir gốc. Triết lý Tom Ford: nước hoa phải gây cảm giác skin-to-skin, sensual và unpredictable.

### 2. Câu chuyện & Các phiên bản
Cảm hứng từ phong cách Trung Đông và sự xa hoa của giới thượng lưu quốc tế. Noir Extreme là đại diện cho "bóng tối sang trọng" - không gây sợ hãi mà gây mê hoặc.

**Tất cả phiên bản dòng Noir:**
- **Tom Ford Noir EDT (2012)** - bản gốc, spicy floral
- **Tom Ford Noir EDP (2013)** - sâu hơn, oriental
- **Tom Ford Noir Extreme EDP (2015)** - exotic oriental, ngọt và spicy nhất
- **Tom Ford Noir Extreme Parfum (2021)** - nồng độ cao nhất, sandalwood dẫn đầu

### 3. Đánh giá Thị trường
Fragrantica: **4.12/5** với **15.000+ ratings** - top rated trong dòng Tom Ford Designer. Được nhiều fashion editor và grooming journalist chọn là "best date night fragrance" 2015-2019. Bán chạy tại: Mỹ, UAE, Ý, VN.

### 4. Maison de SON's Verdict & Cam kết
Noir Extreme là chai Tom Ford "dễ yêu" nhất - không đáng sợ như Oud Wood, không quá mainstream như Tobacco Vanille. Sweet spot của luxury fragrance.

**Maison de SON cam kết:** 100% hàng chính hãng. Phát hiện không đúng - **đền bù 10 triệu đồng**.

**Nhận biết Noir Extreme thật:**
- Chai đen bóng, nắp vàng đặc trưng Tom Ford - cân nặng và chắc tay
- Logo TF dập nổi trên vòi xịt không bị mờ
- Mùi bạch đậu khấu ấm ngay đầu - không có mùi cồn harsh
- Hộp đen mờ sang trọng, số batch in rõ ở đáy`,
        verdict: "Spicy oriental tinh tế - không beast, không vanilla thuần, mà là luxury statement thực sự. Tom Ford đỉnh nhất cho buổi tối exotic.",
        verdictShort: "BÓNG TỐI SANG TRỌNG",
        score: { scent: 9.0, uniqueness: 8.5, compliments: 9.3, value: 7.8, total: 8.7 },
        vibes: [{ label: "Tiệc tối", icon: "🍸" }, { label: "Sự kiện", icon: "🎭" }, { label: "Huyền bí", icon: "🌙" }],
        longevity: 9, sillage: 8,
        seasons: { spring: 50, summer: 25, fall: 90, winter: 100 },
        dayNight: { day: 30, night: 100 },
        topNotes: [{ name: "Bạch đậu khấu" }, { name: "Nhục đậu khấu" }, { name: "Tiêu" }],
        middleNotes: [{ name: "Hoa hồng" }, { name: "Hoa nhài" }, { name: "Hoa diên vỹ" }, { name: "Hổ phách" }],
        baseNotes: [{ name: "Gỗ đàn hương" }, { name: "Cỏ Vetiver" }, { name: "Benzoin" }, { name: "Xạ hương" }],
        accords: [
            { name: "Gia vị ấm", value: 95, color: "#e67e22" },
            { name: "Ngọt exotic", value: 85, color: "#8B0000" },
            { name: "Gỗ", value: 80, color: "#8B4513" },
            { name: "Hoa", value: 65, color: "#e75480" }
        ],
        tags: ["Tom Ford", "Niche", "Tiệc Tối", "Thu Đông"],
        sizes: ["5ml Chiết", "10ml Chiết", "50ml EDP", "100ml EDP"],
        basePrice: 4000000,
        shopeeOffers: []
    }
];