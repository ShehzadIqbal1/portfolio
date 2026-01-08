"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

const aboutTimeline = [
  {
    year: "2024",
    title: "Backend Intern",
    company: "SORIIC",
    description:
      "Started my professional journey learning MERN stack, JWT authentication, and database optimization with Mongoose. Built foundational knowledge in API development.",
    achievements: [
      "Developed backend APIs for MERN applications",
      "Implemented JWT authentication modules",
      "Optimized database queries with Mongoose",
    ],
    icon: "🌱",
  },
  {
    year: "2025",
    title: "Junior Backend Developer",
    company: "Proto IT Consultants",
    description:
      "Advanced my backend skills, working on production APIs with Node.js/Express. Implemented authentication systems and integrated third-party services.",
    achievements: [
      "Built scalable REST APIs with Express.js",
      "Implemented email functionality with SendGrid",
      "Integrated Cloudinary for media management",
      "Managed MongoDB schemas and performance",
    ],
    icon: "📈",
  },
  {
    year: "2025",
    title: "Full Stack Developer",
    company: "Global Digital Solutions",
    description:
      "Transitioned to full-stack role, building end-to-end solutions. Working on complex projects with both backend systems and frontend delivery.",
    achievements: [
      "Full-stack development with MERN stack",
      "Designed role-based access control systems",
      "Implemented real-time features with Socket.io",
      "Led technical decisions and mentored junior developers",
    ],
    icon: "🚀",
  },
];

export default function EnhancedAbout() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section id="about" className="scroll-mt-24">
      {/* Main About Content */}
      <div
        ref={ref}
        className={`mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
            About Me
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
        </div>

        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p className="text-lg">
            I'm a full-stack Software Engineer focused on building clean,
            scalable systems with a strong backend foundation and practical
            frontend delivery. I care about readable code, reliable APIs, and
            shipping features that hold up under real usage.
          </p>
         
           <p className="text-lg">I've worked across Node.js/Express, MongoDB, authentication flows,
            and role-based access control, with exposure to deployment workflows
            and environment configuration. I also practice DSA and system
            thinking to sharpen problem solving.    </p>
      
          <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My goal is simple: build software that is maintainable, secure, and
            easy for teams to extend.
          </p>
        </div>
      </div>

      {/* Journey Timeline */}
      <div
        ref={ref}
        className={`transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
            My Journey
          </h3>
          <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
        </div>

        <div className="relative space-y-8 pl-0 sm:pl-20">
          {/* Timeline Line */}
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-400" />

          {aboutTimeline.map((item, index) => (
            <div
              key={item.year}
              className={`group relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 0.2}s` : "0s",
              }}
            >
              {/* Timeline Dot */}
              <div className="hidden sm:flex absolute -left-3 top-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-slate-50 shadow-lg shadow-blue-500/40 items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>

              {/* Card */}
              <div className="group/card relative rounded-2xl border-2 border-blue-200/30 bg-gradient-to-br from-blue-50/40 to-purple-50/40 p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105 hover:-translate-y-2">
                {/* Background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl">{item.icon}</span>
                    <div className="flex-grow">
                      <div className="flex items-baseline justify-between gap-4 flex-wrap">
                        <div>
                          <h4 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover/card:from-blue-700 group-hover/card:to-purple-700 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-sm font-semibold text-slate-600 group-hover/card:text-slate-700 transition-colors">
                            {item.company}
                          </p>
                        </div>
                        <span className="inline-block px-4 py-2 rounded-full bg-blue-100/60 border border-blue-300/40 text-sm font-bold text-blue-700 whitespace-nowrap">
                          {item.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 leading-relaxed mb-4 group-hover/card:text-slate-800 transition-colors">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                      Key Achievements
                    </p>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, achIndex) => (
                        <li
                          key={achievement}
                          className="flex gap-2 text-sm text-slate-700 group-hover/card:text-slate-800 transition-colors"
                          style={{
                            transitionDelay: `${achIndex * 50}ms`,
                          }}
                        >
                          <span className="text-blue-500 font-bold flex-shrink-0">
                            ✓
                          </span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-200/10 to-transparent rounded-bl-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Future Vision */}
        <div className="mt-12 p-8 rounded-2xl border-2 border-blue-200/30 bg-gradient-to-br from-blue-50/40 to-purple-50/40 group">
          <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">🎯</span> Next Steps
          </h4>
          <p className="text-slate-700 leading-relaxed mb-4">
            Looking forward to taking on more challenging projects, deepening my
            expertise in system design, and contributing to open-source
            communities. I'm interested in exploring cloud architectures,
            microservices, and mentoring junior developers.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            {["System Design", "Cloud Architecture", "Team Leadership"].map(
              (goal) => (
                <div
                  key={goal}
                  className="px-4 py-2 rounded-lg bg-white/50 border border-blue-300/40 text-sm font-medium text-blue-700 text-center hover:bg-blue-50 hover:border-blue-400 transition-all duration-300"
                >
                  {goal}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
