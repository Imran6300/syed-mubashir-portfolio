import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

// ─── Social Icons (inline SVG, no lib dependency) ───────────────────────────
const IconGitHub = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
const IconLinkedIn = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const IconMail = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const IconTwitterX = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const IconArrowRight = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);
const IconCode = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const IconCpu = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);
const IconLayers = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);
const IconChat = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const IconDown = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// ─── Smooth scroll helper ────────────────────────────────────────────────────
const scrollTo = (id) => {
  const el = document.getElementById(id.replace("#", ""));
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

// ─── Typewriter hook ─────────────────────────────────────────────────────────
const ROLES = [
  "IoT Specialist",
  "MERN Developer",
  "SaaS Architect",
  "ESP32 Engineer",
  "Full-Stack Dev",
];
function useTypewriter(
  words,
  typingSpeed = 80,
  deletingSpeed = 45,
  pauseMs = 2000,
) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const word = words[wordIndex];
    let timeout;
    if (!isDeleting && displayed.length < word.length) {
      timeout = setTimeout(
        () => setDisplayed(word.slice(0, displayed.length + 1)),
        typingSpeed,
      );
    } else if (!isDeleting && displayed.length === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(word.slice(0, displayed.length - 1)),
        deletingSpeed,
      );
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [
    displayed,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseMs,
  ]);
  return displayed;
}

// ─── Skill chip data ─────────────────────────────────────────────────────────
const SKILL_CHIPS = [
  {
    icon: <IconCode />,
    label: "MERN Stack",
    sub: "React · Node · MongoDB",
    badge: "Expert",
    accent: "#64FFDA",
    iconBg: "rgba(100,255,218,0.12)",
  },
  {
    icon: <IconCpu />,
    label: "IoT / ESP32",
    sub: "Real-time monitoring",
    badge: "Active",
    accent: "#4FC3F7",
    iconBg: "rgba(79,195,247,0.12)",
  },
  {
    icon: <IconLayers />,
    label: "Scalable SaaS",
    sub: "Architecture · DevOps",
    badge: "Building",
    accent: "#A78BFA",
    iconBg: "rgba(167,139,250,0.12)",
  },
];

// ─── Nav links ───────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { num: "01", label: "About", id: "about" },
  { num: "02", label: "Work", id: "work" },
  { num: "03", label: "Projects", id: "projects" },
  { num: "04", label: "Contact", id: "contact" },
];

// ─── Main Component ──────────────────────────────────────────────────────────
export default function HeroSection() {
  const role = useTypewriter(ROLES);
  const mouseX = useMotionValue(
    typeof window !== "undefined" ? window.innerWidth / 2 : 500,
  );
  const mouseY = useMotionValue(
    typeof window !== "undefined" ? window.innerHeight / 2 : 400,
  );
  const springCfg = { damping: 30, stiffness: 120 };
  const glowX = useSpring(mouseX, springCfg);
  const glowY = useSpring(mouseY, springCfg);

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [mouseX, mouseY]);

  // ─ Stagger animation variants ─
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.7 } },
  };
  const slideRight = {
    hidden: { opacity: 0, x: 40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      ref={heroRef}
      id="home"
      style={{
        position: "relative",
        minHeight: "calc(100vh - 80px)",
        paddingTop: "80px",
        background: "#0A192F",
        fontFamily: "'Inter', sans-serif",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Grid background ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(100,255,218,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(100,255,218,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* ── Ambient orbs ── */}
      <div
        style={{
          position: "absolute",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "rgba(100,255,218,0.06)",
          filter: "blur(90px)",
          top: -120,
          right: "8%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 340,
          height: 340,
          borderRadius: "50%",
          background: "rgba(79,195,247,0.07)",
          filter: "blur(80px)",
          bottom: "5%",
          left: "-80px",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: "rgba(167,139,250,0.05)",
          filter: "blur(60px)",
          bottom: "25%",
          right: "15%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* ── Mouse spotlight ── */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
          background: `radial-gradient(640px circle at ${glowX}px ${glowY}px, rgba(100,255,218,0.055), transparent 75%)`,
        }}
      />

      {/* ════════════ NAV ════════════ */}

      {/* ════════════ HERO BODY ════════════ */}
      <div
        className="hero-main"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start", // ✅ prevents vertical squeezing
          justifyContent: "center",
          padding: "clamp(40px, 6vh, 58px) clamp(16px, 4vw, 50px) 60px",
          position: "relative",
          zIndex: 5,
          gap: "clamp(20px, 4vw, 56px)",
          maxWidth: 1280,
          margin: "0 auto",
          width: "100%",
          flexWrap: "wrap", // ✅ important
        }}
      >
        {/* ── LEFT ── */}
        <motion.div
          className="hero-left"
          variants={container}
          initial="hidden"
          animate="show"
          style={{
            flex: "1 1 500px", // ✅ responsive base
            maxWidth: "620px",
            textAlign: "left",
          }}
        >
          {/* Availability badge */}
          <motion.div variants={fadeUp}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "7px 16px",
                borderRadius: 100,
                border: "1px solid rgba(100,255,218,0.22)",
                background: "rgba(100,255,218,0.05)",
                marginBottom: 32,
              }}
            >
              <span
                style={{
                  position: "relative",
                  width: 8,
                  height: 8,
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#64FFDA",
                    position: "relative",
                    zIndex: 1,
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    inset: -3,
                    borderRadius: "50%",
                    background: "rgba(100,255,218,0.35)",
                    animation: "pingAnim 1.6s ease-out infinite",
                  }}
                />
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: "#64FFDA",
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                }}
              >
                Open to Global Opportunities · 2026
              </span>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.div
            variants={fadeUp}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 14,
              color: "#64FFDA",
              marginBottom: 10,
              letterSpacing: "0.05em",
            }}
          >
            Hi, my name is
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            style={{ margin: "0 0 14px", lineHeight: 0.9 }}
          >
            <span
              style={{
                display: "block",
                fontSize: "clamp(40px, 8vw, 96px)",
                fontWeight: 900,
                color: "#CCD6F6",
                letterSpacing: "-3px",
              }}
            >
              Syed
            </span>
            <span
              style={{
                display: "block",
                fontSize: "clamp(40px, 8vw, 96px)",
                fontWeight: 900,
                letterSpacing: "-3px",
                background:
                  "linear-gradient(135deg, #64FFDA 0%, #4FC3F7 55%, #A78BFA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Mubashir.
            </span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            className="hero-role"
            variants={fadeUp}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 24,
            }}
          >
            <span style={{ fontSize: 18, fontWeight: 600, color: "#8892B0" }}>
              Full-Stack Developer
            </span>
            <span
              style={{
                height: 1,
                width: 48,
                background: "rgba(100,255,218,0.3)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 14,
                color: "#64FFDA",
                letterSpacing: "0.03em",
              }}
            >
              {role}
              <span
                style={{
                  animation: "blinkCursor 1s step-end infinite",
                  marginLeft: 2,
                }}
              >
                |
              </span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: 16,
              lineHeight: 1.9,
              color: "#8892B0",
              maxWidth: 510,
              marginBottom: 40,
            }}
          >
            I engineer{" "}
            <strong style={{ color: "#CCD6F6", fontWeight: 600 }}>
              secure, high-performance SaaS platforms
            </strong>{" "}
            and real-time IoT monitoring systems — shipping products that help{" "}
            <strong style={{ color: "#CCD6F6", fontWeight: 600 }}>
              businesses scale beyond limits
            </strong>
            .
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="hero-cta"
            variants={fadeUp}
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16,
              marginBottom: 52,
            }}
          >
            <PrimaryBtn onClick={() => scrollTo("projects")}>
              View My Work <IconArrowRight />
            </PrimaryBtn>
            <SecondaryBtn onClick={() => scrollTo("contact")}>
              Let's Talk <IconChat />
            </SecondaryBtn>

            {/* Social icons */}
            <div
              className="hero-social"
              style={{ display: "flex", gap: 10, marginLeft: 8 }}
            >
              {[
                {
                  icon: <IconGitHub />,
                  href: "https://github.com/imran6300",
                  label: "GitHub",
                },
                {
                  icon: <IconLinkedIn />,
                  href: "https://www.linkedin.com/in/syed-mubashir-ahmed-475362340",
                  label: "LinkedIn",
                },
                {
                  icon: <IconMail />,
                  href: "mailto:syedimran8742@gmail.com",
                  label: "Email",
                },
              ].map(({ icon, href, label }) => (
                <SocialBtn key={label} href={href} label={label}>
                  {icon}
                </SocialBtn>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="hero-stats"
            variants={fadeUp}
            style={{
              display: "flex",
              flexWrap: "wrap", // ✅ prevents overflow
              gap: "20px 30px",
              marginTop: 10,
            }}
          >
            {[
              { num: "1+", label: "Years Exp" },
              { num: "4+", label: "Live Systems" },
              { num: "2+", label: "IoT Devices" },
              { num: "100%", label: "Remote Ready" },
            ].map(({ num, label }) => (
              <div key={label} style={{ minWidth: "120px" }}>
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 900,
                    color: "#CCD6F6",
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    color: "#8892B0",
                    marginTop: 5,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT (mobile‑hidden on XS) ── */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          animate="show"
          style={{
            flex: "1 1 320px",
            maxWidth: "360px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            width: "100%",
          }}
          className="hero-right"
        >
          {/* Profile card */}
          <div
            style={{
              background: "rgba(17,34,64,0.85)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 22,
              overflow: "hidden",
              backdropFilter: "blur(16px)",
              position: "relative",
            }}
          >
            {/* Top shimmer line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 1,
                background:
                  "linear-gradient(90deg, transparent, rgba(100,255,218,0.45), transparent)",
              }}
            />

            {/* Photo */}
            <div
              style={{
                position: "relative",
                height: "clamp(240px, 28vw, 320px)",
                overflow: "hidden",
                background: "linear-gradient(180deg, #112240 0%, #0D1F3C 100%)",
              }}
            >
              <img
                src="/Imran.png"
                alt="Syed Mubashir"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  filter: "grayscale(1) brightness(0.85)",
                  transition: "filter 0.7s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.filter = "grayscale(0) brightness(1)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.filter = "grayscale(1) brightness(0.85)")
                }
              />
              {/* Bottom fade */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  insetInline: 0,
                  background:
                    "linear-gradient(transparent, rgba(10,25,47,0.98))",
                  padding: "32px 18px 18px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 12,
                    overflow: "hidden",
                  }}
                >
                  {[
                    { val: "MERN", sub: "Stack" },
                    { val: "ESP32", sub: "IoT" },
                    { val: "SaaS", sub: "Products" },
                  ].map(({ val, sub }, i, arr) => (
                    <React.Fragment key={val}>
                      <div
                        style={{
                          flex: 1,
                          padding: "10px 0",
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            fontSize: 16,
                            fontWeight: 900,
                            color: "#64FFDA",
                            lineHeight: 1,
                          }}
                        >
                          {val}
                        </div>
                        <div
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 9,
                            color: "#8892B0",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            marginTop: 3,
                          }}
                        >
                          {sub}
                        </div>
                      </div>
                      {i < arr.length - 1 && (
                        <div
                          style={{
                            width: 1,
                            background: "rgba(255,255,255,0.1)",
                            alignSelf: "stretch",
                          }}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Status bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 18px",
                background: "rgba(255,255,255,0.02)",
                borderTop: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#64FFDA",
                  flexShrink: 0,
                  animation: "pulseDot 2s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: "#8892B0",
                }}
              >
                Currently building ·{" "}
                <strong style={{ color: "#64FFDA", fontWeight: 600 }}>
                  Next SaaS product
                </strong>
              </span>
            </div>
          </div>

          {/* Skill chips */}
          {SKILL_CHIPS.map(({ icon, label, sub, badge, accent, iconBg }, i) => (
            <motion.div
              key={label}
              animate={{ y: [0, i % 2 === 0 ? -8 : -5, 0] }}
              transition={{
                duration: 3.5 + i * 0.7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.6,
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "13px 16px",
                background: "rgba(17,34,64,0.9)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderLeft: `3px solid ${accent}`,
                borderRadius: 12,
                backdropFilter: "blur(10px)",
                cursor: "pointer",
                transition:
                  "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
              }}
              whileHover={{
                x: -5,
                boxShadow: `0 8px 32px rgba(0,0,0,0.35)`,
                borderColor: `rgba(255,255,255,0.14)`,
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 9,
                  background: iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: accent,
                }}
              >
                {icon}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{ fontSize: 13, fontWeight: 700, color: "#CCD6F6" }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: "#8892B0",
                    marginTop: 2,
                  }}
                >
                  {sub}
                </div>
              </div>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  padding: "4px 10px",
                  borderRadius: 100,
                  background: `${accent}18`,
                  color: accent,
                  fontWeight: 700,
                  border: `1px solid ${accent}30`,
                }}
              >
                {badge}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Global keyframes injected ── */}
      <style>{`@media (max-width: 768px) {

  /* 🔥 MAIN LAYOUT */
  .hero-main {
    flex-direction: column !important;
    align-items: flex-start !important;
    padding: 24px 20px 80px !important; /* more breathing */
    gap: 32px !important;
  }
  .hero-left h1 span {
    display: block;
    width: 100%;
    text-align: left;
    letter-spacing: -1px;
  }

  .hero-left {
    padding-right: 10px;
  }

  .hero-role {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 6px !important;
  }

  .hero-role span {
    white-space: normal !important;
  }

  .hero-role span:last-child {
    white-space: nowrap !important;
  }

  .hero-left {
    flex: 1 1 100% !important;
    max-width: 100% !important;
  }

  /* 🔥 HEADINGS */
  h1 span {
    font-size: clamp(34px, 9vw, 52px) !important;
    letter-spacing: -1px !important;
  }

  /* 🔥 TYPEWRITER FIX (VERY IMPORTANT) */
  .hero-left > div:nth-child(4) {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 6px !important;
  }

  .hero-left > div:first-child {
  margin-bottom: 20px !important;
}

  .hero-left > div:nth-child(4) span:last-child {
    white-space: nowrap !important; /* prevents ugly break */
  }

  /* 🔥 CTA STACK */
  .hero-cta {
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 14px !important;
    margin-bottom: 28px !important;
    width: 100%;
  }

  /* 🔥 SOCIAL ICONS CENTER FIX */
  .hero-social {
    margin-left: 0 !important;
    margin-top: 8px !important;
    justify-content: center !important;
    width: 100%;
  }

  

  /* 🔥 STATS PERFECT GRID */
  .hero-stats {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 22px !important;
    width: 100% !important;
    margin-top: 20px !important;
  }

  .hero-stats > div {
    min-width: unset !important;
    text-align: center !important;
  }

  /* 🔥 HIDE RIGHT */
  .hero-right {
    display: none !important;
  }

  /* 🔥 SCROLL FIX (CRITICAL) */
  .hero-scroll {
    display: none !important;
  }
}`}</style>
    </section>
  );
}

// ─── Reusable sub-components ─────────────────────────────────────────────────

function PrimaryBtn({ onClick, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        gap: 10,
        padding: "14px 34px",
        background: hovered ? "#52E8C4" : "#64FFDA",
        color: "#0A192F",
        border: "none",
        borderRadius: 7,
        cursor: "pointer",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 800,
        fontSize: 14,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 14px 44px rgba(100,255,218,0.32)"
          : "0 4px 14px rgba(100,255,218,0.1)",
        transition: "all 0.18s ease",
      }}
    >
      {children}
    </button>
  );
}

function SecondaryBtn({ onClick, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",

        width: "100%",
        justifyContent: "center",

        alignItems: "center",
        gap: 9,
        padding: "14px 28px",
        color: "#64FFDA",
        border: `1px solid ${hovered ? "#64FFDA" : "rgba(100,255,218,0.3)"}`,
        borderRadius: 7,
        cursor: "pointer",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 700,
        fontSize: 14,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        background: hovered ? "rgba(100,255,218,0.07)" : "transparent",
        transition: "all 0.18s ease",
      }}
    >
      {children}
    </button>
  );
}

function SocialBtn({ href, label, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 40,
        height: 40,
        borderRadius: 8,
        border: `1px solid ${hovered ? "rgba(100,255,218,0.5)" : "rgba(255,255,255,0.1)"}`,
        background: hovered ? "rgba(100,255,218,0.07)" : "rgba(17,34,64,0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: hovered ? "#64FFDA" : "#8892B0",
        textDecoration: "none",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.18s ease",
      }}
    >
      {children}
    </a>
  );
}
