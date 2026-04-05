# Product Image Injection SOP
**Version:** 1.0  
**Created:** 2026-04-05  
**Owner:** Coder + Anti  
**Purpose:** Quy trình đăng ảnh thật (tự chụp) lên Maison de SON — tránh nhầm lẫn, tránh overload

---

## 1. INPUT

**Source folder:** `D:\anti\perfume-luxury-vn\public\images\products\ảnh nước hoa\`

**Đặc điểm:**
- Ảnh thật tự chụp (không phải stock/marketing)
- Có thể có nhiều ảnh cho 1 chai
- Có cả chai đã đăng + chai chưa đăng trên site

---

## 2. WORKFLOW (3 PHASE)

### Phase 1: INVENTORY & MAPPING
**Mục tiêu:** Biết có bao nhiêu chai, chai nào đã có trên site, chai nào chưa

**Steps:**
1. List toàn bộ file ảnh trong folder source
2. Nhóm theo tên chai (dựa vào tên file hoặc subfolder nếu có)
3. Cross-check với `src/constants/mockData.ts`:
   - Chai nào đã có `id` trong mockData → **Group A (Update)**
   - Chai nào chưa có → **Group B (New Product)**
4. Output: `docs/reports/image-inventory-YYYY-MM-DD.json`
   ```json
   {
     "groupA": [
       {
         "productId": "dior-sauvage-edp",
         "productName": "Dior Sauvage EDP",
         "images": ["sauvage-1.jpg", "sauvage-2.jpg"],
         "currentImageCount": 1,
         "newImageCount": 2
       }
     ],
     "groupB": [
       {
         "detectedName": "YSL Libre L'Eau Nue",
         "images": ["libre-eau-nue-1.jpg"],
         "needsProductCreation": true
       }
     ]
   }
   ```

**Checkpoint:** User review inventory → chọn batch để làm (tránh overload)

---

### Phase 2: BATCH SELECTION & PREP
**Mục tiêu:** Chọn batch nhỏ (5-10 chai/lần), chuẩn bị metadata

**Steps:**
1. User chọn batch từ inventory (ví dụ: "Làm 5 chai Group A trước")
2. Với **Group A (Update)**:
   - Copy ảnh vào `/public/images/products/[product-slug]/`
   - Rename theo convention: `[slug]-real-1.jpg`, `[slug]-real-2.jpg`
   - Update `images` array trong mockData.ts
3. Với **Group B (New Product)**:
   - Tạo product object mới trong mockData.ts (cần đầy đủ metadata: brand, name, slug, price, description, etc.)
   - Copy ảnh vào `/public/images/products/[new-slug]/`
   - Set `images` array

**Output:** 
- Ảnh đã copy vào đúng folder
- Code đã update trong mockData.ts
- File `docs/reports/batch-[N]-prep.md` ghi lại chi tiết

**Checkpoint:** Build local pass → commit → push

---

### Phase 3: DEPLOY & VERIFY
**Mục tiêu:** Đảm bảo ảnh hiển thị đúng trên production

**Steps:**
1. Push code lên GitHub
2. Vercel auto-deploy (~2 phút)
3. Verify trên **https://www.maisondeson.com**:
   - Check từng product page trong batch
   - Verify ảnh load đúng (không 404)
   - Verify gallery hoạt động (nếu có nhiều ảnh)
   - Test cả desktop + mobile
4. Screenshot evidence → lưu vào `docs/reports/batch-[N]-verify/`

**Output:** 
- ✅ PASS: Tất cả ảnh hiển thị đúng trên production
- ❌ FAIL: Ghi rõ lỗi → rollback hoặc hotfix

---

## 3. ANTI-OVERLOAD RULES

1. **Batch size:** Tối đa 10 chai/lần
2. **Group A trước:** Update ảnh cho chai đã có dễ hơn tạo mới
3. **1 batch = 1 commit:** Không trộn nhiều batch trong 1 commit
4. **Verify từng batch:** Không làm batch mới khi batch cũ chưa verify xong
5. **Pause giữa batch:** Nghỉ 5-10 phút giữa các batch để tránh burnout

---

## 4. FILE NAMING CONVENTION

**Ảnh thật (real photos):**
- `[product-slug]-real-1.jpg`
- `[product-slug]-real-2.jpg`
- `[product-slug]-real-3.jpg`

**Ảnh marketing (nếu có):**
- `[product-slug]-official-1.jpg`
- `[product-slug]-official-2.jpg`

**Folder structure:**
```
/public/images/products/
  /dior-sauvage-edp/
    dior-sauvage-edp-real-1.jpg
    dior-sauvage-edp-real-2.jpg
  /ysl-libre-eau-nue/
    ysl-libre-eau-nue-real-1.jpg
```

---

## 5. QUALITY GATE (Trước khi deploy)

| # | Check | Pass/Fail |
|---|---|---|
| 1 | Ảnh đúng chai (không nhầm sản phẩm) | |
| 2 | Ảnh rõ nét (không mờ/tối) | |
| 3 | File size hợp lý (<500KB/ảnh) | |
| 4 | Tên file đúng convention | |
| 5 | mockData.ts đã update `images` array | |
| 6 | Build local pass | |
| 7 | Commit message rõ ràng | |

**Chưa pass → KHÔNG deploy**

---

## 6. ESCALATION

**Nếu gặp vấn đề:**
- Không chắc chai nào → hỏi User trước khi inject
- Ảnh không rõ/không đúng → skip, báo User
- Build fail → fix ngay, không push
- Production lỗi → rollback commit, báo User

---

## 7. TRACKING

**File theo dõi:** `docs/reports/image-injection-log.json`

```json
{
  "batches": [
    {
      "batchId": "batch-001",
      "date": "2026-04-05",
      "products": ["dior-sauvage-edp", "chanel-bleu-edp"],
      "imageCount": 5,
      "status": "deployed",
      "verifiedOn": "https://www.maisondeson.com/nuoc-hoa-nam-dior-sauvage-edp",
      "commit": "abc123"
    }
  ]
}
```

---

## 8. NEXT STEPS (Sau khi SOP này xong)

1. Anti chạy Phase 1 (Inventory) → output inventory file
2. User review → chọn batch đầu tiên
3. Anti chạy Phase 2 (Prep) → commit
4. Anti chạy Phase 3 (Deploy & Verify) → screenshot evidence
5. Lặp lại cho batch tiếp theo

---

**End of SOP**
