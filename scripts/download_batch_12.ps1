$urls = @{
  "112. GUERLAIN Aqua Allegoria Forte Nerolia Vetiver.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_79228.jpeg"
  "113. GUERLAIN Aqua Allegoria Forte Rosa Palissandro EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_83015.jpeg"
  "114. GUERLAIN Aqua Allegoria Nettare Di Sole.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_66360.jpeg"
  "115. GUERLAIN Champs-Elysees EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_67312.jpeg"
  "116. GUERLAIN Habit Rouge Eau de Toilette.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_16.jpeg"
  "117. GUERLAIN Habit Rouge Parfum.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_90802.jpeg"
  "118. GUERLAIN Insolence EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_67537.jpeg"
  "119. GUERLAIN L'Heure Bleue Eau de Parfum.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_208.jpeg"
  "120. GUERLAIN L'Heure Bleue Eau de Toilette.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_207.jpeg"
  "121. GUERLAIN L'Homme Ideal Eau de Parfum.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_35487.jpeg"
}

foreach ($name in $urls.Keys) {
    $url = $urls[$name]
    $dest = "d:\anti\perfume-luxury-vn\fragrantica_cards\$name"
    Write-Host "Downloading $name from $url"
    Invoke-WebRequest -Uri $url -OutFile $dest
}
Write-Host "All downloads complete."
