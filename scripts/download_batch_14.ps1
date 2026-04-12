$urls = @{
  "132. GUERLAIN Vetiver EDT.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_69.jpeg"
  "133. GUY LAROCHE Drakkar Noir EDT.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_2069.jpeg"
  "134. HERMES 24 Faubourg EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_27.jpeg"
  "135. HERMES Eau des Merveilles Bleue.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_42747.jpeg"
  "136. HERMES Elixir des Merveilles EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_3168.jpeg"
  "137. HERMES Terre dHermes EDT.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_17.jpeg"
  "138. HERMES Terre dHermes Eau Givree EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_72439.jpeg"
  "139. HERMES Terre dHermes Parfum.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_8282.jpeg"
  "140. HERMES Twilly dHermes Eau Poivree.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_55983.jpeg"
  "141. HERMES Un Jardin sur le Nil EDT.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_18.jpeg"
}

foreach ($name in $urls.Keys) {
    $url = $urls[$name]
    $dest = "d:\anti\perfume-luxury-vn\fragrantica_cards\$name"
    Write-Host "Downloading $name from $url"
    Invoke-WebRequest -Uri $url -OutFile $dest
}
Write-Host "All downloads complete."
