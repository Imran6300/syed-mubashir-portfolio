import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2, Target, Lightbulb } from "lucide-react";

const projects = [
  {
    title: "Real-Time IoT Monitoring Dashboard",
    category: "Industrial Tech",

    problem:
      "Frequent equipment failures and delayed response times were increasing operational costs due to lack of real-time monitoring and visibility into sensor data.",

    solution:
      "Engineered a real-time monitoring system using MQTT and Socket.IO that streams live sensor data with low latency, triggers instant alerts for abnormal conditions, and provides a centralized dashboard for system visibility.",

    result:
      "Enabled proactive maintenance by identifying anomalies early, reducing downtime risk and improving operational reliability across connected devices.",

    impact:
      "Designed to handle continuous real-time data streams with sub-second updates and scalable event-driven architecture.",

    trustSignals: [
      "Handles real-time sensor data using MQTT protocol",
      "Built with event-driven architecture for scalability",
      "Designed for production-level monitoring use cases",
    ],

    tech: ["React", "Node.js", "MQTT", "MongoDB", "Socket.IO", "Chart.js"],
    images: ["/iotdashboard.png"],
    liveLink: "https://live-temperature-sensor.vercel.app",
  },

  {
    title: "Overseas Study Application System",
    category: "EdTech Solution",

    problem:
      "Education agencies were losing potential students due to scattered communication, manual tracking, and lack of a centralized system to manage applications efficiently.",

    solution:
      "Developed a centralized platform to manage student applications, automate counselor assignments, and enable real-time communication between students and agencies using Socket.IO.",

    result:
      "Streamlined operations by reducing manual effort, improving response time, and allowing agencies to handle a higher volume of student applications efficiently.",

    impact:
      "Improved workflow efficiency and reduced communication gaps across multi-step application processes.",

    trustSignals: [
      "Real-time communication system using WebSockets",
      "Centralized dashboard for application tracking",
      "Designed for multi-user, role-based workflows",
    ],

    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Cloudinary"],
    images: ["/overseas.png"],
    liveLink: "https://khizaroverseas.in",
  },

  {
    title: "High-Performance E-commerce Platform",
    category: "Digital Commerce",

    problem:
      "Slow-loading pages and complex checkout flows were causing users to drop off before completing purchases, reducing overall conversion potential.",

    solution:
      "Built a performance-optimized e-commerce platform using Next.js with server-side rendering, fast navigation, and a simplified checkout flow to improve user experience.",

    result:
      "Reduced friction in the buying journey, improved usability, and created a faster, smoother shopping experience that supports higher conversion potential.",

    impact:
      "Optimized frontend performance and user flow to minimize drop-offs and enhance customer engagement.",

    trustSignals: [
      "Optimized using Next.js SSR for faster load times",
      "Mobile-first responsive design for better UX",
      "Built with scalable backend architecture",
    ],

    tech: ["Next.js", "MongoDB", "Tailwind CSS", "Express"],
    images: ["/ecommers.png"],
    liveLink: "https://ecommers-store-569.vercel.app/",
  },
];

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-12 items-center`}
    >
      {/* Visual Side */}
      {/* Visual Side - Fixed Zoom Issue */}
      <div className="w-full lg:w-1/2 group relative">
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#64FFDA] to-blue-500 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#020c1b] p-4 lg:p-8">
          <div className="aspect-video w-full overflow-hidden rounded-lg shadow-2xl">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>

          {/* Subtle Overlay to make colors pop */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0A192F]/40 to-transparent"></div>
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div>
          <span className="text-[#64FFDA] font-mono text-sm tracking-widest uppercase">
            {project.category}
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-white mt-2">
            {project.title}
          </h3>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4">
            <Target className="text-[#64FFDA] shrink-0 w-6 h-6" />
            <p className="text-[#8892B0] text-sm md:text-base leading-relaxed">
              <strong className="text-white block italic mb-1">
                The Challenge:
              </strong>
              {project.problem}
            </p>
          </div>

          <div className="flex gap-4">
            <Lightbulb className="text-[#64FFDA] shrink-0 w-6 h-6" />
            <p className="text-[#8892B0] text-sm md:text-base leading-relaxed">
              <strong className="text-white block italic mb-1">
                The Strategic Solution:
              </strong>
              {project.solution}
            </p>
          </div>

          <div className="flex gap-4">
            <CheckCircle2 className="text-[#64FFDA] shrink-0 w-6 h-6" />
            <p className="text-[#64FFDA] text-sm md:text-base font-medium leading-relaxed">
              <strong className="text-white block italic mb-1 uppercase text-xs tracking-wider">
                Business Impact:
              </strong>
              {project.result}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-[10px] uppercase tracking-wider px-3 py-1 bg-[#64FFDA]/5 border border-[#64FFDA]/20 text-[#64FFDA] rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-4">
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#64FFDA] text-[#0A192F] rounded-lg font-bold shadow-lg shadow-[#64FFDA]/10 hover:shadow-[#64FFDA]/20 transition-all"
          >
            View Live System <ExternalLink size={18} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#0A192F] py-32 px-6 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* 🔥 STRATEGIC HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <p className="text-[#64FFDA] font-mono mb-4 text-sm tracking-[0.3em] uppercase">
            Proven Expertise
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-8">
            Turning Complex Problems Into <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64FFDA] to-blue-400">
              Profitable Digital Assets
            </span>
          </h2>
          <p className="text-[#8892B0] text-xl max-w-2xl leading-relaxed">
            I don't just build websites; I engineer solutions that drive
            efficiency, increase revenue, and scale with your business goals.
          </p>
        </motion.div>

        {/* 🔥 PROJECTS LIST */}
        <div className="space-y-40">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
