$urls = @{
  "102. GIORGIO ARMANI Si EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_18453.jpeg"
  "103. GIORGIO ARMANI Stronger With You Intensely.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_52802.jpeg"
  "104. GIVENCHY Gentleman Reserve Privee EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_71272.jpeg"
  "105. GIVENCHY L'Interdit EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_51488.jpeg"
  "106. GIVENCHY L'Interdit Rouge EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_68404.jpeg"
  "107. GIVENCHY Organza EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_4.jpeg"
  "108. GRITTI TuTu Extrait de Parfum.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_54822.jpeg"
  "109. GUCCI Bloom EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_44894.jpeg"
  "110. GUCCI Flora Gorgeous Gardenia.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_68578.jpeg"
  "111. GUERLAIN Angelique Noire EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_1021.jpeg"
}

foreach ($name in $urls.Keys) {
    $url = $urls[$name]
    $dest = "d:\anti\perfume-luxury-vn\fragrantica_cards\$name"
    Write-Host "Downloading $name from $url"
    Invoke-WebRequest -Uri $url -OutFile $dest
}
Write-Host "All downloads complete."
