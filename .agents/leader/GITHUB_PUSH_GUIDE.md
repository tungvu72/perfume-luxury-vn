# 🚀 HƯỚNG DẪN PUSH CODE LÊN GITHUB

## Bước 1: Tạo GitHub Repository (2 phút)

1. Đăng nhập GitHub: https://github.com
2. Click "+" → "New repository"
3. Điền thông tin:
   - **Repository name:** `perfume-luxury-vn`
   - **Description:** `Perfume Luxury VN - Maisondeson.com`
   - **Visibility:** Public (hoặc Private)
   - **KHÔNG tick** "Add a README file"
4. Click **"Create repository"**

## Bước 2: Copy Remote URL từ GitHub

Sau khi tạo repo, GitHub sẽ hiển thị lệnh push. Copy URL dạng:
```
https://github.com/YOUR_USERNAME/perfume-luxury-vn.git
```

## Bước 3: Chạy lệnh Push (trong terminal)

```powershell
cd D:\anti\perfume-luxury-vn
git remote add origin https://github.com/YOUR_USERNAME/perfume-luxury-vn.git
git branch -M main
git push -u origin main
```

## Bước 4: Verify

- Refresh GitHub repo page
- Đảm bảo tất cả files đã được upload

---

**Sau khi hoàn thành, báo lại để tiếp tục deploy Vercel!**
