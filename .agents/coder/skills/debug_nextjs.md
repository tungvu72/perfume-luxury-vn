# Skill: Debug Next.js 15

## Checklist debug theo thứ tự — làm từ trên xuống:

### 1. Lỗi BUILD (npm run build / npm run dev không chạy)
```
✅ Check import: có import component/module không tồn tại không?
✅ Check "use client" / "use server": 
   - Component dùng useState/useEffect → PHẢI có "use client"
   - Component fetch data server-side → KHÔNG có "use client"
✅ Check TypeScript: interface/type có đúng không?
✅ Check export: default export hay named export có nhất quán không?
```

### 2. Lỗi RUNTIME (chạy được nhưng crash lúc dùng)
```
✅ Dữ liệu undefined: thêm optional chaining (?.) và fallback
   Bad:  product.name
   Good: product?.name ?? "Không có tên"
✅ Array methods trên null: kiểm tra array tồn tại trước
   Bad:  data.map(...)
   Good: (data ?? []).map(...)
✅ Params async trong Next.js 15:
   Bad:  params.id
   Good: const { id } = await params
```

### 3. Lỗi SANITY / DATA
```
✅ GROQ query sai → test query tại Sanity Studio /studio
✅ Field name sai → check schema tại src/sanity/schemaTypes/
✅ Image URL: dùng urlFor() từ sanity/lib/image.ts
✅ Dữ liệu null từ Sanity → thêm fallback về mockData
```

### 4. Lỗi STYLE / UI
```
✅ Class Tailwind không áp dụng → check spelling, purge config
✅ Layout vỡ mobile → thêm responsive prefix (sm: md: lg:)
✅ Font không load → check next/font import trong layout.tsx
```

### 5. Lỗi PHỔ BIẾN TRONG DỰ ÁN NÀY:
- `ScrollProgress` hoặc component client-side gây lỗi SSR → wrap trong dynamic import
- Sanity image không hiển thị → check NEXT_PUBLIC_SANITY_PROJECT_ID
- Product page 404 → check generateStaticParams() trả về đúng ids chưa

## Lệnh debug hữu ích:
```bash
# Xem lỗi chi tiết
npm run dev 2>&1 | head -50

# Check TypeScript
npx tsc --noEmit

# Check build
npm run build 2>&1 | tail -30
```
