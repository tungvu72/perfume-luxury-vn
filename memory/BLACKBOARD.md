# 🗂️ BLACKBOARD — Bảng trạng thái chung của AI Team
# Tất cả agents đọc file này khi bắt đầu ca làm việc
# Leader cập nhật sau mỗi quyết định lớn

## 📌 TRẠNG THÁI HIỆN TẠI
**Cập nhật lúc:** 2026-03-03 11:29 (Antigravity - Code Audit)
**Task đang chạy:** [Jamie] Fix bugs theo Review #002
**Ai đang làm gì:** Jamie → FIX-001 encoding + FIX-002 hardcode

---

## 🔄 TASK QUEUE (Hàng đợi công việc)
| ID | Task | Giao cho | Trạng thái | Deadline |
|----|------|---------|-----------|---------|
| FIX-001 | Fix encoding bug metadata thuong-hieu/page.tsx | Jamie | 🔴 PENDING | ASAP |
| FIX-002 | Xoá hardcode "840 Đánh giá" brand detail page | Jamie | 🔴 PENDING | ASAP |
| 2702-04 | Search Bar thông minh trên Header | Jamie | ⏳ Chờ fix xong | — |
| 2702-03 | Filter logic trang bang-xep-hang | Jamie | ⏳ Backlog | — |

---

## ✅ COMPLETED (Hoàn thành gần đây)
| Ngày | Task | Kết quả |
|------|------|---------|
| 2026-03-03 | Brand Index A-Z + Brand Detail Page | ⚠️ Conditional — pending encoding fix |
| 2026-03-03 | CompareSystem + /so-sanh page | ✅ Accepted (77/100) |
| 2026-03-03 | Global Loading Screen | ✅ Accepted |
| 2026-03-03 | Setup AI Team | ✅ 3 agents deployed |

---

## 🧠 CONTEXT CHUNG (Cả team cần biết)
- **Website URL:** (chưa deploy — đang dev local port 3000)
- **Sanity Studio:** http://localhost:3000/studio
- **Stack:** Next.js 15 + Sanity v3 + Tailwind + TypeScript
- **Giai đoạn hiện tại:** Phát triển tính năng + chuẩn bị launch

## ⚠️ KNOWN ISSUES (Lỗi đang tồn tại)
*(trống — không có lỗi đã biết)*

## 💡 DECISIONS LOG (Quyết định đã chốt)
- 2026-03-03: Dùng Sanity CMS làm primary data source, mockData làm fallback
- 2026-03-03: Tất cả content viết bằng tiếng Việt
- 2026-03-03: Target khách hàng: Nam/nữ 22-45, thu nhập khá, yêu luxury

---
## 📋 QUY TẮC DÙNG BLACKBOARD
- **Leader:** Cập nhật TASK QUEUE và CONTEXT sau mỗi quyết định
- **Coder:** Cập nhật trạng thái task khi bắt đầu và kết thúc
- **Marketer:** Ghi vào COMPLETED sau khi xong content lớn
- **Tất cả:** Đọc KNOWN ISSUES trước khi bắt đầu task mới
