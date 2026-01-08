"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

const testimonials = [
  {
    id: 1,
    quote:
      "Shehzad delivered a robust FYP management system that streamlined our academic workflow. His attention to detail and understanding of role-based access control was impressive.",
    author: "Dr. Ahmed Hassan",
    role: "Academic Director",
    company: "University of Technology",
    rating: 5,
    avatar: "👨‍🎓",
  },
  {
    id: 2,
    quote:
      "Working with Shehzad on the real-time chat application was a great experience. He implemented Socket.io perfectly with excellent error handling and clean code architecture.",
    author: "Sarah Khan",
    role: "Project Manager",
    company: "Digital Innovations",
    rating: 5,
    avatar: "👩‍💼",
  },
  {
    id: 3,
    quote:
      "Shehzad's backend expertise is outstanding. He built scalable APIs with proper authentication and database optimization. Highly recommend for full-stack projects.",
    author: "Muhammad Ali",
    role: "CTO",
    company: "Proto IT Consultants",
    rating: 5,
    avatar: "👨‍💻",
  },
  {
    id: 4,
    quote:
      "Professional, reliable, and always delivers quality work. Shehzad's knowledge of modern tech stack and problem-solving approach made the project a success.",
    author: "Fatima Zahra",
    role: "Senior Developer",
    company: "SORIIC",
    rating: 5,
    avatar: "👩‍🔬",
  },
];

export default function Testimonials() {
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
          <span className="text-4xl">💬</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            What Others Say
          </h2>
        </div>
        <p className="text-slate-600 text-lg">
          Testimonials from colleagues, mentors, and collaborators
        </p>
        <div className="mt-4 h-1.5 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`group relative rounded-2xl border-2 border-blue-200/30 overflow-hidden transition-all duration-700 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 hover:-translate-y-2 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: isVisible ? `${index * 0.15}s` : "0s",
            }}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/30 to-blue-50/20 group-hover:from-blue-50/60 group-hover:via-purple-50/50 group-hover:to-blue-50/40 transition-all duration-500" />

            {/* Content */}
            <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
              {/* Quote Icon and Rating */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl text-blue-400/60 group-hover:text-blue-400 transition-colors">
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="text-lg animate-fadeInUp"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      ⭐
                    </span>
                  ))}
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-slate-700 leading-relaxed mb-6 flex-grow italic group-hover:text-slate-800 transition-colors">
                {testimonial.quote}
              </p>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-blue-300/40 to-transparent mb-6 group-hover:from-blue-400/60 transition-colors" />

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div className="flex-grow">
                  <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Corner accent */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-200/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Trust Badges */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: "✅", label: "100% Recommended" },
          { icon: "🎯", label: "On-Time Delivery" },
          { icon: "💪", label: "Quality Focused" },
          { icon: "🤝", label: "Team Player" },
        ].map((badge, index) => (
          <div
            key={badge.label}
            className={`group/badge relative rounded-lg border-2 border-blue-200/30 bg-gradient-to-br from-blue-50/40 to-purple-50/40 p-4 text-center transition-all duration-500 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/15 hover:scale-105 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: isVisible ? `${(index + 4) * 0.1}s` : "0s",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300 rounded-lg" />
            <div className="relative z-10">
              <p className="text-2xl mb-2 group-hover/badge:scale-125 transition-transform">
                {badge.icon}
              </p>
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                {badge.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
