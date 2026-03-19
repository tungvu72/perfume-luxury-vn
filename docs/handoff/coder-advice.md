# CODER ADVICE — UI DATA PREP FOR 20 FLAGSHIP PRODUCTS
## Date: 2026-03-19
## Status: READY FOR ANTI EXECUTION

Mục tiêu hiện tại **không phải** nhập full catalog. Mục tiêu đúng là:
- chuẩn bị **data sạch** cho UI redesign
- test kiến trúc mới trên **20 flagship products** đã duyệt
- đủ dữ liệu để code Homepage + Product Page trước

---

## 1. CHỐT HƯỚNG DỮ LIỆU

### Quyết định
**Dùng `mockData.ts` làm hướng chính** cho phase UI rebuild này.

### Lý do
- Nhanh hơn fetch động từ Sanity cho giai đoạn build UI
- Dễ kiểm soát field, structure, fallback, mock states
- Phù hợp workflow test nhanh 20 chai trước khi scale
- Giảm rủi ro lệch data giữa component và CMS

### Rule triển khai
- Homepage / Product / Brand trong phase này ưu tiên đọc từ data local
- Nếu cần, Anti có thể tạo **file seed riêng cho top 20** trước khi merge vào `mockData.ts`
- Không mở rộng sang toàn bộ catalog lúc này
- Chỉ sau khi UI schema ổn mới tính chuyện scale / sync / migrate

### Gợi ý file tạm
- `docs/reports/ui-top20-reference-checklist.md`
- `docs/reports/ui-top20-data-draft.json`
- sau khi xong mới merge vào source data chính

---

## 2. WORKFLOW CHO ANTI — REFERENCE-FIRST DATA CAPTURE

### Được phép dùng Fragrantica làm reference input cho batch test 20 chai
Workflow đúng:
1. Chụp / lưu screenshot reference của từng sản phẩm từ Fragrantica
2. Đọc field từ reference
3. Chuẩn hóa thành data object thống nhất
4. Gắn proof source cho từng object
5. Handoff cho Coder / merge sau khi review structure

### Fragrantica dùng tốt để lấy
- Tên sản phẩm chuẩn
- Brand
- Main accords
- Top / middle / base notes
- Cấu trúc rating block
- Các module UI cần clone về hierarchy

### Fragrantica KHÔNG phải source of truth cho
- affiliate links
- giá bán VN
- sales copy / CTA bán hàng
- claim variant nếu ảnh không chắc
- bottle/box variant khi packaging mâu thuẫn

### Rule quan trọng
- **Không đoán** nếu reference không rõ
- Field nào chưa chắc -> để `null`, `[]`, hoặc `needsReview: true`
- Nếu screenshot không đủ -> chụp thêm hoặc đánh dấu pending

---

## 3. PHẠM VI BATCH TEST

Chỉ làm đúng **20 sản phẩm flagship đã duyệt**:
1. Bleu de Chanel EDP
2. Dior Sauvage Elixir
3. Dior Homme Intense
4. YSL Y EDP
5. La Nuit de L'Homme
6. Prada L'Homme
7. Prada Luna Rossa Carbon
8. Acqua di Gio Profondo
9. Chanel Allure Homme Sport Eau Extreme
10. Terre d'Hermes Eau Givree
11. Tom Ford Oud Wood
12. Tom Ford Noir Extreme
13. Creed Aventus
14. MFK Baccarat Rouge 540
15. Parfums de Marly Layton
16. JPG Le Male Elixir
17. Viktor & Rolf Spicebomb Extreme
18. Valentino Uomo Born in Roma Intense
19. Armani Stronger With You Intensely
20. Le Labo Another 13

### Guardrail
- Không thêm sản phẩm thứ 21
- Không nhập lan sang toàn repo
- Batch này chỉ để test schema + component + UI rendering

---

## 4. SCHEMA DATA TỐI THIỂU CẦN CHUẨN BỊ

Mỗi sản phẩm cần object theo schema này:

```ts
{
  id: string,
  slug: string,
  name: string,
  brand: string,
  brandSlug: string,
  concentration: string | null,
  gender: 'male' | 'female' | 'unisex' | null,
  family: string | null,

  images: {
    primary: string | null,
    bottleOnly: string | null,
    gallery?: string[]
  },

  reference: {
    source: 'fragrantica',
    screenshotPaths: string[],
    capturedAt: string,
    needsReview: boolean,
    notes?: string
  },

  accords: Array<{
    name: string,
    weight: number,
    color?: string
  }>,

  notes: {
    top: string[],
    middle: string[],
    base: string[]
  },

  scores: {
    overall?: number | null,
    scent?: number | null,
    longevity?: number | null,
    sillage?: number | null,
    versatility?: number | null,
    compliment?: number | null,
    value?: number | null
  },

  summary: {
    shortDescription: string | null,
    vibe: string[] ,
    occasions: string[],
    seasons: string[],
    timeOfDay: string[]
  },

  affiliate: [
    {
      platform: 'shopee' | 'tiktok' | 'zalo',
      label: string,
      url: string,
      active: boolean
    }
  ],

  uiFlags: {
    featuredOnHomepage?: boolean,
    showOnBrandPage?: boolean,
    readyForProductPage: boolean
  }
}
```

### Ghi chú schema
- `accords.weight`: chỉ dùng để render thanh độ mạnh tương đối
- `scores`: đây là **Maison scoring system**, không copy mù từ Fragrantica
- `summary.shortDescription`: có thể để trống ở batch đầu nếu chưa viết final copy
- `affiliate`: cho phép array object ngay trong product để code nhanh ở phase này

---

## 5. KIẾN TRÚC COMPONENT — REUSE

### Main Accords
Tách thành component dùng lại được:
- `MainAccordsBar`
- input: `accords[]`
- dùng cho:
  - Product Hero
  - Product summary block trong article
  - card mở rộng nếu cần ở homepage

### Scoring hệ 10
Tách riêng:
- `ProductScoreGrid`
- input: `scores`
- dùng cho:
  - Product Page
  - Embedded product section trong article review / comparison

### Rule
- Data input thống nhất từ một schema
- Không hardcode label riêng cho từng page nếu cùng meaning
- Style có thể khác theo variant prop, nhưng structure phải dùng lại được

Ví dụ:
```tsx
<MainAccordsBar accords={product.accords} variant="full" />
<ProductScoreGrid scores={product.scores} variant="productPage" />
```

---

## 6. LAYOUT LOGIC — 75/25 FRAGRANTICA STYLE

### Khuyến nghị
**Dùng CSS Grid cho layout chính**, Flex cho layout con.

### Lý do
- Grid kiểm soát 75/25 ổn định hơn
- Sidebar đổi chiều cao không làm vỡ layout chính
- Responsive sang mobile dễ hơn
- Các block con bên trong card / hero / action row vẫn nên dùng flex

### Gợi ý pattern
```tsx
<div className="grid grid-cols-1 xl:grid-cols-[minmax(0,3fr)_320px] gap-8">
  <main>...</main>
  <aside>...</aside>
</div>
```

### Rule responsive
- Mobile: 1 cột
- Tablet: vẫn ưu tiên 1 cột nếu sidebar chưa thật sự cần đứng cạnh
- Desktop lớn: mới bật 75/25
- Sidebar phải là content phụ trợ, không chứa info sống còn duy nhất

---

## 7. AFFILIATE DATA STRUCTURE

### Quyết định cho phase này
Để **array object lồng trong từng product**.

### Lý do
- Dễ render widget “Mua ở đâu” ngay trên product page
- Không cần join bảng riêng trong phase test UI
- Phù hợp batch 20 sản phẩm, ít overhead

### Format đề xuất
```ts
affiliate: [
  {
    platform: 'shopee',
    label: 'Tham khảo giá Shopee',
    url: '',
    active: false
  },
  {
    platform: 'tiktok',
    label: 'Xem TikTok Shop',
    url: '',
    active: false
  },
  {
    platform: 'zalo',
    label: 'Tư vấn qua Zalo',
    url: 'https://zalo.me/0961226169',
    active: true
  }
]
```

### Rule
- Nếu chưa có link thật: để `url: ''` + `active: false`
- Không bịa affiliate URL
- Widget phải chịu được case chỉ có 1 link active

---

## 8. OUTPUT ANTI PHẢI BÀN GIAO

Anti chuẩn bị cho 20 sản phẩm các file sau:

1. **Reference checklist**
   - file: `docs/reports/ui-top20-reference-checklist.md`
   - mỗi sản phẩm có:
     - đã chụp screenshot chưa
     - đủ accords chưa
     - đủ notes chưa
     - ảnh chai/hộp đúng variant chưa
     - field nào pending

2. **Draft data JSON**
   - file: `docs/reports/ui-top20-data-draft.json`
   - chứa 20 object theo schema trên

3. **Proof folder**
   - thư mục chứa screenshot reference theo từng sản phẩm
   - đặt tên rõ ràng, không lẫn lộn

---

## 9. ĐIỀU KIỆN PASS CHO BATCH NÀY

Batch chỉ được xem là pass khi:
- đủ đúng 20 sản phẩm
- mỗi sản phẩm có slug + brand + accords + notes cơ bản
- mỗi sản phẩm có screenshot proof path
- không có field nào bị bịa khi reference không rõ
- affiliate không fake link
- data đủ để render Homepage card + Product hero + Product detail modules

---

## 10. ACTION NGAY CHO ANTI

1. Đọc file này
2. Tạo `ui-top20-reference-checklist.md`
3. Tạo `ui-top20-data-draft.json`
4. Gom reference từ Fragrantica cho đủ 20 sản phẩm
5. Chuẩn hóa data theo schema
6. Báo lại khi batch draft sẵn sàng để Coder review trước khi merge

---

## KẾT LUẬN CHỐT

**Chúng ta chuẩn bị data trước khi code giao diện.**
Hướng đúng là:
- reference-first
- top 20 only
- schema trước, scale sau
- mockData/local data trước, CMS tính sau

Anti cứ bám đúng file này để làm, không cần mở rộng thêm scope.