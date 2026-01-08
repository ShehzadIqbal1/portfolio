"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Sidebar() {
  const { ref, isVisible } = useScrollAnimation(0.3);

  const stats = [
    {
      label: "Years Experience",
      value: "1+",
      icon: "📅",
      color: "from-blue-500 to-blue-600",
    },
    {
      label: "Projects Completed",
      value: "10+",
      icon: "🚀",
      color: "from-purple-500 to-purple-600",
    },
    {
      label: "Tech Stack",
      value: "15+",
      icon: "⚙️",
      color: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <aside
      ref={ref}
      className={`hidden lg:flex fixed left-0 top-32 w-56 h-screen flex-col gap-6 p-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      }`}
    >
      {/* Stats Cards */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
          Quick Stats
        </h3>

        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`group relative rounded-lg border-2 border-blue-200/30 bg-gradient-to-br from-blue-50/40 to-purple-50/40 p-4 overflow-hidden transition-all duration-500 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
            style={{
              transitionDelay: isVisible ? `${index * 0.1}s` : "0s",
            }}
          >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{stat.icon}</span>
                <p className="text-xs font-medium text-slate-600">{stat.label}</p>
              </div>
              <p className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </p>
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-blue-200/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-blue-300/40 to-transparent" />

      {/* Quick Links */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
          Quick Links
        </h3>

        <a
          href="#home"
          className="group/link flex items-center gap-2 p-3 rounded-lg text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 hover:translate-x-1"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8M21 3v6h-6"
            />
          </svg>
          Home
        </a>

        <a
          href="#about"
          className="group/link flex items-center gap-2 p-3 rounded-lg text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 hover:translate-x-1"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          About
        </a>

        <a
          href="#skills"
          className="group/link flex items-center gap-2 p-3 rounded-lg text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 hover:translate-x-1"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Skills
        </a>

        <a
          href="#contact"
          className="group/link flex items-center gap-2 p-3 rounded-lg text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 hover:translate-x-1"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Contact
        </a>
      </div>

      {/* Download Resume Button */}
      <a
        href="#resume"
        className="group relative mt-auto rounded-lg border-2 border-blue-300/40 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 text-center font-semibold text-sm shadow-lg hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Resume
      </a>
    </aside>
  );
}
