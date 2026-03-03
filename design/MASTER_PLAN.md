# MASTER PLAN — perfume-luxury-vn

## Tổng quan dự án
Website bán và review nước hoa cao cấp tại thị trường Việt Nam.
Clone concept từ Fragrantica nhưng có thiết kế và nội dung tiếng Việt.

## Stack công nghệ
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **CMS:** Sanity v3
- **Styling:** Tailwind CSS
- **Deployment:** (TBD)

## Cấu trúc thư mục chính
```
D:\anti\perfume-luxury-vn\
├── src/
│   ├── app/                 # Pages (App Router)
│   │   ├── page.tsx         # Trang chủ
│   │   ├── product/[id]/    # Chi tiết sản phẩm
│   │   ├── nam-gioi/        # Danh mục nam
│   │   ├── nu-gioi/         # Danh mục nữ
│   │   └── ranking/         # Bảng xếp hạng
│   ├── components/          # Components dùng chung
│   ├── constants/           # Data tĩnh (mockData.ts)
│   └── sanity/              # Sanity config & schemas
├── .agents/
│   ├── leader/              # Workspace của Leader agent
│   └── coder/               # Workspace của Coder agent
├── memory/
│   └── TASK_LOG.md          # Log công việc
└── design/
    └── MASTER_PLAN.md       # File này
```

## Tính năng đã hoàn thành
- [x] Trang chủ với danh sách sản phẩm
- [x] Trang chi tiết sản phẩm
- [x] Danh mục nam/nữ
- [x] Trang ranking với tabs
- [x] Trang so sánh (comparison)
- [x] Sanity CMS integration
- [x] SEO metadata
- [x] Scroll progress indicator

## Tính năng đang phát triển
- [ ] Blog / bài viết review
- [ ] Search functionality
- [ ] Filter & sort nâng cao
- [ ] User authentication
- [ ] Wishlist / yêu thích

## Quy tắc code
1. Luôn dùng TypeScript strict
2. Components: tạo file riêng trong `/components`
3. Data: ưu tiên Sanity CMS, fallback về mockData khi cần
4. Styling: Tailwind CSS, không viết CSS inline trực tiếp
5. Test: `npm run dev` sau mỗi thay đổi lớn
