$urls = @{
  "192. MONTBLANC Signature.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_60962.jpeg"
  "193. MOSCHINO Toy Boy.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_55858.jpeg"
  "194. MUGLER Alien.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_707.jpeg"
  "195. MUGLER Angel.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_704.jpeg"
  "196. MUGLER Angel Muse.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_36416.jpeg"
  "197. NARCISO RODRIGUEZ All of Me.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_84201.jpeg"
  "198. NARCISO RODRIGUEZ Narciso Ambree.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_60867.jpeg"
  "199. NARCISO RODRIGUEZ Narciso Cristal.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_73075.jpeg"
  "200. NARCISO RODRIGUEZ For Her EDP.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_14319.jpeg"
  "201. NARCISO RODRIGUEZ For Her EDP Intense.jpeg" = "https://fimgs.net/mdimg/perfume-social-cards/en-p_c_6575.jpeg"
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
