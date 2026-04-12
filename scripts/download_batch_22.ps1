$urls = @{
  "212. PARFUMS DE MARLY Delina.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_43871.jpeg"
  "213. PARFUMS DE MARLY Herod.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_16939.jpeg"
  "214. PARFUMS DE MARLY Layton.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_39314.jpeg"
  "215. PARFUMS DE MARLY Palatine.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_96023.jpeg"
  "216. PARFUMS DE MARLY Sedley.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_56273.jpeg"
  "217. PARFUMS DE MARLY Valaya.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_78574.jpeg"
  "218. PARFUMS DE MARLY Delina Exclusif.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_46661.jpeg"
  "219. PENHALIGON'S Halfeti.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_31396.jpeg"
  "220. PRADA Infusion d'Iris.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_1795.jpeg"
  "221. PRADA L'Homme.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_39479.jpeg"
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
