# TASK UPDATE: Fix Search Mobile Bug - DEPLOY NGAY
**Priority:** P0 — BLOCKING — LÀM NGAY  
**Assigned to:** Anti  
**Updated:** 2026-04-04 21:55  
**Status:** Code đã sửa, CHỜ DEPLOY + VERIFY

---

## Trạng thái hiện tại

✅ **Code đã sửa xong** trong `src/components/Header.tsx`:
- Thêm `combined` field
- Tắt `useExtendedSearch`
- Nâng cấp `removeVietnameseTones`
- Threshold 0.35

❌ **CHƯA DEPLOY production**  
❌ **CHƯA VERIFY trên live site**

---

## YÊU CẦU BẮT BUỘC

Anti **CÓ QUYỀN git push** — đã deploy nhiều lần trước đó.

**KHÔNG ĐƯỢC nói "không có quyền push".**

### Workflow đúng (Anti phải làm):

1. **Git add + commit + push:**
```powershell
$env:GCM_INTERACTIVE="never"
$env:GIT_TERMINAL_PROMPT="0"
git -C "d:\anti\perfume-luxury-vn" add src/components/Header.tsx
git -C "d:\anti\perfume-luxury-vn" commit -m "fix: search mobile bug - add combined field + improve normalization"
git -C "d:\anti\perfume-luxury-vn" push origin main 2>&1
```

2. **Chờ Vercel deploy xong** (~2 phút)

3. **Verify production mobile bằng browser tool:**
```
- Mở https://www.maisondeson.com
- Resize 375px (mobile)
- Test "Dior sauvage" → phải có 4 kết quả
- Test "nước hoa nam" → phải có 8 kết quả
- Test "sauvage" → phải có 4 kết quả
- Test "nuoc hoa nam" → phải có 8 kết quả
- Chụp screenshot từng case
```

4. **Báo kết quả với evidence:**
```
✅ PASS - Search mobile fixed
Evidence:
- Commit: [hash]
- Deploy: [Vercel log]
- Screenshot: [production mobile "Dior sauvage" → 4 kết quả]
- Screenshot: [production mobile "nước hoa nam" → 8 kết quả]
```

---

## KHÔNG ĐƯỢC

❌ Nói "không có quyền push" → Anti CÓ QUYỀN  
❌ Nói "chờ Coder/User deploy" → Anti TỰ DEPLOY  
❌ Báo PASS mà chưa deploy production  
❌ Báo PASS mà chưa verify bằng browser tool  
❌ Test local rồi claim "xong" → phải test PRODUCTION

---

## Acceptance Criteria (BLOCKING)

### PASS khi:
1. ✅ Code đã push lên GitHub
2. ✅ Vercel đã deploy thành công
3. ✅ Tự mở browser tool → test production mobile
4. ✅ Screenshot evidence: "Dior sauvage" mobile → 4 kết quả
5. ✅ Screenshot evidence: "nước hoa nam" mobile → 8 kết quả
6. ✅ Tất cả test cases pass

### Evidence BẮT BUỘC:
- [ ] Commit hash
- [ ] Vercel deploy log
- [ ] Screenshot production mobile: "Dior sauvage" → 4 kết quả
- [ ] Screenshot production mobile: "nước hoa nam" → 8 kết quả
- [ ] Browser tool log đầy đủ

**KHÔNG có evidence = KHÔNG PASS.**

---

## Test Cases (Must Pass)

### Mobile 375px:
- [ ] "Dior sauvage" → 4 kết quả (Eau Sauvage, Eau Sauvage Parfum, Sauvage EDP, Sauvage Elixir)
- [ ] "nước hoa nam" → 8 kết quả
- [ ] "sauvage" → 4 kết quả
- [ ] "nuoc hoa nam" → 8 kết quả

### Desktop 1920px (verify parity):
- [ ] "Dior sauvage" → 4 kết quả (giống mobile)
- [ ] "nước hoa nam" → 8 kết quả (giống mobile)

---

## Timeline

**Deadline:** NGAY BÂY GIỜ — không trì hoãn

**Milestones:**
1. Git push → 2 phút
2. Vercel deploy → 2 phút
3. Browser tool verify → 5 phút
4. Báo kết quả → 1 phút

**Tổng: ~10 phút**

---

## Notes

- Anti CÓ QUYỀN deploy — đã làm nhiều lần
- Credentials đã lưu trong Windows Credential Manager
- Git push workflow: `.agents/workflows/git-push-deploy.md`
- Exit code 1 + "main -> main" = THÀNH CÔNG (PowerShell quirk)
- Không được trốn việc bằng cách nói "không có quyền"

---

## Contact

**Reporter:** User (CEO)  
**Assignee:** Anti  
**Reviewer:** Coder  
**Severity:** CRITICAL — BLOCKING
