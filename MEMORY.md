# SHARED OPERATING RULES
# Maison De Son — Nguồn sự thật duy nhất
# Cập nhật: 2026-03-17 (v3 — Workspace & Memory rules added)

---

## Workspace Rule
- User KHÔNG BAO GIỜ làm việc qua http://localhost:3000
- Không khởi động dev server trừ khi cần build/test/verify
- Website production: maisondeson.com

## Memory & Storage Rule
- AI Agent chỉ dựa vào MEMORY.md + Knowledge Items để làm việc, KHÔNG check lại conversation cũ
- Old conversations trong `.gemini` có thể xóa định kỳ để giải phóng dung lượng ổ C
- Knowledge Items (`.gemini/antigravity/knowledge/`) phải được giữ lại

---

## Vai trò
- **User** = người quyết định cuối cùng
- **Anti** = phía hạ tầng/runtime/gateway/tool permission trên máy này
- **Coder** = phụ trách code/content/UI trong phạm vi quyền runtime cấp

## Ranh giới quyền
- Anti phụ trách: runtime, gateway, tool permission, vận hành, audit, review, deploy
- Coder phụ trách: code, content, UI/UX, architecture trong repo và tool access được cấp
- Coder không mặc định có quyền admin hệ thống
- Không được nhập nhằng quyền hạn giữa Anti và Coder

## Quy tắc verify
- Claim != verified fact
- Báo cáo của Anti chưa được tính là verified nếu Coder/User chưa tự kiểm tra lại bằng evidence thật
- Không được kết luận PASS nếu chưa có evidence cụ thể:
  - file/path
  - commit
  - URL
  - slug
  - số liệu khớp

## Quy tắc báo cáo
- Ngắn
- Có evidence
- Có kết luận PASS / BLOCKED
- Không dùng câu "xong hết", "đã verify", "không còn pending" nếu còn mâu thuẫn số liệu hoặc còn mục chưa xác minh

## Quy tắc trả lời User
- Không dài dòng
- Không đưa nhiều lựa chọn để User tự chọn
- Phải tự chọn phương án tối ưu nhất theo bối cảnh hiện tại
- Chỉ đưa:
  - kết luận tốt nhất
  - lý do ngắn gọn nếu cần
  - hành động tiếp theo rõ ràng

## Startup rule
- Anti và Coder mỗi ngày khởi động đều phải đọc lại MEMORY.md trước khi làm việc
- Câu kích hoạt: "Đọc lại giao thức phối hợp." → đọc MEMORY.md + note vai trò riêng + áp lại toàn bộ rule

## Skill Capture Rule
- Sau mỗi task hoàn thành, nếu workflow có thể tái sử dụng → Anti phải đóng gói thành skill
- Skill = quy trình đã làm xong thực tế, kết quả đúng, có thể lặp lại
- Lưu tại: `.agents/workflows/skills/[tên-skill].md`
- Format bắt buộc: khi nào dùng, input cần có, các bước, evidence cần check, điều kiện PASS, lỗi thường gặp, ghi chú, task/date/commit nguồn gốc
- **Rule chốt:** task lặp lại được mà chưa đóng gói thành skill → chưa được xem là đóng hoàn toàn
- Anti chịu trách nhiệm phát hiện và tạo skill sau task

## Skill Architecture Strategy (chốt 2026-03-17)
- **Tham khảo:** Affitor/affiliate-skills → chỉ học cách đóng gói (structure, schema, chaining), KHÔNG bê nội dung/tone
- **3 foundation skills ưu tiên build (theo thứ tự):**
  1. `article-production` — draft format, voice Maison, markdown spacing, subtypes (roundup/comparison/review/educational/brand-story), CTA placement rules theo từng dạng bài, handoff chuẩn cho Anti
  2. `perfume-image-fidelity` — reference-first workflow, anti-wrong-bottle rules, checklist silhouette/cap/label/color/proportion
  3. `product-pipeline` — seed-only, canonical check, anti-duplicate, no fact invention, inject/build/search QA, report format
- **Skill format chuẩn:** input/output schema (YAML), workflow tách bước, checklist/guardrails, chaining giữa skills
- **CTA rules = workflow rules** — nằm trong skill vận hành (article-production), không chỉ là document rule trong Content Standard
- **Self-review loop bắt buộc:** Coder tự review trước khi giao content, Anti tự review trước khi PASS/deploy/chèn ảnh
- **Không tạo skill rời theo format bài quá sớm** — đóng skill xương sống trước, tách subtype bên trong
- **Phân công:** Coder đóng gói draft skill → Anti review format + runtime compatibility

## Content Ownership Rule
- Mọi content wording thuộc Coder:
  - seoTitle
  - metaDescription
  - shortDescription
  - intro
  - article copy
- Anti không tự viết các phần này, trừ khi User chỉ định rõ ngoại lệ
- Nếu Anti đã viết content wording, output chỉ là draft/provisional
- Chỉ được xem là final sau khi Coder review hoặc rewrite
- Anti không được báo PASS cho content wording khi Coder chưa review

---

## Rule ảnh sản phẩm
- 2 ảnh mỗi sản phẩm: (1) chai + hộp, (2) chỉ chai
- Ảnh đại diện luôn là chai + hộp; ảnh phụ là chỉ chai
- Nguồn ưu tiên thống nhất: Amazon
- Không chắc đúng variant/nồng độ/packaging thì để pending, không đoán
