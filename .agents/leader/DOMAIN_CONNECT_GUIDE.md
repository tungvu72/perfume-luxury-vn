# 🌐 HƯỚNG DẪN CONNECT DOMAIN - PAVIETNAM

## Bước 1: Thêm Domain vào Vercel (2 phút)

1. Vào Vercel Dashboard → Project → **Settings** → **Domains**
2. Click **"Add"**
3. Nhập domain: `maisondeson.com`
4. Click **"Add"**
5. Vercel sẽ hiển thị DNS records cần config

## Bước 2: Copy DNS Records từ Vercel

Vercel sẽ yêu cầu 2 records:

| Type | Name | Value |
|------|------|-------|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

## Bước 3: Config DNS trên Pavietnam (5 phút)

1. Đăng nhập Pavietnam: https://manage.pavietnam.vn
2. Vào **Domain** → Chọn `maisondeson.com`
3. Click **Quản lý DNS** hoặc **DNS Management**
4. Thêm 2 records:

### Record 1 - A Record:
- **Type:** `A`
- **Name/Host:** `@` (hoặc để trống)
- **Value/Points to:** `76.76.21.21`
- **TTL:** `3600` (hoặc default)

### Record 2 - CNAME Record:
- **Type:** `CNAME`
- **Name/Host:** `www`
- **Value/Points to:** `cname.vercel-dns.com`
- **TTL:** `3600` (hoặc default)

5. Click **"Save"** hoặc **"Cập nhật"**

## Bước 4: Chờ DNS Propagation (5-30 phút)

- DNS có thể mất 5-30 phút để propagate
- Kiểm tra status trên Vercel: Domain status sẽ chuyển từ "Pending" → "Active"

## Bước 5: Verify HTTPS

1. Truy cập: https://maisondeson.com
2. Truy cập: https://www.maisondeson.com
3. Đảm bảo HTTPS hoạt động (Vercel auto-enable SSL)

---

**✅ HOÀN THÀNH KHI:**
- [ ] Domain status = "Active" trên Vercel
- [ ] HTTPS hoạt động cả 2 URLs
- [ ] Website hiển thị đúng nội dung
