import React, { useState, useRef } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState("idle");
  // idle | sending | success | error

  const cooldownRef = useRef(false);
  const controllerRef = useRef(null);

  const openEmail = (e) => {
    e.preventDefault();
    window.location.href = "mailto:syedimran8742@gmail.com";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent spam / double submit
    if (status === "sending" || cooldownRef.current) return;

    const form = e.target;
    const formData = new FormData(form);

    // Honeypot check (bot protection)
    if (formData.get("company")) {
      return;
    }

    setStatus("sending");
    cooldownRef.current = true;

    controllerRef.current = new AbortController();

    try {
      const res = await fetch(
        "https://my-portfolio-vert-six-28.vercel.app/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: controllerRef.current.signal,
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
            company: "", // honeypot
          }),
        },
      );

      const data = await res.json();

      if (!data.success) throw new Error("Email failed");

      setStatus("success");
      form.reset();

      // Reset success state after 6s
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error(err);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 6000);
      }
    }

    // Cooldown: 60 seconds
    setTimeout(() => {
      cooldownRef.current = false;
    }, 60000);
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-40 bg-[#0A192F] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src="https://thumbs.dreamstime.com/b/technology-background-glowing-blue-cyan-electronic-circuit-board-lines-dark-gradient-abstract-to-light-403924659.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/80 via-[#0A192F]/90 to-[#0A192F]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="text-[#64FFDA] font-mono text-lg mb-4">
            03. Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Let’s build something meaningful
          </h2>

          <div className="w-32 h-[2px] bg-[#64FFDA]/80 mt-8 mx-auto" />

          <p className="mt-10 text-[#8892B0] text-lg max-w-2xl mx-auto">
            I’m open to new opportunities and impactful projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-8 bg-[#112240]/60 backdrop-blur-sm p-10 rounded-2xl border border-white/10 shadow-2xl"
          >
            {/* Honeypot (hidden) */}
            <input
              type="text"
              name="company"
              tabIndex="-1"
              autoComplete="off"
              className="hidden"
            />

            {/* Name */}
            <div>
              <label className="block text-[#CCD6F6] font-mono mb-2">
                Name
              </label>
              <input
                name="name"
                required
                className="w-full px-6 py-4 rounded-lg bg-[#0A192F] border border-white/10 text-white focus:border-[#64FFDA] focus:ring-2 focus:ring-[#64FFDA]/20 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[#CCD6F6] font-mono mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-6 py-4 rounded-lg bg-[#0A192F] border border-white/10 text-white focus:border-[#64FFDA] focus:ring-2 focus:ring-[#64FFDA]/20 outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-[#CCD6F6] font-mono mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                required
                className="w-full px-6 py-4 rounded-lg bg-[#0A192F] border border-white/10 text-white focus:border-[#64FFDA] focus:ring-2 focus:ring-[#64FFDA]/20 outline-none resize-none"
              />
            </div>

            {/* Alerts */}
            {status === "success" && (
              <div className="border border-[#64FFDA]/40 bg-[#64FFDA]/10 text-[#64FFDA] px-6 py-4 rounded-lg font-mono text-center">
                ✅ Message sent successfully!
              </div>
            )}

            {status === "error" && (
              <div className="border border-red-400/40 bg-red-400/10 text-red-400 px-6 py-4 rounded-lg font-mono text-center">
                ❌ Something went wrong. Try again later.
              </div>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className={`w-full px-10 py-5 rounded-lg font-semibold text-lg transition-all
                ${
                  status === "sending"
                    ? "bg-[#64FFDA]/50 cursor-not-allowed"
                    : "bg-[#64FFDA] hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(100,255,218,0.45)]"
                }
              `}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* SOCIALS */}
          <div className="flex flex-col justify-center items-center lg:items-start gap-10">
            {/* 💰 Pricing */}
            <div
              className="relative p-[1px] rounded-2xl bg-gradient-to-r from-[#64FFDA]/40 via-[#64FFDA]/10 to-transparent 
  w-full max-w-sm group transition-all duration-500 hover:from-[#64FFDA]/70"
            >
              <div
                className="relative p-6 rounded-2xl bg-[#112240]/80 backdrop-blur-xl border border-white/10
    group-hover:border-[#64FFDA]/40 transition-all duration-500"
              >
                {/* Accent dot */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#64FFDA] animate-pulse" />
                  <p className="text-[#8892B0] text-xs font-mono tracking-wider uppercase">
                    Pricing
                  </p>
                </div>

                {/* Price */}
                <p className="text-white text-xl font-semibold">
                  Starting from <span className="text-[#64FFDA]">$10/hr</span>
                </p>

                {/* Divider */}
                <div className="w-10 h-[1px] bg-[#64FFDA]/40 my-3" />

                {/* Description */}
                <p className="text-[#8892B0] text-sm leading-relaxed">
                  Flexible based on project scope, complexity, and timeline.
                </p>
              </div>
            </div>
            <p className="text-[#8892B0]">You can also find me here</p>

            <div className="flex gap-8 text-[#64FFDA]">
              <a href="https://github.com/imran6300">GitHub</a>
              <a href="https://www.linkedin.com/in/syed-mubashir-ahmed-475362340">
                LinkedIn
              </a>
              <a href="mailto:syedimran8742@gmail.com" onClick={openEmail}>
                Email
              </a>
            </div>

            <p className="text-[#8892B0] text-sm">© 2026 Syed Imran</p>
          </div>
        </div>
      </div>
    </section>
  );
}
