# 📋 BRIEF DỰ ÁN — MAISON DE SON
## Từ Chủ tịch → Leader | 2026-03-04

---

## 1. MỤC ĐÍCH & TẦM NHÌN

**Maison De Son** là hệ thống bán hàng và affiliate nước hoa tại Việt Nam, sau đó mở rộng toàn cầu.

**Vấn đề hiện tại của Chủ tịch:**
- Đang bán nước hoa xách tay tại VN qua Shopee và kênh truyền thống
- Phải co lại vì vấn đề hóa đơn, chứng từ hàng xách tay
- Cần mô hình mới: affiliate thay vì bán hàng trực tiếp → không cần nhập hàng, không cần hóa đơn

**Tầm nhìn:** Trở thành kênh review & affiliate nước hoa hàng đầu tại Việt Nam và tiến ra toàn cầu, vận hành bởi AI với chi phí cực thấp.

---

## 2. TÀI SẢN HIỆN CÓ

### YouTube Channel
- URL: https://www.youtube.com/@perfumeland6972
- Trạng thái: Đã bật kiếm tiền
- Doanh thu: **~$400/tháng** (AdSense)
- Nội dung: Review nước hoa, hướng dẫn chọn mùi

### Affiliate đã được duyệt
- **FragranceNet.com** qua Rakuten Affiliate
- Hoa hồng: 8-10% trên mỗi đơn hàng
- Phù hợp: khách hàng quốc tế, ship toàn cầu

### Website
- Domain: maisondeson.com (đã LIVE)
- Stack: Next.js 15 + Sanity CMS + TypeScript
- Sanity Studio: https://ww1zzidl.sanity.studio
- Trạng thái: Vừa deploy, cần bổ sung content & tính năng

### AI Agent Team
- Leader (bạn): quản lý dự án, điều phối team
- Coder: phát triển website
- Marketer: content, social media, SEO

---

## 3. MÔ HÌNH KINH DOANH

### Nguồn thu nhập theo thứ tự ưu tiên:

**Giai đoạn 1 — Vietnam (hiện tại):**
| Nguồn | Hoa hồng | Nền tảng |
|-------|---------|---------|
| Shopee Affiliate | 3-8% | Ưu tiên VN |
| Lazada Affiliate | 3-6% | Ưu tiên VN |
| Tiki Affiliate | 3-5% | Ưu tiên VN |
| YouTube AdSense | $400/tháng | Đang chạy |

**Giai đoạn 2 — Global (sau khi VN ổn định):**
| Nguồn | Hoa hồng |
|-------|---------|
| FragranceNet (Rakuten) | 8-10% |
| Sephora Affiliate | 5-10% |
| Amazon Associates | 3-5% |
| Brand deals / Sponsored | TBD |

---

## 4. CHIẾN LƯỢC GIAI ĐOẠN 1 — VIETNAM FIRST

### 4A. Website (Coder phụ trách)
**Ưu tiên ngay:**
- Fix tất cả bug encoding UTF-8
- Tạo trang `/mua-hang` với affiliate links Shopee/Lazada/Tiki
- Tích hợp GA4 + Search Console
- Thêm hệ thống reviews sản phẩm
- SEO technical: sitemap, robots.txt, schema markup

**Content structure:**
- `/danh-gia/[slug]` — Review chi tiết từng sản phẩm
- `/huong-dan/[slug]` — Buying guides (nước hoa theo dịp, theo ngân sách)
- `/thuong-hieu/[slug]` — Trang thương hiệu
- `/so-sanh/[slug]` — So sánh sản phẩm

### 4B. Content (Marketer phụ trách)
**Mục tiêu 3 tháng đầu:**
- 50+ bài review nước hoa (SEO tiếng Việt)
- 20+ buying guides
- 200+ sản phẩm trong database

**Từ khóa mục tiêu:**
- "nước hoa nam thơm lâu" (20k/tháng)
- "nước hoa nữ dưới 1 triệu" (15k/tháng)
- "nước hoa Dior Sauvage review" (8k/tháng)
- "nước hoa tặng bạn gái" (12k/tháng)

### 4C. Social Media (Marketer phụ trách)
**Nền tảng theo thứ tự ưu tiên:**

| Platform | Mục tiêu | Nội dung |
|----------|---------|---------|
| Facebook Page | Community, traffic | Review, tips, giveaway |
| Facebook Group | Engagement sâu | Thảo luận, hỏi đáp |
| Instagram | Visual branding | Sản phẩm, lifestyle |
| Threads | Thought leadership | Insights nhanh |
| TikTok | Viral, user mới | Short review, tips |
| YouTube | SEO dài hạn, revenue | Review chi tiết |

---

## 5. MỤC TIÊU KPI

### 6 tháng đầu (Vietnam):
| Metric | Target |
|--------|--------|
| Lượt truy cập website/tháng | 50,000 |
| Email subscribers | 5,000 |
| Facebook followers | 10,000 |
| TikTok followers | 20,000 |
| Sản phẩm trong DB | 200 |
| Bài review | 50+ |
| **Doanh thu affiliate/tháng** | **50 triệu VND** |

### 12 tháng (Vietnam + bắt đầu Global):
| Metric | Target |
|--------|--------|
| Lượt truy cập website/tháng | 200,000 |
| **Doanh thu/tháng** | **200 triệu VND** |

---

## 6. NHÂN SỰ AI TEAM & VAI TRÒ

| Agent | Bot | Nhiệm vụ chính |
|-------|-----|----------------|
| Leader (bạn) | @leaderperume_bot | Quản lý, điều phối, báo cáo Chủ tịch |
| Coder | @coderperume_bot | Dev website, fix bug, tích hợp API |
| Marketer | @marketerperume_bot | Content, SEO, social media |

**Chủ tịch** chỉ làm việc với **Leader** qua Telegram DM.
Leader tổng hợp kết quả và báo cáo Chủ tịch kèm nhận xét.

---

## 7. TASK NGAY BÂY GIỜ (Tuần 1)

### Coder cần làm:
1. Fix lỗi encoding UTF-8 trong `thuong-hieu/page.tsx`
2. Tạo file `thuong-hieu/[slug]/page.tsx` (đang bị MISSING)
3. Tạo trang `/mua-hang` với affiliate links
4. Fix lỗi brand detail hardcode "840 Đánh giá"
5. Thêm Shopee/Lazada/Tiki affiliate links vào product cards

### Marketer cần làm:
1. Viết 5 Facebook posts launch Maison De Son
2. Viết Instagram bio + plan 9 posts đầu tiên
3. Viết 5 review nước hoa cho top keywords VN
4. Tạo Shopee affiliate links cho top 20 sản phẩm
5. Setup lịch đăng content (4 bài/ngày)

---

## 8. CÁCH LEADER LÀM VIỆC VỚI TEAM

**Khi nhận task từ Chủ tịch:**
1. Phân tích và lập kế hoạch → ghi vào TASK_LOG.md
2. Chia nhỏ và giao cho Coder + Marketer (rõ ràng, cụ thể)
3. Chờ Coder và Marketer báo xong
4. **TỰ VERIFY kết quả** (đọc file thực tế, không tin lời báo):
   - Với Coder: đọc file code, check encoding, check TypeScript
   - Với Marketer: đọc file content, check đủ số lượng và chất lượng
5. Nếu PASS → DM Chủ tịch báo cáo kèm nhận xét
6. Nếu FAIL → giao lại cho Coder/Marketer với mô tả chỗ sai

**Format báo cáo về Chủ tịch:**
```
[LEADER BÁO CÁO]
Task hoàn thành: [tên]
Kết quả: [tóm tắt]
Nhận xét Coder: [chất lượng, điểm mạnh/yếu]
Nhận xét Marketer: [chất lượng, điểm mạnh/yếu]
Bước tiếp theo đề xuất: [nếu có]
```

---

*Brief này được biên soạn bởi Supervisor (Antigravity) dựa trên các cuộc thảo luận với Chủ tịch.*
*Leader đọc kỹ và lưu làm tài liệu tham chiếu trong suốt dự án.*
