$urls = @{
  "262. YSL La Nuit de L'Homme EDT.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_5521.jpeg"
  "263. YSL Libre EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_56077.jpeg"
  "264. YSL Libre Intense.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_62318.jpeg"
  "265. YSL Libre Eau de Toilette.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_65936.jpeg"
  "266. YSL Libre Le Parfum.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_75676.jpeg"
  "267. YSL Mon Paris EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_38914.jpeg"
  "268. YSL Opium EDT.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_64500.jpeg"
  "269. YSL Rive Gauche EDT.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_96.jpeg"
  "270. YSL Tuxedo.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_32269.jpeg"
  "271. ZADIG VOLTAIRE This Is Her EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_39358.jpeg"
}

foreach ($name in $urls.Keys) {
    $url = $urls[$name]
    $dest = "d:\anti\perfume-luxury-vn\fragrantica_cards\$name"
    Write-Host "Downloading $name from $url"
    
    try {
        Invoke-WebRequest -Uri $url -OutFile $dest -ErrorAction Stop
    } catch {
        Write-Host "FAILED TO DOWNLOAD $name"
    }
}
Write-Host "All downloads complete."
