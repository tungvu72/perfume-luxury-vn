# 🎯 TRẠNG THÁI DỰ ÁN: MAISON DE SON
> Cập nhật: 01/03/2026 01:45 (Sẵn sàng On-air)

## ĐÃ HOÀN THÀNH (Hôm nay)
- [x] **v1.14: Gold Standard Content & SEO:**
  - ✅ **Chuẩn bài viết bài đánh giá**: Cấu trúc 5 phần chuyên sâu, sạch ký tự lạ, font chữ đen (text-gray-900).
  - ✅ **Chuẩn hình ảnh**: Sử dụng High-Res JPG/PNG (prefix "o.") từ Fragrantica để đảm bảo độ sắc nét tuyệt đối.
  - ✅ **Chiến lược SEO "Chính hãng"**: Cập nhật Metadata toàn trang (Home, Nam, Nữ, Unisex, Ranking) tập trung vào "Chính hãng" và "Review chuyên sâu".
  - ✅ **Brand Identity**: Logo Maison de SON trên Hero image, About page mission tinh chỉnh.
  - ✅ **Sửa lỗi mờ ảnh**: Đã cập nhật Dior Elixir (850x1440) và Armani SWYI (531x800).

---

## LỘ TRÌNH SÁNG MAI (Deploy & Mass Data)
### 1. MISSION v1.15: Đẩy dữ liệu hàng loạt (Mass Update)
- [ ] Chốt số lượng sản phẩm ưu tiên (Target 50-100 chai đầu tiên trước khi đạt 2000).
- [ ] Chạy Script chuyển dữ liệu từ Mock sang Sanity CMS để bật "On-air".
- [ ] Kiểm tra lỗi 404/301 và Sitemap chuẩn để Google Index nhanh.

### 2. MISSION v1.16: Hosting & VPS
- [ ] Quyết định giữa **Vercel Pro** (Nhanh, Auto-scale, $20) hoặc **VPS Việt Nam 4GB RAM** (~350k/tháng).
- [ ] Trỏ Domain chính thức và bật SSL.

---

## THÔNG TIN KỸ THUẬT (Cho Developer)
- **Gold Standard Article:** Xem `src/constants/mockData.ts` (Dior Elixir là mẫu chuẩn nhất).
- **SEO Policy:** Ưu tiên "Chính hãng", internal link (dofollow) 1 lần duy nhất/bài.
- **Images:** Link gốc "o.XXXXX.png" hoặc ".jpg" từ Fragrantica.
- **VPS Recommended:** 2 vCPU / 4GB RAM / ISR (Incremental Static Regeneration).

