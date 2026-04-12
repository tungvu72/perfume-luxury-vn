$urls = @{
  "172. LOUIS VUITTON Imagination.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-social-67370.jpeg"
  "173. LOUIS VUITTON L_Immensite.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-social-49751.jpeg"
  "174. LOUIS VUITTON Ombre Nomade.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-social-49755.jpeg"
  "175. MAISON ALHAMBRA Delilah Pour Femme.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-social-90273.jpeg"
  "176. MAISON FRANCIS KURKDJIAN A la rose.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-social-29083.jpeg"
  "177. MAISON FRANCIS KURKDJIAN Aqua Universalis.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-social-6804.jpeg"
  "178. MAISON FRANCIS KURKDJIAN Baccarat Rouge 540 EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-social-33519.jpeg"
  "179. MAISON FRANCIS KURKDJIAN Gentle Fluidity Gold EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-social-53401.jpeg"
  "180. MAISON FRANCIS KURKDJIAN Grand Soir EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-social-40816.jpeg"
  "181. MAISON FRANCIS KURKDJIAN Oud Satin Mood EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-social-30352.jpeg"
}

foreach ($name in $urls.Keys) {
    $url = $urls[$name]
    # Check if the url has p_c_ version as fallback
    $dest = "d:\anti\perfume-luxury-vn\fragrantica_cards\$name"
    Write-Host "Downloading $name from $url"
    
    try {
        Invoke-WebRequest -Uri $url -OutFile $dest -ErrorAction Stop
    } catch {
        $fallbackUrl = $url -replace "en-social-", "en-p_c_"
        Write-Host "Fallback to $fallbackUrl"
        try {
            Invoke-WebRequest -Uri $fallbackUrl -OutFile $dest -ErrorAction Stop
        } catch {
            Write-Host "FAILED TO DOWNLOAD $name"
        }
    }
}
Write-Host "All downloads complete."
