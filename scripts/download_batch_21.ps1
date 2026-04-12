$urls = @{
  "202. NARCISO RODRIGUEZ Musc Noir Rose.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_71596.jpeg"
  "203. NARCISO RODRIGUEZ Narciso Musc Nude.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_88936.jpeg"
  "204. NARCISO RODRIGUEZ Narciso Poudree.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_36679.jpeg"
  "205. NARCISO RODRIGUEZ Pure Musc For Her.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_53441.jpeg"
  "206. NISHANE Ani.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_54785.jpeg"
  "207. NISHANE Hacivat.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_44174.jpeg"
  "208. NISHANE Hundred Silent Ways.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_37602.jpeg"
  "209. PACO RABANNE Pure XS for men.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_46038.jpeg"
  "210. PARFUMS DE MARLY Althair.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_84109.jpeg"
  "211. PARFUMS DE MARLY Carlisle.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_33514.jpeg"
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
