# 获取当前脚本所在目录
$CurrentDir = Get-Location

Write-Host "Processing images in: $CurrentDir"

# 确保 ImageMagick 和 jpegoptim 可用
if (!(Get-Command magick -ErrorAction SilentlyContinue)) {
    Write-Host "Error: ImageMagick (magick) not found. Please install it first."
    Read-Host "Press Enter to exit..."
    exit
}
if (!(Get-Command jpegoptim -ErrorAction SilentlyContinue)) {
    Write-Host "Error: jpegoptim not found. Please install it first."
    Read-Host "Press Enter to exit..."
    exit
}

# 转换所有 PNG -> JPG
Get-ChildItem -Path $CurrentDir -Filter *.png | ForEach-Object {
    $jpgPath = $_.FullName -replace ".png$", ".jpg"
    Write-Host "Converting: $($_.Name) -> $([System.IO.Path]::GetFileName($jpgPath))"
    magick convert $_.FullName -quality 85% $jpgPath
}

# 压缩所有 JPG（最大质量 70%，去除元数据）
Get-ChildItem -Path $CurrentDir -Filter *.jpg | ForEach-Object {
    $beforeSize = $_.Length
    jpegoptim --max=70 --strip-all $_.FullName
    $afterSize = (Get-Item $_.FullName).Length

    if ($afterSize -lt $beforeSize) {
        Write-Host "Compressed: $($_.Name) ($beforeSize -> $afterSize bytes)"
    } else {
        Write-Host "No significant size reduction: $($_.Name)"
    }
}

Write-Host "✅ All PNGs converted to JPG and optimized with max 70% quality + stripped metadata!"
Read-Host "Press Enter to exit..."
