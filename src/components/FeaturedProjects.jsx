"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

const featuredProjects = [
  {
    id: 1,
    title: "FYP CloudRepo",
    tagline: "Academic FYP Management Platform",
    description:
      "A comprehensive platform to manage academic FYP workflows with intelligent role-based access control and automated plagiarism detection using Gemini AI.",
    problem:
      "Academic institutions needed a centralized solution to manage FYP workflows, reduce manual effort, and ensure integrity through plagiarism detection.",
    stack: ["Node.js", "Express", "MongoDB", "Gemini API", "RBAC"],
    highlights: [
      "Role-based access (admin, teacher, student)",
      "Plagiarism detection using Gemini API",
      "Structured APIs for maintainable workflows",
    ],
    github: "https://github.com/ShehzadIqbal1",
    live: null,
    featured: true,
    impact: "Streamlines FYP management for 100+ users",
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    tagline: "Secure Messaging Platform",
    description:
      "A real-time messaging application with end-to-end encryption, Google Sign-In authentication, and low-latency message delivery using Socket.io.",
    problem:
      "Users needed a secure, real-time messaging platform with modern authentication and reliable message delivery.",
    stack: ["Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Google Sign-In"],
    highlights: [
      "Real-time messaging via Socket.io",
      "Google Sign-In + JWT authentication",
      "Optimized API flow for reliability",
    ],
    github: "https://github.com/ShehzadIqbal1",
    live: null,
    featured: true,
    impact: "Supports 50+ concurrent users with <100ms latency",
  },
];

export default function FeaturedProjects() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section
      ref={ref}
      className={`py-16 sm:py-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">⭐</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Featured Projects
          </h2>
        </div>
        <p className="text-slate-600 text-lg max-w-2xl">
          Highlighted projects that showcase my full-stack capabilities and problem-solving approach
        </p>
        <div className="mt-4 h-1.5 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
      </div>

      {/* Featured Projects Grid */}
      <div className="grid gap-8 lg:gap-10">
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`group relative rounded-2xl border-2 border-blue-200/30 overflow-hidden transition-all duration-700 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/20 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
            style={{
              transitionDelay: isVisible ? `${index * 0.2}s` : "0s",
            }}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/30 to-blue-50/20 group-hover:from-blue-50/60 group-hover:via-purple-50/50 group-hover:to-blue-50/40 transition-all duration-500" />

            {/* Content */}
            <div className="relative z-10 p-8 lg:p-10">
              {/* Featured Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-300/60 text-xs font-bold text-amber-800 uppercase tracking-wider">
                  ⭐ Featured
                </span>
              </div>

              {/* Header */}
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-lg font-semibold text-slate-600 group-hover:text-slate-700 transition-colors">
                    {project.tagline}
                  </p>
                </div>

                {/* Impact Badge */}
                <div className="flex items-center justify-end">
                  <div className="rounded-lg border-2 border-green-300/40 bg-green-50/50 p-4 text-center">
                    <p className="text-sm font-medium text-green-700 mb-1">Impact</p>
                    <p className="text-sm font-bold text-green-800">{project.impact}</p>
                  </div>
                </div>
              </div>

              {/* Description and Problem */}
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wider">
                    Problem Solved
                  </h4>
                  <p className="text-slate-700 leading-relaxed text-sm group-hover:text-slate-800 transition-colors">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wider">
                    Solution
                  </h4>
                  <p className="text-slate-700 leading-relaxed text-sm group-hover:text-slate-800 transition-colors">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {project.stack.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold text-blue-700 bg-blue-100/60 border border-blue-300/40 rounded-full px-3.5 py-1.5 hover:bg-blue-100 hover:border-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5 cursor-default"
                      style={{
                        transitionDelay: `${techIndex * 30}ms`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, hIndex) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-slate-700 group-hover:text-slate-800 transition-colors"
                      style={{
                        transitionDelay: `${hIndex * 50}ms`,
                      }}
                    >
                      <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                      <span className="text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3 pt-6 border-t border-blue-200/30 group-hover:border-blue-300/50 transition-colors">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 group/link transition-all duration-300 hover:underline"
                  >
                    <span>View Code</span>
                    <svg
                      className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                ) : null}
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-purple-600 hover:text-purple-700 group/link transition-all duration-300 hover:underline"
                  >
                    <span>Live Demo</span>
                    <svg
                      className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                ) : (
                  <span className="text-slate-400 text-sm italic">Live (not available)</span>
                )}
              </div>
            </div>

            {/* Animated corner accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-200/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}
