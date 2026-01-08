"use client";

import { useState } from "react";

export default function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className={`group relative h-full rounded-xl border-2 border-blue-200/30 overflow-hidden transition-all duration-500 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 hover:-translate-y-2 animate-fadeInUp ${
        isHovered ? "shadow-xl shadow-blue-500/20" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-purple-50/40 group-hover:from-blue-50/80 group-hover:to-purple-50/80 transition-all duration-500" />

      {/* Animated border glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl bg-gradient-to-r from-blue-600/5 to-purple-600/5" />

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col gap-4 h-full">
        {/* Header */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
            {project.problem}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((t, tagIndex) => (
            <span
              key={t}
              className="text-xs font-medium text-blue-600 bg-blue-50/60 border border-blue-300/40 rounded-full px-3 py-1 hover:bg-blue-100 hover:border-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5 cursor-default"
              style={{
                transitionDelay: isHovered ? `${tagIndex * 30}ms` : "0s",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Highlights */}
        {project.highlights?.length ? (
          <ul className="text-sm text-slate-600 space-y-1.5 flex-grow">
            {project.highlights.map((h, hIndex) => (
              <li
                key={h}
                className="flex gap-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  transitionDelay: isHovered ? `${hIndex * 50}ms` : "0s",
                }}
              >
                <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {/* Links */}
        <div className="flex flex-wrap gap-3 text-sm pt-2 border-t border-blue-200/30 group-hover:border-blue-300/50 transition-colors">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-blue-600 hover:text-blue-700 group/link transition-all duration-300 hover:underline"
            >
              <span>GitHub</span>
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
              className="inline-flex items-center gap-1.5 font-semibold text-purple-600 hover:text-purple-700 group/link transition-all duration-300 hover:underline"
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
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </article>
  );
}
