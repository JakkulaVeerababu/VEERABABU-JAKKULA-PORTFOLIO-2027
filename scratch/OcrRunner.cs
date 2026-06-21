using System;
using System.IO;
using Windows.Graphics.Imaging;
using Windows.Media.Ocr;
using Windows.Storage;

class Program {
    static void Main(string[] args) {
        try {
            RunOcr();
        } catch (Exception ex) {
            Console.WriteLine("GLOBAL ERROR: " + ex.Message);
        }
    }

    static void RunOcr() {
        string imgsDir = @"c:\Users\LENOVO\Desktop\VEERABABU JAKKULA PF\public\IMGS";
        string[] files = Directory.GetFiles(imgsDir, "*.*");
        
        OcrEngine engine = OcrEngine.TryCreateFromUserProfileLanguages();
        if (engine == null) {
            Console.WriteLine("ERROR: OcrEngine could not be created.");
            return;
        }

        foreach (string file in files) {
            string ext = Path.GetExtension(file).ToLower();
            if (ext == ".png" || ext == ".jpg" || ext == ".jpeg" || ext == ".webp") {
                string name = Path.GetFileName(file);
                if (name.StartsWith("Screenshot 2") || name.StartsWith("WhatsApp")) {
                    try {
                        var fileTask = StorageFile.GetFileFromPathAsync(file);
                        StorageFile storageFile = System.WindowsRuntimeSystemExtensions.AsTask(fileTask).Result;

                        var streamTask = storageFile.OpenAsync(FileAccessMode.Read);
                        using (var stream = System.WindowsRuntimeSystemExtensions.AsTask(streamTask).Result) {
                            var decoderTask = BitmapDecoder.CreateAsync(stream);
                            BitmapDecoder decoder = System.WindowsRuntimeSystemExtensions.AsTask(decoderTask).Result;

                            var bitmapTask = decoder.GetSoftwareBitmapAsync();
                            var bitmap = System.WindowsRuntimeSystemExtensions.AsTask(bitmapTask).Result;

                            var ocrTask = engine.RecognizeAsync(bitmap);
                            OcrResult result = System.WindowsRuntimeSystemExtensions.AsTask(ocrTask).Result;

                            string textClean = result.Text.Replace("\r", " ").Replace("\n", " ");
                            Console.WriteLine("FILE: " + name + " | TEXT: " + textClean);
                        }
                    } catch (Exception ex) {
                        Console.WriteLine("FILE: " + name + " | ERROR: " + (ex.InnerException != null ? ex.InnerException.Message : ex.Message));
                    }
                }
            }
        }
    }
}
