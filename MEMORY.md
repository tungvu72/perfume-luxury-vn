# SHARED OPERATING RULES
# Maison De Son — Nguồn sự thật duy nhất
# Cập nhật: 2026-03-27 (v4 — Production-First Gate + Anti-Drift)

---

## 🚨 STARTUP GATE — ĐỌC TRƯỚC MỌI THỨ (bắt buộc mỗi session/reset)

> **3 RULE CỨNG — KHÔNG ĐƯỢC VI PHẠM:**
>
> 1. **PRODUCTION URL = https://www.maisondeson.com** — đây là target verify MẶC ĐỊNH
> 2. **KHÔNG dùng localhost để verify** — localhost/127.0.0.1 = invalid evidence
> 3. **KHÔNG dùng Sanity** trừ khi task nói rõ "CMS/Sanity task"

### Anti-localhost drift (BLOCKING)
- `localhost:3000`, `127.0.0.1:*`, `localhost:*`, local preview URLs = **KHÔNG PHẢI bằng chứng hợp lệ**
- Chỉ được dùng localhost khi **debug kỹ thuật cụ thể** (fix CSS, fix build error), NHƯNG kết quả vẫn phải verify trên production
- Screenshot localhost ≠ evidence. Screenshot production = evidence.
- Dev server chỉ chạy khi cần build/debug, KHÔNG chạy mặc định

### Anti-Sanity drift (BLOCKING)
- Nếu task yêu cầu viết/sửa/publish trực tiếp trong repo → dùng direct-repo workflow
- KHÔNG tự chuyển sang Sanity path khi task không yêu cầu
- Chỉ dùng Sanity khi task nói rõ: "CMS task", "Sanity task", "publish qua Sanity"
- Default publish mode = **direct-repo + git push + Vercel deploy**

### Verification gate (BLOCKING)
- Task liên quan website Maison → BẮT BUỘC verify trên https://www.maisondeson.com
- KHÔNG được báo "done", "pass", "verified", "xong" nếu evidence chỉ là:
  - ❌ localhost screenshot
  - ❌ local dev server output
  - ❌ Sanity preview
  - ❌ assumption không có URL thật
- Evidence hợp lệ:
  - ✅ Screenshot từ https://www.maisondeson.com/...
  - ✅ Vercel deploy log thành công
  - ✅ `git log` confirm push + Vercel build pass
  - ✅ URL production thật có thể truy cập

---

## Workspace Rule
- **PRODUCTION = https://www.maisondeson.com** (nguồn verify duy nhất)
- User KHÔNG BAO GIỜ làm việc qua http://localhost:3000
- Không khởi động dev server trừ khi cần debug kỹ thuật cụ thể
- localhost = tool debug, KHÔNG PHẢI tool verify
- Publish mode mặc định: direct-repo → git push → Vercel auto-deploy

## Deploy Rule — Git Push + Vercel (CHỐT 2026-03-24)
- Deploy = git push lên GitHub → Vercel auto-detect → build → live (~2 phút)
- **CÁCH PUSH từ background terminal (không popup):**
  ```powershell
  $env:GCM_INTERACTIVE="never"
  $env:GIT_TERMINAL_PROMPT="0"
  git -C "d:\anti\perfume-luxury-vn" push origin main 2>&1
  ```
- Exit code 1 + có `main -> main` trong output = THÀNH CÔNG (PowerShell quirk, không phải lỗi)
- Verify: `git -C "d:\anti\perfume-luxury-vn" log --oneline -3 origin/main`
- Credentials đã lưu trong Windows Credential Manager (`git:https://github.com`) — không cần nhập lại
- **Vercel token backup** (nếu cần deploy thẳng không qua git): stored locally, do not commit to git
- Vercel dashboard: https://vercel.com/tungvu72s-projects/perfume-luxury-vn-q72y
- Workflow chi tiết: `.agents/workflows/git-push-deploy.md`

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
  - commit hash
  - URL production (https://www.maisondeson.com/...)
  - slug
  - số liệu khớp
- **INVALID evidence** (KHÔNG được dùng làm bằng chứng PASS):
  - localhost:3000 screenshot
  - 127.0.0.1 screenshot
  - Sanity preview URL
  - "đã test local" / "dev server OK"
  - Assumption không kèm URL thật

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

## UI Skill Reference Rule (chốt 2026-03-23)
- Có thể tham khảo repo ngoài như `Leonxlnx/taste-skill` để học **cách đóng gói skill UI/UX**, anti-slop guardrails, config dial (variance / motion / density), và cơ chế ép output hoàn chỉnh.
- **KHÔNG bê nguyên nội dung/rule/tone** từ repo ngoài vào Maison de SON.
- Với Maison de SON, chỉ học **skill architecture + design guardrails**, rồi viết bản riêng theo hướng **luxury editorial perfume UI**, không drift sang SaaS/Dribbble UI.
- Các rule quá cực đoan như motion nặng, anti-serif tuyệt đối, anti-centered hero tuyệt đối, anti-3-column tuyệt đối → chỉ xem là tham khảo, không áp cứng.
- Khi audit hoặc redesign UI, **Coder + Anti phải cùng bám 1 mục tiêu chung**: giao diện premium hơn, nhất quán hơn giữa mobile/desktop, tăng cảm giác luxury authority, không hy sinh readability/conversion.
- Ưu tiên build một skill nội bộ riêng cho Maison de SON kiểu `luxury-editorial-ui-skill` hoặc tương đương, để dùng chung cho audit, redesign, và review code UI về sau.

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

## Rule bài viết & ảnh article
- Nguồn chuẩn duy nhất cho rule viết bài hiện tại: `docs/content/article-writing-sop.md`
- Không khóa cứng cách viết theo D1-D6; đánh giá theo chất lượng đầu ra
- Không dùng lại rule cũ về trend/news cho tới khi có SOP riêng
- Bối cảnh viết khi phù hợp phải ưu tiên **Hà Nội và TP.HCM**
- SEO title + meta description bắt buộc chứa từ khóa chính, viết đủ cuốn hút để tăng CTR; từ khóa phụ chỉ chèn tự nhiên
- Internal links chuẩn article:
  - từ khóa chính xuất hiện trong body và gắn link về chính URL bài viết đúng 1 lần
  - 1 link về trang chủ với anchor "nước hoa chính hãng"
  - nếu trong bài có nhắc brand cụ thể thì trỏ đúng brand page của brand đó
  - nếu trong bài có tên sản phẩm cụ thể thì trỏ đúng product URL theo format `/nuoc-hoa-{gender}-{brand}-{product-slug}`
  - không dùng `/san-pham/...` làm URL chính trong body nếu đã có URL mới
  - mỗi URL chỉ được trỏ 1 lần trong bài
- Rule ảnh cứng cho article: **mỗi 200-300 từ phải có ít nhất 1 ảnh phù hợp**
- Thiếu ảnh hoặc viết kiểu AI-catalog => LIVE nhưng FAIL content standard

---

## Rule ảnh sản phẩm
- Nguồn chuẩn duy nhất cho ảnh sản phẩm: `docs/ops/image-sourcing-sop.md`
- Mỗi sản phẩm hiện tại có 1 ảnh main chuẩn
- Ảnh main mặc định lấy từ Fragrantica khi xác minh đúng variant
- Ảnh thật nội bộ user cung cấp tại `D:\anti\ảnh nước hoa\<ten-folder-san-pham>`
- Không chắc đúng variant/nồng độ/packaging thì để pending, không đoán
