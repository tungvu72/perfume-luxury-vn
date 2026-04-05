# SEARCH VERIFICATION REPORT - Coder Independent Test
**Date:** 2026-04-04 22:56  
**Tester:** Coder (independent verification)  
**Target:** https://www.maisondeson.com (production)  
**Anti claim:** PASS - Search mobile fixed

---

## Test Results Summary

**Total tests:** 10 cases  
**Pass:** 7/10 (70%)  
**Fail:** 3/10 (30%)

---

## ✅ PASS Cases (7/10)

### 1. Brand + Product Name (có dấu)
**Query:** "chanel chance"  
**Result:** ✅ 4 kết quả (Chance EDT, Eau Tendre, Eau Fraîche, Eau Vive)  
**Platform:** Mobile 375px

### 2. Vietnamese without tones
**Query:** "nuoc hoa nu"  
**Result:** ✅ 8 kết quả nữ  
**Platform:** Mobile 375px

### 3. Typo / Fuzzy search
**Query:** "sauavge" (typo)  
**Result:** ✅ 4 kết quả Sauvage  
**Platform:** Mobile 375px

### 4. Brand only
**Query:** "tom ford"  
**Result:** ✅ 8 kết quả Tom Ford  
**Platform:** Mobile 375px

### 5. Note search (Vietnamese)
**Query:** "vani"  
**Result:** ✅ 8 kết quả (Tobacco Vanille, Vanilla Sex, etc.)  
**Platform:** Mobile 375px

### 6. Short product name
**Query:** "bleu"  
**Result:** ✅ 3 kết quả Bleu de Chanel  
**Platform:** Mobile 375px

### 7. Desktop attribute search
**Query:** "rẻ"  
**Result:** ✅ 8 kết quả  
**Platform:** Desktop 1920px

---

## ❌ FAIL Cases (3/10)

### 8. Context-based search (Vietnamese user behavior)
**Query:** "nước hoa đi làm"  
**Result:** ❌ 0 kết quả  
**Platform:** Mobile 375px  
**Issue:** Search không hiểu ngữ cảnh/nhu cầu

### 9. Attribute search (Vietnamese)
**Query:** "tươi mát"  
**Result:** ❌ 0 kết quả  
**Platform:** Mobile 375px  
**Issue:** Search không hiểu đặc điểm mùi

### 10. Desktop vs Mobile parity FAIL
**Query:** "rẻ"  
**Desktop:** ✅ 8 kết quả  
**Mobile:** ❌ 0 kết quả  
**Issue:** Desktop OK, Mobile FAIL → không đồng nhất

---

## Critical Issues Found

### 1. Desktop vs Mobile Parity Bug (BLOCKING)
- Query "rẻ": Desktop → 8 results, Mobile → 0 results
- Anti claim "mobile fixed" nhưng vẫn có case fail
- **Severity:** HIGH

### 2. Context/Need-based Search Missing
- "nước hoa đi làm" → 0 results
- Người Việt thường search theo nhu cầu (đi làm, hẹn hò, đi chơi)
- **Severity:** MEDIUM

### 3. Attribute Search Missing
- "tươi mát" → 0 results
- "rẻ" mobile → 0 results
- Người Việt thường search theo đặc điểm/giá
- **Severity:** MEDIUM

---

## Anti Claim vs Reality

### Anti claimed:
> "PASS - Search mobile fixed"
> "Tất cả test cases BLOCKING đã PASS đầy đủ"

### Reality:
- ✅ "Dior sauvage" mobile → Fixed (4 results)
- ✅ "nước hoa nam" mobile → Fixed (8 results)
- ❌ "rẻ" mobile → Still FAIL (0 results, desktop OK)
- ❌ Context search → Not working
- ❌ Attribute search → Not working

**Verdict:** Anti claim **PARTIALLY CORRECT**
- Core bug "Dior sauvage" → Fixed ✅
- But other issues remain → Not fully PASS ❌

---

## Recommendations

### Priority 1 (BLOCKING):
1. **Fix desktop vs mobile parity**
   - Query "rẻ" phải hoạt động giống nhau
   - Root cause: likely viewport-specific logic bug

### Priority 2 (Important):
2. **Add context/need-based search**
   - Map "đi làm" → tags "Office", "Lịch sự", "Đa dụng"
   - Map "hẹn hò" → tags "Buổi tối", "Hẹn hò", "Quyến rũ"
   - Map "đi chơi" → tags "Trẻ trung", "Năng động"

3. **Add attribute search**
   - Map "tươi mát" → tags "Tươi", "Citrus", "Aquatic"
   - Map "ngọt" → tags "Ngọt", "Gourmand", "Vani"
   - Map "rẻ" → filter by price range

### Priority 3 (Nice-to-have):
4. Synonym mapping
5. Search suggestions
6. Related products when no results

---

## Test Evidence

**Screenshots:**
- ✅ Mobile "chanel chance" → 4 results
- ✅ Mobile "nuoc hoa nu" → 8 results
- ✅ Mobile "sauavge" → 4 results
- ✅ Mobile "tom ford" → 8 results
- ✅ Mobile "vani" → 8 results
- ✅ Mobile "bleu" → 3 results
- ✅ Desktop "rẻ" → 8 results
- ❌ Mobile "nước hoa đi làm" → 0 results
- ❌ Mobile "tươi mát" → 0 results
- ❌ Mobile "rẻ" → 0 results

**Browser tool log:** Full test session recorded

---

## Conclusion

**Anti's fix:**
- ✅ Solved core bug: "Dior sauvage" mobile
- ✅ Improved normalization: đ→d, whitespace
- ✅ Added combined field for multi-word search

**But:**
- ❌ Desktop vs mobile parity still has issues
- ❌ Context/attribute search not implemented
- ❌ Only 70% test cases pass

**Final verdict:**
- Core task: ✅ PASS (Dior sauvage fixed)
- Full search quality: ⚠️ NEEDS IMPROVEMENT (70% pass rate)

---

**Tested by:** Coder  
**Date:** 2026-04-04 22:56  
**Method:** Independent verification on production  
**Evidence:** Browser tool screenshots + full test log
