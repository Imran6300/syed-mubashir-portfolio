import React, { useState } from "react";
import { scrollToSection } from "../utils/scrollToSection";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-xl bg-[#0A192F]/75 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={() => scrollToSection("#home")}
            className="text-2xl font-bold text-white tracking-wide hover:scale-105 transition"
          >
            Syed<span className="text-[#64FFDA]"> Mubashir</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="
                cursor-pointer
                  relative text-[#CCD6F6] hover:text-[#64FFDA]
                  transition-all duration-300 font-medium
                  hover:-translate-y-0.5
                "
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#64FFDA] transition-all duration-300 hover:w-full"></span>
              </button>
            ))}

            <button
              onClick={() => scrollToSection("#contact")}
              className="
                cursor-pointer
                ml-4 px-6 py-2 rounded-lg border border-[#64FFDA]
                text-[#64FFDA] hover:bg-[#64FFDA] hover:text-[#0A192F]
                transition-all duration-300 font-semibold
              "
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#64FFDA]"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-7 h-7 transition-transform duration-300 ${
                open ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#0A192F]/95 backdrop-blur-xl border-b border-white/10
        transition-all duration-300 origin-top
        ${
          open
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                scrollToSection(link.href);
                setOpen(false);
              }}
              className="text-lg text-[#CCD6F6] hover:text-[#64FFDA] transition"
            >
              {link.name}
            </button>
          ))}

          <button
            onClick={() => {
              scrollToSection("#contact");
              setOpen(false);
            }}
            className="px-8 py-3 rounded-lg bg-[#64FFDA] text-[#0A192F] font-semibold"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}
