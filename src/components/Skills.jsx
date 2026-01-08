"use client";

import { skillGroups } from "../data/skills";
import { useEffect, useState } from "react";

export default function Skills() {
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observers = new Map();

    skillGroups.forEach((group, index) => {
      const element = document.getElementById(`skill-card-${index}`);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, index]));
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

  const skillIcons = {
    Languages: "🔤",
    Frontend: "🎨",
    Backend: "⚙️",
    Databases: "💾",
    "DevOps / Infra": "🚀",
    "Problem Solving": "🧠",
    Tools: "🔧",
  };

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {skillGroups.map((group, index) => (
        <div
          key={group.title}
          id={`skill-card-${index}`}
          className={`group relative rounded-xl border-2 border-blue-200/30 bg-gradient-to-br from-blue-50/40 to-purple-50/40 p-6 transition-all duration-500 hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105 hover:-translate-y-2 ${
            visibleCards.has(index)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDelay: visibleCards.has(index) ? `${index * 0.1}s` : "0s",
          }}
        >
          {/* Gradient background overlay on hover */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Content */}
          <div className="relative z-10">
            {/* Header with icon */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{skillIcons[group.title] || "⭐"}</span>
              <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 transition-colors">
                {group.title}
              </h3>
            </div>

            {/* Skill items */}
            <ul className="flex flex-wrap gap-2.5">
              {group.items.map((item, itemIndex) => (
                <li
                  key={item}
                  className="text-sm font-medium text-slate-700 border-2 border-blue-300/40 rounded-full px-3.5 py-1.5 bg-white/50 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5 cursor-default group-hover:shadow-sm"
                  style={{
                    transitionDelay: `${itemIndex * 30}ms`,
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Animated border gradient on hover */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
        </div>
      ))}
    </div>
  );
}
