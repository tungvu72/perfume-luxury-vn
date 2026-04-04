# SEARCH ISSUES REPORT
**Date:** 2026-04-04  
**Reported by:** User  
**Verified by:** Coder  
**Status:** 2 vấn đề nghiêm trọng phát hiện

---

## Issue 1: Sản phẩm không có trong database → Search không tìm thấy

### Problem
User search "toy boy" → Không tìm thấy kết quả  
**Root cause:** Moschino Toy Boy **KHÔNG CÓ trong `src/constants/mockData.ts`**

### Evidence
- Đã scan toàn bộ file `mockData.ts` (10,414 dòng)
- Không tìm thấy entry nào có:
  - `name: "Toy Boy"`
  - `brand: "MOSCHINO"`
  - `id: "toy-boy"`

### Impact
- User search sản phẩm phổ biến → không ra
- UX tệ: "Trang nước hoa mà không có Toy Boy?"
- Mất conversion

### Solution Required

**Option 1: Thêm sản phẩm vào database (khuyên dùng)**
- Thêm Moschino Toy Boy vào `mockData.ts`
- Format đầy đủ theo chuẩn hiện tại
- Deploy → search sẽ tìm thấy

**Option 2: Thông báo rõ ràng hơn khi không tìm thấy**
- Hiện: "Không tìm thấy kết quả"
- Nên: "Chưa có [tên sp] trên web. Nhắn Zalo để được tư vấn sản phẩm tương tự."

---

## Issue 2: Ảnh sản phẩm trong search bị crop tệ

### Problem
Ảnh trong search results bị:
- Mất góc nhiều
- Crop không đều
- Một số ảnh bị lỗi hiển thị

### Evidence
**Test case:** Search "chance eau tendre"  
**Result:** Ảnh Chanel Chance Eau Tendre bị crop mất góc, không đẹp

**Screenshot:** Production https://www.maisondeson.com

### Root Cause (cần verify code)
Likely issues:
1. CSS `object-fit` không phù hợp
2. Aspect ratio ảnh gốc không đồng nhất
3. Container size cố định không hợp với ảnh dọc/ngang

### Files to Check
- `src/components/Header.tsx` (search modal)
- CSS cho search result image
- Image component trong search

### Solution Required

**Fix CSS:**
```css
/* Thay vì object-fit: cover (crop nhiều) */
.search-result-image {
  object-fit: contain; /* hoặc scale-down */
  background: white; /* hoặc gradient nhẹ */
}
```

**Hoặc chuẩn hóa ảnh:**
- Resize tất cả ảnh product về cùng aspect ratio (ví dụ 3:4)
- Crop manual đẹp hơn auto-crop

---

## Rule Search Chuẩn (đề xuất)

### 1. Search phải tìm được theo nhiều cách
- Tên sản phẩm đầy đủ: "Moschino Toy Boy"
- Tên ngắn: "Toy Boy"
- Brand + keyword: "moschino toy"
- Tên tiếng Việt: "nước hoa toy boy"
- Tên không dấu: "nuoc hoa toy boy"

### 2. Khi không tìm thấy
**Thay vì:** "Không tìm thấy kết quả"

**Nên:**
```
Chưa có [query] trên web.

Gợi ý:
- Thử tìm theo brand: [brand gần nhất]
- Hoặc nhắn Zalo 0961226169 để được tư vấn sản phẩm tương tự
```

### 3. Fuzzy search nâng cao
- Hiện tại: threshold 0.4 (khá tốt)
- Nên thêm: synonym mapping
  - "toy boy" → "toyboy"
  - "sauvage" → "savage"
  - "bleu" → "blue"

### 4. Search suggestions
Khi gõ "toy" → gợi ý:
- "Toy Boy - Moschino" (nếu có trong DB)
- "Toy 2 - Moschino"
- Hoặc sản phẩm tương tự

---

## Priority

### P0 (BLOCKING):
1. **Fix ảnh search bị crop tệ**
   - Impact: UX tệ mỗi lần search
   - Effort: Low (chỉ sửa CSS)

### P1 (High):
2. **Thêm Moschino Toy Boy vào database**
   - Impact: Sản phẩm phổ biến không tìm được
   - Effort: Medium (cần viết full entry)

3. **Cải thiện message "không tìm thấy"**
   - Impact: UX khi search fail
   - Effort: Low (chỉ sửa text)

### P2 (Nice-to-have):
4. Synonym mapping
5. Search suggestions
6. Related products khi không tìm thấy

---

## Next Steps

**Immediate (Anti):**
1. Fix CSS ảnh search → deploy
2. Verify trên production

**Short-term (Coder + Anti):**
3. Thêm Moschino Toy Boy vào mockData.ts
4. Cải thiện message "không tìm thấy"
5. Deploy + verify

**Long-term:**
6. Audit toàn bộ ảnh product
7. Chuẩn hóa aspect ratio
8. Build synonym mapping

---

**Reported by:** User  
**Verified by:** Coder  
**Date:** 2026-04-04  
**Evidence:** Production testing + code scan
