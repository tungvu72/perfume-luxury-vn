$urls = @{
  "182. MAISON MARGIELA Replica Jazz Club.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_20541.jpeg"
  "183. MAISON MARGIELA REPLICA By The Fireplace.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_31623.jpeg"
  "184. MAISON MARGIELA REPLICA Lazy Sunday Morning.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_20542.jpeg"
  "185. MANCERA Cedrat Boise.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_15211.jpeg"
  "186. MANCERA Instant Crush.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_54885.jpeg"
  "187. MANCERA Sicily.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_42670.jpeg"
  "188. MARC-ANTOINE BARROIS Ganymede.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_54720.jpeg"
  "189. MCM Eau de Parfum.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_66246.jpeg"
  "190. MEMO PARIS African Leather.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_31383.jpeg"
  "191. MONTBLANC Explorer.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_52002.jpeg"
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
