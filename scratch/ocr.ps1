[System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("PSAvoidUsingPlainTextForFileContent", "")]
param()

function Run-Ocr-Job($filePath) {
    $sb = {
        param($path)
        try {
            [Void][Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime]
            [Void][Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType = WindowsRuntime]
            [Void][Windows.Media.Ocr.OcrEngine, Windows.Media.Ocr, ContentType = WindowsRuntime]
            
            $fileAsync = [Windows.Storage.StorageFile]::GetFileFromPathAsync($path)
            while (-not $fileAsync.IsCompleted) { Start-Sleep -Milliseconds 10 }
            $file = $fileAsync.GetResults()
            
            $decoderAsync = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($file)
            while (-not $decoderAsync.IsCompleted) { Start-Sleep -Milliseconds 10 }
            $decoder = $decoderAsync.GetResults()
            
            $bitmapAsync = $decoder.GetSoftwareBitmapAsync()
            while (-not $bitmapAsync.IsCompleted) { Start-Sleep -Milliseconds 10 }
            $bitmap = $bitmapAsync.GetResults()
            
            $engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
            if ($null -eq $engine) { return "ERROR: Engine creation failed" }
            
            $ocrAsync = $engine.RecognizeAsync($bitmap)
            while (-not $ocrAsync.IsCompleted) { Start-Sleep -Milliseconds 10 }
            $ocrResult = $ocrAsync.GetResults()
            
            return $ocrResult.Text
        } catch {
            return "ERROR: $_"
        }
    }
    
    $job = Start-Job -ScriptBlock $sb -ArgumentList $filePath
    $wait = Wait-Job $job -Timeout 8
    if ($null -eq $wait) {
        Stop-Job $job
        Remove-Job $job
        return "ERROR: Timeout"
    }
    $res = Receive-Job $job
    Remove-Job $job
    return $res
}

$imgsDir = "c:\Users\LENOVO\Desktop\VEERABABU JAKKULA PF\public\IMGS"
$files = Get-ChildItem -Path $imgsDir -Filter "Screenshot 2026-06-21 1*" -File

foreach ($f in $files) {
    $txt = Run-Ocr-Job $f.FullName
    $txtClean = $txt -replace '\s+', ' '
    Write-Output "FILE: $($f.Name) | TEXT: $txtClean"
}

$whatsappFiles = Get-ChildItem -Path $imgsDir -Filter "WhatsApp Image 2026-06-21 at 1.*" -File
foreach ($f in $whatsappFiles) {
    $txt = Run-Ocr-Job $f.FullName
    $txtClean = $txt -replace '\s+', ' '
    Write-Output "FILE: $($f.Name) | TEXT: $txtClean"
}
