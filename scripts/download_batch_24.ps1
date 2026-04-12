$urls = @{
  "232. TOM FORD Ombre Leather EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_50239.jpeg"
  "233. TOM FORD Oud Wood EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_1826.jpeg"
  "234. TOM FORD Tobacco Vanille EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_1825.jpeg"
  "235. TOM FORD Tuscan Leather EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_1849.jpeg"
  "236. TOM FORD Vanilla Sex.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_88588.jpeg"
  "237. VALENTINO Donna Born in Roma Intense.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_78739.jpeg"
  "238. VALENTINO Uomo Born In Roma Intense.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_78740.jpeg"
  "239. VERSACE Bright Crystal.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-social-632.jpeg"
  "240. VERSACE Crystal Noir EDT.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_631.jpeg"
  "241. VERSACE Eros EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-social-62762.jpeg"
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
