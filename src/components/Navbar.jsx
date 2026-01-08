"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "blur-bg border-b border-blue-200/50 shadow-lg shadow-blue-500/10"
          : "blur-bg border-b border-blue-200/30 shadow-none"
      }`}
    >
      <nav className="mx-auto max-w-5xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-bold text-lg tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
        >
          Shehzad Iqbal
        </a>

        <div className="hidden sm:flex items-center gap-8 text-sm text-slate-700">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 relative group ${
                activeSection === l.href.slice(1)
                  ? "text-blue-600"
                  : "hover:text-blue-600 text-slate-700"
              }`}
            >
              {l.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300 ${
                  activeSection === l.href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="btn-primary text-sm px-4 py-1.5 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
        >
          Contact
        </a>
      </nav>
    </div>
  );
}
