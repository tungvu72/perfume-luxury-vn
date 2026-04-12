$urls = @{
  "242. VERSACE Eros EDT.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_16657.jpeg"
  "243. VERSACE Eros Energy.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_92647.jpeg"
  "244. VERSACE Eros Flame.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_52180.jpeg"
  "245. VERSACE Pour Homme.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_2318.jpeg"
  "246. VERSACE Pour Homme Dylan Blue EDT.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_40031.jpeg"
  "247. VIKTOR ROLF Spicebomb Extreme.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_30499.jpeg"
  "248. XERJOFF Alexandria II EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_17786.jpeg"
  "249. XERJOFF Casamorati Mefisto.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_6310.jpeg"
  "250. XERJOFF Dama Bianca EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_15555.jpeg"
  "251. XERJOFF Erba Pura EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_55157.jpeg"
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
