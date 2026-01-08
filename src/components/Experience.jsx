"use client";

import { experiences } from "../data/experience";
import { useEffect, useState } from "react";

export default function Experience() {
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observers = new Map();

    experiences.forEach((_, index) => {
      const element = document.getElementById(`exp-item-${index}`);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(element);
      observers.set(index, observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const companyIcons = {
    "Global Digital Solutions": "🌍",
    "Proto IT Consultants": "💼",
    SORIIC: "🏢",
  };

  return (
    <div className="relative space-y-8">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-400 hidden sm:block" />

      {experiences.map((exp, index) => (
        <article
          key={`${exp.role}-${exp.company}`}
          id={`exp-item-${index}`}
          className={`group relative pl-0 sm:pl-24 transition-all duration-500 ${
            visibleItems.has(index)
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-8"
          }`}
          style={{
            transitionDelay: visibleItems.has(index) ? `${index * 0.15}s` : "0s",
          }}
        >
          {/* Timeline dot */}
          <div className="hidden sm:flex absolute -left-3 top-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-slate-50 shadow-lg shadow-blue-500/40 items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>

          {/* Card */}
          <div className="group/card relative rounded-xl border-2 border-blue-200/30 bg-gradient-to-br from-blue-50/40 to-purple-50/40 p-6 overflow-hidden transition-all duration-500 hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105 hover:-translate-y-2">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative z-10 space-y-3">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">
                    {companyIcons[exp.company] || "⭐"}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover/card:from-blue-700 group-hover/card:to-purple-700 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-slate-600 group-hover/card:text-slate-700 transition-colors">
                      {exp.company}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/60 border border-blue-300/40 text-xs font-semibold text-blue-700 whitespace-nowrap">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 2m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {exp.period}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-blue-300/40 to-transparent group-hover/card:from-blue-400/60 transition-colors" />

              {/* Responsibilities */}
              <ul className="space-y-2">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-sm text-slate-600 group-hover/card:text-slate-700 transition-colors"
                    style={{
                      transitionDelay: visibleItems.has(index)
                        ? `${bulletIndex * 50}ms`
                        : "0s",
                    }}
                  >
                    <span className="text-blue-500 font-bold flex-shrink-0 mt-0.5">
                      ▸
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-200/10 to-transparent rounded-bl-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </article>
      ))}
    </div>
  );
}
