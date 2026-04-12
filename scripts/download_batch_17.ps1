$urls = @{
  "162. L_ORCHESTRE Piano Santal.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_57336.jpeg"
  "163. LALIQUE Encre Noire EDT.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_1834.jpeg"
  "164. LANCOME La Vie Est Belle EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_14982.jpeg"
  "165. LANCOME Tresor EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_172.jpeg"
  "166. LATTAFA Khamrah EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_75805.jpeg"
  "167. LATTAFA Oud For Glory.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_64948.jpeg"
  "168. LE LABO Santal 33.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_12201.jpeg"
  "169. LE LABO The Noir 29.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_31872.jpeg"
  "170. LIQUIDES IMAGINAIRES Blanche Bete.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_70189.jpeg"
  "171. LOLITA LEMPICKA Le Parfum.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_456.jpeg"
}

foreach ($name in $urls.Keys) {
    $url = $urls[$name]
    $dest = "d:\anti\perfume-luxury-vn\fragrantica_cards\$name"
    Write-Host "Downloading $name from $url"
    Invoke-WebRequest -Uri $url -OutFile $dest
}
Write-Host "All downloads complete."
