"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
const projects = [
  {
    num: "01",
    title: "ShrFlow — Enterprise Email Engine",
    subtitle: "High-performance, multi-tenant email platform",
    description:
      "Architected a high-performance, multi-tenant email marketing engine as an open-source alternative to Mailchimp. Built a high-velocity async CSV ingestion and audience segmentation system using FastAPI, RabbitMQ, and Redis. Features a custom React drag-and-drop MJML email builder, real-time tracking webhooks via AWS SNS, and dual-routing SMTP and AWS SES channels. Presented architecture directly to byteXL founder.",
    problem: "Pitched system directly to the Founder of byteXL, demonstrating high-scale async task isolation that processes gigabyte-scale inputs without service disruption.",
    tech: ["Next.js 14", "FastAPI", "RabbitMQ", "Supabase", "Docker", "AWS SES", "AWS SNS", "Redis"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    featured: true,
    accent: "#7c3aed",
  },
  {
    num: "02",
    title: "Maritime Vessel Tracking & Port Analytics",
    subtitle: "Geospatial real-time port tracking dashboard",
    description:
      "Built a full-stack real-time tracking platform monitoring 1,000+ commercial vessels. Leveraged geospatial PostgreSQL indexing and PostGIS queries for live boundary detection and traffic density mapping. Port operations teams receive dynamic traffic notifications via WebSockets, optimizing cargo loading times and easing shipyard congestion.",
    problem: "Maritime operators struggled to coordinate docking schedules and track vessel latency across overlapping terminal boundaries.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "PostGIS", "WebSockets", "Express", "Tailwind CSS"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    featured: true,
    accent: "#00f5ff",
  },
  {
    num: "03",
    title: "Skill Bridge AI",
    subtitle: "AI-driven skill-mapping & recommendation core",
    description:
      "Engineered an intelligent path-finding agent that parses user technical profiles and outputs customized course modules. Integrates LLM reasoning via LangChain with Pinecone vector search over professional skill mappings, identifying critical knowledge gaps and creating real-time target curriculum structures.",
    problem: "Bridging the persistent curriculum gap between typical university curricula and core competencies needed for hardware & systems software roles.",
    tech: ["React", "FastAPI", "LangChain", "Vector DBs", "OpenAI API", "Python", "TypeScript"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    featured: false,
    accent: "#4ade80",
  },
  {
    num: "04",
    title: "Free GATE Preparation Platform",
    subtitle: "Open-access CS/ECE learning platform",
    description:
      "Designed and launched a completely free web-based testing platform for GATE CS/ECE aspirants. Features an adaptive question delivery engine, comprehensive analytics dashboards for testing performance, and interactive structured syllabus paths designed from standard textbooks.",
    problem: "Premium mock exams and structured preparation analytics are often walled behind prohibitively expensive subscriptions.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Supabase Auth", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    featured: false,
    accent: "#f5a623",
  },
];

const cardAnim = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { ease: [0.16, 1, 0.3, 1] as [number, number, number, number], duration: 0.65 } },
};

export default function Projects() {

  return (
    <section id="projects" className="relative py-28 w-full">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ease: [0.16, 1, 0.3, 1] as [number, number, number, number], duration: 0.6 }}
        >
          <div className="section-divider">
            <h2>Projects</h2>
            <div className="line" />
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {projects.map((project, i) => (
              <motion.article
                key={project.num}
                variants={cardAnim}
                custom={i}
                className="p-6 flex flex-col h-full group glass-card"
              >
                {/* Thumbnail Support */}
                <div className="w-full aspect-[16/9] mb-6 rounded-xl bg-[#000000]/50 border border-white/[0.02] overflow-hidden flex items-center justify-center relative transition-colors shadow-inner shadow-black/50">
                  {/* Image placeholder / Number */}
                  <span
                    className="font-bold text-6xl opacity-10 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-20"
                    style={{ color: project.accent }}
                  >
                    {project.num}
                  </span>
                  {/* Subtle gradient */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(circle at center, ${project.accent}1a 0%, transparent 70%)`,
                    }}
                  />
                </div>

                <div className="mb-4 flex-1">
                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#a1a1aa] transition-all">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#00f5ff] font-medium mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-[14px] text-zinc-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] font-medium text-zinc-300 bg-white/[0.02] border border-white/[0.05] rounded-md cursor-default group-hover:border-white/10 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="px-2 py-1 text-[11px] font-medium text-zinc-500">
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-5 pt-5 border-t border-white/[0.04] mt-auto">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span className="font-medium text-xs">Source</span>
                  </Link>
                  <Link
                    href={project.demo}
                    className="flex items-center gap-2 text-zinc-400 hover:text-[#00f5ff] transition-colors text-sm"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    <span className="font-medium text-xs">Live Demo</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <Link
              href="https://github.com/JakkulaVeerababu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#555] hover:text-[#5b7fff] transition-colors font-mono group"
            >
              <FiGithub className="w-4 h-4" />
              <span className="link-underline">More experiments on GitHub</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
