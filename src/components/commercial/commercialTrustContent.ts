/**
 * Shared commercial-trust copy for COMMERCIAL_V4_FOUNDATION_01.
 * Truthful language only — no stock, dealer, cheapest-price, or guaranteed-authenticity claims.
 */

export const PRICE_DISCLAIMER = {
  title: "Giá tham khảo, không phải giá chốt",
  lead: "Maison de Son dùng “giá tham khảo” để giúp bạn định hướng ngân sách trước khi mua. Chúng tôi không công bố giá chốt, không đảm bảo tồn kho và không khẳng định mức giá rẻ nhất.",
  points: [
    "Giá có thể thay đổi theo người bán, dung tích, tình trạng (fullbox/chiết) và khuyến mãi.",
    "Bạn cần xác nhận giá cuối cùng trên trang đối tác hoặc kênh bán trước khi thanh toán.",
    "Cho đến khi có feed giá/affiliate ổn định, mọi con số trên trang (nếu có) chỉ mang tính định hướng.",
  ],
};

export const AUTHENTICITY_GUIDE = {
  title: "Tiêu chí chọn nguồn mua đáng tin cậy",
  lead: "Không có một dấu hiệu đơn lẻ nào chứng minh chai nước hoa “chắc chắn chính hãng”. Hãy xem xét nhiều tín hiệu cùng lúc.",
  points: [
    "Người bán có danh tính, kênh liên hệ và chính sách đổi trả rõ ràng.",
    "Có hóa đơn/giao dịch hoặc chứng từ mua hàng khi cần đối chiếu.",
    "Bao bì và vòi xịt hoàn thiện, in ấn sắc nét; batch code trên chai và hộp khớp nhau (chỉ là một tín hiệu).",
    "Mức giá quá thấp so với mặt bằng thị trường cần được kiểm tra kỹ hơn, không phải bằng chứng dứt khoát.",
    "Đọc review độc lập và so sánh thông tin trước khi quyết định.",
  ],
  cautions: "Maison de Son không buộc tội bất kỳ người bán nào và không tự nhận là đại lý chính hãng.",
};

export const AFFILIATE_DISCLOSURE = {
  title: "Minh bạch affiliate",
  lead: "Một số liên kết trên Maison de Son có thể là liên kết đối tác. Nếu bạn mua hàng qua liên kết đủ điều kiện, chúng tôi có thể nhận hoa hồng.",
  points: [
    "Hoa hồng (nếu có) không làm tăng giá bạn phải trả so với mua trực tiếp qua cùng đường dẫn đối tác.",
    "Quan hệ thương mại không quyết định kết luận biên tập: review vẫn có thể nêu nhược điểm.",
    "Không phải mọi liên kết trên site đều là affiliate; một số chỉ là điều hướng nội bộ hoặc tham chiếu.",
  ],
};

export const EDITORIAL_METHODOLOGY = {
  title: "Cách chúng tôi biên tập",
  lead: "Nội dung Maison de Son kết hợp thông tin công bố, phân tích biên tập và ngữ cảnh dùng thực tế. Chúng tôi không khẳng định đã test cá nhân mọi sản phẩm trong catalog.",
  points: [
    "Nguồn: tài liệu chính thức, mô tả sản phẩm đã kiểm chứng, so sánh nội bộ và phản hồi thực tế khi có.",
    "Phân biệt rõ: dữ kiện công bố, nhận định biên tập, và trải nghiệm dùng (khi được nêu).",
    "Giá: chỉ dùng như tham chiếu ngân sách cho đến khi có feed đối tác tin cậy.",
    "Sửa lỗi: nếu thông tin sai hoặc lỗi thời, chúng tôi ưu tiên cập nhật khi phát hiện.",
    "Tránh khẳng định hiệu năng tuyệt đối hoặc “đảm bảo 100% chính hãng” khi không có bằng chứng đủ mạnh.",
  ],
};

/** Short category-specific intros — intentionally different per gender page */
export const CATEGORY_COMMERCIAL_INTRO: Record<
  "nam" | "nu" | "unisex",
  { who: string; occasion: string; next: string }
> = {
  nam: {
    who: "Phù hợp nếu bạn tìm nước hoa nam theo gu sạch–tươi, gỗ–cay, hoặc mùi dễ dùng ban ngày.",
    occasion: "Ưu tiên theo hoàn cảnh: đi làm, thời tiết nóng ẩm, buổi tối hoặc dùng hằng ngày — rồi mới siết theo nốt hương.",
    next: "Sau khi thu hẹp danh sách, đọc review từng chai để so sánh lưu–tỏa, điểm mạnh/yếu trước khi chọn nguồn mua.",
  },
  nu: {
    who: "Phù hợp nếu bạn tìm nước hoa nữ theo hướng hoa nhẹ, trái cây tươi, vani ấm hoặc musk sạch.",
    occasion: "Chọn theo lúc xịt: ban ngày văn phòng, hẹn hò, tiệc tối hoặc dùng quanh năm — tránh mua chỉ vì tên chai nổi.",
    next: "Mở từng review để so phong cách mùi và mức độ dễ dùng; khi mua, kiểm tra người bán và giá tham khảo theo dung tích.",
  },
  unisex: {
    who: "Phù hợp nếu bạn chọn theo nốt hương và cảm giác dùng, không bị ràng buộc nhãn “nam/nữ” trên chai.",
    occasion: "Nhiều mùi unisex linh hoạt cho đi làm, đi chơi nhẹ hoặc thời tiết thay đổi — hãy lọc theo gu trước, giới tính sau.",
    next: "Đọc review chi tiết để xem chai có quá đặc trưng hay dễ dùng; sau đó áp dụng tiêu chí chọn nguồn mua chính hãng.",
  },
};

export const VIDEO_METHODOLOGY = {
  title: "Cách xem video review cho đúng",
  points: [
    "Video giúp quan sát chai, hộp, màu nước và cảm nhận ban đầu — không thay thế việc kiểm tra người bán.",
    "Ngoại hình bao bì đẹp chưa chứng minh chai chắc chắn chính hãng.",
    "Review video bổ sung cho bài viết sản phẩm: đọc thêm phân tích nốt hương và ngữ cảnh dùng trên trang chai.",
    "Giá, tồn kho và điều kiện bán phải xác nhận riêng trên kênh bán/đối tác — video không chốt giao dịch.",
  ],
};

export const NEED_HUB_ROLES = {
  filterTool: {
    eyebrow: "Công cụ lọc & khám phá",
    purpose:
      "Trang này là bộ lọc sản phẩm: chọn theo hoàn cảnh, mùa, nhóm mùi, ngân sách và thuộc tính để rút gọn danh sách trước khi đọc review.",
    vsEditorial:
      "Cần gợi ý theo tình huống cụ thể (đi làm, hẹn hò, mùa hè)? Xem thêm trang chọn theo hoàn cảnh.",
  },
  occasionHub: {
    eyebrow: "Hub biên tập theo hoàn cảnh",
    purpose:
      "Trang này dẫn theo tình huống dùng thật: đi làm, hẹn hò, mùa hè, dùng hằng ngày, sự kiện và ngân sách — rồi mới sang bộ lọc hoặc review chai.",
    vsFilter:
      "Muốn lọc nhanh theo nhiều tiêu chí cùng lúc? Mở công cụ nước hoa theo nhu cầu.",
  },
};
