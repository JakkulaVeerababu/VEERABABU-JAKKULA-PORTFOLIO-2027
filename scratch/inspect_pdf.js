const fs = require('fs');
const path = require('path');

const docDir = path.join(__dirname, '..', 'public', 'docs');
const files = fs.readdirSync(docDir);

console.log('Inspecting PDF printable strings:\n');

files.forEach(file => {
  if (!file.endsWith('.pdf')) return;
  const filePath = path.join(docDir, file);
  const buffer = fs.readFileSync(filePath);
  
  // Convert buffer to string, extract words of length >= 4 that are printable ASCII
  const content = buffer.toString('utf8');
  const asciiWords = content.match(/[A-Za-z0-9\s,\.\-\(\):]{6,100}/g) || [];
  
  // Filter words that look like certificates, courses, universities, or organizations
  const keywords = [
    'Google', 'Amazon', 'AWS', 'AMD', 'IBM', 'Infosys', 'Coursera', 'Data', 
    'Analytics', 'Internship', 'Certificate', 'Shortlist', 'Ideathon', 'Hackathon',
    'Embedded', 'Microchip', 'APSCHE', 'IoT', 'Emertxe', 'University', 'Syllabus', 'Verify',
    'Dev Day', 'Slingshot', 'Buildathon', 'Hack2Skill', 'Academic', 'Grade', 'CGPA', 'Roll No'
  ];
  
  const foundKeywords = new Set();
  const interestingLines = [];
  
  asciiWords.forEach(word => {
    const trimmed = word.trim().replace(/\s+/g, ' ');
    if (trimmed.length < 8) return;
    
    // Check if any keyword matches
    keywords.forEach(kw => {
      if (trimmed.toLowerCase().includes(kw.toLowerCase())) {
        foundKeywords.add(kw);
        if (interestingLines.length < 15 && !interestingLines.includes(trimmed)) {
          interestingLines.push(trimmed);
        }
      }
    });
  });
  
  console.log(`=========================================`);
  console.log(`FILE: ${file}`);
  console.log(`Keywords found:`, Array.from(foundKeywords).join(', '));
  console.log(`Interesting Snippets:`);
  interestingLines.slice(0, 5).forEach(line => console.log(`  - ${line}`));
  console.log(`=========================================\n`);
});
