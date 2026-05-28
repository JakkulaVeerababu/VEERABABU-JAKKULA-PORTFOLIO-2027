"use client";

import { useState, useMemo } from "react";

interface Certificate {
  title: string;
  issuer: string;
  category: string;
  date: string;
  link?: string;
}

const allCertifications: Certificate[] = [
  // 1. Professional Certifications
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    category: "Professional",
    date: "Mar 31, 2026",
    link: "https://coursera.org/verify/professional-cert/HC2B4LKUN695",
  },
  {
    title: "Stock Trading Professional Certification",
    issuer: "NYIF (edX)",
    category: "Professional",
    date: "Nov 21, 2024",
    link: "https://courses.edx.org/certificates/42340b3668dc42ba8793068d614494ba",
  },

  // 2. Data Analytics & Visualization
  {
    title: "Google Data Analytics Capstone: Complete a Case Study",
    issuer: "Google",
    category: "Data Analytics",
    date: "Mar 31, 2026",
    link: "https://coursera.org/verify/JEK7U9DGIMLI",
  },
  {
    title: "Introduction to Data Analysis Using Python",
    issuer: "Google",
    category: "Data Analytics",
    date: "Mar 30, 2026",
    link: "https://coursera.org/verify/CL2RFSTE1ZPF",
  },
  {
    title: "Share Data Through the Art of Visualization",
    issuer: "Google",
    category: "Data Analytics",
    date: "Mar 26, 2026",
    link: "https://coursera.org/verify/FQPMWVRUX7GJ",
  },
  {
    title: "Analyze Data to Answer Questions",
    issuer: "Google",
    category: "Data Analytics",
    date: "Mar 19, 2026",
    link: "https://coursera.org/verify/I4DCRILWHWLA",
  },
  {
    title: "Process Data from Dirty to Clean",
    issuer: "Google",
    category: "Data Analytics",
    date: "Mar 10, 2026",
    link: "https://coursera.org/verify/SLU8GMBCJVF5",
  },
  {
    title: "Prepare Data for Exploration",
    issuer: "Google",
    category: "Data Analytics",
    date: "Mar 01, 2026",
    link: "https://coursera.org/verify/7FXGTLVHSHK8",
  },
  {
    title: "Ask Questions to Make Data-Driven Decisions",
    issuer: "Google",
    category: "Data Analytics",
    date: "Feb 24, 2026",
    link: "https://coursera.org/verify/S66CNM3OQ72V",
  },
  {
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google",
    category: "Data Analytics",
    date: "Feb 08, 2026",
    link: "https://coursera.org/verify/LX7CJVG9T8LT",
  },
  {
    title: "Visualizing Data with R",
    issuer: "IBM (edX)",
    category: "Data Analytics",
    date: "Apr 08, 2024",
    link: "https://courses.edx.org/certificates/12705684b60449a08b4238f2fe47a70b",
  },
  {
    title: "Excel for Beginners",
    issuer: "DavidsonX (edX)",
    category: "Data Analytics",
    date: "Apr 17, 2024",
    link: "https://courses.edx.org/certificates/44f50668cd5d491db93b1fdb88f9bd16",
  },
  {
    title: "Hands-On Data Visualization with Microsoft Power BI",
    issuer: "Infosys Springboard",
    category: "Data Analytics",
    date: "Dec 15, 2025",
    link: "https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_0130944169681960962022_shared/overview",
  },
  {
    title: "Learning Microsoft Power BI",
    issuer: "Infosys Springboard",
    category: "Data Analytics",
    date: "Dec 10, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Data Science Certification",
    issuer: "Infosys Springboard",
    category: "Data Analytics",
    date: "Dec 12, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Power BI for Business Professionals",
    issuer: "Infosys Springboard",
    category: "Data Analytics",
    date: "Dec 12, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Power BI Training",
    issuer: "Infosys Springboard",
    category: "Data Analytics",
    date: "Dec 12, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Introduction to Business Intelligence",
    issuer: "Infosys Springboard",
    category: "Data Analytics",
    date: "Dec 10, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Introduction to Data Science",
    issuer: "Infosys Springboard",
    category: "Data Analytics",
    date: "Dec 20, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Excel Essentials",
    issuer: "Infosys Springboard",
    category: "Data Analytics",
    date: "Dec 10, 2025",
    link: "https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_0141658536638955523/overview",
  },
  {
    title: "Python 101 for Data Science",
    issuer: "IBM",
    category: "Data Analytics",
    date: "Jun 29, 2025",
    link: "https://drive.google.com/open?id=1J5DSarS0TMqVmNwYHA6IhTb4dlCx6Z8s",
  },

  // 3. Artificial Intelligence & ML
  {
    title: "Getting Started with AI on Jetson Nano",
    issuer: "NVIDIA",
    category: "AI & ML",
    date: "Jan 30, 2025",
  },
  {
    title: "Accelerate Your Job Search with AI",
    issuer: "Google",
    category: "AI & ML",
    date: "Mar 31, 2026",
    link: "https://coursera.org/verify/0BHDT9JOI7YW",
  },
  {
    title: "Introduction to Watson AI",
    issuer: "IBM (edX)",
    category: "AI & ML",
    date: "Apr 14, 2024",
    link: "https://courses.edx.org/certificates/09fbb575fb9041beb613c101504514a9",
  },
  {
    title: "AI Chatbots without Programming",
    issuer: "IBM (edX)",
    category: "AI & ML",
    date: "Apr 08, 2024",
    link: "https://courses.edx.org/certificates/79e789e1a95243ecbdd46febe679c3e7",
  },
  {
    title: "Introduction to Prompt Engineering",
    issuer: "IBM (edX)",
    category: "AI & ML",
    date: "Apr 09, 2024",
    link: "https://courses.edx.org/certificates/aaf96de62ef74f218a7769365565d38c",
  },
  {
    title: "Models and Platforms for Generative AI",
    issuer: "IBM (edX)",
    category: "AI & ML",
    date: "Apr 09, 2024",
    link: "https://courses.edx.org/certificates/0f1a6ad6a5ed4d09937047213130d751",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "IBM (edX)",
    category: "AI & ML",
    date: "Apr 09, 2024",
    link: "https://courses.edx.org/certificates/f8b82a28dffc496c98b92e8acd87e3eb",
  },
  {
    title: "Elevating Businesses and Careers with Generative AI",
    issuer: "IBM (edX)",
    category: "AI & ML",
    date: "Apr 09, 2024",
    link: "https://courses.edx.org/certificates/22decff0b13d481e8c3ce5e84ba8a886",
  },
  {
    title: "Impact, Ethics, and Issues with Generative AI",
    issuer: "IBM (edX)",
    category: "AI & ML",
    date: "Apr 09, 2024",
    link: "https://courses.edx.org/certificates/e1891f7708d048ccb60964bddbd713de",
  },
  {
    title: "Introduction to Machine Learning on AWS",
    issuer: "AWS (edX)",
    category: "AI & ML",
    date: "Nov 23, 2024",
    link: "https://courses.edx.org/certificates/3947d84861704b1786c0d642f9d645de",
  },
  {
    title: "Generative AI for Business Leaders",
    issuer: "edX",
    category: "AI & ML",
    date: "Apr 06, 2024",
    link: "https://courses.edx.org/certificates/98b31c6869f642a5822d4392436b4459",
  },
  {
    title: "Google AI for Anyone",
    issuer: "Google (edX)",
    category: "AI & ML",
    date: "Apr 01, 2024",
    link: "https://courses.edx.org/certificates/ce6cb9ee5c094b2383239608925f4535",
  },
  {
    title: "Google AI for JavaScript developers with TensorFlow.js",
    issuer: "Google (edX)",
    category: "AI & ML",
    date: "Apr 02, 2024",
    link: "https://courses.edx.org/certificates/8cc6165934334730ab81703a62e64b33",
  },
  {
    title: "Rust for Machine Learning Operations (LLMOps)",
    issuer: "Pragmatic AI Labs",
    category: "AI & ML",
    date: "Nov 19, 2024",
    link: "https://courses.edx.org/certificates/19bb6aa59045421f9fd6c5d2d418e547",
  },
  {
    title: "Teach teens computing: Understanding AI for educators",
    issuer: "Raspberry Pi Found.",
    category: "AI & ML",
    date: "Nov 23, 2024",
    link: "https://courses.edx.org/certificates/a1f662f2f9af48d0821a2e6881506eb6",
  },
  {
    title: "Teach teens computing: Machine learning and AI",
    issuer: "Raspberry Pi Found.",
    category: "AI & ML",
    date: "Nov 23, 2024",
    link: "https://courses.edx.org/certificates/d8e132385a4f46f3933fd050e91ff6fb",
  },
  {
    title: "Principles of Generative AI Certification",
    issuer: "Infosys Springboard",
    category: "AI & ML",
    date: "Dec 20, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Prompt Engineering Essentials",
    issuer: "Infosys Springboard",
    category: "AI & ML",
    date: "Dec 20, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "OpenAI GPT-3 for developers",
    issuer: "Infosys Springboard",
    category: "AI & ML",
    date: "Dec 20, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Introduction to OpenAI GPT Models",
    issuer: "Infosys Springboard",
    category: "AI & ML",
    date: "Dec 20, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Generative AI Unleashing",
    issuer: "Infosys Springboard",
    category: "AI & ML",
    date: "Dec 20, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Generative models for developers",
    issuer: "Infosys Springboard",
    category: "AI & ML",
    date: "Dec 20, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Artificial Intelligence Primer Certification",
    issuer: "Infosys Springboard",
    category: "AI & ML",
    date: "Dec 20, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Artificial Intelligence Core",
    issuer: "Infosys Springboard",
    category: "AI & ML",
    date: "Dec 20, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Infosys Springboard",
    category: "AI & ML",
    date: "Dec 20, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Introduction to Natural Language Processing",
    issuer: "Infosys Springboard",
    category: "AI & ML",
    date: "Dec 20, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Introduction to Deep Learning",
    issuer: "Infosys Springboard",
    category: "AI & ML",
    date: "Dec 20, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Deep Learning for Developers",
    issuer: "Infosys Springboard",
    category: "AI & ML",
    date: "Dec 20, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Computer Vision 101",
    issuer: "Infosys Springboard",
    category: "AI & ML",
    date: "Dec 20, 2025",
    link: "https://verify.onwingspan.com/",
  },

  // 4. Software & Web Development
  {
    title: "Computer Science 101",
    issuer: "StanfordOnline",
    category: "Software & Web Dev",
    date: "Apr 11, 2024",
    link: "https://courses.edx.org/certificates/930e8020cbc54673a0b94b7d978c41f7",
  },
  {
    title: "Software Engineering Basics for Everyone",
    issuer: "IBM (edX)",
    category: "Software & Web Dev",
    date: "Apr 09, 2024",
    link: "https://courses.edx.org/certificates/9a1887443389417d9431266fe65ee46f",
  },
  {
    title: "Introduction to Web Development with HTML5, CSS3, and JS",
    issuer: "IBM (edX)",
    category: "Software & Web Dev",
    date: "Apr 02, 2024",
    link: "https://courses.edx.org/certificates/4d04cc40f5124cc69ab7d982307d7153",
  },
  {
    title: "Django Application Development with SQL and Databases",
    issuer: "IBM (edX)",
    category: "Software & Web Dev",
    date: "Apr 13, 2024",
    link: "https://courses.edx.org/certificates/8dc7d13215b742faa7b5a28ead74223e",
  },
  {
    title: "Build your very first iOS app",
    issuer: "CurtinX (edX)",
    category: "Software & Web Dev",
    date: "Apr 08, 2024",
    link: "https://courses.edx.org/certificates/ba374a694378441b9adc02033f8043bc",
  },
  {
    title: "A Complete Guide to Game Design",
    issuer: "HP (edX)",
    category: "Software & Web Dev",
    date: "Apr 09, 2024",
    link: "https://courses.edx.org/certificates/040a88826c5a44128c1cdce24879fea2",
  },
  {
    title: "CSS Basics",
    issuer: "W3Cx (edX)",
    category: "Software & Web Dev",
    date: "Apr 02, 2024",
    link: "https://courses.edx.org/certificates/4e8ce5678b0e4e8c986ebec4b635536d",
  },
  {
    title: "Introduction to Node.js",
    issuer: "LinuxFoundationX",
    category: "Software & Web Dev",
    date: "Apr 08, 2024",
    link: "https://courses.edx.org/certificates/e9da87be84ae403999afc270ff6b82e4",
  },
  {
    title: "Rust Fundamentals",
    issuer: "Pragmatic AI Labs",
    category: "Software & Web Dev",
    date: "Nov 19, 2024",
    link: "https://courses.edx.org/certificates/14c00e0ac89d4c6b87cb1de9e3b0983e",
  },
  {
    title: "Python Foundation Certification",
    issuer: "Infosys Springboard",
    category: "Software & Web Dev",
    date: "Dec 16, 2025",
    link: "https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_0135784773973196803862_shared/overview",
  },
  {
    title: "JavaScript Essentials",
    issuer: "Infosys Springboard",
    category: "Software & Web Dev",
    date: "Nov 10, 2024",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "TypeScript Essentials",
    issuer: "Infosys Springboard",
    category: "Software & Web Dev",
    date: "Dec 21, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Angular Core",
    issuer: "Infosys Springboard",
    category: "Software & Web Dev",
    date: "Dec 20, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Angular Web Developer Certification",
    issuer: "Infosys Springboard",
    category: "Software & Web Dev",
    date: "Dec 20, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Website Creation",
    issuer: "Infosys Springboard",
    category: "Software & Web Dev",
    date: "Dec 21, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "HTML5 - The Language",
    issuer: "Infosys Springboard",
    category: "Software & Web Dev",
    date: "Dec 21, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "CSS3 Essentials",
    issuer: "Infosys Springboard",
    category: "Software & Web Dev",
    date: "Dec 21, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Twitter Bootstrap",
    issuer: "Infosys Springboard",
    category: "Software & Web Dev",
    date: "Dec 21, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Creating Responsive Web Pages using Bootstrap 4",
    issuer: "Infosys Springboard",
    category: "Software & Web Dev",
    date: "Dec 21, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "C Programming: Linked List Data Structures",
    issuer: "Professional Dev",
    category: "Software & Web Dev",
    date: "Aug 20, 2025",
    link: "https://verify.skilljar.com/c/rc34ydg977ok",
  },
  {
    title: "Advanced C Programming",
    issuer: "Professional Dev",
    category: "Software & Web Dev",
    date: "Aug 20, 2025",
    link: "https://verify.skilljar.com/c/qtmxsj2ay6vk",
  },
  {
    title: "C Programming Callbacks",
    issuer: "Professional Dev",
    category: "Software & Web Dev",
    date: "Aug 20, 2025",
    link: "https://verify.skilljar.com/c/v9sxy36cs82w",
  },
  {
    title: "Programming using Java",
    issuer: "Infosys Springboard",
    category: "Software & Web Dev",
    date: "Dec 16, 2025",
    link: "https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_012880464547618816347_shared/overview",
  },
  {
    title: "Data Structures and Algorithms using Java",
    issuer: "Infosys Springboard",
    category: "Software & Web Dev",
    date: "Dec 13, 2025",
    link: "https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_012889695666700288926_shared/overview",
  },
  {
    title: "Software Engineering and Agile software development",
    issuer: "Infosys Springboard",
    category: "Software & Web Dev",
    date: "Dec 10, 2025",
    link: "https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_013382690411003904735_shared/overview",
  },
  {
    title: "Object-oriented Programming in Python",
    issuer: "Raspberry Pi Found.",
    category: "Software & Web Dev",
    date: "Nov 23, 2024",
    link: "https://courses.edx.org/certificates/53e312f5df7b43bfbe1067e891af3609",
  },
  {
    title: "Support kids' projects: Web development",
    issuer: "Raspberry Pi Found.",
    category: "Software & Web Dev",
    date: "Nov 23, 2024",
    link: "https://courses.edx.org/certificates/465ada051d934236a054a942ccc799cf",
  },

  // 5. Cloud, DevOps & Systems
  {
    title: "AWS Cloud Technical Essentials",
    issuer: "AWS (edX)",
    category: "Cloud & DevOps",
    date: "Nov 23, 2024",
    link: "https://courses.edx.org/certificates/9bf0675f4f954993a96d9dd4000bc711",
  },
  {
    title: "Hands-on with AWS: Software Development Practices",
    issuer: "AWS (edX)",
    category: "Cloud & DevOps",
    date: "Nov 23, 2024",
    link: "https://courses.edx.org/certificates/8c27e50a908145558677c1090c9db59d",
  },
  {
    title: "DevOps on AWS: Code, Build, and Test",
    issuer: "AWS (edX)",
    category: "Cloud & DevOps",
    date: "Apr 13, 2024",
    link: "https://courses.edx.org/certificates/a16f37a7a07341819c939e0d6a9bbe75",
  },
  {
    title: "DevOps on AWS: Release and Deploy",
    issuer: "AWS (edX)",
    category: "Cloud & DevOps",
    date: "Apr 13, 2024",
    link: "https://courses.edx.org/certificates/3eac69796e874a9a90b114937c76efc8",
  },
  {
    title: "DevOps on AWS: Operate and Monitor",
    issuer: "AWS (edX)",
    category: "Cloud & DevOps",
    date: "Apr 13, 2024",
    link: "https://courses.edx.org/certificates/4f1ae199346c46eab3c47c1fd0ef0d10",
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "IBM (edX)",
    category: "Cloud & DevOps",
    date: "Apr 02, 2024",
    link: "https://courses.edx.org/certificates/eb3ec6654dd9437081019aff5ab2daba",
  },
  {
    title: "Hardware and Operating Systems",
    issuer: "IBM (edX)",
    category: "Cloud & DevOps",
    date: "Apr 06, 2024",
    link: "https://courses.edx.org/certificates/7049d9d1c74e47478f4a169f251c456d",
  },
  {
    title: "Introduction to Linux",
    issuer: "LinuxFoundationX",
    category: "Cloud & DevOps",
    date: "Apr 06, 2024",
    link: "https://courses.edx.org/certificates/cbb130c98bbb4ad8af4e9d45180e72dd",
  },
  {
    title: "Building a RISC-V CPU Core",
    issuer: "LinuxFoundationX",
    category: "Cloud & DevOps",
    date: "Nov 23, 2024",
    link: "https://courses.edx.org/certificates/79a3931258324e61bbc13ab78cd9b48c",
  },
  {
    title: "Fundamentals of Red Hat Enterprise Linux 9",
    issuer: "Red Hat (edX)",
    category: "Cloud & DevOps",
    date: "Apr 08, 2024",
    link: "https://courses.edx.org/certificates/982730dd8b9043099b3d10897cf0a683",
  },
  {
    title: "Embedded Systems Essentials with Arm",
    issuer: "ArmEducationX",
    category: "Cloud & DevOps",
    date: "Mar 14, 2025",
    link: "https://courses.edx.org/certificates/5a85a2ee85dd47ae88539686cbefc502",
  },
  {
    title: "Cloud Technologies Essentials",
    issuer: "Infosys Springboard",
    category: "Cloud & DevOps",
    date: "Dec 12, 2025",
    link: "https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_01416934482619596839/overview",
  },
  {
    title: "Rust for DevOps",
    issuer: "Pragmatic AI Labs",
    category: "Cloud & DevOps",
    date: "Nov 19, 2024",
    link: "https://courses.edx.org/certificates/b0e4cf11708c4657867b149fdff8feaa",
  },
  {
    title: "Python and Rust with Linux Command Line Tools",
    issuer: "Pragmatic AI Labs",
    category: "Cloud & DevOps",
    date: "Nov 19, 2024",
    link: "https://courses.edx.org/certificates/2b3c7cc0d4ce4968aab38091d404db20",
  },
  {
    title: "Introduction to the MPLAB® X IDE",
    issuer: "Professional Dev",
    category: "Cloud & DevOps",
    date: "Aug 20, 2025",
    link: "https://verify.skilljar.com/c/vqnaabpetrxy",
  },
  {
    title: "Advanced Embedded C Tips, Tricks, and Cautions",
    issuer: "Professional Dev",
    category: "Cloud & DevOps",
    date: "Aug 20, 2025",
    link: "https://verify.skilljar.com/c/hb38dvw7mcn5",
  },
  {
    title: "Motor Control Workshop using dsPIC® DSC Devices",
    issuer: "Professional Dev",
    category: "Cloud & DevOps",
    date: "Aug 20, 2025",
    link: "https://verify.skilljar.com/c/r2m53gwu9iu6",
  },

  // 6. IoT & Industrial Tech
  {
    title: "Intro to Industry 4.0 and Industrial IoT",
    issuer: "NPTEL",
    category: "IoT & Industrial",
    date: "Apr 2026",
  },
  {
    title: "Introduction To Internet Of Things",
    issuer: "NPTEL",
    category: "IoT & Industrial",
    date: "Apr 2025",
  },
  {
    title: "Get started with your Raspberry Pi computer",
    issuer: "Raspberry Pi Found.",
    category: "IoT & Industrial",
    date: "Nov 23, 2024",
    link: "https://courses.edx.org/certificates/6e04be4c496248d5b0e89da01068345a",
  },
  {
    title: "Physical computing with Raspberry Pi and Python",
    issuer: "Raspberry Pi Found.",
    category: "IoT & Industrial",
    date: "Nov 23, 2024",
    link: "https://courses.edx.org/certificates/cc31e463e51e405585d368d850c703ab",
  },
  {
    title: "Introduction to Robotic Process Automation",
    issuer: "Infosys Springboard",
    category: "IoT & Industrial",
    date: "Dec 20, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "OpenUSD: Setting Up Basic Animations",
    issuer: "NVIDIA",
    category: "IoT & Industrial",
    date: "Dec 10, 2024",
  },
  {
    title: "OpenUSD: Understanding Model Kinds",
    issuer: "NVIDIA",
    category: "IoT & Industrial",
    date: "Dec 11, 2024",
  },

  // 7. Cybersecurity & Blockchain
  {
    title: "Beginners Guide to Cybersecurity",
    issuer: "IBM (edX)",
    category: "Cyber & Blockchain",
    date: "Apr 08, 2024",
    link: "https://courses.edx.org/certificates/133a779c5fca4b538bd3ac6fa068daad",
  },
  {
    title: "Cyber Security Basics: A Hands-on Approach",
    issuer: "UC3Mx (edX)",
    category: "Cyber & Blockchain",
    date: "Jan 21, 2025",
    link: "https://courses.edx.org/certificates/0b810918724648b59e8586791155dcd6",
  },
  {
    title: "Introduction to Hyperledger Blockchain Technologies",
    issuer: "LinuxFoundationX",
    category: "Cyber & Blockchain",
    date: "Apr 08, 2024",
    link: "https://courses.edx.org/certificates/7dd027ef31d9476e97e8ffa368867adf",
  },
  {
    title: "Teach teens computing: Cybersecurity",
    issuer: "Raspberry Pi Found.",
    category: "Cyber & Blockchain",
    date: "Nov 23, 2024",
    link: "https://courses.edx.org/certificates/a7edf0b3d7074c17ad9d0d307906d7ac",
  },
  {
    title: "Teach teens computing: Encryption and cryptography",
    issuer: "Raspberry Pi Found.",
    category: "Cyber & Blockchain",
    date: "Nov 23, 2024",
    link: "https://courses.edx.org/certificates/cf9150909b9b4fbe8ce46f0a99278cbd",
  },

  // 8. Database Management
  {
    title: "Database Management System Part - 1",
    issuer: "Infosys Springboard",
    category: "Databases",
    date: "Dec 16, 2025",
    link: "https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_01275806667282022456_shared/overview",
  },
  {
    title: "Database Management System Part - 2",
    issuer: "Infosys Springboard",
    category: "Databases",
    date: "Dec 15, 2025",
    link: "https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_0127673005629194241_shared/overview",
  },
  {
    title: "Introduction to NoSQL databases",
    issuer: "Infosys Springboard",
    category: "Databases",
    date: "Dec 15, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Big Data Essentials",
    issuer: "Infosys Springboard",
    category: "Databases",
    date: "Dec 10, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Introduction to Entity Relationship ER Modeling",
    issuer: "Infosys Springboard",
    category: "Databases",
    date: "Dec 10, 2025",
  },
  {
    title: "Multidimensional Data Modeling",
    issuer: "Infosys Springboard",
    category: "Databases",
    date: "Dec 10, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Teach teens computing: Databases and SQL",
    issuer: "Raspberry Pi Found.",
    category: "Databases",
    date: "Nov 23, 2024",
    link: "https://courses.edx.org/certificates/7868054008bf44ffb889e70e54d3e94d",
  },
  {
    title: "Rust Data Engineering",
    issuer: "Pragmatic AI Labs",
    category: "Databases",
    date: "Nov 19, 2024",
    link: "https://courses.edx.org/certificates/227631d1ae924f64adea81c4ca940b7e",
  },

  // 9. Professional Experience (Sims)
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    category: "Job Simulations",
    date: "Nov 29, 2025",
    link: "http://theforage.com/",
  },
  {
    title: "Data Analytics and Visualization Job Simulation",
    issuer: "Accenture (Forage)",
    category: "Job Simulations",
    date: "Jan 24, 2025",
    link: "http://theforage.com/",
  },
  {
    title: "Product Management Job Simulation",
    issuer: "Cognizant (Forage)",
    category: "Job Simulations",
    date: "Aug 02, 2025",
    link: "http://theforage.com/",
  },
  {
    title: "Technology Job Simulation (Coding Development)",
    issuer: "Deloitte (Forage)",
    category: "Job Simulations",
    date: "Aug 02, 2025",
    link: "http://theforage.com/",
  },
  {
    title: "Advisors & Consulting Services Job Simulation",
    issuer: "KPMG (Forage)",
    category: "Job Simulations",
    date: "Aug 02, 2025",
    link: "http://theforage.com/",
  },
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "J.P. Morgan (Forage)",
    category: "Job Simulations",
    date: "Aug 02, 2025",
    link: "http://theforage.com/",
  },
  {
    title: "Solutions Architecture Job Simulation",
    issuer: "AWS (Forage)",
    category: "Job Simulations",
    date: "Jul 17, 2025",
    link: "http://theforage.com/",
  },
  {
    title: "Cyber Job Simulation",
    issuer: "Deloitte (Forage)",
    category: "Job Simulations",
    date: "Jun 28, 2025",
    link: "http://theforage.com/",
  },
  {
    title: "Financial Accounting Advisory Services (FAAS)",
    issuer: "EY (Forage)",
    category: "Job Simulations",
    date: "May 17, 2025",
    link: "http://theforage.com/",
  },

  // 10. Business & Professional Skills
  {
    title: "Power Searching with Google",
    issuer: "Google (edX)",
    category: "Business & Professional",
    date: "Apr 14, 2024",
    link: "https://courses.edx.org/certificates/f3eef07d221e45e6b997f054b8211a5a",
  },
  {
    title: "Agile and Scrum Fundamentals",
    issuer: "IBM (edX)",
    category: "Business & Professional",
    date: "Mar 31, 2024",
    link: "https://courses.edx.org/certificates/792875807ff54212bed48beb81457490",
  },
  {
    title: "Agile Scrum in Practice",
    issuer: "Infosys Springboard",
    category: "Business & Professional",
    date: "Dec 10, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Online Advertising & Social Media",
    issuer: "USMx (edX)",
    category: "Business & Professional",
    date: "Apr 07, 2024",
    link: "https://courses.edx.org/certificates/2eb87dc22cc7496bacdd09a9a9f7dfb5",
  },
  {
    title: "User Experience (UX)",
    issuer: "Infosys Springboard",
    category: "Business & Professional",
    date: "Dec 21, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "High Impact Presentations",
    issuer: "Infosys Springboard",
    category: "Business & Professional",
    date: "Dec 10, 2025",
    link: "https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_012686673646936064647_shared/overview",
  },
  {
    title: "Email Writing Skills",
    issuer: "Infosys Springboard",
    category: "Business & Professional",
    date: "Dec 10, 2025",
    link: "https://verify.onwingspan.com/",
  },
  {
    title: "Time Management",
    issuer: "Infosys Springboard",
    category: "Business & Professional",
    date: "Dec 16, 2025",
    link: "https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_012985921210736640721_shared/overview",
  },
  {
    title: "Conversational English Skills",
    issuer: "TsinghuaX (edX)",
    category: "Business & Professional",
    date: "Mar 30, 2024",
    link: "https://courses.edx.org/certificates/d06e1b957a5b41b49c09d0def48878d7",
  },
  {
    title: "World Music: Global Rhythms",
    issuer: "MITx (edX)",
    category: "Business & Professional",
    date: "Mar 31, 2024",
    link: "https://courses.edx.org/certificates/41b568e44a0f42ac90512168b9194d64",
  },
  {
    title: "Causal Diagrams",
    issuer: "HarvardX (edX)",
    category: "Business & Professional",
    date: "Mar 31, 2024",
    link: "https://courses.edx.org/certificates/6647581adf6448fb9159089a29272087",
  },
  {
    title: "Developing your programming pedagogy",
    issuer: "Raspberry Pi Found.",
    category: "Business & Professional",
    date: "Nov 23, 2024",
    link: "https://courses.edx.org/certificates/de139bf2467e4af6b72a062e7cb9a5f9",
  },
  {
    title: "Teach Computing: Computer networks",
    issuer: "Raspberry Pi Found.",
    category: "Business & Professional",
    date: "Nov 23, 2024",
    link: "https://courses.edx.org/certificates/2bdd3f7bea0846f6b2df5b7134d3491d",
  },
];

const categories = ["All", "Google", "IBM", "AWS", "Infosys", "NVIDIA", "Others"];

const INITIAL_VISIBLE_COUNT = 12;

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // Group by issuers based on the filters
  const filteredCerts = useMemo(() => {
    return allCertifications.filter((cert) => {
      if (activeCategory === "All") return true;
      const issuerLower = cert.issuer.toLowerCase();
      if (activeCategory === "Google") return issuerLower.includes("google");
      if (activeCategory === "IBM") return issuerLower.includes("ibm");
      if (activeCategory === "AWS") return issuerLower.includes("aws");
      if (activeCategory === "Infosys") return issuerLower.includes("infosys");
      if (activeCategory === "NVIDIA") return issuerLower.includes("nvidia");
      if (activeCategory === "Others") {
        return (
          !issuerLower.includes("google") &&
          !issuerLower.includes("ibm") &&
          !issuerLower.includes("aws") &&
          !issuerLower.includes("infosys") &&
          !issuerLower.includes("nvidia")
        );
      }
      return true;
    });
  }, [activeCategory]);

  const displayedCerts = useMemo(() => {
    if (showAll) return filteredCerts;
    return filteredCerts.slice(0, INITIAL_VISIBLE_COUNT);
  }, [filteredCerts, showAll]);

  return (
    <section id="certifications">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Credentials</div>
          <h2 className="section-title">Certifications</h2>
          <div className="divider"></div>
        </div>

        <div className="cert-filters reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(false);
              }}
              className={`cert-filter ${activeCategory === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="certs-grid reveal" id="certsGrid">
          {displayedCerts.map((cert, i) => (
            <div key={i} className="cert-card">
              <div className="cert-issuer">{cert.issuer}</div>
              <div className="cert-name">{cert.title}</div>
              <div className="cert-date">{cert.date}</div>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-verify"
                >
                  Verify ↗
                </a>
              )}
            </div>
          ))}
        </div>

        {filteredCerts.length > INITIAL_VISIBLE_COUNT && (
          <button
            className="show-more-btn"
            id="showMoreBtn"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Show Less ↑" : "Show More Certifications ↓"}
          </button>
        )}
      </div>
    </section>
  );
}
