import React from "react";

export default function Footer() {
  return (
    <footer className="relative py-20 bg-[#0A192F] overflow-hidden border-t border-white/10">
      {/* Background Image (softer) */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://thumbs.dreamstime.com/b/technology-background-glowing-blue-cyan-electronic-circuit-board-lines-dark-gradient-abstract-to-light-403924659.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay for color consistency */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/70 to-[#0A192F]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 text-center">
        {/* Quick Nav */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-8 text-[#8892B0] font-mono text-sm">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  relative
                  hover:text-[#64FFDA]
                  transition-colors duration-300
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[1px] after:w-0
                  after:bg-[#64FFDA]
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-10 mb-12">
          {[
            {
              href: "https://github.com/imran6300",
              label: "GitHub",
              icon: GitHubIcon,
            },
            {
              href: "https://www.linkedin.com/in/syed-mubashir-ahmed-475362340",
              label: "LinkedIn",
              icon: LinkedInIcon,
            },
            {
              href: "mailto:syedimran8742@gmail.com ",
              label: "Email",
              icon: MailIcon,
            },
          ].map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="
                text-[#8892B0]
                hover:text-[#64FFDA]
                hover:-translate-y-1
                hover:shadow-[0_0_20px_rgba(100,255,218,0.35)]
                transition-all duration-300
              "
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Accent Divider */}
        <div className="w-24 h-[2px] bg-[#64FFDA]/80 mx-auto mb-10" />

        {/* Credit */}
        <p className="text-[#8892B0] text-sm">
          © 2025 <span className="text-[#CCD6F6]">Syed Mubashir</span>. Built
          with React & Tailwind CSS.
        </p>

        <p className="text-[#64FFDA] text-xs mt-2 font-mono tracking-wide">
          Designed & engineered with care.
        </p>
      </div>
    </footer>
  );
}

/* Icons */

function GitHubIcon() {
  return (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4 0-6.6-5.4-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.5-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4c-1.1 0-2.1-.9-2.1-2.1 0-1.1 1-2.1 2.1-2.1 1.2 0 2.1 1 2.1 2.1 0 1.2-.9 2.1-2.1 2.1zM7.1 20.4H3.6V9h3.5v11.4z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.9 5.3a2 2 0 002.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}
