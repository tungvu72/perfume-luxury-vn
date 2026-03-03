# Skill: Sanity CMS Patterns

## Cấu trúc Sanity trong dự án:
```
src/sanity/
├── schemaTypes/     ← Schema định nghĩa kiểu dữ liệu
│   ├── product.ts   ← Schema sản phẩm
│   └── post.ts      ← Schema bài viết blog
├── lib/
│   ├── client.ts    ← Sanity client
│   ├── fetchers.ts  ← Các hàm fetch data
│   ├── queries.ts   ← GROQ queries
│   └── image.ts     ← urlFor() helper
└── structure.ts     ← Cấu trúc Studio sidebar
```

## GROQ Query patterns chuẩn:

### Fetch tất cả products:
```groq
*[_type == "product"] | order(_createdAt desc) {
  _id,
  name,
  slug,
  brand,
  price,
  "imageUrl": image.asset->url,
  category,
  rating
}
```

### Fetch 1 product theo slug:
```groq
*[_type == "product" && slug.current == $slug][0] {
  _id,
  name,
  brand,
  price,
  description,
  notes,
  "imageUrl": image.asset->url,
  longevity,
  sillage,
  seasons,
  accords,
  sizes
}
```

### Fetch posts (blog):
```groq
*[_type == "post"] | order(publishedAt desc) [0...10] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  "imageUrl": mainImage.asset->url
}
```

## Cách dùng urlFor():
```typescript
import { urlFor } from '@/sanity/lib/image'

// Trong component:
<Image
  src={urlFor(product.image).width(800).height(600).url()}
  alt={product.name}
/>
```

## Fallback về mockData khi Sanity không có data:
```typescript
const data = await fetchFromSanity()
const products = data.length > 0 ? data : mockProducts
```

## Thêm field mới vào schema:
1. Thêm field vào `src/sanity/schemaTypes/product.ts`
2. Thêm vào TypeScript interface tại `src/types/index.ts`
3. Cập nhật GROQ query tại `src/sanity/lib/queries.ts`
4. Cập nhật fetcher tại `src/sanity/lib/fetchers.ts`
