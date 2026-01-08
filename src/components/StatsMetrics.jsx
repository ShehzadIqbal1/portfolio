"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

const metrics = [
  {
    icon: "💻",
    value: "10,000+",
    label: "Lines of Code",
    description: "Clean, maintainable code written",
    color: "from-blue-500 to-blue-600",
    accentColor: "blue",
  },
  {
    icon: "🚀",
    value: "8+",
    label: "Projects Deployed",
    description: "Live applications in production",
    color: "from-purple-500 to-purple-600",
    accentColor: "purple",
  },
  {
    icon: "⚡",
    value: "<100ms",
    label: "Avg Response Time",
    description: "API response performance",
    color: "from-pink-500 to-pink-600",
    accentColor: "pink",
  },
  {
    icon: "🎯",
    value: "99.8%",
    label: "Code Quality",
    description: "Test coverage & best practices",
    color: "from-green-500 to-green-600",
    accentColor: "green",
  },
];

export default function StatsMetrics() {
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
          <span className="text-4xl">📈</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            By The Numbers
          </h2>
        </div>
        <p className="text-slate-600 text-lg">
          Quantified impact and professional metrics
        </p>
        <div className="mt-4 h-1.5 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className={`group relative rounded-2xl border-2 border-blue-200/30 overflow-hidden transition-all duration-700 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 hover:-translate-y-2 cursor-default ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: isVisible ? `${index * 0.1}s` : "0s",
            }}
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br from-${metric.accentColor}-50/40 via-${metric.accentColor}-50/20 to-blue-50/20 group-hover:from-${metric.accentColor}-50/60 group-hover:via-${metric.accentColor}-50/40 transition-all duration-500`} />

            {/* Content */}
            <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-between">
              {/* Icon and Label */}
              <div className="flex items-start justify-between mb-6">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {metric.icon}
                </div>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${metric.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
              </div>

              {/* Metric Value */}
              <div className="mb-4">
                <p className={`text-4xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 origin-left`}>
                  {metric.value}
                </p>
                <p className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  {metric.label}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                {metric.description}
              </p>
            </div>

            {/* Top accent line */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            {/* Corner accent */}
            <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-200/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
          </div>
        ))}
      </div>

      {/* Additional Context */}
      <div className="mt-16 p-8 rounded-2xl border-2 border-blue-200/30 bg-gradient-to-br from-blue-50/40 to-purple-50/40 group">
        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>💡</span> Performance & Quality Commitment
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Every project I work on prioritizes performance, maintainability, and user experience. 
          These metrics reflect my commitment to writing clean code, optimizing for speed, and 
          ensuring reliability in production environments.
        </p>
      </div>
    </section>
  );
}
