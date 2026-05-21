"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Search, Trophy, CheckCircle, Cpu, Globe } from "lucide-react";

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
    link: "https://verify.onwingspan.com/",
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

const categories = [
  "All",
  "Professional",
  "AI & ML",
  "Data Analytics",
  "Software & Web Dev",
  "Cloud & DevOps",
  "IoT & Industrial",
  "Cyber & Blockchain",
  "Databases",
  "Job Simulations",
  "Business & Professional",
];

const ITEMS_PER_PAGE = 12;

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Compute filtered certificates based on search & category
  const filteredCerts = useMemo(() => {
    return allCertifications.filter((cert) => {
      const matchesCategory =
        activeCategory === "All" || cert.category === activeCategory;
      const matchesSearch =
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const displayedCerts = useMemo(() => {
    return filteredCerts.slice(0, visibleCount);
  }, [filteredCerts, visibleCount]);

  const loadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <section id="certifications" className="relative py-28 w-full">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
        >
          <div className="section-divider">
            <h2>Professional Certifications</h2>
            <div className="line" />
          </div>

          <p className="text-[#666] text-sm font-mono mb-10 -mt-4">
            <span className="text-[#aaa] font-semibold">{allCertifications.length}+ verified credentials</span> spanning AI research, cloud architecture, system design, and advanced data analytics.
          </p>

          {/* Search and Filters panel */}
          <div className="space-y-6 mb-12">
            {/* Search Input */}
            <div className="relative max-w-md w-full">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(ITEMS_PER_PAGE);
                }}
                placeholder="Search certifications by name, issuer, or keyword..."
                className="w-full bg-white/[0.02] border border-white/[0.06] rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-white/[0.2] focus:bg-white/[0.04] transition-all placeholder:text-[#444]"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setVisibleCount(ITEMS_PER_PAGE);
                  }}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs font-mono text-zinc-500 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleCount(ITEMS_PER_PAGE);
                  }}
                  className={`px-3 py-1.5 text-[11px] font-mono rounded-lg border transition-all duration-300 ${
                    activeCategory === cat
                      ? "border-white bg-white text-black font-semibold"
                      : "border-white/[0.06] bg-white/[0.01] text-zinc-500 hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Certificates Grid */}
          {displayedCerts.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              <AnimatePresence mode="popLayout">
                {displayedCerts.map((cert) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    key={cert.title}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] group hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-300 flex flex-col justify-between h-[160px]"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block truncate max-w-[150px]">
                          {cert.category}
                        </span>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          {cert.issuer === "Google" && <CheckCircle className="w-3 h-3 text-[#4ade80]" />}
                          {cert.issuer.includes("NVIDIA") && <Cpu className="w-3 h-3 text-[#76b900]" />}
                          {cert.issuer.includes("AWS") && <Globe className="w-3 h-3 text-[#ff9900]" />}
                        </div>
                      </div>

                      <h3 className="text-[12px] font-bold text-white/90 leading-snug group-hover:text-white line-clamp-3 transition-colors">
                        {cert.title}
                      </h3>
                    </div>

                    <div className="pt-3 border-t border-white/[0.02] flex items-end justify-between mt-auto">
                      <div className="min-w-0">
                        <p className="text-[10px] text-zinc-500 truncate">{cert.issuer}</p>
                        <p className="text-[9px] font-mono text-zinc-600 mt-0.5">{cert.date}</p>
                      </div>
                      
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-lg bg-white/[0.02] hover:bg-white/[0.08] flex items-center justify-center border border-white/[0.05] group-hover:border-white/[0.15] text-[#444] group-hover:text-white/80 transition-all flex-shrink-0"
                          title="Verify Certificate"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 border border-dashed border-white/[0.05] rounded-2xl bg-white/[0.01]"
            >
              <Trophy className="w-8 h-8 text-zinc-600 mx-auto mb-3" />
              <p className="text-zinc-400 text-sm font-medium">No certificates found matching your selection.</p>
              <p className="text-zinc-600 text-xs mt-1">Try modifying your search queries or selecting another category.</p>
            </motion.div>
          )}

          {/* Load More Button */}
          {filteredCerts.length > visibleCount && (
            <div className="mt-12 text-center">
              <button
                onClick={loadMore}
                className="px-6 py-2.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-xs font-mono text-zinc-400 hover:text-white transition-all"
              >
                Show More (+{filteredCerts.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
