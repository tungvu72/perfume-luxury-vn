$urls = @{
  "252. XERJOFF Lira EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_11801.jpeg"
  "253. XERJOFF Naxos EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_30529.jpeg"
  "254. XERJOFF Torino 21.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_70424.jpeg"
  "255. YSL Black Opium Glitter.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_100628.jpeg"
  "256. YSL Libre Intense EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_62318.jpeg"
  "257. YSL Y EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_50757.jpeg"
  "258. YVES SAINT LAURENT Black Opium EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_25324.jpeg"
  "259. YVES SAINT LAURENT Black Opium Le Parfum.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_78427.jpeg"
  "260. YVES SAINT LAURENT Cinema EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_92.jpeg"
  "261. YSL La Nuit de L'Homme Bleu Electrique EDT.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_67997.jpeg"
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
