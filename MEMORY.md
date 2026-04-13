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
- **TỪ BÂY GIỜ CHÍNH THỨC KHÔNG BAO GIỜ SỬ DỤNG SANITY NỮA.** Bất kỳ tính năng / sản phẩm nào đang dùng Sanity phải được gỡ bỏ và đưa dữ liệu ngược về hệ thống `mockData.ts` an toàn. 
- Mọi dữ liệu phải nằm hoàn toàn trong Github Repo. Sanity đã bị loại bỏ khỏi kiến trúc hệ thống của website.
- Default publish mode = **direct-repo + git push + Vercel deploy**

### Verification gate (BLOCKING)
- Task liên quan website Maison → BẮT BUỘC verify trên https://www.maisondeson.com
- **SAU KHI DEPLOY: PHẢI CHECK KẾT QUẢ BẰNG CẢ MOBILE VÀ DESKTOP** (rule quan trọng nhất)
- KHÔNG được báo "done", "pass", "verified", "xong" nếu evidence chỉ là:
  - ❌ localhost screenshot
  - ❌ local dev server output
  - ❌ Sanity preview
  - ❌ assumption không có URL thật
  - ❌ chỉ test desktop HOẶC chỉ test mobile (phải test CẢ HAI)
- Evidence hợp lệ:
  - ✅ Screenshot từ https://www.maisondeson.com/... (CẢ desktop VÀ mobile)
  - ✅ Vercel deploy log thành công
  - ✅ `git log` confirm push + Vercel build pass
  - ✅ URL production thật có thể truy cập
  - ✅ Test cases pass trên CẢ desktop (1920px) VÀ mobile (375px)

---

## Results & Evidence

### Verification on Production (2026-04-04)
- ✅ **Test 1: Normalization ("nuoc hoa nam")** → PASSED. Dropdown shows 8 relevant men's products.
- ✅ **Test 2: Brand ("dior sauvage")** → PASSED. Shows all Sauvage variants.
- ✅ **Test 3: Fuzzy Typo ("sauavge")** → PASSED. Correctly suggests Sauvage family.

### Evidence Artifacts
- **Search Result Screenshot:** [search_results_final_verification_1775299959299.png](file:///C:/Users/Admin/.gemini/antigravity/brain/ed1cceab-e97a-4676-8e36-c5a0da14d592/search_results_final_verification_1775299959299.png)
- **Fuzzy Search Screenshot:** [search_sauavge_1775299760715.png](file:///C:/Users/Admin/.gemini/antigravity/brain/ed1cceab-e97a-4676-8e36-c5a0da14d592/search_sauavge_1775299760715.png)

**Final Verdict:** PASS. Implementation uses Fuse.js + Unicode NFD normalization. Threshold set to 0.4 with `ignoreFieldNorm: true`.

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
- Vercel dashboard: https://vercel.com/tungvu7202-5838s-projects/perfume-luxury-vn (Domain mới: perfume-luxury-vn-pink.vercel.app)
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

## Image & Folder Standard — STT-Based (CHỐT 2026-04-13)
- **Quy tắc Folder:** Toàn bộ folder ảnh sản phẩm trong `public/images/products/` phải có tiền tố STT 3 chữ số (ví dụ: `001-montblanc-signature-edp`).
- **Quy tắc Ảnh Main:** Ảnh main nằm trong `public/images/products/` phải trùng STT với folder (ví dụ: `001-montblanc-signature-edp-main.jpg`).
- **Thứ tự sắp xếp:** Danh sách sản phẩm trong `mockData.ts` được sắp xếp theo **Brand (A-Z)**. STT được gán dựa trên thứ tự này.
- **Quy trình Add Ảnh:**
  1. Tìm folder theo STT trong list (ví dụ: `206`).
  2. Copy ảnh gốc vào folder `public/images/products/206-creed-aventus/`.
  3. AI sẽ tự động: Convert sang `.webp` -> Rename SEO -> Update `mockData.ts`.
- **Nghiêm cấm:** Không tự ý tạo folder không có STT hoặc đặt tên folder/ảnh main sai lệch so với STT trong `mockData.ts`.

---

## 🛠️ SESSION LOG & PENDING TASKS (Cập nhật 2026-04-13)

### ✅ ĐÃ HOÀN THÀNH
1. **Chuẩn hóa STT toàn bộ Catalog (271 sản phẩm):**
   - Đã gán STT 3 chữ số cho toàn bộ folder và ảnh main.
   - Hợp nhất folder rác, rename SEO 1,079 ảnh subfolder.
   - Đồng bộ `mockData.ts` và `searchIndex.ts` (Build OK, Pushed `ba73f32`).
2. **Setup Folder Sẵn:** Đã tạo đủ 271 folder STT-prefixed để User chỉ việc ném ảnh vào.

### ⏳ ĐANG DỞ / PENDING (Cần làm sau reset)
1. **Xử lý file lẻ (Orphans):**
   - Di chuyển `nuoc-hoa--thuc-te-*.webp` và `tom-ford-ombre-leather-real-*.jpg` vào đúng folder STT.
2. **Workflow Auto-Processing:**
   - Xây dựng script `scripts/process-image-uploads.js` để tự động dọn dẹp, convert WebP và rename SEO khi có ảnh mới.
3. **Tiếp tục Batch Standardization (Data):**
   - Hiện đã dọn xong hạ tầng ảnh, cần quay lại tiêm data cho các Batch tiếp theo từ #92 trở đi (hoặc hoàn thiện nốt Batch 9).
4. **Fix nốt ~10 ảnh main:** Check và gán STT chuẩn cho các ảnh main bị sót đo tên file lệch slug.

### 📚 IDENTIFIED SKILLS (Workflows found)
- `d:\anti\.agents\workflows\skills\product-data-entry.md`: Quy trình 5 bước nhập liệu chuẩn SON 100%.
- `d:\anti\resort_stt.js`: Script re-sort và re-number STT theo Brand.
