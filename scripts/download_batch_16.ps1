$urls = @{
  "152. JEAN PAUL GAULTIER Le Male Elixir Parfum.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_81642.jpeg"
  "153. JEAN PAUL GAULTIER Le Male Le Parfum.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_61856.jpeg"
  "154. JEAN PAUL GAULTIER Ultra Male.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_30947.jpeg"
  "155. JIMMY CHOO I Want Choo EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_64015.jpeg"
  "156. KAYALI Vanilla 28 EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_52616.jpeg"
  "157. KILIAN Angels Share EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_62615.jpeg"
  "158. KILIAN Black Phantom.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_43632.jpeg"
  "159. KILIAN Good Girl Gone Bad.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_15924.jpeg"
  "160. KILIAN Love dont be shy EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_4322.jpeg"
  "161. KILIAN Rolling in Love.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_56402.jpeg"
}

foreach ($name in $urls.Keys) {
    $url = $urls[$name]
    $dest = "d:\anti\perfume-luxury-vn\fragrantica_cards\$name"
    Write-Host "Downloading $name from $url"
    Invoke-WebRequest -Uri $url -OutFile $dest
}
Write-Host "All downloads complete."
