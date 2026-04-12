$urls = @{
  "142. HUGO BOSS Boss Bottled EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_62744.jpeg"
  "143. HUGO BOSS Boss Bottled Absolu EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_96246.jpeg"
  "144. INITIO Musk Therapy EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_66097.jpeg"
  "145. INITIO Side Effect EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_42260.jpeg"
  "146. ISSEY MIYAKE LEau dIssey Pour Homme EDT.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_721.jpeg"
  "147. JEAN PAUL GAULTIER Classique EDT.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_427.jpeg"
  "148. JEAN PAUL GAULTIER La Belle EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_55786.jpeg"
  "149. JEAN PAUL GAULTIER La Belle Le Parfum.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_65175.jpeg"
  "150. JEAN PAUL GAULTIER Le Beau Le Parfum.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_72158.jpeg"
  "151. JEAN PAUL GAULTIER Le Male EDT.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_430.jpeg"
}

foreach ($name in $urls.Keys) {
    $url = $urls[$name]
    $dest = "d:\anti\perfume-luxury-vn\fragrantica_cards\$name"
    Write-Host "Downloading $name from $url"
    Invoke-WebRequest -Uri $url -OutFile $dest
}
Write-Host "All downloads complete."
