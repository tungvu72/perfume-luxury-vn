---
description: Push code lên GitHub và deploy lên Vercel production
---

## Git Push + Vercel Deploy — Non-interactive (không cần popup)

### Khi nào dùng
- Sau khi commit xong code, cần push lên GitHub để Vercel auto-deploy
- Background terminal không có GUI — dùng cách này để bypass Windows Credential Manager popup

### Điều kiện tiên quyết
- Credentials `git:https://github.com` đã lưu trong Windows Credential Manager (cmdkey /list | grep github)
- Repo remote origin = `https://github.com/tungvu72/perfume-luxury-vn.git`

// turbo
### Bước 1: Push lên GitHub (non-interactive)
```powershell
$env:GCM_INTERACTIVE="never"
$env:GIT_TERMINAL_PROMPT="0"
git -C "d:\anti\perfume-luxury-vn" push origin main 2>&1
```
> Exit code 1 với output `5f63b4d..20710da main -> main` = THÀNH CÔNG (PowerShell stderr quirk)
> Exit thật sự thất bại sẽ có message: `error: failed to push`

// turbo
### Bước 2: Verify push thành công
```powershell
git -C "d:\anti\perfume-luxury-vn" log --oneline -3 origin/main 2>&1
```
> PASS nếu: commit mới nhất khớp với HEAD local

### Bước 3: Đợi Vercel build (~2 phút)
Vercel tự detect push → build → deploy production.

// turbo
### Bước 4: Verify live site
```
Browser: https://www.maisondeson.com
```
Check xem có render đúng section mới không.

---

## Evidence PASS
- `origin/main` = commit hash mới nhất
- Live site hiển thị đúng content mới
- Vercel dashboard: https://vercel.com/tungvu72s-projects/perfume-luxury-vn-q72y

## Lỗi thường gặp
- `error: failed to push` → credentials hết hạn → cần login lại git từ terminal tay
- Push hang không ra output → thiếu env vars → thêm `$env:GCM_INTERACTIVE="never"` trước lệnh git

## Vercel Token (backup deploy không cần git)
- Token: stored in Windows Credential Manager (do not commit tokens to git)
- Dùng: `npx vercel --prod --token [TOKEN] --yes --cwd "d:\anti\perfume-luxury-vn"`
- Lưu ý: Vercel CLI đọc từ GitHub, không phải file local — vẫn cần push git trước

## Source
- Task: Homepage V2 deploy
- Date: 2026-03-24
- Commit: 20710da
