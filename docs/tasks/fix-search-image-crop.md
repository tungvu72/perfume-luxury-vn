# TASK: Fix Search Image Crop Issue
**Priority:** P0 — LÀM NGAY  
**Assigned to:** Anti  
**Created:** 2026-04-04  
**Status:** Assigned

---

## Problem Statement

Ảnh sản phẩm trong search results bị **crop tệ** — mất góc nhiều, không đẹp.

### Evidence (Production)
**Test case:** Search "chance eau tendre" trên https://www.maisondeson.com  
**Result:** Ảnh Chanel Chance Eau Tendre bị crop mất góc, hiển thị không đẹp

**Screenshot:** Đã verify trên production

---

## Root Cause (Likely)

1. CSS `object-fit: cover` → crop quá nhiều
2. Container size cố định không hợp với ảnh dọc/ngang
3. Aspect ratio ảnh gốc không đồng nhất

---

## Requirements

### Must Fix (BLOCKING)

1. **Ảnh phải hiển thị đầy đủ, không bị mất góc**
   - Không crop mất phần quan trọng của chai
   - Giữ nguyên tỷ lệ ảnh gốc

2. **Ảnh phải đẹp trên mọi kích thước**
   - Desktop: OK
   - Mobile: OK
   - Ảnh dọc/ngang đều OK

3. **Không làm vỡ layout**
   - Search results vẫn gọn gàng
   - Spacing đồng nhất

---

## Solution Recommended

### Option 1: Sửa CSS (khuyên dùng — nhanh nhất)

**File:** `src/components/Header.tsx` (hoặc file CSS search modal)

**Thay đổi:**
```css
/* BEFORE (hiện tại - crop nhiều) */
.search-result-image {
  object-fit: cover;
}

/* AFTER (fix - hiển thị đầy đủ) */
.search-result-image {
  object-fit: contain;
  background: #f8f9fa; /* hoặc gradient nhẹ */
}
```

**Hoặc:**
```css
.search-result-image {
  object-fit: scale-down;
  background: white;
}
```

### Option 2: Chuẩn hóa ảnh (nếu Option 1 không đủ)
- Resize tất cả ảnh product về cùng aspect ratio (3:4 hoặc 2:3)
- Crop manual từng ảnh cho đẹp
- **Effort cao hơn nhiều**

---

## Files to Check/Modify

Likely locations:
- `src/components/Header.tsx` (search modal component)
- `src/styles/` (nếu có file CSS riêng cho search)
- Component render search results

**Action:** 
1. Scan code tìm phần render ảnh trong search
2. Xác định CSS hiện tại
3. Sửa `object-fit`
4. Test trên production

---

## Test Cases (Must Pass)

### Priority 1: Ảnh hiển thị đầy đủ
- [ ] Search "chance eau tendre" → ảnh không bị mất góc
- [ ] Search "sauvage" → ảnh không bị mất góc
- [ ] Search "nước hoa nam" → tất cả ảnh đều OK

### Priority 2: Responsive
- [ ] Desktop (1920px) → ảnh đẹp
- [ ] Tablet (768px) → ảnh đẹp
- [ ] Mobile (375px) → ảnh đẹp

### Priority 3: Layout không vỡ
- [ ] Search results vẫn gọn gàng
- [ ] Spacing đồng nhất
- [ ] Không có ảnh quá to/quá nhỏ

---

## Acceptance Criteria

### PASS khi:
1. ✅ Ảnh hiển thị đầy đủ, không bị crop mất góc
2. ✅ Responsive tốt trên desktop/mobile
3. ✅ Layout không vỡ
4. ✅ Verify trên production (https://www.maisondeson.com)
5. ✅ Tất cả test cases pass

### Evidence cần có:
- [ ] Screenshot production: search "chance eau tendre" → ảnh đẹp
- [ ] Screenshot production mobile: ảnh đẹp
- [ ] Commit hash + deploy log
- [ ] **Browser tool log: Anti tự mở production, test, chụp evidence**

### Verification Flow (BẮT BUỘC):
1. Sửa CSS → commit → push → Vercel deploy
2. Chờ deploy xong (~2 phút)
3. **Dùng browser tool mở https://www.maisondeson.com**
4. **Search "chance eau tendre", "sauvage", "nước hoa nam"**
5. **Chụp screenshot từng case**
6. **Test mobile (375px)**
7. Tất cả pass → báo PASS + evidence
8. Có 1 case fail → báo BLOCKED + lý do

**KHÔNG được báo PASS nếu chưa tự test trên production bằng browser tool.**

---

## Timeline

**Deadline:** KHÔNG CÓ — LÀM NGAY

**Milestones:**
- [ ] Scan code, xác định file CSS
- [ ] Sửa `object-fit`
- [ ] Test local (nếu cần)
- [ ] Deploy production
- [ ] **Tự mở browser tool → test production → chụp evidence**
- [ ] Verify tất cả test cases pass

**Không chờ approval, không hỏi thêm — làm luôn.**  
**Không được báo PASS nếu chưa tự verify trên production.**

---

## Notes

- Ưu tiên Option 1 (sửa CSS) — nhanh nhất
- Nếu Option 1 không đủ → báo lại, cân nhắc Option 2
- Phải test trên production, không chỉ localhost
- Evidence = production URL + screenshot, không phải localhost

---

## Contact

**Reporter:** User (CEO)  
**Assignee:** Anti  
**Reviewer:** Coder
