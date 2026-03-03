# Script to create first 5 blog pages from markdown files
# Run this to publish articles immediately

$basePath = "D:\anti\perfume-luxury-vn"
$contentPath = "$basePath\content\buying-guides"
$outputPath = "$basePath\src\app\kien-thuc\[id]"

# Get first 5 markdown files
$files = Get-ChildItem -Path $contentPath -Filter "*.md" | Select-Object -First 5

foreach ($file in $files) {
    $slug = $file.BaseName
    $content = Get-Content $file.FullName -Raw
    
    # Extract title from first line (assuming # Title format)
    $title = ($content -split "`n" | Where-Object { $_ -match "^#" } | Select-Object -First 1) -replace "^#\s*", ""
    
    Write-Host "Creating page for: $title"
    
    # Create page.tsx content
    $pageContent = @"
import Link from "next/link";

export default function ArticlePage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">$title</h1>
      <div className="prose lg:prose-xl">
        <p>Bài viết đang được hoàn thiện...</p>
        <Link href="/kien-thuc" className="text-blue-600 hover:underline">
          ← Quay lại
        </Link>
      </div>
    </article>
  );
}
"@
    
    # Create folder for this article
    $articlePath = "$outputPath\$slug"
    if (!(Test-Path $articlePath)) {
        New-Item -ItemType Directory -Path $articlePath -Force | Out-Null
    }
    
    # Write page.tsx
    $pageContent | Out-File -FilePath "$articlePath\page.tsx" -Encoding UTF8
}

Write-Host "✅ Created 5 article pages!"
Write-Host "Files created:"
Get-ChildItem -Path $outputPath -Directory | Select-Object Name
