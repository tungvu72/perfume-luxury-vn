import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { StarIcon, MapPin, Calendar, User, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";
import { MASTER_PERFUMES } from "@/constants/mockData";
import { filterValidProducts } from "@/lib/productValidation";
import { getProductUrl } from "@/lib/productUrl";

// Build brand map from MASTER_PERFUMES (repo = source of truth)
function getBrandData(brandSlug: string) {
    const products = filterValidProducts(
        MASTER_PERFUMES.filter(p =>
            (p.brandSlug || p.brand.toLowerCase().replace(/\s+/g, '-')) === brandSlug
        )
    );
    if (products.length === 0) return null;
    return {
        name: products[0].brand,
        slug: brandSlug,
        products,
        productCount: products.length,
    };
}

function getAllBrandSlugs() {
    const slugs = new Set<string>();
    MASTER_PERFUMES.forEach(p => {
        slugs.add(p.brandSlug || p.brand.toLowerCase().replace(/\s+/g, '-'));
    });
    return Array.from(slugs);
}

// Brand content data (factual, no fabrication)
const BRAND_CONTENT: Record<string, {
    intro: string; founded: string; founder: string; country: string;
    positioning: string; signatureStyle: string;
}> = {
    'dior': { founded: '1946', founder: 'Christian Dior', country: 'Pháp', positioning: 'Luxury fashion & fragrance house', signatureStyle: 'Đa dạng từ fresh sạch (Sauvage) đến floral sang (J\'adore)', intro: 'Dior là một trong những thương hiệu nước hoa lớn nhất thế giới, thuộc tập đoàn LVMH. Với lịch sử hơn 7 thập kỷ, Dior phủ rộng cả nam lẫn nữ với nhiều dòng mùi từ sạch sáng đến đậm quyến rũ. Tại Việt Nam, Sauvage và J\'adore là hai cái tên được tìm kiếm nhiều nhất.' },
    'chanel': { founded: '1910', founder: 'Coco Chanel', country: 'Pháp', positioning: 'Biểu tượng luxury toàn cầu', signatureStyle: 'Thanh lịch, chỉn chu, sang mà không cần phô', intro: 'Chanel gần như là chuẩn tham chiếu của nhóm nước hoa designer cao cấp. Hãng không chạy theo kiểu gây sốc bằng note lạ, mà thắng ở độ hoàn thiện, cảm giác sang và khả năng dùng lâu dài. Bleu de Chanel là lựa chọn an toàn bậc nhất cho nam cần lịch sự; Coco Mademoiselle và No. 5 giữ vị trí biểu tượng ở nhóm nữ. Điểm mạnh là chất lượng rất ổn định qua nhiều thế hệ, điểm yếu là giá cao và ít phù hợp người thích mùi phá cách.' },
    'ysl': { founded: '1961', founder: 'Yves Saint Laurent', country: 'Pháp', positioning: 'Luxury fashion, nước hoa hiện đại', signatureStyle: 'Trẻ, sexy, dễ hợp gu thị trường', intro: 'YSL làm nước hoa theo hướng hiện đại, bắt trend tốt và rất mạnh ở nhóm mùi dễ bán. Nam có Y EDP, La Nuit de L\'Homme; nữ có Black Opium và Libre — toàn những line đánh thẳng vào nhu cầu thơm dễ chịu, dễ được khen. Điểm mạnh là trẻ, có sức hút thương mại rõ. Điểm yếu là vài mùi quá chiều đám đông nên thiếu chiều sâu nếu bạn quen niche hoặc thích cá tính lạ.' },
    'tom-ford': { founded: '2006', founder: 'Tom Ford', country: 'Mỹ', positioning: 'Designer-niche crossover', signatureStyle: 'Đậm, sexy, có tính tuyên ngôn', intro: 'Tom Ford không dành cho người thích an toàn tuyệt đối. Thương hiệu này mạnh ở cảm giác sang, tối, gợi cảm và biết cách tạo hình ảnh rất rõ cho từng chai. Oud Wood, Tobacco Vanille hay Lost Cherry đều có độ nhận diện cao vì mùi và concept đi cùng nhau khá chặt. Điểm mạnh là cá tính rõ, mặc lên có khí chất; điểm yếu là giá cao và có những chai thiên đầu tư nhiều vào cảm xúc hơn là độ linh hoạt người dùng.' },
    'armani': { founded: '1975', founder: 'Giorgio Armani', country: 'Ý', positioning: 'Luxury fashion house', signatureStyle: 'Thanh lịch Ý, cân bằng giữa dễ dùng và sang', intro: 'Armani làm rất tốt kiểu nước hoa vừa dễ dùng vừa có cảm giác cao cấp. Acqua di Giò là trục fresh nam kinh điển; Stronger With You lại kéo về hướng ngọt ấm, dễ hẹn hò; bên nữ thì My Way thiên hoa trắng dễ tiếp cận. Điểm mạnh của Armani là độ cân bằng: ít khi quá khó ngửi, cũng ít khi quá nhạt. Điểm yếu là một số line hơi an toàn nếu bạn muốn cá tính thật mạnh.' },
    'creed': { founded: '1760', founder: 'James Henry Creed', country: 'Anh', positioning: 'Nhà nước hoa lâu đời, cao cấp', signatureStyle: 'Sang, sáng, tạo cảm giác thành đạt', intro: 'Creed nổi tiếng gần như chỉ cần nhắc Aventus là đủ hiểu vị thế. Đây là kiểu niche sang theo hướng sạch, sáng, chỉn chu chứ không quá dị biệt. Điểm mạnh là cảm giác đẳng cấp và gu thành đạt rất rõ, đặc biệt ở Aventus, Green Irish Tweed hay Silver Mountain Water. Điểm yếu là giá rất cao, batch variation bị bàn nhiều và hiệu năng không phải lúc nào cũng tương xứng kỳ vọng.' },
    'versace': { founded: '1978', founder: 'Gianni Versace', country: 'Ý', positioning: 'Luxury fashion, nước hoa nam nổi bật', signatureStyle: 'Trẻ, nổi, dễ gây chú ý', intro: 'Versace mạnh ở nhóm nước hoa trẻ, dễ mặc đi chơi và có hiệu ứng chú ý khá nhanh. Eros là case điển hình: ngọt, gợi cảm, thiên nightlife và rất phổ biến ở tệp nam trẻ. Dylan Blue thì an toàn hơn, dễ dùng hơn. Điểm mạnh là dễ tiếp cận, dễ tạo ấn tượng; điểm yếu là ít chiều sâu nếu bạn tìm cảm giác tinh tế hoặc trưởng thành.' },
    'prada': { founded: '1913', founder: 'Mario Prada', country: 'Ý', positioning: 'Luxury fashion, nước hoa tinh tế', signatureStyle: 'Thanh lịch, iris sạch, thể thao sang', intro: 'Prada tiếp cận nước hoa theo hướng tinh tế, hiện đại. L\'Homme với iris sạch và Luna Rossa với cảm hương thể thao sang là hai dòng nam đáng chú ý nhất.' },
    'guerlain': { founded: '1828', founder: 'Pierre-François Pascal Guerlain', country: 'Pháp', positioning: 'Một trong những nhà nước hoa lâu đời nhất', signatureStyle: 'Cổ điển Pháp, sâu, có bản sắc riêng', intro: 'Guerlain là thương hiệu dành cho người muốn ngửi ra lịch sử và bản sắc. Hãng có rất nhiều chai đẹp theo kiểu cổ điển Pháp, đặc biệt ở Shalimar, Habit Rouge, L\'Homme Idéal hay các line Aqua Allegoria. Điểm mạnh là ADN riêng rất rõ và chất lượng sáng tác dày dặn. Điểm yếu là không phải ai cũng hợp ngay từ lần đầu, nhất là nếu gu của bạn chỉ quen designer hiện đại dễ hiểu.' },
    'maison-francis-kurkdjian': { founded: '2009', founder: 'Francis Kurkdjian', country: 'Pháp', positioning: 'Niche cao cấp, thuộc LVMH', signatureStyle: 'Hiện đại, mượt, sang kiểu sạch tinh chỉnh', intro: 'MFK là kiểu niche rất hiện đại: sang, mượt, sạch và được đánh bóng cực kỹ. Baccarat Rouge 540 là hiện tượng lớn nhất của hãng, nhưng Gentle Fluidity Gold, Oud Satin Mood hay Amyris cũng cho thấy tay nghề rất đều. Điểm mạnh là độ hoàn thiện cao và mùi lên da thường rất đẹp. Điểm yếu là giá cao và vài chai quá nổi tới mức mất cảm giác riêng nếu bạn thích sự ít người đụng.' },
    'parfums-de-marly': { founded: '2009', founder: 'Julien Sprecher', country: 'Pháp', positioning: 'Niche, cảm hứng hoàng gia Pháp', signatureStyle: 'Sang, dày, có độ hiện diện mạnh', intro: 'Parfums de Marly làm niche theo hướng dễ cảm nhận độ sang ngay lập tức. Layton, Herod, Carlisle hay Delina đều có profile rất rõ: đậm, mượt, có lực và dễ để lại ấn tượng. Điểm mạnh là mùi có sự hiện diện mạnh hơn mặt bằng niche “artsy”. Điểm yếu là một số chai hơi bóng bẩy, thiên effect hơn là độ tinh tế vi mô.' },
    'xerjoff': { founded: '2003', founder: 'Sergio Momo', country: 'Ý', positioning: 'Ultra-niche, nguyên liệu cao cấp', signatureStyle: 'Sang đậm, giàu texture, thiên trải nghiệm xa xỉ', intro: 'Xerjoff là kiểu niche vừa thích khoe mùi vừa thích khoe độ xa xỉ. Naxos, Erba Pura, Torino21 hay Alexandria II đều cho cảm giác dày, giàu texture và rất được chau chuốt. Điểm mạnh là đeo lên thấy tiền và thấy chất liệu. Điểm yếu là không phải chai nào cũng linh hoạt; có những mùi quá đậm hoặc quá ngọt với khí hậu Việt Nam.' },
    'nishane': { founded: '2012', founder: 'Murat Katran', country: 'Thổ Nhĩ Kỳ', positioning: 'Niche, extrait de parfum', signatureStyle: 'Đậm, bám tốt, hiện diện cao', intro: 'Nishane nổi tiếng vì làm mùi đậm và thường bám rất tốt. Hacivat, Ani, Hundred Silent Ways hay Wulong Cha đều có lượng fan riêng vì profile rõ và hiệu năng mạnh. Điểm mạnh là bạn dễ cảm thấy “đáng tiền” ở độ hiện diện. Điểm yếu là vài chai hơi gắt hoặc quá dày nếu dùng sai thời tiết, đặc biệt trong khí hậu nóng ẩm.' },
    'hermes': { founded: '1837', founder: 'Thierry Hermès', country: 'Pháp', positioning: 'Ultra-luxury', signatureStyle: 'Tiết chế, tinh tế, thiên nhiên', intro: 'Hermès tiếp cận nước hoa theo hướng tiết chế, tinh tế. Terre d\'Hermès là chai nam signature, còn dòng Jardin nổi tiếng với cảm hứng từ thiên nhiên và du lịch.' },
    'jean-paul-gaultier': { founded: '1982', founder: 'Jean Paul Gaultier', country: 'Pháp', positioning: 'Designer nổi tiếng, hình ảnh táo bạo', signatureStyle: 'Ngọt, sexy, nightlife rất rõ', intro: 'JPG gần như là thương hiệu của những chai nam thích được chú ý. Le Male, Ultra Male hay Le Male Elixir đều đi theo hướng ngọt, quyến rũ, thiên tiệc tối và rất biết cách làm người mặc nổi bật. Điểm mạnh là dễ gây ấn tượng và có màu sắc riêng. Điểm yếu là không phải line nào cũng hợp văn phòng hoặc thời tiết nóng, vì nhiều chai khá dày và ngọt.' },
    'givenchy': { founded: '1952', founder: 'Hubert de Givenchy', country: 'Pháp', positioning: 'Luxury fashion house', signatureStyle: 'Thanh lịch, hiện đại hóa qua Gentleman và L\'Interdit', intro: 'Givenchy mang đến hình ảnh thanh lịch cổ điển Pháp. Gentleman Réserve Privée và L\'Interdit là hai dòng nổi bật nhất hiện tại, phủ cả nam và nữ.' },
    'narciso-rodriguez': { founded: '1997', founder: 'Narciso Rodriguez', country: 'Mỹ', positioning: 'Designer, minimalism', signatureStyle: 'Musk sạch, ôm da, nữ tính kiểu tinh tế', intro: 'Narciso Rodriguez mạnh cực rõ ở trục xạ hương. For Her, Pure Musc hay Musc Noir Rose đều không cố bùng nổ, mà đẹp ở cảm giác sạch, mềm, gần da và rất nữ tính. Điểm mạnh là sự tinh tế, mặc lâu không mệt. Điểm yếu là nếu bạn muốn hiệu ứng thật nổi hoặc thật statement, nhiều chai của Narciso sẽ hơi kín tiếng.' },
    'mugler': { founded: '1992', founder: 'Thierry Mugler', country: 'Pháp', positioning: 'Designer, mùi đột phá', signatureStyle: 'Lớn tiếng, khác biệt, ít khi an toàn', intro: 'Mugler là kiểu thương hiệu không sợ làm quá. Angel mở đường cho gourmand hiện đại; Alien lại tạo ra một profile hoa-gỗ rất dễ nhận ra. Điểm mạnh là cá tính mạnh và nhiều chai có tính biểu tượng thực sự. Điểm yếu là không hề “safe blind buy” — thích thì mê, không hợp thì thấy rất khó sống cùng.' },
    'kilian': { founded: '2007', founder: 'Kilian Hennessy', country: 'Pháp', positioning: 'Niche cao cấp, Estée Lauder', signatureStyle: 'Sang, gourmand tinh tế', intro: 'By Kilian là nhà nước hoa niche do Kilian Hennessy (gia đình Hennessy cognac) sáng lập. Angel\'s Share và Love Don\'t Be Shy là hai chai phổ biến nhất.' },
    'byredo': { founded: '2006', founder: 'Ben Gorham', country: 'Thụy Điển', positioning: 'Niche hiện đại, minimalist', signatureStyle: 'Tối giản, nghệ thuật', intro: 'Byredo là nhà nước hoa niche từ Stockholm, nổi tiếng với thiết kế tối giản và mùi hương có tính nghệ thuật. Bal d\'Afrique và Gypsy Water được biết đến rộng rãi nhất.' },
    'frederic-malle': { founded: '2000', founder: 'Frédéric Malle', country: 'Pháp', positioning: 'Niche cao cấp, publisher model', signatureStyle: 'Tác giả tính cao, chú trọng perfumer hơn marketing', intro: 'Frédéric Malle đáng chú ý vì đặt perfumer lên phía trước, nên nhiều chai của hãng có chất “tác phẩm” rõ hơn hàng niche thương mại. Portrait of a Lady, Musc Ravageur hay Carnal Flower đều là những cột mốc thật sự trong giới mùi hương. Điểm mạnh là chiều sâu và giá trị nghệ thuật. Điểm yếu là không dành cho người chỉ cần thơm dễ chịu; nhiều chai cần gu và cần thời gian để hiểu.' },
    'dolce-gabbana': { founded: '1985', founder: 'Domenico Dolce & Stefano Gabbana', country: 'Ý', positioning: 'Luxury fashion house', signatureStyle: 'Địa Trung Hải, dễ gần, có chất Ý khá rõ', intro: 'Dolce & Gabbana làm nước hoa dễ hiểu và có màu sắc sống thật. The One nổi ở vibe ấm, lịch lãm; Light Blue lại là trục mát, sáng, nghỉ dưỡng kiểu Địa Trung Hải. Điểm mạnh là nhiều chai dễ sống trong đời thường. Điểm yếu là hiệu năng một số best-seller không quá mạnh, nên hợp người ưu tiên vibe hơn là độ bám dữ.' },
    'hugo-boss': { founded: '1924', founder: 'Hugo Boss', country: 'Đức', positioning: 'Premium fashion & fragrance', signatureStyle: 'Nam tính gọn gàng, dễ mặc, ít rủi ro', intro: 'Hugo Boss mạnh ở nhóm nước hoa nam dễ tiếp cận, đặc biệt cho người mới bắt đầu. Boss Bottled là line trụ cột vì đủ lịch sự, đủ dễ dùng và không gây áp lực cho người xung quanh. Điểm mạnh là rất an toàn để dùng hằng ngày. Điểm yếu là thiếu sự bứt phá nếu bạn đã quen các line có cá tính rõ hơn từ Chanel, Dior hay niche.' },
    'maison-margiela': { founded: '1988', founder: 'Martin Margiela', country: 'Pháp/Bỉ', positioning: 'Avant-garde fashion, Replica line', signatureStyle: 'Concept ký ức, giàu hình ảnh, dễ tưởng tượng', intro: 'Maison Margiela Replica mạnh ở storytelling. Mỗi chai như một lát cắt ký ức: Jazz Club là quán bar tối, By the Fireplace là khói và chăn ấm, Lazy Sunday Morning là ga giường sạch. Điểm mạnh là người dùng dễ nhớ cảm giác mùi gắn với bối cảnh. Điểm yếu là hiệu năng thường không quá dữ và có chai đẹp về concept hơn độ đa dụng.' },
    'lancome': { founded: '1935', founder: 'Armand Petitjean', country: 'Pháp', positioning: 'Luxury beauty & fragrance', signatureStyle: 'Nữ tính, thanh lịch', intro: 'Lancôme là thương hiệu luxury beauty thuộc L\'Oréal, mạnh ở phân khúc nước hoa nữ. La Vie Est Belle là một trong những chai nữ bán chạy nhất thế giới nhiều năm liên tiếp.' },
    'mancera': { founded: '2008', founder: 'unknown', country: 'Pháp', positioning: 'Niche, giá tầm trung', signatureStyle: 'Đậm, bền, dễ gây ấn tượng theo kiểu trực diện', intro: 'Mancera nổi lên vì cho người dùng cảm giác niche nhưng vẫn thực dụng. Cedrat Boise, Instant Crush hay Red Tobacco đều có điểm chung: dễ ngửi ra, bám tốt và có mặt khá mạnh. Điểm mạnh là hiệu năng và mức giá dễ chấp nhận hơn nhiều nhà niche khác. Điểm yếu là một số chai hơi synthetic hoặc đi theo hướng effect mạnh hơn độ tinh xảo.' },
    'initio': { founded: '2015', founder: 'unknown', country: 'Pháp', positioning: 'Niche, concept pheromone', signatureStyle: 'Gợi cảm, dày, marketing mạnh nhưng mùi cũng có lực thật', intro: 'Initio bán nhiều bằng concept hấp dẫn, nhưng điểm đáng nói là mùi của hãng thường cũng đủ lực để chống lưng cho câu chuyện đó. Side Effect, Rehab hay Musk Therapy đều có profile rất dễ nhớ và thiên cảm giác thân thể, gần da hoặc gây nghiện. Điểm mạnh là vibe sexy rõ. Điểm yếu là giá cao và vài chai bị xem là quá commercial với chuẩn niche thuần túy.' },
    'lattafa': { founded: 'unknown', founder: 'unknown', country: 'UAE', positioning: 'Arabian fragrance, giá mềm', signatureStyle: 'Ngọt đậm, hiệu ứng mạnh, value for money rất cao', intro: 'Lattafa mạnh ở đúng thứ thị trường đang thích: mùi đậm, thơm rõ, bám tốt và giá mềm hơn rất nhiều so với cảm giác nó tạo ra. Khamrah là ví dụ rõ nhất: ngọt ấm, bắt mũi, đi tối rất tốt và tạo hiệu ứng “ngon hơn giá”. Điểm mạnh của Lattafa là value cực cao và danh mục tăng rất nhanh. Điểm yếu là chất lượng giữa các chai không đồng đều, và nhiều mùi thiên effect mạnh hơn độ tinh chỉnh.' },
    'valentino': { founded: '1960', founder: 'Valentino Garavani', country: 'Ý', positioning: 'Luxury fashion house', signatureStyle: 'Lãng mạn Ý nhưng rất biết làm mùi hợp thị trường', intro: 'Valentino hiện tại gần như sống mạnh nhất nhờ line Born in Roma. Đây là kiểu nước hoa làm tốt ở mặt thương mại: hiện đại, trẻ, có chút sexy và rất dễ lên người. Điểm mạnh là dễ hợp số đông hơn hình ảnh high fashion của hãng. Điểm yếu là brand identity trong mùi chưa quá độc lập; vài chai vẫn cho cảm giác “đẹp và dễ bán” hơn là thật sự khác biệt.' },
    'louis-vuitton': { founded: '1854', founder: 'Louis Vuitton', country: 'Pháp', positioning: 'Ultra-luxury, LVMH flagship', signatureStyle: 'Sang hiện đại, clean luxury rất rõ', intro: 'Louis Vuitton vào nước hoa muộn nhưng vào rất chắc. Imagination, L\'Immensité, Ombre Nomade hay Afternoon Swim đều cho thấy hãng hiểu rõ nhu cầu luxury hiện đại: mùi sạch, đẹp, giàu chất liệu và dễ nhận là đồ high-end. Điểm mạnh là độ hoàn thiện và hình ảnh cực mạnh. Điểm yếu là giá rất cao, ít tiếp cận và ở Việt Nam thường thiên tệp sưu tầm hoặc khách mua vì lifestyle.' },
    'armaf': { founded: 'unknown', founder: 'unknown', country: 'UAE', positioning: 'Arabian fragrance, giá mềm', signatureStyle: 'Phóng theo chất liệu lớn, hiệu năng cao, thực dụng', intro: 'Armaf nổi tiếng không phải vì tạo ra trào lưu mới, mà vì làm rất mạnh mảng mùi phóng theo các lựa chọn lớn ở mức giá dễ vào hơn. Club de Nuit Intense Man là case tiêu biểu: cho cảm giác gần vibe Aventus mà giá dễ chấp nhận hơn nhiều. Điểm mạnh là tính thực dụng và khả năng tiếp cận. Điểm yếu là độ mượt và tinh chỉnh thường không bằng bản gốc, đặc biệt rõ ở opening.' },
    'afnan': { founded: 'unknown', founder: 'unknown', country: 'UAE', positioning: 'Arabian fragrance, giá mềm', signatureStyle: 'Giá mềm, hiệu ứng mạnh, hợp người mới chơi', intro: 'Afnan làm rất tốt phân khúc giá dễ vào nhưng vẫn muốn thơm nổi. 9PM là ví dụ rõ: ngọt, bắt mũi, đi chơi tốt và cho cảm giác vượt tầm giá. Điểm mạnh là phù hợp người mới chơi hoặc người ưu tiên hiệu ứng. Điểm yếu là nhiều chai chưa đủ chiều sâu, thiên cảm giác “được việc” hơn là tinh tế.' },
    'acqua-di-parma': { founded: '1916', founder: 'unknown', country: 'Ý', positioning: 'Niche Ý, thuộc LVMH', signatureStyle: 'Citrus Ý cổ điển, sáng và rất lịch thiệp', intro: 'Acqua di Parma đẹp ở sự thanh lịch kiểu Ý cũ: sạch, sáng, không phô trương nhưng có giáo dưỡng. Colonia là xương sống của hãng, còn các line Blu Mediterraneo đưa cảm giác nghỉ dưỡng rất rõ. Điểm mạnh là sự nhẹ nhàng có đẳng cấp. Điểm yếu là hiệu năng thường không phải điểm ăn tiền, nên hợp người ưu tiên gu hơn là độ bám mạnh.' },
};

export async function generateStaticParams() {
    return getAllBrandSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const brand = getBrandData(slug);
    if (!brand) return { title: "Không tìm thấy thương hiệu | Maison de SON" };
    const content = BRAND_CONTENT[slug];
    return {
        title: content?.intro
            ? `Nước hoa ${brand.name} | Review & Gợi ý chọn mùi 2026 | Maison de SON`
            : `Nước hoa ${brand.name} | Maison de SON`,
        description: content?.intro || `Khám phá nước hoa ${brand.name} tại Maison de SON với review và gợi ý chọn mùi phù hợp cho người Việt.`,
        alternates: { canonical: `https://www.maisondeson.com/thuong-hieu/${slug}` },
    };
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const brand = getBrandData(slug);
    if (!brand) notFound();

    const content = BRAND_CONTENT[slug];
    const hasContent = !!content;

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* BRAND HERO */}
            <section className="relative bg-gradient-to-b from-[#1a1410] to-[#2a2018] text-white py-16 md:py-24">
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03]" />
                <div className="max-w-[1200px] mx-auto px-5 relative z-10">
                    <Breadcrumbs items={[{ label: 'Thương hiệu', href: '/thuong-hieu' }, { label: brand.name }]} />
                    <div className="mt-8 max-w-3xl">
                        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-amber-400/80 mb-4">Hồ sơ thương hiệu</p>
                        <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-[1.1]">{brand.name}</h1>
                        {hasContent && (
                            <p className="text-gray-300 leading-relaxed text-base md:text-lg max-w-2xl">
                                {content.intro}
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* BRAND FACTS CARD */}
            {hasContent && (
                <section className="max-w-[1200px] mx-auto px-5 -mt-8 relative z-20 mb-12">
                    <div className="bg-white rounded-2xl border border-[#eadfce] shadow-[0_20px_60px_rgba(27,18,13,0.08)] p-6 md:p-8">
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-5">Thông tin nhanh</h2>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                            <div className="flex items-start gap-3">
                                <Calendar size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Thành lập</p>
                                    <p className="text-sm font-semibold mt-0.5">{content.founded !== 'unknown' ? content.founded : '—'}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <User size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Nhà sáng lập</p>
                                    <p className="text-sm font-semibold mt-0.5">{content.founder !== 'unknown' ? content.founder : '—'}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Xuất xứ</p>
                                    <p className="text-sm font-semibold mt-0.5">{content.country !== 'unknown' ? content.country : '—'}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Sparkles size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Phong cách</p>
                                    <p className="text-sm font-semibold mt-0.5">{content.signatureStyle !== 'unknown' ? content.signatureStyle : '—'}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-[9px] font-bold text-amber-700">{brand.productCount}</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Sản phẩm</p>
                                    <p className="text-sm font-semibold mt-0.5">{brand.productCount} chai đang có</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* PRODUCT GRID */}
            <section className="max-w-[1200px] mx-auto px-5 py-12">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-serif">
                        Nước hoa {brand.name} tại Maison de SON
                    </h2>
                    <span className="text-xs font-bold text-gray-400 bg-gray-100 px-3 py-1.5 rounded-full">
                        {brand.productCount} sản phẩm
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {brand.products.map((product, i) => (
                        <Link
                            key={product.id}
                            href={getProductUrl(product)}
                            className="group rounded-2xl border border-[#eadfce] bg-white overflow-hidden hover:shadow-[0_12px_40px_rgba(27,18,13,0.08)] transition-all duration-300"
                        >
                            <div className="aspect-[3/4] bg-[#faf8f6] relative overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={`${product.brand} ${product.name}`}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4">
                                    <div className="w-11 h-11 bg-white/90 backdrop-blur-sm rounded-full flex flex-col items-center justify-center border border-[#eadfce] shadow-sm">
                                        <span className="text-xs font-bold text-amber-700 leading-none">{product.score.total}</span>
                                        <span className="text-[6px] font-bold text-gray-400 uppercase mt-0.5">Score</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5">
                                <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-1">{product.subName || 'Eau de Parfum'}</p>
                                <h3 className="text-lg font-semibold mb-2 group-hover:text-amber-700 transition-colors">{product.name}</h3>
                                <div className="flex items-center gap-1.5 mb-3">
                                    <div className="flex text-amber-500">
                                        {[...Array(5)].map((_, j) => <StarIcon key={j} size={10} fill="currentColor" />)}
                                    </div>
                                    <span className="text-[10px] text-gray-400 font-medium">{product.score.total}/10</span>
                                </div>
                                {product.verdictShort && (
                                    <p className="text-[11px] text-gray-500 leading-relaxed mb-3">{product.verdictShort}</p>
                                )}
                                <p className="text-base font-serif font-medium">{product.basePrice?.toLocaleString('vi-VN')} ₫</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* BRAND STORY */}
            {hasContent && (
                <section className="bg-[#faf8f6] border-t border-[#eadfce] py-16">
                    <div className="max-w-3xl mx-auto px-5">
                        <h2 className="text-2xl md:text-3xl font-serif mb-6">
                            Về {brand.name}
                        </h2>
                        <div className="prose prose-sm prose-gray prose-headings:font-serif">
                            <p className="text-gray-600 leading-relaxed">{content.intro}</p>
                            {content.positioning !== 'unknown' && (
                                <p className="text-gray-600 leading-relaxed">
                                    <strong>Định vị:</strong> {content.positioning}
                                </p>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-12 border-t border-[#eadfce]">
                <div className="max-w-3xl mx-auto px-5 text-center">
                    <p className="text-gray-500 text-sm mb-4">
                        Chưa chắc chai nào phù hợp? Nhắn Zalo để được tư vấn theo gu, hoàn cảnh dùng và ngân sách.
                    </p>
                    <a
                        href="https://zalo.me/0961226169"
                        className="inline-flex items-center gap-2 bg-[#1a1410] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-amber-800 transition-colors"
                    >
                        Nhắn Zalo tư vấn
                    </a>
                </div>
            </section>
        </main>
    );
}
