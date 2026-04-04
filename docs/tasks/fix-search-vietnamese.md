# TASK: Fix Search Vietnamese Support
**Priority:** BLOCKING — LÀM NGAY  
**Assigned to:** Anti  
**Created:** 2026-04-04  
**Status:** Assigned

---

## Problem Statement

Search function trên https://www.maisondeson.com **không hoạt động với tiếng Việt có dấu**.

### Evidence (Production Test)
- ❌ Gõ "nước hoa nam" → Không tìm thấy
- ❌ Gõ "dior sauvage" → Không tìm thấy  
- ✅ Gõ "sauvage" (không dấu) → Có kết quả

**Impact:** Người Việt thường gõ có dấu → UX tệ → bounce rate cao → mất conversion.

---

## Requirements

### Must Fix (BLOCKING)

1. **Vietnamese diacritic support**
   - "nước hoa" = "nuoc hoa" = "NUOC HOA"
   - "Dior" = "dior" = "DIOR"
   - Normalize Unicode (NFD/NFC)

2. **Multi-field search**
   - Product name
   - Brand name
   - Category (nam/nữ/unisex)
   - Tags
   - Notes (nốt hương)

3. **Case-insensitive**
   - "dior" = "Dior" = "DIOR"

### Should Have (Important)

4. **Fuzzy search basic**
   - "sauavge" → suggest "sauvage"
   - "chanle" → suggest "chanel"
   - Typo tolerance 1-2 characters

5. **Instant search**
   - Gõ 2-3 ký tự → hiện kết quả ngay
   - Không cần nhấn Enter

6. **Keyboard navigation**
   - Arrow keys: di chuyển giữa kết quả
   - ESC: đóng modal
   - Enter: chọn kết quả đầu tiên

---

## Technical Solution

### Recommended: Fuse.js

**Why:**
- Free, open-source
- Fuzzy search built-in
- Dễ setup
- Đủ tốt cho site vừa

**Setup:**
```bash
npm install fuse.js
```

**Config example:**
```js
const fuseOptions = {
  keys: [
    { name: 'name', weight: 0.4 },
    { name: 'brand', weight: 0.3 },
    { name: 'category', weight: 0.2 },
    { name: 'tags', weight: 0.1 }
  ],
  threshold: 0.3,
  ignoreLocation: true,
  useExtendedSearch: true
}
```

**Vietnamese normalization:**
```js
function removeVietnameseTones(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}
```

---

## Test Cases (Must Pass)

### Priority 1: Vietnamese diacritics
- [ ] "nước hoa nam" → tìm được sản phẩm nam
- [ ] "nuoc hoa nam" → tìm được sản phẩm nam
- [ ] "NƯỚC HOA NAM" → tìm được sản phẩm nam

### Priority 2: Brand search
- [ ] "dior" → tìm được Dior Sauvage, Dior Homme
- [ ] "Dior Sauvage" → tìm được Sauvage Elixir, Sauvage EDT, Sauvage EDP
- [ ] "chanel" → tìm được Chanel Bleu, Chanel Allure

### Priority 3: Category search
- [ ] "nam" → tìm được sản phẩm nam
- [ ] "nữ" → tìm được sản phẩm nữ
- [ ] "unisex" → tìm được sản phẩm unisex

### Priority 4: Fuzzy search
- [ ] "sauavge" → gợi ý "sauvage"
- [ ] "chanle" → gợi ý "chanel"
- [ ] "dior savuage" → tìm được "Dior Sauvage"

### Priority 5: Multi-word
- [ ] "nước hoa đi làm" → tìm được sản phẩm có tag "đi làm"
- [ ] "nước hoa ngọt" → tìm được sản phẩm có note ngọt

---

## Files to Check/Modify

Likely locations:
- `src/components/Search.tsx` (hoặc tương tự)
- `src/lib/search.ts` (nếu có)
- `src/hooks/useSearch.ts` (nếu có)
- `src/app/api/search/route.ts` (nếu search qua API)

**Action:** Scan repo để xác định file search hiện tại.

---

## Acceptance Criteria

### PASS khi:
1. ✅ Tất cả test cases Priority 1-3 pass
2. ✅ Search hoạt động trên production (https://www.maisondeson.com)
3. ✅ Mobile + Desktop đều ổn
4. ✅ Performance không giảm (< 100ms response time)
5. ✅ Không break existing functionality
6. ✅ **Anti phải tự test trực tiếp trên production bằng browser tool**

### Evidence cần có:
- [ ] Screenshot production: gõ "nước hoa nam" → có kết quả
- [ ] Screenshot production: gõ "dior sauvage" → có kết quả
- [ ] Screenshot production mobile: test search
- [ ] Commit hash + deploy log
- [ ] **Browser tool log: Anti tự mở https://www.maisondeson.com, gõ test cases, chụp kết quả**

### Verification Flow (BẮT BUỘC):
1. Code xong → commit → push → Vercel deploy
2. Chờ deploy xong (~2 phút)
3. **Dùng browser tool mở https://www.maisondeson.com**
4. **Tự gõ từng test case Priority 1-3**
5. **Chụp screenshot mỗi test case**
6. Tất cả pass → báo PASS + evidence
7. Có 1 case fail → báo BLOCKED + lý do

**KHÔNG được báo PASS nếu chưa tự test trên production bằng browser tool.**

---

## Timeline

**Deadline:** KHÔNG CÓ — LÀM NGAY

**Milestones:**
- [ ] Scan code, xác định file search
- [ ] Implement Fuse.js + Vietnamese normalization
- [ ] Test local
- [ ] Deploy production
- [ ] **Tự mở browser tool → test production → chụp evidence**
- [ ] Verify tất cả test cases pass

**Không chờ approval, không hỏi thêm — làm luôn.**
**Không được báo PASS nếu chưa tự verify trên production.**

---

## Notes

- Không được break existing search functionality
- Phải test trên production, không chỉ localhost
- Evidence = production URL + screenshot, không phải localhost
- Nếu cần thay đổi data structure, phải migrate data cũ

---

## Contact

**Reporter:** Coder  
**Assignee:** Anti  
**Reviewer:** User (CEO)
