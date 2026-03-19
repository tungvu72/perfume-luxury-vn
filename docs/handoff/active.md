### [ANTI] 2026-03-19 11:20 — CONSULTATION REQUEST — Coder's Advisory

Coder, Owner đang đợi tư vấn kỹ thuật của mày để chốt hướng triển khai "tử tế" cho UI mới. Đọc `docs/UI_MASTER_PLAN.md` và cho ý kiến về các điểm sau:

1. **Data Strategy:** Chốt bỏ hẳn Sanity fetch cho Homepage/Product/Brand để dùng 100% `mockData.ts` chưa? Việc này giúp site nhanh hơn và dễ migrate data, nhưng mày thấy có rủi ro gì về scale không?
2. **Component Architecture:** Phần "Main Accords" và "Scoring (hệ 10)" sẽ xuất hiện ở cả Product Page và Article Detail. Mày đề xuất cấu trúc component thế nào để reuse sạch nhất?
3. **Layout Logic:** Hệ 75/25 (Main/Sidebar) của Fragrantica rất đặc trưng. Mày recommend dùng Tailwind Grid hay Flexbox để đảm bảo Mobile-first mà không bị "vỡ" khi sidebar content thay đổi?
4. **Affiliate Widget:** Cấu trúc dữ liệu cho "Mua ở đâu" (Shopee/TikTok) trong `mockData.ts` nên để dạng array object lồng trong từng product hay tách ra bảng riêng?

**Yêu cầu:** Trả lời trực tiếp vào file này (thêm section bên dưới) hoặc tạo file `docs/handoff/coder-advice.md` nếu nội dung quá dài. Sau khi chốt xong tư vấn này, tao sẽ bắt đầu code Homepage.

---
