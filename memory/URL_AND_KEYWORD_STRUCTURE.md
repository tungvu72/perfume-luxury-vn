# 🔗 CẤU TRÚC URL & BẢN ĐỒ TỪ KHÓA — MAISON DE SON
## URL Architecture & Keyword Matrix v1.1 (FINAL — Đã xác nhận)
*Chốt: 06/03/2026*

---

## PHẦN 1: CẤU TRÚC URL CHÍNH THỨC

| Loại trang | URL Pattern | Ví dụ |
|---|---|---|
| Trang chủ | `/` | `maisondeson.com/` |
| Bảng xếp hạng | `/bang-xep-hang` | `.../bang-xep-hang` |
| Thương hiệu (list) | `/thuong-hieu` | `.../thuong-hieu` |
| **Thương hiệu (detail)** | `/[brand-slug]` | `.../chanel`, `.../dior` |
| **Sản phẩm (detail)** | `/[product-slug]` | `.../bleu-chanel-edp` |
| **Bài viết** | `/[article-slug]` | `.../top-10-san-pham-nuoc-hoa-nam` |
| **Tác giả** | `/[author-slug]` | `.../maison-de-son` |
| Nam giới | `/nam-gioi` | `.../nam-gioi` |
| Nữ giới | `/nu-gioi` | `.../nu-gioi` |
| Unisex | `/unisex` | `.../unisex` |
| Kiến thức | `/kien-thuc` | `.../kien-thuc` |
| Giới thiệu | `/gioi-thieu` | `.../gioi-thieu` |
| So sánh | `/so-sanh` | `.../so-sanh` |

### Redirect 301 (URL cũ → mới):
- `/san-pham/[id]` → `/[id]`
- `/thuong-hieu/[slug]` → `/[slug]`
- `/kien-thuc/[slug]` → `/[slug]`
- `/tac-gia/[slug]` → `/[slug]`

### Logic xử lý `[slug]` (thứ tự ưu tiên):
```
1. Brand có slug này? → render Brand page
2. Product có slug này? → render Product page
3. Article có slug này? → render Article page
4. Author có slug này? → render Author page
5. Không khớp → 404
```

---

## PHẦN 2: BẢN ĐỒ TỪ KHÓA CHÍNH THỨC

### NGUYÊN TẮC:
- Mỗi page: **1 từ khóa CHÍNH + 3+ từ khóa PHỤ**
- Không có 2 page nào dùng chung từ khóa chính
- Khi page A nhắc đến từ khóa chính của page B → PHẢI dùng làm anchor text link về B

---

### 🏠 TRANG CHỦ — `/`
| | |
|---|---|
| **Từ khóa chính** | nước hoa chính hãng |
| **Từ khóa phụ** | mua nước hoa chính hãng, cửa hàng nước hoa chính hãng, nước hoa xách tay chính hãng, tư vấn nước hoa, nước hoa giá tốt |

---

### 📊 BẢNG XẾP HẠNG — `/bang-xep-hang`
| | |
|---|---|
| **Từ khóa chính** | top nước hoa tốt nhất |
| **Từ khóa phụ** | nước hoa được yêu thích nhất, xếp hạng nước hoa, nước hoa bán chạy nhất Việt Nam, bảng xếp hạng nước hoa 2025 |

---

### 👨 NAM GIỚI — `/nam-gioi`
| | |
|---|---|
| **Từ khóa chính** | nước hoa nam |
| **Từ khóa phụ** | nước hoa cho nam giới, mùi hương nam tính, nước hoa nam chính hãng, nước hoa nam được yêu thích |

---

### 👩 NỮ GIỚI — `/nu-gioi`
| | |
|---|---|
| **Từ khóa chính** | nước hoa nữ |
| **Từ khóa phụ** | nước hoa cho nữ giới, mùi hương nữ tính, nước hoa nữ chính hãng, nước hoa nữ thơm nhất |

---

### 🌸 UNISEX — `/unisex`
| | |
|---|---|
| **Từ khóa chính** | nước hoa unisex |
| **Từ khóa phụ** | nước hoa trung tính, mùi hương unisex, nước hoa dùng được cả nam lẫn nữ |

---

### 🏷️ THƯƠNG HIỆU (LIST) — `/thuong-hieu`
| | |
|---|---|
| **Từ khóa chính** | thương hiệu nước hoa |
| **Từ khóa phụ** | các hãng nước hoa nổi tiếng, brand nước hoa cao cấp, hãng nước hoa Pháp |

---

### 📚 KIẾN THỨC — `/kien-thuc`
| | |
|---|---|
| **Từ khóa chính** | kiến thức nước hoa |
| **Từ khóa phụ** | hướng dẫn chọn nước hoa, cách dùng nước hoa đúng cách, nước hoa là gì, phân loại nước hoa |

---

## PHẦN 3: BRAND PAGES — `/[brand-slug]`

> **Nguyên tắc keyword brand:** Từ khóa CHÍNH = tên brand (navigational intent). Từ khóa PHỤ = commercial/informational intent.

| Brand | URL | Từ khóa CHÍNH | Từ khóa PHỤ |
|---|---|---|---|
| Chanel | `/chanel` | Chanel | nước hoa Chanel chính hãng, Chanel EDP, Chanel Parfum, mua Chanel |
| Dior | `/dior` | Dior | nước hoa Dior chính hãng, Dior Sauvage, nước hoa Dior nữ, mua Dior |
| Creed | `/creed` | Creed | nước hoa Creed chính hãng, Creed Aventus, niche Creed |
| Tom Ford | `/tom-ford` | Tom Ford | nước hoa Tom Ford chính hãng, Tom Ford Noir, Tom Ford niche |
| YSL | `/ysl` | YSL | nước hoa YSL chính hãng, Yves Saint Laurent, YSL Black Opium |
| Lattafa | `/lattafa` | Lattafa | nước hoa Lattafa chính hãng, Lattafa Khamrah, nước hoa Ả Rập |
| Armani | `/armani` | Armani | nước hoa Armani chính hãng, Giorgio Armani, Armani Code |
| MFK | `/maison-francis-kurkdjian` | Maison Francis Kurkdjian | MFK chính hãng, Baccarat Rouge 540, nước hoa niche MFK |

---

## PHẦN 4: PRODUCT PAGES — `/[product-slug]`

> **Nguyên tắc keyword product:**
> - Từ khóa CHÍNH = tên sản phẩm (informational intent)
> - Từ khóa PHỤ = commercial/purchase intent: "mua", "giá", "ở đâu", "chính hãng"
> - "review [SP]" → thuộc về bài D1 Article, KHÔNG phải product page

| Sản phẩm | URL | Từ khóa CHÍNH | Từ khóa PHỤ |
|---|---|---|---|
| Bleu de Chanel EDP | `/bleu-chanel-edp` | Bleu de Chanel EDP | mua Bleu de Chanel chính hãng, giá Bleu de Chanel, Bleu de Chanel ở đâu, Bleu de Chanel EDP 100ml |
| Dior Sauvage Elixir | `/sauvage-elixir` | Sauvage Elixir | mua Sauvage Elixir chính hãng, giá Sauvage Elixir, Sauvage Elixir ở đâu |
| YSL Black Opium | `/ysl-black-opium` | YSL Black Opium | mua Black Opium chính hãng, giá Black Opium, Black Opium ở đâu |
| Creed Aventus | `/creed-aventus` | Creed Aventus | mua Creed Aventus chính hãng, giá Creed Aventus, Creed Aventus ở đâu |
| Lattafa Khamrah | `/lattafa-khamrah` | Lattafa Khamrah | mua Khamrah chính hãng, giá Khamrah, Khamrah ở đâu |
| Tom Ford Noir Extreme | `/tom-ford-noir-extreme` | Tom Ford Noir Extreme | mua Noir Extreme chính hãng, giá Tom Ford Noir Extreme |
| MFK Baccarat Rouge 540 | `/baccarat-rouge-540` | Baccarat Rouge 540 | mua Baccarat Rouge 540 chính hãng, giá Baccarat Rouge 540 |
| Armani Stronger With You | `/armani-stronger-with-you` | Armani Stronger With You Intensely | mua Stronger With You chính hãng, giá Armani Stronger |

---

## PHẦN 5: ARTICLE PAGES — `/[article-slug]`

> **Nguyên tắc keyword bài viết:**
> - Từ khóa CHÍNH = từ khóa riêng của bài, KHÔNG trùng bất kỳ page nào khác
> - D1 (Review): "review [tên SP]" — dẫn internal link về product page
> - D2 (Buying Guide): "nước hoa [dịp/đối tượng] nên mua gì"
> - D3 (Trend): "xu hướng nước hoa [năm]"
> - D4 (So sánh): "[SP A] vs [SP B]"
> - D5 (Educational): "nước hoa là gì", "cách chọn nước hoa"
> - D6 (Brand Story): "lịch sử [brand]"

---

## PHẦN 6: QUY TẮC INTERNAL LINKING BẮT BUỘC

### Anchor text chuẩn:

| Khi nhắc đến | Anchor text | Link về |
|---|---|---|
| Mua hàng / hàng thật / uy tín | "nước hoa chính hãng" | `/` |
| Xếp hạng / tốt nhất / phổ biến | "top nước hoa tốt nhất" | `/bang-xep-hang` |
| Nước hoa cho nam | "nước hoa nam" | `/nam-gioi` |
| Nước hoa cho nữ | "nước hoa nữ" | `/nu-gioi` |
| Tên brand (Chanel/Dior...) | "[Tên Brand]" | `/[brand-slug]` |
| Tên sản phẩm (lần đầu) | "[Tên SP]" | `/[product-slug]` |

### 3 internal links bắt buộc trong mỗi bài viết/trang SP:
1. Link về **Homepage** với anchor "nước hoa chính hãng"
2. Link về **Brand page** với anchor tên brand
3. Link về **Product page** (trong bài review) với anchor tên SP

---

*Tài liệu này là FINAL. Implement sau khi chốt Breadcrumbs.*
