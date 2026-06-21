const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const docDir = path.join(__dirname, '..', 'public', 'docs');
const files = fs.readdirSync(docDir);

const logFile = path.join(__dirname, 'pdf_inspection_results.txt');
fs.writeFileSync(logFile, 'PDF INSPECTION RESULTS\n\n');

async function inspectAll() {
  for (const file of files) {
    if (!file.endsWith('.pdf')) continue;
    const filePath = path.join(docDir, file);
    const dataBuffer = fs.readFileSync(filePath);
    
    try {
      const parser = new pdf.PDFParse({ data: dataBuffer });
      const data = await parser.getText();
      const text = data.text;
      await parser.destroy();
      
      // Clean up whitespace and newlines for a short preview
      const cleanText = text.replace(/\s+/g, ' ').substring(0, 1000);
      
      const entry = `=========================================\n` +
                    `FILE: ${file}\n` +
                    `TEXT PREVIEW:\n${cleanText}\n` +
                    `=========================================\n\n`;
      
      fs.appendFileSync(logFile, entry);
      console.log(`Parsed: ${file}`);
    } catch (err) {
      console.error(`Error parsing ${file}:`, err.message);
    }
  }
  console.log(`Saved results to scratch/pdf_inspection_results.txt`);
}

inspectAll();
