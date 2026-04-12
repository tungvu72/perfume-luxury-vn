$urls = @{
  "122. GUERLAIN L'Homme Ideal Parfum.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_90803.jpeg"
  "123. GUERLAIN L'Instant de Guerlain EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_67538.jpeg"
  "124. GUERLAIN L'Instant de Guerlain Pour Homme EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_44763.jpeg"
  "125. GUERLAIN Mitsouko EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_67315.jpeg"
  "126. GUERLAIN Mon Guerlain EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_43297.jpeg"
  "127. GUERLAIN Mon Guerlain Intense.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_55997.jpeg"
  "128. GUERLAIN Samsara EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_67313.jpeg"
  "129. GUERLAIN Shalimar Eau de Parfum.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_53.jpeg"
  "130. GUERLAIN Shalimar L'Essence.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_113241.jpeg"
  "131. GUERLAIN Shalimar Parfum.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_33557.jpeg"
}

foreach ($name in $urls.Keys) {
    $url = $urls[$name]
    $dest = "d:\anti\perfume-luxury-vn\fragrantica_cards\$name"
    Write-Host "Downloading $name from $url"
    Invoke-WebRequest -Uri $url -OutFile $dest
}
Write-Host "All downloads complete."
