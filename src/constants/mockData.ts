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

];
