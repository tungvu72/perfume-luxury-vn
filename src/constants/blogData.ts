export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    date: string;
    img: string;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: "phan-biet-that-gia",
        title: "Cách phân biệt nước hoa thật và giả chính xác 100%",
        excerpt: "Trong thị trường đầy biến động, làm thế nào để bảo vệ chính mình trước những chai nước hoa fake tinh vi?",
        content: `Nước hoa giả ngày càng trở nên tinh vi hơn, khiến ngay cả những người dùng lâu năm cũng có thể bị nhầm lẫn. Dưới đây là 3 yếu tố then chốt để bạn tự tin check-in:
        
        1. Vỏ hộp và Seal nilon: Hộp auth luôn có lớp nilon ôm sát, không bị nhăn nhúm và các đường nét in ấn vô cùng sắc sảo.
        2. Mã Batch Code: Kiểm tra sự trùng khớp giữa code trên chai và trên hộp.
        3. Độ hoàn thiện của vòi xịt: Vòi xịt auth thường phun sương cực mịn, không bị rò rỉ nước.`,
        category: "Cẩm nang",
        date: "26/02/2026",
        img: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "scent-dna-la-gi",
        title: "Scent DNA: Hiểu về cấu trúc mùi hương chuẩn quốc tế",
        excerpt: "Tại sao chai nước hoa này lại có mùi trà, còn chai kia lại mang hơi thở của gỗ tuyết tùng?",
        content: `Mỗi chai nước hoa đều có một "mã gen" riêng được gọi là Scent DNA. Nó bao gồm 3 tầng hương truyền thống:
        
        - Hương đầu (Top Notes): Những gì bạn cảm nhận đầu tiên.
        - Hương giữa (Heart Notes): Linh hồn của chai nước hoa.
        - Hương cuối (Base Notes): Sự vương vấn cuối cùng trên da thịt.`,
        category: "Kiến thức",
        date: "25/02/2026",
        img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "cach-xit-nuoc-hoa",
        title: "Nghệ thuật xịt nước hoa để lưu hương cả ngày dài",
        excerpt: "Không phải cứ xịt nhiều là tốt. Vị trí và thời điểm mới là yếu tố quyết định.",
        content: `Xịt nước hoa là một nghệ thuật. Để mùi hương bám tỏa tốt nhất, hãy nhớ:
        
        - Xịt sau khi tắm: Khi da còn ẩm, lỗ chân lông mở rộng.
        - Các điểm mạch: Cổ tay, sau tai, và khuỷu tay là những "lò sưởi" tự nhiên giúp khuếch tán mùi hương.
        - Đừng chà xát: Việc chà xát cổ tay sẽ làm gãy các phân tử hương thơm.`,
        category: "Stylist Tips",
        date: "24/02/2026",
        img: "https://images.unsplash.com/photo-1595428707305-ad9a0bf83916?auto=format&fit=crop&q=80&w=1200"
    }
];
