import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  // 🔥 Animation Variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#0A192F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* HEADER */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center lg:text-left"
        >
          <motion.p variants={fadeUp} className="text-[#64FFDA] font-mono mb-3">
            01. About Me
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          >
            Building systems that scale in the real world
          </motion.h2>
        </motion.div>

        {/* MAIN GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          {/* LEFT CONTENT */}
          <motion.div variants={fadeLeft} className="lg:col-span-7 space-y-6">
            <motion.p
              variants={fadeUp}
              className="text-[#CCD6F6] text-lg leading-relaxed"
            >
              I’m{" "}
              <span className="text-white font-semibold">Syed Mubashir</span>, a
              MERN stack developer with a strong interest in{" "}
              <span className="text-[#64FFDA]">
                IoT and performance-critical systems
              </span>
              . I enjoy turning complex ideas into clean, maintainable, and
              scalable applications.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[#8892B0] text-lg leading-relaxed"
            >
              From full-stack web platforms to real-time IoT dashboards, I focus
              on building solutions that are reliable, secure, and ready for
              production use.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[#8892B0] text-lg leading-relaxed"
            >
              I care deeply about clean code, system design, and user
              experience. My goal is always to ship products that solve real
              problems — not just demos.
            </motion.p>

            {/* HIGHLIGHTS */}
            <motion.div
              variants={container}
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {[
                { label: "Full-Stack", value: "MERN" },
                { label: "Focus", value: "IoT + Web" },
                { label: "Mindset", value: "Production-Ready" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  }}
                  className="p-5 rounded-xl bg-[#112240]/60 border border-white/10
                  hover:border-[#64FFDA]/40 transition"
                >
                  <p className="text-[#64FFDA] font-mono text-sm">
                    {item.label}
                  </p>
                  <p className="text-white font-semibold text-lg mt-1">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div variants={fadeRight} className="lg:col-span-5">
            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
              }}
              className="p-8 rounded-2xl bg-[#112240]/70 border border-white/10 backdrop-blur"
            >
              <h3 className="text-white font-semibold text-xl mb-6">
                Tools & Technologies
              </h3>

              {/* SKILLS */}
              <motion.div variants={container} className="flex flex-wrap gap-3">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "PostgreSQL",
                  "Tailwind CSS",
                  "REST APIs",
                  "MQTT",
                  "ESP32",
                  "Docker",
                  "Git & GitHub",
                ].map((skill) => (
                  <motion.span
                    key={skill}
                    variants={fadeUp}
                    whileHover={{
                      scale: 1.08,
                      borderColor: "#64FFDA",
                      color: "#64FFDA",
                    }}
                    className="px-4 py-2 rounded-full text-sm font-mono
                    bg-[#0A192F] text-[#8892B0]
                    border border-white/10
                    transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              {/* STATS */}
              <motion.div
                variants={container}
                className="mt-10 grid grid-cols-3 gap-6 text-center"
              >
                {[
                  { val: "7+", label: "Projects" },
                  { val: "MERN", label: "Specialization" },
                  { val: "IoT", label: "Experience" },
                ].map((item) => (
                  <motion.div key={item.label} variants={fadeUp}>
                    <p className="text-3xl font-bold text-[#64FFDA]">
                      {item.val}
                    </p>
                    <p className="text-sm text-[#8892B0] mt-1">{item.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
