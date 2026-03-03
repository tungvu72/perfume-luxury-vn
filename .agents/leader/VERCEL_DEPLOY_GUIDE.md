# 🚀 HƯỚNG DẪN DEPLOY VERCEL

## Bước 1: Sign Up / Login Vercel (3 phút)

1. Truy cập: https://vercel.com
2. Click **"Sign Up"** hoặc **"Login"**
3. Chọn **"Continue with GitHub"**
4. Authorize Vercel access GitHub

## Bước 2: Import Repository (3 phút)

1. Sau khi login, click **"Add New..."** → **"Project"**
2. Dưới "Import Git Repository", click **"Continue with GitHub"**
3. Tìm và select repo: `perfume-luxury-vn`
4. Click **"Import"**

## Bước 3: Config Build Settings (2 phút)

Trong "Configure Project":
- **Framework Preset:** Next.js (Vercel tự detect)
- **Root Directory:** `./` (giữ nguyên)
- **Build Command:** `npm run build` (giữ nguyên)
- **Output Directory:** `.next` (giữ nguyên)
- **Install Command:** `npm install` (giữ nguyên)

Click **"Deploy"**

## Bước 4: Chờ Deploy (3-5 phút)

- Vercel sẽ build và deploy
- Khi xong sẽ hiển thị: 🎉 Congratulations!
- Copy **Production URL** (dạng: `https://perfume-luxury-vn-xxx.vercel.app`)

## Bước 5: Thêm Environment Variables

1. Vào Project Settings → **Environment Variables**
2. Add từng variable:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `ww1zzidl` |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `NEXT_PUBLIC_GA_ID` | *(để trống nếu chưa có)* |
| `NEXT_PUBLIC_ZALO_NUMBER` | *(số Zalo thật)* |

3. Click **"Save"**
4. **Re-deploy** để áp dụng env vars (vào Deployments → click "..." → "Redeploy")

---

**Sau khi hoàn thành, báo lại để tiếp tục connect domain!**
