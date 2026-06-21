const fs = require('fs');
const path = require('path');

const imgsDir = path.join(__dirname, '..', 'public', 'IMGS');
const docsDir = path.join(__dirname, '..', 'public', 'docs');

const outputDir = path.join(__dirname, '..', 'src', 'data');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const imageMapping = {
  "Screenshot 2026-06-21 115923.png": "Google Data Analytics Professional Certificate",
  "Screenshot 2026-06-21 120037.png": "Infosys Springboard Maritime Vessel Tracking Documentation Cover",
  "Screenshot 2026-06-21 120058.png": "Infosys Springboard Maritime Vessel Tracking Project Directory Structure",
  "Screenshot 2026-06-21 120144.png": "NPTEL Industry 4.0 & Industrial Internet of Things Certificate",
  "Screenshot 2026-06-21 120207.png": "Infosys Springboard Maritime Vessel Tracking Internship Team Cover",
  "Screenshot 2026-06-21 120227.png": "Emertxe IoT Internship Certificate",
  "Screenshot 2026-06-21 120248.png": "dreamflow Buildathon 2025 Certificate of Participation",
  "Screenshot 2026-06-21 120308.png": "Microchip Embedded System Developer Virtual Internship Certificate",
  "Screenshot 2026-06-21 120341.png": "AMD Slingshot Hackathon Team Submission Cover",
  "Screenshot 2026-06-21 120403.png": "Tech Learning Hub Free Resources Cover",
  "Screenshot 2026-06-21 120422.png": "Google AI-ML Virtual Internship Certificate",
  "Screenshot 2026-06-21 120438.png": "AI for Bharat Hackathon Project Cover",
  "Screenshot 2026-06-21 120454.png": "IBM Dev Day: AI Demystified Certificate of Participation",
  "Screenshot 2026-06-21 120507.png": "Infosys Springboard Maritime Vessel Tracking Internship Certificate",
  "Screenshot 2026-06-21 120528.png": "Jakkula Veerababu Resume Page 1",
  "Screenshot 2026-06-21 120550.png": "Datavalley IoT Internship Acceptance Letter",
  "Screenshot 2026-06-21 120612.png": "Redrob India.Runs AI Hackathon Project Cover",
  "Screenshot 2026-06-21 120836.png": "NPTEL Introduction to IoT Online Certification",
  "Screenshot 2026-06-21 120913.png": "NVIDIA Learn OpenUSD Certificate of Competency",
  "Screenshot 2026-06-21 120929.png": "NVIDIA Getting Started with AI on Jetson Nano Certificate",
  "WhatsApp Image 2026-06-21 at 1.27.59 PM.jpeg": "AMD Slingshot Innovator Badge",
  "WhatsApp Image 2026-06-21 at 1.28.00 PM (1).jpeg": "Hackhazards 2026 Hackathon Ambassador Badge",
  "WhatsApp Image 2026-06-21 at 1.28.00 PM (2).jpeg": "Milan AI Week 2026 AI Agent Olympics Hackathon Banner",
  "WhatsApp Image 2026-06-21 at 1.28.00 PM.jpeg": "Google The Big Code 2026 Round 1 Advancement Email",
  "WhatsApp Image 2026-06-21 at 1.28.01 PM.jpeg": "LeetCode 100 Days Badge 2026",
  "WhatsApp Image 2026-06-21 at 1.28.02 PM (1).jpeg": "Emertxe Selected as Embedded IoT Intern Badge",
  "WhatsApp Image 2026-06-21 at 1.28.02 PM (2).jpeg": "Google AI-ML Virtual Internship Certificate (High-Res)",
  "WhatsApp Image 2026-06-21 at 1.28.02 PM.jpeg": "Google The Big Code 2026 Round 1 Advancement Email (Duplicate)",
  "WhatsApp Image 2026-06-21 at 1.28.03 PM (1).jpeg": "Microchip Embedded System Developer Virtual Internship Certificate (Duplicate)",
  "WhatsApp Image 2026-06-21 at 1.28.03 PM.jpeg": "dreamflow Buildathon 2025 App Launch Badge",
  "WhatsApp Image 2026-06-21 at 1.28.04 PM.jpeg": "Google AI-ML Virtual Internship Certificate (Duplicate)",
  "WhatsApp Image 2026-06-21 at 1.28.06 PM.jpeg": "Tech Learning Hub Presentation Banner"
};

const docMapping = {
  "ai-for-bharat-hackathon.pdf": "AI for Bharat Hackathon Project Proposal",
  "AI for Bharat Hackathon _ Adaptive AI Learning Copilot (1).pdf": "AI for Bharat Hackathon Project Proposal",
  "amd-slingshot-hackathon.pdf": "AMD Slingshot Hackathon Project Proposal",
  "Building AI Learning Assistant AMD Slingshot Hackathon (1).pdf": "AMD Slingshot Hackathon Project Proposal",
  "amd-slingshot-ideathon.pdf": "AMD Slingshot Regional Ideathon Shortlist RSVP",
  "Shrtlistd AMD Slingshot Regional Ideathon 2026 _ Hyderabad (1).pdf": "AMD Slingshot Regional Ideathon Shortlist RSVP",
  "AP26S11112591_VEERABABU JAKKULA.pdf": "Datavalley IoT Internship Registration",
  "23471A04BW (1).pdf": "NPTEL Industry 4.0 & Industrial Internet of Things Certificate",
  "buildathon-2025.pdf": "Buildathon 2025 Certificate",
  "BUILDATHON 2025 - Built. Shipped. Recognized. HACK2SKILL (1).pdf": "Buildathon 2025 Certificate",
  "c0d627b4-4731-42cf-b684-f548f0bccdf8.pdf": "Infosys Springboard Maritime Vessel Tracking Certificate",
  "Coursera HC2B4LKUN695.pdf": "Google Data Analytics Professional Certificate",
  "DOC-20260615-WA0001..pdf": "ARGUS Candidate Discovery Solution Overview",
  "Document (3) (2).pdf": "SHR Flow Backend Email Sending System Blueprint",
  "embedded-system-internship.pdf": "Microchip Embedded System Developer Virtual Internship Certificate",
  "Embedded System Developer Virtual internship  (1).pdf": "Microchip Embedded System Developer Virtual Internship Certificate",
  "Gmail - Congratulations! You have been shortlisted for the Sa....pdf": "Samsung ISWDP Cohort 8 Fellowship Shortlist Letter",
  "google-aiml-internship.pdf": "Google AI-ML Virtual Internship Certificate",
  "completed Internship in Google AI-ML INEduSkills & APSCHE  (1).pdf": "Google AI-ML Virtual Internship Certificate",
  "google-certified-data-analyst.pdf": "Google Data Analytics Professional Certificate",
  "OFFICIALLY GOOGLE CERTIFIED DATA ANALYST (1).pdf": "Google Data Analytics Professional Certificate",
  "ibm-dev-day-hackathon.pdf": "IBM Dev Day AI Demystified Hackathon Certificate",
  "Participated in the IBM Dev Day Hackathon (1).pdf": "IBM Dev Day AI Demystified Hackathon Certificate",
  "iot-internship.pdf": "Emertxe IoT Virtual Internship Certificate",
  "Completed My Internship in Internet of Things (IoT) (1).pdf": "Emertxe IoT Virtual Internship Certificate",
  "JAKKULA VEERABABU RESUME-1.pdf": "Jakkula Veerababu Resume",
  "Maritime Vessel Tracking Documentation.pdf": "Maritime Vessel Tracking Technical Documentation",
  "maritime-vessel-tracking-infosys.pdf": "Infosys Springboard Maritime Vessel Tracking Slides",
  "Maritime Vessel Tracking & Analytics - INFOSYS SPRINGBOARD (1).pdf": "Infosys Springboard Maritime Vessel Tracking Slides",
  "tech-learning-hub.pdf": "Tech Learning Hub Free Engineering Resources Guide",
  "Announcing the Tech Learning Hub FREE for Engineering&Tech (1).pdf": "Tech Learning Hub Free Engineering Resources Guide"
};

function generate() {
  const images = [];
  if (fs.existsSync(imgsDir)) {
    const files = fs.readdirSync(imgsDir);
    files.forEach(file => {
      if (/\.(png|jpe?g|webp|gif)$/i.test(file)) {
        // Exclude certificate preview files used elsewhere
        if (file.endsWith('_preview.png')) return;
        // Exclude leetcode stats graphics displayed in github section
        if (file.startsWith('leetcode')) return;
        // Exclude duplicate screenshot files
        if (file === "WhatsApp Image 2026-06-21 at 1.28.02 PM.jpeg") return;
        if (file === "WhatsApp Image 2026-06-21 at 1.28.02 PM (2).jpeg") return;
        if (file === "WhatsApp Image 2026-06-21 at 1.28.03 PM (1).jpeg") return;
        if (file === "WhatsApp Image 2026-06-21 at 1.28.04 PM.jpeg") return;

        let name = imageMapping[file];
        if (!name) {
          name = file.replace(/\.(png|jpe?g|webp|gif)$/i, '')
                     .replace(/Screenshot \d{4}-\d{2}-\d{2} /, 'Screenshot ')
                     .replace(/WhatsApp Image \d{4}-\d{2}-\d{2} at /, 'Shared Image ');
        }
        images.push({
          filename: file,
          path: `/IMGS/${file}`,
          name: name
        });
      }
    });
  }

  const docs = [];
  if (fs.existsSync(docsDir)) {
    const files = fs.readdirSync(docsDir);
    files.forEach(file => {
      if (file.endsWith('.pdf')) {
        let name = docMapping[file];
        if (!name) {
          name = file.replace(/\.pdf$/i, '').replace(/ \(\d+\)/g, '');
        }
        docs.push({
          filename: file,
          path: `/docs/${file}`,
          name: name
        });
      }
    });
  }

  const data = { images, docs };
  fs.writeFileSync(path.join(outputDir, 'mediaAssets.json'), JSON.stringify(data, null, 2));
  console.log(`Generated mediaAssets.json with ${images.length} images and ${docs.length} PDFs.`);
}

generate();
