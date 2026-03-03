# AGENT TRANSFER LOG: PROJECT MAISON DE SON

## 📍 1. Local Path & Environment
- **Project Root:** `D:\anti\perfume-luxury-vn`
- **Node.js Version:** `v24.13.1`
- **NPM Version:** `11.8.0`
- **OpenClaw Home:** `D:\claw\.openclaw` (Linked from `C:\Users\Admin\.openclaw`)
- **Key Environment Variables:**
  - `NEXT_PUBLIC_SANITY_PROJECT_ID`: (Kiểm tra trong `.env.local`)
  - `NEXT_PUBLIC_SANITY_DATASET`: `production`
  - `OPENCLAW_HOME`: `D:\claw`

## 🛠️ 2. Tech Stack
- **Framework:** Next.js 15.1.6 (App Router)
- **Styling:** Tailwind CSS v4, Framer Motion (Animations)
- **CMS:** Sanity.io (Next-sanity)
- **Icons:** Lucide-react
- **Database/Storage:** Sanity Dataset

## 🧠 3. Knowledge Base: Maison De Son
- **Thương hiệu:** Website chuyên về nước hoa cao cấp, hướng tới phân khúc sang trọng tại Việt Nam.
- **Concept Thiết kế:** Clean, Bright, Premium. Lấy cảm hứng từ Fragrantica nhưng tối ưu giao diện hiện đại hơn.
- **Cấu trúc Dữ liệu:**
  - Sản phẩm bao gồm các chỉ số chuyên sâu: Longevity, Sillage, Season, Day/Night, Accords (theo chuẩn Fragrantica).
  - Phân loại: Nam, Nữ, Unisex. 
  - Có hệ thống Ranking (Bảng xếp hạng) và Blog kiến thức.

## 🦞 4. Instructions for OpenClaw
### Terminal Commands:
- `npm run dev`: Chạy server phát triển (Cổng 3000).
- `openclaw gateway health`: Kiểm tra kết nối Telegram và Model.
- `openclaw models list`: Xem danh sách model khả dụng (Gói Coding Plan).

### Files to Focus:
- `src/app/product/[id]/ProductClient.tsx`: Component quan trọng nhất hiển thị chi tiết nước hoa.
- `src/sanity/schemaTypes/product.ts`: Cấu trúc dữ liệu sản phẩm trong CMS.
- `design/`: Thư mục chứa toàn bộ Master Plan và Wireframes.

## 📝 5. Unfinished Tasks (TIẾP QUẢN NGAY)
1. **Hoàn thiện trang `thuong-hieu`**: Đã có khung `page.tsx`, cần tối ưu hiển thị danh sách A-Z trực quan và kết nối data từ Sanity.
2. **Search Bar**: Tích hợp ô tìm kiếm thông minh lên Header (chưa bắt đầu).
3. **Filter cho Bảng xếp hạng**: Trang `bang-xep-hang` đang thiếu bộ lọc theo mùa/nhóm hương.
4. **Data Seed**: Cần import thêm khoảng 20 sản phẩm mẫu vào Sanity để test giao diện.

---
*Bản log này được khởi tạo bởi Antigravity. OpenClaw hãy đọc kỹ `design/MASTER_PLAN.md` trước khi thực thi code.*
