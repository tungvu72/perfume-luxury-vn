# Script tạo 30 product reviews theo template

$products = @(
    @{Name="Chanel Bleu de Chanel"; Brand="Chanel"; Year=2010; TopNotes="Cam Bergamot, Chanh Sicily, Bạc hà, Hạt tiêu hồng"; MiddleNotes="Gừng, Nhục đậu khấu, Jasmine"; BaseNotes="Gỗ đàn hương, Gỗ tuyết tùng, Vetiver, Patchouli"; Longevity=8; Sillage=7; Score=8.5},
    @{Name="Dior Homme Original"; Brand="Dior"; Year=2005; TopNotes="Cam Bergamot, Grapefruit"; MiddleNotes="Iris, Hoa cam"; BaseNotes="Gỗ tuyết tùng, Da, Vetiver"; Longevity=7; Sillage=6; Score=8.0},
    @{Name="YSL La Nuit de L'Homme"; Brand="Yves Saint Laurent"; Year=2009; TopNotes="Cardamom, Cam Bergamot"; MiddleNotes="Violet, Cedar"; BaseNotes="Vetiver, Caraway, Coumarin"; Longevity=6; Sillage=6; Score=8.5},
    @{Name="Versace Pour Homme"; Brand="Versace"; Year=2008; TopNotes="Chanh, Cam Bergamot, Hyacinth"; MiddleNotes="Geranium, Jasmine"; BaseNotes="Gỗ tuyết tùng, Musk, Amber"; Longevity=7; Sillage=7; Score=8.0},
    @{Name="Prada L'Homme"; Brand="Prada"; Year=2016; TopNotes="Neroli, Cam Bergamot"; MiddleNotes="Iris, Violet, Geranium"; BaseNotes="Amber, Patchouli, Cedar"; Longevity=8; Sillage=6; Score=8.5},
    @{Name="Gucci Guilty Pour Homme"; Brand="Gucci"; Year=2011; TopNotes="Chanh, Cam Bergamot, Lavender"; MiddleNotes="Orange Blossom, Neroli"; BaseNotes="Cedar, Patchouli, Musk"; Longevity=7; Sillage=7; Score=7.5},
    @{Name="Armani Code"; Brand="Giorgio Armani"; Year=2004; TopNotes="Cam Bergamot, Olive Blossom"; MiddleNotes="Guaiac Wood, Star Anise"; BaseNotes="Leather, Tobacco, Tonka Bean"; Longevity=8; Sillage=7; Score=8.0},
    @{Name="Paco Rabanne 1 Million"; Brand="Paco Rabanne"; Year=2008; TopNotes="Grapefruit, Mint, Blood Mandarin"; MiddleNotes="Cinnamon, Rose, Spice"; BaseNotes="Leather, Amber, Patchouli"; Longevity=8; Sillage=8; Score=7.5},
    @{Name="Jean Paul Gaultier Le Male"; Brand="Jean Paul Gaultier"; Year=1995; TopNotes="Mint, Lavender, Bergamot"; MiddleNotes="Cinnamon, Cumin, Orange Blossom"; BaseNotes="Vanilla, Sandalwood, Cedar"; Longevity=8; Sillage=7; Score=8.0},
    @{Name="Viktor&Rolf Spicebomb"; Brand="Viktor&Rolf"; Year=2012; TopNotes="Grapefruit, Bergamot, Pink Pepper"; MiddleNotes="Cinnamon, Saffron, Paprika"; BaseNotes="Leather, Tobacco, Vetiver"; Longevity=9; Sillage=8; Score=8.5},
    @{Name="Creed Aventus"; Brand="Creed"; Year=2010; TopNotes="Pineapple, Bergamot, Blackcurrant"; MiddleNotes="Birch, Patchouli, Moroccan Jasmine"; BaseNotes="Musk, Oakmoss, Ambergris"; Longevity=9; Sillage=9; Score=9.0},
    @{Name="Tom Ford Oud Wood"; Brand="Tom Ford"; Year=2007; TopNotes="Rosewood, Cardamom"; MiddleNotes="Sandalwood, Vetiver"; BaseNotes="Oud, Amber, Tonka Bean"; Longevity=8; Sillage=6; Score=8.5},
    @{Name="Le Labo Santal 33"; Brand="Le Labo"; Year=2011; TopNotes="Cardamom, Violet, Papyrus"; MiddleNotes="Iris, Ambrox"; BaseNotes="Sandalwood, Cedar, Leather"; Longevity=9; Sillage=7; Score=8.5},
    @{Name="Byredo Bal d'Afrique"; Brand="Byredo"; Year=2009; TopNotes="Lemon, Bergamot, Neroli"; MiddleNotes="African Marigold, Violet, Cyclamen"; BaseNotes="Musk, Vetiver, Amber, Cedar"; Longevity=7; Sillage=6; Score=8.0},
    @{Name="Maison Francis Kurkdjian Baccarat Rouge 540"; Brand="MFK"; Year=2015; TopNotes="Saffron, Jasmine"; MiddleNotes="Amberwood, Ambergris"; BaseNotes="Cedar, Fir Resin"; Longevity=10; Sillage=9; Score=9.0},
    @{Name="Initio Side Effect"; Brand="Initio Parfums Prives"; Year=2016; TopNotes="Rum, Bergamot, Saffron"; MiddleNotes="Jasmine, Hedione"; BaseNotes="Tobacco, Vanilla, Sandalwood"; Longevity=10; Sillage=8; Score=9.0},
    @{Name="Xerjoff Naxos"; Brand="Xerjoff"; Year=2014; TopNotes="Lavender, Bergamot, Lemon"; MiddleNotes="Cinnamon, Honey, Lavender"; BaseNotes="Tobacco, Tonka Bean, Vanilla"; Longevity=10; Sillage=9; Score=9.0},
    @{Name="Parfums de Marly Layton"; Brand="Parfums de Marly"; Year=2016; TopNotes="Apple, Bergamot, Lavender"; MiddleNotes="Geranium, Violet, Jasmine"; BaseNotes="Sandalwood, Vanilla, Cardamom"; Longevity=9; Sillage=8; Score=8.5},
    @{Name="Amouage Interlude Man"; Brand="Amouage"; Year=2012; TopNotes="Oregano, Bergamot, Pimento Berry"; MiddleNotes="Amber, Oud, Leather"; BaseNotes="Agarwood, Patchouli, Sandalwood"; Longevity=12; Sillage=10; Score=8.5},
    @{Name="Roja Dove Elysium"; Brand="Roja Parfums"; Year=2015; TopNotes="Grapefruit, Lemon, Bergamot"; MiddleNotes="Vetiver, Cedar, Pink Pepper"; BaseNotes="Oakmoss, Ambergris, Musk"; Longevity=9; Sillage=8; Score=9.0},
    @{Name="Dior Fahrenheit"; Brand="Dior"; Year=1988; TopNotes="Lavender, Bergamot, Lemon"; MiddleNotes="Nutmeg, Violet, Jasmine"; BaseNotes="Leather, Musk, Amber"; Longevity=9; Sillage=8; Score=8.5},
    @{Name="Hermès Terre d'Hermès"; Brand="Hermès"; Year=2006; TopNotes="Orange, Grapefruit"; MiddleNotes="Geranium, Pepper"; BaseNotes="Cedar, Vetiver, Benzoin"; Longevity=9; Sillage=7; Score=9.0},
    @{Name="Bleu de Chanel Parfum"; Brand="Chanel"; Year=2018; TopNotes="Bergamot, Lemon"; MiddleNotes="Neroli, Cedar"; BaseNotes="Sandalwood, Tonka Bean, Amber"; Longevity=9; Sillage=7; Score=9.0},
    @{Name="Yves Saint Laurent Y EDP"; Brand="YSL"; Year=2017; TopNotes="Apple, Bergamot, Ginger"; MiddleNotes="Sage, Geranium"; BaseNotes="Cedar, Amberwood, Tonka"; Longevity=8; Sillage=8; Score=8.0},
    @{Name="Versace Eros"; Brand="Versace"; Year=2012; TopNotes="Mint, Apple, Lemon"; MiddleNotes="Tonka Bean, Geranium, Ambroxan"; BaseNotes="Vanilla, Cedar, Vetiver"; Longevity=9; Sillage=9; Score=8.0},
    @{Name="Azzaro The Most Wanted"; Brand="Azzaro"; Year=2021; TopNotes="Ginger, Cardamom"; MiddleNotes="Lavender, Wood"; BaseNotes="Vanilla, Amberwood, Tonka"; Longevity=8; Sillage=8; Score=8.0},
    @{Name="Montblanc Explorer"; Brand="Montblanc"; Year=2019; TopNotes="Bergamot, Sage"; MiddleNotes="Vetiver, Leather"; BaseNotes="Ambroxan, Patchouli, Oakmoss"; Longevity=7; Sillage=7; Score=7.5},
    @{Name="Acqua di Giò Profumo"; Brand="Giorgio Armani"; Year=2015; TopNotes="Bergamot, Marine Notes"; MiddleNotes="Geranium, Sage"; BaseNotes="Patchouli, Incense"; Longevity=8; Sillage=7; Score=8.5},
    @{Name="Valentino Uomo Born In Roma"; Brand="Valentino"; Year=2019; TopNotes="Calone, Bergamot"; MiddleNotes="Sage, Vetiver"; BaseNotes="Vanilla, Woody Notes"; Longevity=8; Sillage=7; Score=7.5},
    @{Name="Bulgari Man In Black"; Brand="Bulgari"; Year=2014; TopNotes="Rum, Spice"; MiddleNotes="Tuberose, Iris, Leather"; BaseNotes="Tonka Bean, Guaiac Wood, Benzoin"; Longevity=9; Sillage=8; Score=8.0}
)

$outputDir = "D:\anti\perfume-luxury-vn\.agents\leader\product-reviews-temp"
New-Item -ItemType Directory -Force -Path $outputDir | Out-Null

foreach ($product in $products) {
    $slug = $product.Name.ToLower().Replace(" ", "-").Replace("'", "").Replace(".", "")
    $filename = "$slug-review.md"
    $filepath = Join-Path $outputDir $filename
    
    $content = @"
# $($product.Name) - Đánh Giá Chi Tiết

**Meta Description:** Review chi tiết $($product.Name) - DNA mùi hương, hiệu năng, hoàn cảnh sử dụng. Đánh giá khách quan từ chuyên gia Maison de SON.

---

## 1. Giới Thiệu

**$($product.Name)** là một trong những nước hoa nổi bật của thương hiệu $($product.Brand). Ra mắt năm $($product.Year), sản phẩm đã nhanh chóng chiếm được cảm tình của người yêu nước hoa trên toàn thế giới.

- **Thương hiệu:** $($product.Brand)
- **Năm ra mắt:** $($product.Year)
- **Phân khúc:** Luxury Designer/Niche
- **Đối tượng:** Nam giới/Nữ giới hiện đại, yêu thích sự tinh tế

---

## 2. DNA Mùi Hương

### Top Notes (Hương đầu - 0-15 phút)
$($product.TopNotes)

### Middle Notes (Hương giữa - 15-60 phút)
$($product.MiddleNotes)

### Base Notes (Hương cuối - 1-8+ tiếng)
$($product.BaseNotes)

### Main Accords
- Woody/Citrus/Spicy: Tùy theo DNA cụ thể
- Fresh/Aromatic: Cân bằng hài hòa

---

## 3. Hiệu Năng

- **Độ lưu hương:** $($product.Longevity)/10 ($(($product.Longevity - 2))-$(if($product.Longevity -ge 9){"12+"}else{$product.Longevity}) tiếng trên da)
- **Độ tỏa hương:** $($product.Sillage)/10 ($(if($product.Sillage -ge 8){"Tỏa mạnh"}elseif($product.Sillage -ge 6){"Tỏa vừa"}else{"Tỏa nhẹ"}))
- **Mùa phù hợp:** Xuân/Thu/Đông (tùy DNA)
- **Thời điểm:** Linh hoạt ngày/đêm

---

## 4. Hoàn Cảnh Sử Dụng

- Công sở: ✅ Phù hợp
- Hẹn hò: ✅ Rất tốt
- Đi chơi: ✅ Linh hoạt
- Sự kiện: ✅ Sang trọng
- Thể thao: ⚠️ Tùy sản phẩm

---

## 5. Verdict

### Điểm mạnh:
- Mùi hương độc đáo, dễ nhận diện
- Hiệu năng tốt
- Thương hiệu uy tín
- Thiết kế chai đẹp

### Điểm yếu:
- Giá cao so với mặt bằng chung
- Có thể quá phổ biến (tùy sản phẩm)

### Đáng mua không: ✅ Có

### Đối tượng phù hợp:
Người yêu thích nước hoa chất lượng, tìm kiếm sự tinh tế và đẳng cấp.

### Chấm điểm: $($product.Score)/10

---

**Gợi ý nơi mua:** Xem giá tại các nhà bán lẻ uy tín hoặc liên hệ tư vấn qua Zalo để được hỗ trợ chọn mùi phù hợp.
"@

    Set-Content -Path $filepath -Value $content -Encoding UTF8
    Write-Host "Created: $filename"
}

Write-Host "`n=== HOÀN TẤT ==="
Write-Host "Đã tạo $($products.Count) product reviews trong: $outputDir"
