# TASK: Improve Search "Not Found" Message
**Priority:** P1 — Quan trọng  
**Assigned to:** Anti  
**Created:** 2026-04-04  
**Status:** Assigned

---

## Problem Statement

Khi search sản phẩm không có trong database (ví dụ "toy boy"), message hiện tại **không hữu ích**:
- Chỉ nói "Không tìm thấy kết quả"
- Không gợi ý gì
- Không có CTA
- User bế tắc → bounce

### Evidence (Production)
**Test case:** Search "toy boy" trên https://www.maisondeson.com  
**Result:** "Không tìm thấy kết quả" + gợi ý filter (Oải hương, Vani, Gỗ đàn hương)

**Vấn đề:**
- Filter không liên quan đến "toy boy"
- Không có CTA Zalo
- Không gợi ý brand tương tự

---

## Requirements

### Must Have (BLOCKING)

1. **Message rõ ràng hơn**
   - Thay vì: "Không tìm thấy kết quả"
   - Nên: "Chưa có [query] trên web"

2. **Gợi ý hữu ích**
   - Thử tìm theo brand (nếu detect được brand trong query)
   - Hoặc gợi ý sản phẩm tương tự

3. **CTA Zalo rõ ràng**
   - "Nhắn Zalo 0961226169 để được tư vấn sản phẩm tương tự"
   - Có button/link Zalo

---

## Solution Design

### Message mới (đề xuất)

```
Chưa có "[query]" trên web

Gợi ý:
• Thử tìm theo thương hiệu: [brand nếu detect được]
• Hoặc xem: [2-3 sản phẩm tương tự nếu có]

Cần tư vấn?
Nhắn Zalo 0961226169 — tư vấn miễn phí, phản hồi nhanh
[Button: Nhắn Zalo ngay]
```

### Ví dụ cụ thể

**Case 1: Search "toy boy"**
```
Chưa có "toy boy" trên web

Gợi ý:
• Thử tìm: Moschino (thương hiệu)
• Hoặc xem: Nước hoa nam ngọt ấm

Cần tư vấn?
Nhắn Zalo 0961226169 — tư vấn miễn phí
[Button: Nhắn Zalo ngay]
```

**Case 2: Search "nuoc hoa abc xyz" (không detect được gì)**
```
Chưa có "nuoc hoa abc xyz" trên web

Gợi ý:
• Xem: Top nước hoa đáng mua nhất
• Hoặc: Tìm theo nhu cầu

Cần tư vấn?
Nhắn Zalo 0961226169 — tư vấn miễn phí
[Button: Nhắn Zalo ngay]
```

---

## Technical Implementation

### Files to Modify

Likely locations:
- `src/components/Header.tsx` (search modal)
- Component render "no results" state

### Logic cần thêm

1. **Detect brand trong query**
```typescript
const detectBrand = (query: string) => {
  const brands = ['dior', 'chanel', 'moschino', 'ysl', ...];
  const lowerQuery = query.toLowerCase();
  return brands.find(brand => lowerQuery.includes(brand));
}
```

2. **Render message mới**
```tsx
{results.length === 0 && (
  <div className="no-results">
    <p>Chưa có "{query}" trên web</p>
    
    {detectedBrand && (
      <div className="suggestions">
        <p>Gợi ý:</p>
        <Link to={`/${detectedBrand}`}>
          Thử tìm: {detectedBrand}
        </Link>
      </div>
    )}
    
    <div className="cta">
      <p>Cần tư vấn?</p>
      <p>Nhắn Zalo 0961226169 — tư vấn miễn phí</p>
      <a href="https://zalo.me/0961226169" className="btn">
        Nhắn Zalo ngay
      </a>
    </div>
  </div>
)}
```

---

## Test Cases (Must Pass)

### Priority 1: Message rõ ràng
- [ ] Search "toy boy" → "Chưa có toy boy trên web"
- [ ] Search "abc xyz" → "Chưa có abc xyz trên web"
- [ ] Không còn message "Không tìm thấy kết quả" chung chung

### Priority 2: Gợi ý hữu ích
- [ ] Search "toy boy" → gợi ý "Moschino" hoặc sản phẩm tương tự
- [ ] Search "dior abc" → gợi ý "Dior"
- [ ] Search "abc xyz" → gợi ý "Top nước hoa" hoặc "Tìm theo nhu cầu"

### Priority 3: CTA Zalo
- [ ] Có text "Nhắn Zalo 0961226169"
- [ ] Có button/link Zalo
- [ ] Link đúng: https://zalo.me/0961226169

### Priority 4: Responsive
- [ ] Desktop → message đẹp
- [ ] Mobile → message đẹp, button dễ bấm

---

## Acceptance Criteria

### PASS khi:
1. ✅ Message rõ ràng hơn (không còn "Không tìm thấy kết quả" chung chung)
2. ✅ Có gợi ý hữu ích (brand hoặc sản phẩm tương tự)
3. ✅ Có CTA Zalo rõ ràng + button
4. ✅ Responsive tốt desktop/mobile
5. ✅ Verify trên production (https://www.maisondeson.com)
6. ✅ Tất cả test cases pass

### Evidence cần có:
- [ ] Screenshot production: search "toy boy" → message mới
- [ ] Screenshot production: search "abc xyz" → message mới
- [ ] Screenshot mobile: CTA Zalo dễ bấm
- [ ] Commit hash + deploy log
- [ ] **Browser tool log: Anti tự test production, chụp evidence**

### Verification Flow (BẮT BUỘC):
1. Code → commit → push → Vercel deploy
2. Chờ deploy xong (~2 phút)
3. **Dùng browser tool mở https://www.maisondeson.com**
4. **Search "toy boy", "abc xyz", "dior abc"**
5. **Chụp screenshot từng case**
6. **Test mobile (375px)**
7. Tất cả pass → báo PASS + evidence
8. Có 1 case fail → báo BLOCKED + lý do

**KHÔNG được báo PASS nếu chưa tự test trên production bằng browser tool.**

---

## Timeline

**Deadline:** Sau khi fix xong task ảnh search

**Milestones:**
- [ ] Scan code, xác định component "no results"
- [ ] Implement brand detection
- [ ] Implement message mới + CTA Zalo
- [ ] Test local (nếu cần)
- [ ] Deploy production
- [ ] **Tự mở browser tool → test production → chụp evidence**
- [ ] Verify tất cả test cases pass

**Không chờ approval, không hỏi thêm — làm luôn sau khi xong task ảnh.**

---

## Notes

- Task này làm sau task fix ảnh search (P0)
- Ưu tiên message rõ ràng + CTA Zalo trước
- Brand detection có thể đơn giản (hardcode list brands)
- Phải test trên production, không chỉ localhost
- Evidence = production URL + screenshot

---

## Contact

**Reporter:** User (CEO)  
**Assignee:** Anti  
**Reviewer:** Coder
