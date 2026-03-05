import { Perfume } from "../types";

export const MASTER_PERFUMES: Perfume[] = [
    {
        id: "sauvage-elixir",
        brand: "DIOR",
        name: "Sauvage Elixir",
        subName: "Parfum",
        gender: "nam",
        image: "https://fimgs.net/images/perfume/o.68415.png",
        images: [
            { url: "https://fimgs.net/photogram/p1200/sj/sr/wJM8xkxTDAklwkjT.jpg", source: "fragram", caption: "Thiết kế đậm nét nam tính Dior" },
            { url: "https://fimgs.net/photogram/p1200/me/ej/DvNET49ViI73vLmi.jpg", source: "fragram", caption: "Cận cảnh thân chai và nắp sang trọng" },
            { url: "https://fimgs.net/photogram/p1200/lz/66/idIA4dIrymIVcQFO.jpg", source: "fragram", caption: "Màu nước đêm xanh sâu thẳm" }
        ],
        description: "Siêu phẩm đậm đặc và uy lực nhất của dòng Sauvage, mang đến một định nghĩa mới về sự nam tính hiện đại. Một kì quan của François Demachy với các nốt gia vị ấm nóng quyện với gỗ đàn hương thượng hạng.",
        article: "Dior Sauvage Elixir không chỉ là một chai nước hoa, mà là một kì quan của mùi hương nam giới thế kỷ 21. Với nồng độ đậm đặc hiếm thấy, Elixir mang đến một trải nghiệm quyền lực và phong trần tuyệt đối.\n\n### 1. Giới thiệu & Bối cảnh\nRa mắt vào năm 2021, Sauvage Elixir đã tạo ra một cơn sốt chưa từng có. Không giống như các phiên bản tiền nhiệm vốn tập trung vào Ambroxan tươi mát, Elixir là một cú rẽ hướng tinh tế sang phong cách trưởng thành và quyền lực. Nó không dành cho các chàng trai trẻ tuổi, mà là tiếng nói của người đàn ông đã thành đạt, vững chãi.\n\n### 2. DNA Mùi hương: Sự tiến hóa đầy mê hoặc\nTrải nghiệm mở đầu: Ngay từ những giây đầu tiên, bạn sẽ thấy bùng nổ của Quế và Bạch đậu khấu vô cùng ấm áp. Không có sự tươi mát hời hợt, chỉ có sự nồng nàn của gia vị cao cấp.\n\nTrái tim của mùi hương: Khi gia vị lắng xuống, hoa oải hương từ vùng Provence hiện ra cực kỳ sạch sẽ, mang lại cảm giác sang trọng tột bậc.\n\nDấu ấn cuối cùng: Sau nhiều giờ, Elixir để lại một lớp nền dày dặn của gỗ đàn hương và cam thảo đen. Đây là giai đoạn mùi hương ấm áp và bám tỏa mãnh liệt nhất.\n\n### 3. Hiệu năng: Sức mạnh bám tỏa khổng lồ\nĐây là chai nước hoa có hiệu năng mạnh mẽ nhất trong phân khúc hiện nay. Với nồng độ đậm đặc, Elixir bám tỏa vượt xa mọi giới hạn.\n\nĐộ lưu hương: Trên da có thể đạt từ 12 đến 15 tiếng. Trên quần áo, mùi hương thậm chí còn giữ được đến vài ngày.\n\nĐộ tỏa hương: Cực mạnh trong 4 đến 5 tiếng đầu, sau đó thu hẹp lại nhưng vẫn tạo ra một vùng không gian mùi hương vững chắc xung quanh bạn suốt cả ngày.\n\n### 4. Hoàn cảnh sử dụng: Khi nào nên dùng Elixir?\nMùa phù hợp: Hoàn hảo cho mùa Thu và Đông hoặc khi nhiệt độ dưới 20 độ C.\n\nPhong cách: Hợp với sơ mi, vest hoặc đồ da phong trần. Phù hợp cho các buổi tiệc tối sang trọng hoặc những cuộc hẹn hò quan trọng cần để lại ấn tượng mạnh.\n\n### 5. Maison de SON's Verdict\nDior Sauvage Elixir là một sự đầu tư xứng đáng nếu bạn muốn khẳng định vị thế. Dù giá thành cao hơn mức trung bình, nhưng với hiệu năng chỉ cần một lần xịt cho cả ngày dài, đây thực sự là một chai nước hoa hiệu quả và kinh tế.\n\nChốt hạ: Quyền lực, nam tính và đầy uy lực. Elixir là một trải nghiệm nâng cấp tâm hồn hoàn toàn mới.",
        verdict: "Kì quan của François Demachy. Quyền lực, nam tính và khả năng tỏa hương Enormous vượt xa mọi giới hạn của nước hoa Designer.",
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
        basePrice: 4200000,
        tags: ["Sát Thủ Hẹn Hò", "Siêu Lưu Toả", "Tiệc Tối", "Mùa Đông"],
        shopeeOffers: []
    },
    {
        id: "armani-stronger-with-you-intensely",
        brand: "GIORGIO ARMANI",
        name: "Stronger With You Intensely",
        subName: "Eau de Parfum",
        gender: "nam",
        image: "https://fimgs.net/images/perfume/o.52802.jpg",
        images: [
            { url: "https://fimgs.net/photogram/p1200/o9/52/OaM5Gh5gSyEBgZZO.jpg", source: "fragram", caption: "Cận cảnh thiết kế chai mạnh mẽ" },
            { url: "https://fimgs.net/photogram/p1200/dn/jf/NGDPqasxuHSvIorx.jpg", source: "fragram", caption: "Màu nước hổ phách đầy quyến rũ" },
            { url: "https://www.michael84.co.uk/wp-content/uploads/2019/12/emporio-armani-stronger-with-you-intensely-review.jpg", source: "fragram", caption: "Ảnh chụp thực tế cận cảnh vòi xịt" }
        ],
        description: "Mùi hương ngọt ngào, ấm áp và có sức hút mãnh liệt, là vũ khí tối thượng cho những buổi hẹn hò đêm đông.",
        article: "Giorgio Armani Stronger With You Intensely (SWYI) là định nghĩa hoàn hảo cho một mùi hương nịnh mũi nhưng vẫn giữ được đẳng cấp sang trọng. Đây là chai nước hoa luôn nằm trong danh sách mua sắm hàng đầu mỗi khi mùa lạnh bắt đầu.\n\n### 1. Giới thiệu & Bối cảnh\nRa mắt vào năm 2019, SWYI nhanh chóng trở thành phiên bản được yêu thích nhất trong toàn bộ dòng sản phẩm. Nó được thiết kế dành riêng cho những khoảnh khắc gần gũi, nơi sự ngọt ngào và ấm áp là chìa khóa để gây ấn tượng.\n\n### 2. DNA Mùi hương: Sự ngọt ngào đầy mê hoặc\nTrải nghiệm mở đầu: Bạn sẽ cảm nhận được sự kết hợp thú vị giữa hạt tiêu hồng cay nhẹ và cây bách xù. Sự tươi mát này nhanh chóng nhường chỗ cho ngôi sao chính của mùi hương.\n\nTrái tim của mùi hương: Đây là nơi SWYI tỏa sáng rực rỡ nhất. Sự quyện hòa giữa kẹo Toffee ngọt béo và Quế tạo nên một mùi hương cực kỳ ngon lành, mang lại cảm giác ấm áp như một chiếc áo len dày.\n\nDấu ấn cuối cùng: Khi lắng xuống, Vanilla và Đậu Tonka giúp mùi hương trở nên nam tính và có chiều sâu hơn. Sự ngọt ngào lúc này trở nên mượt mà và cực kỳ quyến rũ.\n\n### 3. Hiệu năng: Sức mạnh bền bỉ\nSWYI là một trong những chai nước hoa có hiệu năng bám tỏa tốt nhất hiện nay, đảm bảo bạn luôn nổi bật suốt cả buổi tối.\n\nĐộ lưu hương: Cực tốt, đạt từ 10 đến 12 tiếng trên da. Trên áo len, nó có thể bám trụ lâu hơn rất nhiều.\n\nĐộ tỏa hương: Rất mạnh trong những giờ đầu tiên. Nó dễ dàng gây chú ý ngay lập tức khi bạn bước vào không gian đông người.\n\n### 4. Hoàn cảnh sử dụng: Vũ khí cho những đêm lạnh\nMùa phù hợp: Mùa Thu, Mùa Đông và những buổi tối trời lạnh. Tránh sử dụng khi nhiệt độ môi trường quá cao.\n\nPhong cách: Đồ Jean thanh lịch, áo len cổ lọ hoặc đồ khoác da. Đây là lựa chọn hàng đầu cho những buổi đi chơi tối hoặc hẹn hò lãng mạn.\n\n### 5. Maison de SON's Verdict\nNếu bạn yêu thích phong cách mùi hương ngọt ngào và muốn nhận được nhiều lời khen ngợi, thì SWYI chính là lựa chọn số một. Nó đảm bảo sự sang trọng nhưng vẫn rất gần gũi và thu hút.\n\nChốt hạ: Ngọt ngào, quyến luyến và đầy thu hút. Một chai nước hoa không thể thiếu cho tủ đồ của bất kỳ người đàn ông nào.",
        verdict: "Mùi hương đại diện cho sự ấm áp, chiều chuộng nhưng vẫn đầy nam tính. Độ bám tỏa của chai này cực kỳ kinh khủng, phù hợp cho những đêm tiệc hay buổi hẹn hò quan trọng.",
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
        sizes: ["10ml Chiết", "100ml Fullbox"],
        basePrice: 2850000,
        shopeeOffers: []
    },
    {
        id: "lattafa-khamrah",
        brand: "LATTAFA",
        name: "Khamrah",
        subName: "Eau de Parfum",
        gender: "unisex",
        image: "https://fimgs.net/images/perfume/o.75805.png",
        images: [
            { url: "https://fimgs.net/photogram/o/sj/sr/wJM8xkxTDAklwkjT.jpg", source: "fragram", caption: "Thiết kế sang trọng kiểu Trung Đông" },
            { url: "https://fimgs.net/photogram/o/me/ej/DvNET49ViI73vLmi.jpg", source: "fragram", caption: "Cận cảnh nắp chai chạm khắc tinh xảo" }
        ],
        description: "Một kiệt tác hương phương Đông ngọt ngào, quyến rũ với sự kết hợp hoàn hảo của chà là, vani và các loại gia vị ấm áp.",
        article: "Lattafa Khamrah là một trong những hiện tượng đình đám nhất trong cộng đồng yêu nước hoa những năm gần đây. Được mệnh danh là 'Kẻ soán ngôi' nhờ mùi hương sang trọng vượt xa giá thành, Khamrah mang lại trải nghiệm xa xỉ với mức giá cực kỳ dễ tiếp cận.\n\n### 1. Giới thiệu & Bối cảnh\nRa mắt bởi nhà Lattafa, Khamrah nhanh chóng trở thành tâm điểm chú ý nhờ sự tương đồng trong phong cách với các dòng nước hoa đắt đỏ. Tuy nhiên, nó vẫn giữ được nét riêng biệt với vị ngọt của chà là đặc trưng Trung Đông, tạo nên một bản sắc khó quên.\n\n### 2. DNA Mùi hương: Sự ngọt ngào đầy quyền năng\nTrải nghiệm mở đầu: Một sự bùng nổ của Quế và Nhục đậu khấu cay ấm. Ngay lập tức, bạn sẽ thấy mình như đang lạc vào một tiệm bánh ngọt cao cấp giữa lòng Dubai.\n\nTrái tim của mùi hương: Sự xuất hiện của Chà là và Kẹo Praline làm say đắm lòng người. Vị ngọt đậm đà, mượt mà quyện cùng một chút hương hoa huệ tinh tế giúp mùi hương không bị quá nồng gắt.\n\nDấu ấn cuối cùng: Lớp nền với Vani, Đậu Tonka và Nhựa Myrrh bám tỏa cực kỳ ấn tượng, để lại một vệt hương ngọt ngào, ấm áp và vô cùng sang trọng trên da.\n\n### 3. Hiệu năng: Độ bám tỏa 'Khủng'\nKhamrah nổi tiếng với hiệu năng bám tỏa không thua kém bất kỳ chai nước hoa High-end nào.\n\nĐộ lưu hương: Dễ dàng đạt mốc 10 đến 12 tiếng. Thậm chí trên quần áo, nó có thể giữ được cả tuần.\n\nĐộ tỏa hương: Rất mạnh trong 3 đến 4 tiếng đầu, tạo nên một hào quang mùi hương ngọt ngào xung quanh bạn.\n\n### 4. Hoàn cảnh sử dụng: Khi nào nên diện Khamrah?\nMùa phù hợp: Đây là chai nước hoa sinh ra dành cho mùa Thu và Đông. Sự ấm áp của nó sẽ được phát huy tối đa trong tiết trời lạnh giá.\n\nPhong cách: Phù hợp cho cả nam và nữ (Unisex). Hợp với những buổi tiệc tối, những buổi hẹn hò lãng mạn hoặc những khi bạn muốn mình trở nên nổi bật và thu hút nhất.\n\n### 5. Maison de SON's Verdict\nKhamrah là một món hời thực sự. Nếu bạn yêu thích nhóm hương Gourmand (hương thực phẩm ngọt ngào) và muốn một chai nước hoa có hiệu năng đỉnh cao với giá thành hợp lý, đây chính là 'Must-have item'.\n\nChốt hạ: Ngọt ngào, xa hoa và đầy lôi cuốn. Một kiệt tác không thể bỏ qua.",
        verdict: "Một trong những chai nước hoa đáng mua nhất tầm giá dưới 2 triệu. Độ bám tỏa cực tốt, mùi hương sang trọng và thiết kế chai như một tác phẩm nghệ thuật.",
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
    }

    ,
    {
        id: "bleu-de-chanel-edp",
        brand: "CHANEL",
        name: "Bleu de Chanel",
        subName: "Eau de Parfum",
        gender: "nam",
        image: "https://fimgs.net/images/perfume/o.20477.jpg",
        images: [
            { url: "https://fimgs.net/photogram/p1200/r0/jh/v3WD9dpMHiKQCANv.jpg", source: "fragram", caption: "Bleu de Chanel trong khong gian hien dai" }
        ],
        description: "Mui huong nam tinh co dien va bat hu cua Chanel — tuoi mat, sach se, du chieu sau de khong bao gio loi thoi.",
        article: "## Cau Chuyen Ra Doi\n\nBleu de Chanel ra mat nam 2010, duoc tao ra boi Olivier Polge (Polge con). Day la chai danh dau su chuyen giao the he tai House of Chanel — tu Jacques Polge (cha, CDO 1978-2015) sang Olivier Polge. Chai duoc dat ten Bleu (xanh) — mau cua tu do, bau troi va su sang tao.\n\n## Thong Tin Co Ban\n\n| | |\n|---|---|\n| **Nha san xuat** | Chanel (Phap) |\n| **Nam ra mat** | 2010 (EDT), 2016 (EDP), 2018 (Parfum) |\n| **Perfumer** | Olivier Polge |\n| **Concentration** | EDP — 15-18% aromatic compounds |\n| **Xuat xu** | Phap |\n\n## Cac Phien Ban\n\n- **Bleu de Chanel EDT (2010)** — phien ban goc, tuoi mat nhat\n- **Bleu de Chanel EDP (2016)** — sau hon, goi cam hon, them patchouli va sandalwood\n- **Bleu de Chanel Parfum (2018)** — dung do cao nhat, dau dan huong Mysore, long hoa binh\n\n## Do Noi Tieng\n\nTren Fragrantica: 4.01/5 voi hon 38.000 ratings. Thuong xuyen nam trong Top 5 nuoc hoa nam ban chay nhat the gioi tu 2012-2026. Con so nay noi len tat ca — day la chai nuoc hoa cua so dong.\n\n## DNA Mui Huong\n\nTang dau: Chanh, bergamot, buoi — tuoi sang. Tang giua: Go tuyet tung (cedarwood) + nhu huong (frankincense) — chieu sau va lich su. Drydown: Go dan huong + gung + xa huong — am ap tinh te.\n\n## Hieu Nang\n\nLongevity 7-9 tieng. Sillage vua phai — van phong to. Khong phai beast mode nhung ben va on dinh.\n\n## Verdict Maison de SON\n\nBleu de Chanel EDP la 'gray suit' cua nuoc hoa — khong bao gio sai, khong bao gio loi thoi. Chai all-rounder so 1 cho nguoi moi bat dau va ca collector ky tinh.",
        verdict: "Versatile so 1 cho moi bo suu tap nam. Clean, sang trong, khong bao gio gay phien — the tuc nhung khong nham.",
        verdictShort: "THANH LICH BAT HU",
        score: { scent: 8.8, uniqueness: 7.5, compliments: 9.0, value: 8.0, total: 8.4 },
        vibes: [{ label: "Van phong", icon: "💼" }, { label: "Hen ho casual", icon: "☕" }, { label: "Quanh nam", icon: "🔄" }],
        longevity: 8, sillage: 7,
        seasons: { spring: 80, summer: 70, fall: 85, winter: 75 },
        dayNight: { day: 80, night: 60 },
        topNotes: [{ name: "Chanh" }, { name: "Cam Bergamot" }, { name: "Buoi" }],
        middleNotes: [{ name: "Go tuyet tung" }, { name: "Gung" }, { name: "Nhu huong" }],
        baseNotes: [{ name: "Go dan huong" }, { name: "Xa huong" }, { name: "Labdanum" }],
        accords: [
            { name: "Go", value: 95, color: "#8B4513" },
            { name: "Citrus", value: 80, color: "#f7c242" },
            { name: "Aromatic", value: 75, color: "#2c7a4b" },
            { name: "Fresh", value: 70, color: "#5bc8f5" }
        ],
        tags: ["All-rounder", "Van Phong", "Classy", "Bestseller"],
        sizes: ["10ml Chiet", "50ml Fullbox", "100ml Fullbox"],
        basePrice: 4200000,
        shopeeOffers: []
    },
    {
        id: "ysl-black-opium",
        brand: "YVES SAINT LAURENT",
        name: "Black Opium",
        subName: "Eau de Parfum",
        gender: "nu",
        image: "https://fimgs.net/images/perfume/o.34170.jpg",
        images: [
            { url: "https://fimgs.net/photogram/p1200/pg/do/gPZJu6HCF1k6vNi0.jpg", source: "fragram", caption: "Black Opium trong khong gian toi bi an" }
        ],
        description: "Huyen thoai nuoc hoa nu cua YSL — ca phe den, hoa trang va vani tao rock-chic, tao bao nhung van nu tinh. Bestseller toan cau hon mot thap ky.",
        article: "## Cau Chuyen Ra Doi\n\nBlack Opium ra mat nam 2013 boi YSL Beauty, duoc tao ra boi Nathalie Lorson (Firmenich), Marie Salamagne, Olivier Cresp va Toward Lavole. Day la su doi moi hoan toan so voi Opium goc (1977) — thay vi floral oriental co dien, Black Opium chon ca phe + rock aesthetic. Quang cao chau au: nguoi phu nu lam chiet phuc dan ong bang mui huong cua minh.\n\n## Thong Tin Co Ban\n\n| | |\n|---|---|\n| **Nha san xuat** | YSL Beauty / L'Oreal Group |\n| **Nam ra mat** | 2013 |\n| **Perfumers** | Nathalie Lorson, Marie Salamagne, Olivier Cresp |\n| **Concentration** | EDP |\n| **Nguon goc** | Ca phe, hoa trang, vani |\n\n## Cac Phien Ban Chinh\n\n- **Black Opium EDP (2013)** — ban goc, ca phe + hoa nhài + vani\n- **Black Opium Floral Shock (2016)** — them hoa anh tuc hot pink, tre trung hon\n- **Black Opium Extreme (2020)** — dam hon, them cinnamon\n- **Black Opium Le Parfum (2021)** — extrait, bam da 14+ tieng\n- **Black Opium Over Red (2023)** — phien ban moi nhat, cherry + ca phe\n\n## Do Noi Tieng\n\n4.17/5 voi hon 62.000 ratings tren Fragrantica — top 10 nuoc hoa nu duoc rating nhieu nhat moi thoi. Do nam 2023, con so tren TikTok #blackopium vuot 2.8 ty luot xem.\n\n## DNA Mui Huong\n\nTang dau: Ca phe espresso den — gay an tuong ngay lap tuc. Tang giua: Hoa nhai + orange blossom — nu tinh giua mui ca phe. Drydown: Vanilla + patchouli — am ap, quyen ru, bam da.\n\n## Hieu Nang\n\nLongevity 8-10 tieng. Sillage moderate-strong. Compliment magnet manh nhat trong list — dac biet vao ban toi.\n\n## Verdict Maison de SON\n\nNeu ban muon mot chai nu co dau an ca nhan khong the nham lan — Black Opium la chuan. Ca phe + hoa + vani la cong thuc khong the quen.",
        verdict: "Dinh nghia lai nuoc hoa nu hien dai. Bestseller co ly do — ca phe + hoa + vani = khong the nham lan voi bat ky chai nao.",
        verdictShort: "ROCK-CHIC FEMININITY",
        score: { scent: 9.2, uniqueness: 8.8, compliments: 9.5, value: 8.5, total: 9.0 },
        vibes: [{ label: "Hen ho", icon: "🖤" }, { label: "Tiec toi", icon: "🍸" }, { label: "Ca tinh", icon: "⚡" }],
        longevity: 8, sillage: 8,
        seasons: { spring: 60, summer: 40, fall: 90, winter: 95 },
        dayNight: { day: 40, night: 95 },
        topNotes: [{ name: "Ca phe" }, { name: "Qua le" }, { name: "Hoa cam" }],
        middleNotes: [{ name: "Hoa nhai" }, { name: "Hoa cam trang" }, { name: "Cay bach xu" }],
        baseNotes: [{ name: "Vani" }, { name: "Hoac huong" }, { name: "Go tuyet tung" }],
        accords: [
            { name: "Ngot ngao", value: 100, color: "#8B0000" },
            { name: "Ca phe", value: 95, color: "#3e1f00" },
            { name: "Hoa", value: 75, color: "#e75480" },
            { name: "Vani", value: 70, color: "#f5deb3" }
        ],
        tags: ["Best Seller", "Hen Ho", "Tiec Toi", "Thu Dong"],
        sizes: ["10ml Chiet", "30ml Fullbox", "90ml Fullbox"],
        basePrice: 3800000,
        shopeeOffers: []
    },
    {
        id: "creed-aventus",
        brand: "CREED",
        name: "Aventus",
        subName: "Eau de Parfum",
        gender: "nam",
        image: "https://fimgs.net/images/perfume/o.9828.jpg",
        images: [
            { url: "https://fimgs.net/photogram/p1200/xh/ea/B2pTPj9ytDVenm98.jpg", source: "fragram", caption: "Creed Aventus — huyen thoai nuoc hoa nam" },
            { url: "https://fimgs.net/photogram/p1200/mc/qx/aNatsz0VTWmOw49w.jpg", source: "fragram", caption: "Thiet ke chai Creed dac trung" }
        ],
        description: "Vua nuoc hoa — Creed Aventus la chai duoc rating nhieu nhat Fragrantica. DNA dua + birch smoke + ambergris khong co dupe nao that su thay the.",
        article: "## Cau Chuyen Ra Doi\n\nAventus ra mat thang 9 nam 2010, duoc sang tac boi Olivier Creed va con trai Erwin Creed. Ten goi Aventus (tieng Latin: 'toi den, toi bat dau') — duoc cam hung tu cuoc doi Napoleon Bonaparte: chien thang, manh me, khat vong. House of Creed thanh lap tu 1760 tai London, sau do chuyen sang Paris, la nha nuoc hoa 'tailor-made' cho hoang gia chau Au.\n\n## Thong Tin Co Ban\n\n| | |\n|---|---|\n| **Nha san xuat** | House of Creed (Phap, 1760) |\n| **Nam ra mat** | 2010 |\n| **Perfumers** | Olivier Creed & Erwin Creed |\n| **Gia dinh huong** | Aromatic Fougere |\n| **Gia** | ~8.500.000 VND / 100ml |\n\n## Cac Phien Ban\n\n- **Aventus EDP (2010)** — ban goc va van la bestseller\n- **Aventus Cologne (2017)** — nhe nhat, tuoi mat, dung EDT-style\n- **Aventus for Her (2016)** — phien ban nu, floral + fruity\n- **Silver Mountain Water (2003)** — chai gan nhat DNA Aventus, xanh son\n\n**Batch controversy:** Aventus bat dau thay doi cong thuc sau 2015. Birch smoky intensity giam, longevity thap hon. Day la chu de nong nhat tren r/fragrance moi nam.\n\n## Do Noi Tieng\n\n50.000+ ratings tren Fragrantica (dieu chua chai nao dat truoc do). Diem trung binh 4.28/5. Duoc bau chon la Best Masculine Fragrance nhieu lan tren Basenotes.net.\n\n## DNA Mui Huong\n\nTang dau: Dua tuoi phuc tap (khong phai dua keo synthetic) + bergamot + ly chua den. Tang giua: Hoa hong + hoa nhai + GO bach duong chay (birch) — mut khoi lanh dac trung. Drydown: Ambergris + xa huong + dia y + vani — am ap bam da.\n\n## Hieu Nang\n\nLongevity 7-8 tieng (batch 2023+). Sillage moderate — projection vua phai, khong beast mode.\n\n## Verdict Maison de SON\n\nAventus khong phai chai 'wow ngay' — la chai ban muon deo mai sau nhieu lan thu. DNA birch smoky la thu khong bao gio tim duoc o noi khac.",
        verdict: "DNA birch smoke + pine apple khong the clone hoan toan. Collector phai co it nhat 1 lan — khong phai vi hype ma vi no thuc su unique.",
        verdictShort: "HUYEN THOAI BAT HU",
        score: { scent: 9.5, uniqueness: 9.8, compliments: 9.0, value: 6.0, total: 8.2 },
        vibes: [{ label: "Dang cap", icon: "👑" }, { label: "All-occasion", icon: "🔄" }, { label: "Collector", icon: "💎" }],
        longevity: 7, sillage: 7,
        seasons: { spring: 70, summer: 50, fall: 90, winter: 85 },
        dayNight: { day: 75, night: 80 },
        topNotes: [{ name: "Dua" }, { name: "Cam Bergamot" }, { name: "Ly chua den" }],
        middleNotes: [{ name: "Hoa hong" }, { name: "Go bach duong" }, { name: "Hoac huong" }],
        baseNotes: [{ name: "Long dien huong" }, { name: "Xa huong" }, { name: "Dia y" }, { name: "Vani" }],
        accords: [
            { name: "Trai cay", value: 90, color: "#f39c12" },
            { name: "Fresh", value: 80, color: "#2ecc71" },
            { name: "Go khoi", value: 75, color: "#616161" },
            { name: "Aromatic", value: 65, color: "#1abc9c" }
        ],
        tags: ["Niche", "Flagship", "Thu Dong", "Collector"],
        sizes: ["5ml Chiet", "10ml Chiet", "100ml Fullbox"],
        basePrice: 8500000,
        shopeeOffers: []
    },
    {
        id: "mfk-baccarat-rouge-540",
        brand: "MAISON FRANCIS KURKDJIAN",
        name: "Baccarat Rouge 540",
        subName: "Eau de Parfum",
        gender: "unisex",
        image: "https://fimgs.net/images/perfume/o.57088.jpg",
        images: [
            { url: "https://fimgs.net/photogram/p1200/kx/1f/hjWb9IjXjjnGgG5Z.jpg", source: "fragram", caption: "Baccarat Rouge 540 — chai cua thap ky" }
        ],
        description: "Hien tuong nuoc hoa cua thap ky. Amberwood + hoa nhai + nhua thong = mui huong khong the dinh nghia nhung khong the quen.",
        article: "## Cau Chuyen Ra Doi\n\nNam 2015, nha Baccarat (lam pha le tu 1764) ky niem 250 nam thanh lap. Ho lien he Francis Kurkdjian — perfumer nguoi Phap goc Armenia, nguoi da tao ra Jean Paul Gaultier Le Male nam 1995 luc 25 tuoi — de tao ra mot mui huong doc quyen. Con so 540 la nhiet do nung pha le Baccarat do F de co mau do dac trung. Ban dau chi 250 chai toan cau, gia 250 EUR/chai.\n\n## Thong Tin Co Ban\n\n| | |\n|---|---|\n| **Nha san xuat** | Maison Francis Kurkdjian (tu 2009, mua lai boi LVMH 2017) |\n| **Nam ra mat** | 2015 (exclusive), 2017 (mo rong) |\n| **Perfumer** | Francis Kurkdjian |\n| **Gia dinh huong** | Floral Amber |\n| **Gia** | ~7.000.000 VND / 70ml EDP |\n\n## Cac Phien Ban\n\n- **Baccarat Rouge 540 EDP (2015)** — ban goc\n- **Baccarat Rouge 540 Extrait (2017)** — nong do cao hon, bam da 14+ tieng\n- **Baccarat Rouge 540 Limited chai Baccarat crystal (2023)** — phien ban suu tap, chai pha le that\n\n## Do Noi Tieng\n\n4.09/5 voi 43.000+ ratings. Hashtag #baccarat rouge540 tren TikTok: 2.4 ty views. Day la chai nuoc hoa dau tien tro thanh viral trendsetter hoan toan nho social media. Clone fragrances cua BR540 tao nen mot nganh rieng — Lattafa Fakhar, Maison Alhambra Rouge 540, Rasasi Rumz Al Rasasi ban hang trieu chai.\n\n## DNA Mui Huong\n\nTang dau: Hoa nhai + nghe tay (saffron) am. Tang giua: Amberwood — not quan trong nhat, tao ra mui am ngot go thuoc dac trung khong chai nao co. Drydown: Nhua thong + xa huong — warm woody sweet bam lau.\n\n## Hieu Nang\n\nLongevity 10-14 tieng — xuat sac. Sillage moderate. Tot dac biet tren vai.\n\n## Verdict Maison de SON\n\nBR540 la cultural phenomenon. Xung dang voi gia tien neu ban hieu minh dang mua gi va da san sang cho muc niche.",
        verdict: "Cultural phenomenon cua nuoc hoa hien dai. Amberwood + jasmine + fir = khong the dinh nghia nhung khong the quen. Benchmark ma moi chai ngot deu bi so sanh.",
        verdictShort: "PHENOMENON CUA THAP KY",
        score: { scent: 9.8, uniqueness: 9.5, compliments: 9.2, value: 7.5, total: 9.0 },
        vibes: [{ label: "Sang trong", icon: "💎" }, { label: "Dem", icon: "🌙" }, { label: "Memorable", icon: "✨" }],
        longevity: 9, sillage: 8,
        seasons: { spring: 65, summer: 45, fall: 90, winter: 95 },
        dayNight: { day: 55, night: 95 },
        topNotes: [{ name: "Hoa nhai" }, { name: "Nghe tay" }],
        middleNotes: [{ name: "Amberwood" }, { name: "Long dien huong" }],
        baseNotes: [{ name: "Nhua thong" }, { name: "Xa huong" }],
        accords: [
            { name: "Ho phach", value: 100, color: "#d4a017" },
            { name: "Ngot am", value: 90, color: "#FF6D00" },
            { name: "Hoa", value: 70, color: "#e75480" },
            { name: "Go khoi", value: 65, color: "#614326" }
        ],
        tags: ["Niche", "Unisex", "Bestseller", "Statement"],
        sizes: ["5ml Chiet", "10ml Chiet", "70ml EDP", "70ml Extrait"],
        basePrice: 6500000,
        shopeeOffers: []
    },
    {
        id: "tom-ford-noir-extreme",
        brand: "TOM FORD",
        name: "Noir Extreme",
        subName: "Eau de Parfum",
        gender: "nam",
        image: "https://fimgs.net/images/perfume/o.30516.jpg",
        images: [
            { url: "https://fimgs.net/photogram/p1200/oi/vc/EqaG5B5K1A7gIOsc.jpg", source: "fragram", caption: "Tom Ford Noir Extreme — bong toi sang trong" }
        ],
        description: "Tom Ford Noir Extreme la cau tra loi cho ai muon ngot ngao exotic nhung van giu dang cap luxury. Cardamom + hoa nhai + sandalwood = bi an, quyen ru, sang trong.",
        article: "## Cau Chuyen Ra Doi\n\nNoir Extreme ra mat nam 2015 nhu su mo rong cua dòng Noir (2012). Tom Ford, nguoi sang lap thuong hieu vao 2005 sau khi roi Gucci/YSL, muon tao ra mot mui huong 'cuc do cua su quyen ru toi toi' — dam hon, spicy hon va exotic hon Noir goc. Triết ly Tom Ford: nuoc hoa phai gay cam giac skin-to-skin, sensual va unpredictable.\n\n## Thong Tin Co Ban\n\n| | |\n|---|---|\n| **Nha san xuat** | Tom Ford Beauty / Estee Lauder Group |\n| **Nam ra mat** | 2015 |\n| **Perfumer** | Rodrigo Flores-Roux (Givaudan) |\n| **Gia dinh huong** | Floral Oriental Spicy |\n| **Gia** | ~5.200.000 VND / 100ml |\n\n## Cac Phien Ban Noir\n\n- **Tom Ford Noir EDT (2012)** — ban goc, spicy floral\n- **Tom Ford Noir EDP (2013)** — sau hon, oriental\n- **Tom Ford Noir Extreme EDP (2015)** — exotic oriental, ngot va spicy nhat\n- **Tom Ford Noir Extreme Parfum (2021)** — nong do cao nhat, sandalwood led\n\n## Do Noi Tieng\n\n4.12/5 voi 15.000+ ratings — top rated trong dong Tom Ford Private Blend/Designer. Duoc nhieu fashion editor va grooming journalist chon la 'best date night fragrance' 2015-2019.\n\n## DNA Mui Huong\n\nTang dau: Bach dau khau + nhuc dau khau + tieu — warm spicy ngay lap tuc. Tang giua: Hoa hong + hoa nhai + hoa dien vy (orris) + ho phach — floral exotic. Drydown: Go dan huong Mysore + co vetiver + benzoin — am, creamy, bam lau.\n\n## Hieu Nang\n\nLongevity 9-11 tieng. Sillage medium — khong qua manh, phu hop da dang moi truong. Compliment getter manh vao ban toi.\n\n## Verdict Maison de SON\n\nNoir Extreme la chai Tom Ford 'de yeu' nhat — khong dang so nhu Oud Wood, khong qua mainstream nhu Tobacco Vanille. Sweet spot cua luxury fragrance.",
        verdict: "Spicy oriental refined — khong beast, khong vanilla, ma la luxury statement thuc su. Tom Ford dinh nhat cho buoi toi exotic.",
        verdictShort: "LUXURY ORIENTAL",
        score: { scent: 9.0, uniqueness: 8.5, compliments: 9.3, value: 7.8, total: 8.7 },
        vibes: [{ label: "Tiec toi", icon: "🍸" }, { label: "Su kien", icon: "🎭" }, { label: "Exotic", icon: "🌙" }],
        longevity: 9, sillage: 8,
        seasons: { spring: 50, summer: 25, fall: 90, winter: 100 },
        dayNight: { day: 30, night: 100 },
        topNotes: [{ name: "Bach dau khau" }, { name: "Nhuc dau khau" }, { name: "Tieu" }],
        middleNotes: [{ name: "Hoa hong" }, { name: "Hoa nhai" }, { name: "Hoa dien vy" }, { name: "Ho phach" }],
        baseNotes: [{ name: "Go dan huong" }, { name: "Co vetiver" }, { name: "Benzoin" }, { name: "Xa huong" }],
        accords: [
            { name: "Gia vi am", value: 95, color: "#e67e22" },
            { name: "Ngot exotic", value: 85, color: "#8B0000" },
            { name: "Go", value: 80, color: "#8B4513" },
            { name: "Hoa", value: 65, color: "#e75480" }
        ],
        tags: ["Tom Ford", "Niche", "Tiec Toi", "Thu Dong"],
        sizes: ["5ml Chiet", "10ml Chiet", "50ml EDP", "100ml EDP"],
        basePrice: 5200000,
        shopeeOffers: []
    }

];