"use client";

const profile = {
  name: "Shehzad Iqbal",
  title: "Software Engineer",
  email: "shehzad.iqbal622@gmail.com",
  phone: "+92-308-9069014",
  github: "https://github.com/ShehzadIqbal1",
  linkedin: "https://www.linkedin.com/in/shehzad-iqbal622/",
};

export default function Hero() {
  return (
    <div className="py-12 sm:py-20 relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 order-2 lg:order-1">
          <div className="space-y-4">
            {/* Name - Text reveal effect */}
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
              <span 
                className="gradient-text inline-block animate-fadeInUp"
                style={{ animationDelay: "0.1s" }}
              >
                {profile.name}
              </span>
            </h1>

            {/* Title - Slide in from left */}
            <p 
              className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-slideInLeft"
              style={{ animationDelay: "0.3s" }}
            >
              {profile.title}
            </p>

            {/* Description - Fade in */}
            <p 
              className="max-w-xl text-slate-700 leading-relaxed text-lg animate-fadeInUp"
              style={{ animationDelay: "0.5s" }}
            >
              Full-stack engineer focused on clean backend systems, scalable APIs, and practical product delivery
              using Node.js, Express, MongoDB, and Next.js.
            </p>
          </div>

          {/* CTA Buttons - Staggered slide in */}
          <div className="flex flex-wrap gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn-primary animate-slideInLeft"
              style={{ animationDelay: "0.6s" }}
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary animate-slideInLeft"
              style={{ animationDelay: "0.7s" }}
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="btn-secondary animate-slideInLeft"
              style={{ animationDelay: "0.8s" }}
            >
              Email
            </a>
          </div>

          {/* Contact Info - Slide in from right */}
          <div 
            className="text-sm text-slate-600 animate-slideInRight"
            style={{ animationDelay: "0.9s" }}
          >
            <span className="font-medium text-slate-900">Email:</span>{" "}
            <a className="underline hover:no-underline text-blue-600 hover:text-purple-600 transition-colors" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <span className="mx-2">•</span>
            <span className="font-medium text-slate-900">Phone:</span> {profile.phone}
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div 
          className="relative order-1 lg:order-2 flex items-center justify-center"
          style={{ animationDelay: "0.4s" }}
        >
          {/* Animated gradient border circle */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 opacity-0 animate-fadeInUp max-w-xs" style={{ animationDelay: "0.2s" }}>
            <div className="rounded-2xl bg-white" />
          </div>

          {/* Profile Image Container */}
          <div className="relative w-full max-w-xs animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
            {/* Glow effect background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-2xl blur-2xl animate-pulse-glow" />

            {/* Image Frame */}
            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl shadow-blue-500/20 group">
              {/* Placeholder with gradient */}
              <div className="aspect-square bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 flex items-center justify-center relative overflow-hidden">
                {/* SVG Avatar Placeholder */}
                <svg
                  className="w-1/2 h-1/2 text-blue-600 opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>

                {/* Animated overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-500" />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Status Badge */}
            <div className="absolute -bottom-3 -right-3 animate-fadeInUp" style={{ animationDelay: "0.8s" }}>
              <div className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1.5 rounded-full shadow-lg font-semibold text-xs border-4 border-white">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Available
              </div>
            </div>
          </div>

          {/* Floating accent elements */}
          <div className="absolute -top-8 -right-8 w-16 h-16 bg-blue-400/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-purple-400/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
        </div>
      </div>

      {/* Scroll indicator - Floating animation */}
      <div className="flex justify-center pt-12 animate-float">
        <div className="text-slate-500 text-sm flex flex-col items-center gap-2">
          <span>Scroll to explore</span>
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
