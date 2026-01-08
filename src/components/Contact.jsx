"use client";

import { useState } from "react";

const contact = {
  email: "shehzad.iqbal622@gmail.com",
  github: "https://github.com/ShehzadIqbal1",
  linkedin: "https://www.linkedin.com/in/shehzad-iqbal622/",
  phone: "+92-308-9069014",
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission (in real app, send to backend)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Create mailto link
      const mailtoLink = `mailto:${contact.email}?subject=Portfolio Inquiry from ${formData.name}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset submitted state after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Contact Intro Card */}
      <div className="group relative rounded-xl border-2 border-blue-200/30 bg-gradient-to-br from-blue-50/40 to-purple-50/40 p-6 overflow-hidden transition-all duration-500 hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-500/20">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            Let's Connect
          </h3>
          <p className="text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors">
            Want to discuss a role, project, or just chat about tech? I'm always open to opportunities and conversations.
            Reach out through any of the channels below — I respond quickly and genuinely.
          </p>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-200/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Contact Info Grid */}
      <div className="grid sm:grid-cols-3 gap-4">
        {/* Email Card */}
        <a
          href={`mailto:${contact.email}`}
          className="group/card relative rounded-lg border-2 border-blue-200/30 bg-gradient-to-br from-blue-50/40 to-blue-50/20 p-4 overflow-hidden transition-all duration-300 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/15 hover:scale-105"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10">
            <div className="text-3xl mb-2">📧</div>
            <p className="text-xs font-medium text-slate-600 mb-1">Email</p>
            <p className="text-sm font-semibold text-blue-600 group-hover/card:text-blue-700 break-all">
              {contact.email}
            </p>
          </div>
        </a>

        {/* Phone Card */}
        <a
          href={`tel:${contact.phone}`}
          className="group/card relative rounded-lg border-2 border-blue-200/30 bg-gradient-to-br from-purple-50/40 to-purple-50/20 p-4 overflow-hidden transition-all duration-300 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/15 hover:scale-105"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10">
            <div className="text-3xl mb-2">📱</div>
            <p className="text-xs font-medium text-slate-600 mb-1">Phone</p>
            <p className="text-sm font-semibold text-purple-600 group-hover/card:text-purple-700">
              {contact.phone}
            </p>
          </div>
        </a>

        {/* Social Links Grid */}
        <div className="space-y-2">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="group/card relative rounded-lg border-2 border-blue-200/30 bg-gradient-to-br from-slate-50/40 to-slate-50/20 p-3 overflow-hidden transition-all duration-300 hover:border-slate-400/60 hover:shadow-lg hover:shadow-slate-500/15 hover:scale-105 flex items-center gap-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-600/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="text-xl">🐙</div>
            </div>
            <div className="relative z-10">
              <p className="text-xs font-medium text-slate-600">GitHub</p>
              <p className="text-xs text-slate-700 group-hover/card:text-slate-900">Code</p>
            </div>
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group/card relative rounded-lg border-2 border-blue-200/30 bg-gradient-to-br from-slate-50/40 to-slate-50/20 p-3 overflow-hidden transition-all duration-300 hover:border-slate-400/60 hover:shadow-lg hover:shadow-slate-500/15 hover:scale-105 flex items-center gap-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-600/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="text-xl">💼</div>
            </div>
            <div className="relative z-10">
              <p className="text-xs font-medium text-slate-600">LinkedIn</p>
              <p className="text-xs text-slate-700 group-hover/card:text-slate-900">Profile</p>
            </div>
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="relative rounded-xl border-2 border-blue-200/30 bg-gradient-to-br from-blue-50/40 to-purple-50/40 p-8 overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Send a Message
          </h3>

          {submitted ? (
            <div className="animate-fadeInUp p-6 rounded-lg border-2 border-green-200/50 bg-green-50/40 text-center">
              <div className="text-4xl mb-2">✅</div>
              <p className="font-semibold text-green-700 mb-1">Message Sent!</p>
              <p className="text-sm text-green-600">
                Thanks for reaching out. I'll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div className="animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full px-4 py-2.5 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    errors.name
                      ? "border-red-400/60 bg-red-50/40 focus:border-red-500 focus:ring-red-500/30"
                      : "border-blue-200/40 bg-white hover:border-blue-300/60 focus:border-blue-500 focus:ring-blue-500/30"
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-600 font-medium mt-1.5">⚠ {errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full px-4 py-2.5 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    errors.email
                      ? "border-red-400/60 bg-red-50/40 focus:border-red-500 focus:ring-red-500/30"
                      : "border-blue-200/40 bg-white hover:border-blue-300/60 focus:border-blue-500 focus:ring-blue-500/30"
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-600 font-medium mt-1.5">⚠ {errors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows="5"
                  className={`w-full px-4 py-2.5 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 resize-none ${
                    errors.message
                      ? "border-red-400/60 bg-red-50/40 focus:border-red-500 focus:ring-red-500/30"
                      : "border-blue-200/40 bg-white hover:border-blue-300/60 focus:border-blue-500 focus:ring-blue-500/30"
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-red-600 font-medium mt-1.5">⚠ {errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary py-3 font-semibold text-base rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? "opacity-75 cursor-not-allowed scale-95"
                      : "hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 active:scale-95"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="w-5 h-5 animate-spin"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
                    </>
                  )}
                </button>
              </div>

              {/* Form Info */}
              <p className="text-xs text-slate-500 text-center">
                This will open your email client to send the message directly to me.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
