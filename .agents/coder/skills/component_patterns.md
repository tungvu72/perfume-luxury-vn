# Skill: Component Patterns

## Cấu trúc component chuẩn cho dự án này:

### Server Component (mặc định — không cần "use client"):
```typescript
// src/components/ProductCard.tsx
import { Perfume } from '@/types'

interface ProductCardProps {
  product: Perfume
  className?: string
}

export default function ProductCard({ product, className = '' }: ProductCardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow ${className}`}>
      {/* content */}
    </div>
  )
}
```

### Client Component (khi cần state/event):
```typescript
'use client'

import { useState } from 'react'

interface FilterProps {
  onFilter: (category: string) => void
}

export default function Filter({ onFilter }: FilterProps) {
  const [active, setActive] = useState('all')
  // ...
}
```

### Dynamic Import (cho component nặng / chỉ chạy client):
```typescript
// Trong page.tsx hoặc layout.tsx
import dynamic from 'next/dynamic'

const ScrollProgress = dynamic(() => import('@/components/ScrollProgress'), {
  ssr: false
})
```

## Page template chuẩn (App Router):
```typescript
// src/app/example/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tiêu đề | Perfume Luxury VN',
  description: 'Mô tả ngắn 150-160 ký tự',
}

export default async function ExamplePage() {
  // Fetch data ở đây (server-side)
  const data = await fetchData()
  
  return (
    <main className="min-h-screen">
      {/* content */}
    </main>
  )
}
```

## Tailwind classes hay dùng trong dự án:
```
Layout:     container mx-auto px-4 sm:px-6 lg:px-8
Card:       bg-white rounded-2xl shadow-sm hover:shadow-md transition-all
Button:     bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors
Text gold:  text-amber-600
Gradient:   bg-gradient-to-r from-amber-50 to-orange-50
Grid:       grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4
```

## Quy tắc naming:
- File: PascalCase (ProductCard.tsx)
- Function: camelCase (fetchProducts)
- CSS class: kebab-case (product-card)
- Type/Interface: PascalCase + mô tả (ProductCardProps)
