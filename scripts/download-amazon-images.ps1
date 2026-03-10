# Download Amazon product images
# Uses the image URLs found by browser subagent

$outputDir = "d:\anti\perfume-luxury-vn\public\images\products"

# Amazon image URLs collected from browser
$images = @{
    "sauvage-elixir" = "https://m.media-amazon.com/images/I/51kBVcyvKgL._SL1500_.jpg"
    "armani-stronger-with-you-intensely" = "https://m.media-amazon.com/images/I/61b9Y5yiNJL._SL1500_.jpg"
    "lattafa-khamrah" = "https://m.media-amazon.com/images/I/61lIaaNDDqL._SL1000_.jpg"
}

foreach ($entry in $images.GetEnumerator()) {
    $slug = $entry.Key
    $url = $entry.Value
    $outFile = Join-Path $outputDir "$slug.jpg"
    
    Write-Host "Downloading $slug..." -ForegroundColor Cyan
    try {
        Invoke-WebRequest -Uri $url -OutFile $outFile -TimeoutSec 30 -ErrorAction Stop
        $size = (Get-Item $outFile).Length
        Write-Host "  OK: $size bytes" -ForegroundColor Green
    } catch {
        Write-Host "  FAILED: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "`nDone! Downloaded images:" -ForegroundColor Yellow
Get-ChildItem $outputDir | Format-Table Name, Length -AutoSize
