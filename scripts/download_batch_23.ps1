$urls = @{
  "222. PRADA L'Homme Intense.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_45396.jpeg"
  "223. PRADA Luna Rossa Black.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/ro-p_c_48682.jpeg"
  "224. PRADA Luna Rossa Carbon.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_127045.jpeg"
  "225. ROJA DOVE Burlington 1819.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_62320.jpeg"
  "226. SOSPIRO Vibrato.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_75930.jpeg"
  "227. THOMAS KOSMALA No 4 Apres l'Amour.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_53742.jpeg"
  "228. TOM FORD Black Orchid.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_1018.jpeg"
  "229. TOM FORD Grey Vetiver.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_6697.jpeg"
  "230. TOM FORD Lost Cherry.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/es-p_c_51411.jpeg"
  "231. TOM FORD Noir Extreme.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_29675.jpeg"
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
