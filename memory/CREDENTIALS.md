# 🗂️ TÀI NGUYÊN DỰ ÁN — MAISON DE SON
## Project Credentials & Resources Master File
*Tạo: 06/03/2026 — Cập nhật bởi AI Agent khi có thay đổi*
*Lưu tại: `d:\anti\perfume-luxury-vn\memory\CREDENTIALS.md`*

> ⚠️ File này chứa thông tin quan trọng. Mỗi khi có tài khoản/API mới, agent phải cập nhật vào đây.

---

## 1. 🌐 TÊN MIỀN

| Thông tin | Giá trị |
|---|---|
| **Domain** | `maisondeson.com` / `www.maisondeson.com` |
| **Nhà cung cấp** | PA Việt Nam (pavietnam.vn) |
| **Trạng thái** | ✅ Đã kích hoạt, đã trỏ về Vercel |
| **DNS hiện tại** | Có bản ghi `v=spf1 include:spf.efwd.registrar-servers.com ~all` |
| **Để thêm DNS** | Tài khoản PA Vietnam tên `tungvu72` |

---

## 2. 🚀 HOSTING — VERCEL

| Thông tin | Giá trị |
|---|---|
| **Dashboard** | https://vercel.com/tungvu72s-projects/perfume-luxury-vn-q72y |
| **Tài khoản** | `tungvu72s` |
| **Project name** | `perfume-luxury-vn-q72y` |
| **Production URL** | https://www.maisondeson.com |
| **Branch deploy** | `main` — push lên main là auto-deploy |
| **Trạng thái** | ✅ Ready — Live |
| **Git source** | Kết nối với GitHub repo, branch `main` |

**Quy trình deploy:**
```
git add . → git commit → git push origin main → Vercel auto-build (~2 phút)
```

---

## 3. 📦 CMS — SANITY

| Thông tin | Giá trị |
|---|---|
| **Platform** | Sanity.io |
| **Trạng thái** | ⚠️ Đã cài nhưng chủ sở hữu chưa sử dụng trực tiếp |
| **Studio URL** | `/studio` (embedded trong Next.js app) |

**Quyết định về Sanity:**
- Hiện tại dữ liệu SP chạy qua `mockData.ts` (khi Sanity không có data, fallback về mockData)
- Sanity dùng để scale lên sau khi có 30+ SP và muốn CMS visual
- **Giữ lại** — không xóa. Chỉ dùng khi cần cập nhật SP/bài viết qua giao diện visual
- Nếu muốn nhập SP hàng loạt → dùng script `scripts/import-products-to-sanity.ts`

---

## 4. 🔍 GOOGLE SEARCH CONSOLE

| Thông tin | Giá trị |
|---|---|
| **URL** | https://search.google.com/search-console |
| **Domain được xác minh** | `maisondeson.com` |
| **Trạng thái** | ❌ CHƯA XÁC MINH |
| **Phương thức** | TXT Record vào DNS |
| **Mã TXT cần thêm** | `google-site-verification=2v7xR50gvaL9u1mDddvOL3gl8qQUe5BFnmesiPmLQts` |

**Hướng dẫn xác minh (CẦN LÀM):**
1. Đăng nhập PA Vietnam → vào quản lý DNS của `maisondeson.com`
2. Thêm bản ghi mới: **Type = TXT**, **Host = @**, **Value = `google-site-verification=2v7xR50gvaL9u1mDddvOL3gl8qQUe5BFnmesiPmLQts`**
3. Lưu → Chờ 15-60 phút cho DNS propagate
4. Vào lại Google Search Console → bấm **XÁC MINH**

> ✅ Đây là task MÀY phải tự làm trong PA Vietnam. Tao không vào được DNS của mày.

---

## 5. 📊 GOOGLE ANALYTICS

| Thông tin | Giá trị |
|---|---|
| **URL** | https://analytics.google.com |
| **Tài khoản** | `tungvu7202` |
| **Property** | `perfume` |
| **Trạng thái** | ✅ Đã cài, đang chạy (31 users thực tế) |
| **Tracking code** | Đã nhúng trong `src/components/GoogleAnalytics.tsx` |

---

## 6. 🗺️ SITEMAP & ROBOTS

| File | URL | Trạng thái |
|---|---|---|
| **Sitemap** | https://www.maisondeson.com/sitemap.xml | ✅ Có — cần submit lên GSC |
| **Robots.txt** | https://www.maisondeson.com/robots.txt | ✅ Có — chuẩn |

**Sitemap hiện tại bao gồm:** Trang chủ, /bang-xep-hang, /thuong-hieu, /kien-thuc, /gioi-thieu, /nam-gioi, /nu-gioi, /unisex + tất cả trang SP `/san-pham/[id]` + bài viết `/[slug]`

**Sau khi xác minh GSC:** Submit sitemap tại GSC → Sitemaps → Add `https://maisondeson.com/sitemap.xml`

---

## 7. 🛒 AFFILIATE (CHƯA THIẾT LẬP)

| Platform | Trạng thái | Cần gì |
|---|---|---|
| **Shopee Affiliate** | ⏳ Chờ đăng ký | Publisher ID + Offer ID |
| **TikTok Shop Affiliate** | ⏳ Chờ đăng ký | Affiliate credentials |

**Khi có credentials:** Agent sẽ build module `generateAffiliateLink(productKeyword, platform)` tự động tạo tracking URL theo từng SP.

---

## 8. 📱 ZALO (KÊNH BÁN HÀNG CHÍNH)

| Thông tin | Giá trị |
|---|---|
| **Số Zalo** | `0961226169` |
| **Link tư vấn** | https://zalo.me/0961226169 |
| **Trạng thái** | ✅ Đã nhúng vào floating button + CTA toàn trang |

---

## 9. 🔑 API KEYS (Sẽ bổ sung khi có)

| Service | Key/Token | Trạng thái |
|---|---|---|
| **Sanity** | Trong `.env.local` | ✅ Configured |
| **Shopee Affiliate** | — | ⏳ Chưa có |
| **TikTok Affiliate** | — | ⏳ Chưa có |
| **OpenAI GPT-4.1** | Dùng cho OpenClaw bot | ✅ (xem openclaw config) |
| **Alibaba Qwen-Plus** | Dùng cho OpenClaw bot | ✅ (xem openclaw config) |

---

## 📋 CHECKLIST SETUP HIỆN TẠI

- [x] Domain maisondeson.com kích hoạt
- [x] Vercel deploy tự động từ GitHub main
- [x] Google Analytics cài đặt
- [x] Sitemap.xml có
- [x] robots.txt có
- [ ] **Google Search Console xác minh** ← Cần làm ngay
- [ ] **Submit sitemap lên GSC** ← Sau khi xác minh xong
- [ ] Shopee Affiliate đăng ký
- [ ] TikTok Shop Affiliate đăng ký

---

*File này là nguồn sự thật duy nhất về tài nguyên dự án. Cập nhật mỗi khi thêm tài khoản/API mới.*
