"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Footer() {
  const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation(0.2);

  return (
    <footer
      ref={footerRef}
      className={`py-12 border-t border-blue-100/40 relative transition-all duration-700 ${
        footerVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
        {/* Copyright */}
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Shehzad Iqbal
          </p>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Full Stack Developer
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-5 flex-wrap">
          <a
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-300"
            href="https://github.com/ShehzadIqbal1"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-300"
            href="https://www.linkedin.com/in/shehzad-iqbal622/"
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-300"
            href="mailto:shehzad.iqbal622@gmail.com"
          >
            <span>Email</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll to top button */}
      <a
        href="#home"
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 group h-12 w-12 rounded-full border-2 border-blue-300/40 bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-400/60 transition-all duration-300 hover:scale-110 hover:-translate-y-1 z-40"
      >
        <svg
          className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transform group-hover:-translate-y-0.5 transition-all"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M19 14l-7-7m0 0l-7 7m7-7v12"
          />
        </svg>
      </a>
    </footer>
  );
}
