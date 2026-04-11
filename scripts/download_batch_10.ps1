$urls = @{
  "92. FREDERIC MALLE Musc Ravageur EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_1801.jpeg"
  "93. FREDERIC MALLE Portrait of a Lady EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_10464.jpeg"
  "94. GIARDINI DI TOSCANA Bianco Latte EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_64757.jpeg"
  "95. GIORGIO ARMANI Acqua di Gio EDT.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_410.jpeg"
  "96. GIORGIO ARMANI Acqua di Gio Parfum.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_81508.jpeg"
  "97. GIORGIO ARMANI Acqua di Gio Profondo.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_59532.jpeg"
  "98. GIORGIO ARMANI Acqua di Gio Profondo EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_105624.jpeg"
  "99. GIORGIO ARMANI Acqua di Gio Profumo Parfum.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_29727.jpeg"
  "100. GIORGIO ARMANI Armani Code Parfum.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_75126.jpeg"
  "101. GIORGIO ARMANI My Way EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_62036.jpeg"
}

foreach ($name in $urls.Keys) {
    $url = $urls[$name]
    $dest = "d:\anti\perfume-luxury-vn\fragrantica_cards\$name"
    Write-Host "Downloading $name from $url"
    Invoke-WebRequest -Uri $url -OutFile $dest
}
Write-Host "All downloads complete."
