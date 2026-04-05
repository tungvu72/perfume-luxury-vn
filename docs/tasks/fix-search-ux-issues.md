# TASK: Fix Search UX Issues
**Priority:** P1 — Quan trọng  
**Assigned to:** Anti  
**Created:** 2026-04-04  
**Status:** Assigned

---

## Problem Statement

Sau khi fix search mobile bug, còn 2 vấn đề UX nghiêm trọng:

### Issue 1: Nhiều ảnh sản phẩm bị lỗi trong search results
**Evidence:** 
- Montblanc Signature: icon lỗi
- Nhiều chai khác random check cũng bị lỗi
- Xảy ra cả mobile và desktop

**Impact:**
- UX tệ: người dùng thấy icon lỗi
- Mất trust: "web này ảnh còn lỗi"
- Không phải 1-2 chai mà nhiều chai

**Root cause cần tìm:**
- Tại sao nhiều ảnh bị lỗi?
- Next.js Image component issue?
- Path không đúng khi deploy?
- File missing trên Vercel?
- CORS/CDN issue?

### Issue 2: Design search quá dài, chiếm trọn màn hình
**Evidence:** 8 kết quả xếp dọc → chiếm hết viewport

**Impact:**
- Phải scroll nhiều để thấy hết
- Không thấy content phía dưới
- UX kém hơn Fragrantica nhiều

---

## Requirements

### Issue 1: Tìm root cause + fix ảnh lỗi

**Bước 1: Debug — tìm root cause**

1. **Check console errors trên production:**
   - Mở https://www.maisondeson.com
   - Search "montblanc", "dior", "chanel"
   - Mở DevTools Console
   - Check error messages cho ảnh lỗi

2. **Check network tab:**
   - Xem request ảnh nào fail (404, 500, CORS)
   - Check response headers
   - Check path đúng không

3. **Check Vercel deployment:**
   - Verify file ảnh có deploy lên Vercel không
   - Check public/images/products/ trên Vercel
   - Check build logs

4. **Check Next.js Image optimization:**
   - Có phải Next.js Image component fail?
   - Có cần fallback về `<img>` tag?

**Bước 2: Fix dựa trên root cause**

**Nếu path sai:**
```tsx
// Fix path trong mockData.ts hoặc Image component
```

**Nếu Next.js Image fail:**
```tsx
// Fallback về img tag
<img
  src={product.image}
  alt={product.name}
  onError={(e) => {
    e.currentTarget.src = '/images/placeholder.jpg';
  }}
/>
```

**Nếu file missing:**
```
// Re-upload files lên Vercel
// Hoặc fix build process
```

**Bước 3: Thêm error handling**
```tsx
<Image
  src={product.image}
  alt={product.name}
  width={40}
  height={40}
  onError={(e) => {
    e.currentTarget.src = '/images/placeholder.jpg';
  }}
/>
```

---

### Issue 2: Redesign search theo Fragrantica

**Reference:** Fragrantica search design

**Key features:**
- **3 cột:** Perfumes | Designers | Articles
- **Compact:** Mỗi item nhỏ gọn hơn
- **Max height:** Không chiếm trọn màn hình (60vh)
- **Scroll:** Chỉ scroll trong modal, không scroll cả page

**Design spec (dựa trên Fragrantica):**

**Desktop:**
```
┌─────────────────────────────────────────────────┐
│  Search: "dior"                            [X]  │
├─────────────────────────────────────────────────┤
│  PERFUMES          │ DESIGNERS    │ ARTICLES    │
├────────────────────┼──────────────┼─────────────┤
│ [img] Dior         │ [logo] Dior  │ [img] Dior  │
│       Sauvage EDP  │              │       Review│
│                    │              │             │
│ [img] Dior         │ [logo] YSL   │ [img] Top   │
│       J'adore      │              │       Dior  │
│                    │              │             │
│ ... (max 6)        │ ... (max 5)  │ ... (max 3) │
└────────────────────┴──────────────┴─────────────┘
```

**Mobile (theo Fragrantica):**
```
┌─────────────────────────────────┐
│  Search: "bleu"            [X]  │
├─────────────────────────────────┤
│  PERFUMES                       │
├─────────────────────────────────┤
│ [img] Bharara Bleu              │
│ [img] Rubeus Bleu               │
│ [img] La Bouche Rouge Bleu      │
│ [img] Paul & Joe Bleu           │
│ [img] Parfums et Senteurs Bleu  │
│                                 │
│  DESIGNERS                      │
├─────────────────────────────────┤
│ [logo] Bleu Nour                │
│                                 │
└─────────────────────────────────┘
```

**Layout:**
- Desktop: 3 cột (40% | 30% | 30%)
- Mobile: 2 sections dọc (PERFUMES + DESIGNERS), KHÔNG có tabs
- Max height: 60vh (~500px)
- Scroll: overflow-y auto toàn bộ modal

**Item size (theo Fragrantica):**
- Ảnh: 48x48px (mobile), 40x40px (desktop)
- Text: Brand name (uppercase, teal color) + Product name (2 dòng max)
- Spacing: 12px giữa các items
- Section header: uppercase, gray color (#999), font-size: 0.75rem

---

## Technical Implementation

### Fix ảnh lỗi

**File:** `src/components/Header.tsx`

**Debug trước:**
1. Console log path ảnh
2. Check network tab
3. Xác định root cause

**Fix sau:**
- Thêm error handling
- Fallback placeholder
- Fix path nếu cần

### Redesign search

**File:** `src/components/Header.tsx`

**Structure mới:**
```tsx
<div className="search-modal">
  <input ... />
  
  <div className="search-results">
    {/* Desktop: 3 cột | Mobile: 2 sections dọc */}
    <div className="search-column perfumes">
      <h3>PERFUMES</h3>
      {perfumeResults.slice(0, 6).map(product => (
        <div className="search-item">
          <img src={product.image} alt={product.name} />
          <div>
            <div className="brand">{product.brand}</div>
            <div className="name">{product.name}</div>
          </div>
        </div>
      ))}
    </div>
    
    <div className="search-column designers">
      <h3>DESIGNERS</h3>
      {designerResults.slice(0, 5).map(...)}
    </div>
    
    <div className="search-column articles">
      <h3>ARTICLES</h3>
      {articleResults.slice(0, 3).map(...)}
    </div>
  </div>
</div>
```

**CSS (theo Fragrantica):**
```css
.search-results {
  display: grid;
  grid-template-columns: 40% 30% 30%;
  gap: 1rem;
  max-height: 60vh;
  overflow-y: auto; /* scroll toàn bộ modal */
  padding: 1rem;
}

.search-column {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.search-column h3 {
  font-size: 0.75rem;
  font-weight: 600;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.search-item {
  display: flex;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
}

.search-item:hover {
  background: #f5f5f5;
}

.search-item img {
  width: 48px;
  height: 48px;
  object-fit: contain;
  flex-shrink: 0;
}

.search-item .brand {
  font-size: 0.75rem;
  font-weight: 600;
  color: #008B8B; /* teal color như Fragrantica */
  text-transform: uppercase;
}

.search-item .name {
  font-size: 0.875rem;
  color: #333;
  line-height: 1.3;
}

/* Mobile: 2 sections dọc, KHÔNG có tabs */
@media (max-width: 768px) {
  .search-results {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .search-column.articles {
    display: none; /* ẩn articles trên mobile như Fragrantica */
  }
}
```

---

## Test Cases (Must Pass)

### Issue 1: Ảnh không lỗi
- [ ] Search "montblanc" → ảnh hiển thị đúng (không icon lỗi)
- [ ] Search "dior" → tất cả ảnh hiển thị đúng
- [ ] Search "chanel" → tất cả ảnh hiển thị đúng
- [ ] Search "tom ford" → tất cả ảnh hiển thị đúng
- [ ] Random check 10 chai → không có ảnh lỗi
- [ ] Nếu ảnh thật sự missing → hiển thị placeholder đẹp

### Issue 2: Design compact
- [ ] Desktop: 3 cột (Perfumes | Designers | Articles)
- [ ] Mobile: 1 cột + tabs
- [ ] Max height: 60vh, không chiếm trọn màn hình
- [ ] Scroll: chỉ trong modal
- [ ] Item size: nhỏ gọn (40x40px ảnh)
- [ ] Spacing: compact

### Responsive
- [ ] Desktop 1920px → 3 cột đẹp
- [ ] Tablet 768px → 2 cột hoặc 1 cột
- [ ] Mobile 375px → 1 cột + tabs

---

## Acceptance Criteria

### PASS khi:
1. ✅ Không còn ảnh lỗi trong search results (hoặc có placeholder đẹp)
2. ✅ Đã tìm ra root cause ảnh lỗi và fix
3. ✅ Design 3 cột giống Fragrantica
4. ✅ Max height 60vh, không chiếm trọn màn hình
5. ✅ Responsive tốt desktop/mobile
6. ✅ Verify trên production (https://www.maisondeson.com)
7. ✅ Tất cả test cases pass

### Evidence cần có:
- [ ] Console log/screenshot: root cause ảnh lỗi
- [ ] Screenshot production desktop: search "dior" → 3 cột, ảnh OK
- [ ] Screenshot production mobile: search "dior" → 1 cột + tabs, ảnh OK
- [ ] Screenshot: random 5 chai → ảnh đều OK
- [ ] Video: scroll trong modal, không scroll page
- [ ] Commit hash + deploy log
- [ ] **Browser tool log: Anti tự test production, chụp evidence**

### Verification Flow (BẮT BUỘC):
1. Debug root cause ảnh lỗi trên production
2. Fix code → commit → push → Vercel deploy
3. Chờ deploy xong (~2 phút)
4. **Dùng browser tool mở https://www.maisondeson.com**
5. **Test desktop 1920px: search "dior", "montblanc", "chanel", "tom ford"**
6. **Test mobile 375px: search "dior", "montblanc", "chanel", "tom ford"**
7. **Random check 10 chai → verify ảnh OK**
8. **Chụp screenshot từng case**
9. Tất cả pass → báo PASS + evidence
10. Có 1 case fail → báo BLOCKED + lý do

**KHÔNG được báo PASS nếu chưa tự test trên production bằng browser tool.**

---

## Priority

**Issue 1 (ảnh lỗi) = P0** — fix trước, BLOCKING  
**Issue 2 (redesign) = P1** — fix sau

---

## Notes

- Nhiều chai bị lỗi ảnh, không chỉ Montblanc
- Phải tìm root cause trước khi fix
- Debug trên production bằng browser tool
- Reference design: Fragrantica search
- Phải test trên production, không chỉ localhost
- Evidence = production URL + screenshot + console log

---

## Contact

**Reporter:** User (CEO)  
**Assignee:** Anti  
**Reviewer:** Coder
