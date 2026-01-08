"use client";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import EnhancedAbout from "../components/EnhancedAbout";
import FeaturedProjects from "../components/FeaturedProjects";
import StatsMetrics from "../components/StatsMetrics";
import Testimonials from "../components/Testimonials";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      <Navbar />
      <Sidebar />

      <main className="pt-20">
        <Section id="home">
          <Hero />
        </Section>

        <EnhancedAbout />

        <FeaturedProjects />

        <StatsMetrics />

        <Testimonials />

        <Section id="skills" title="Skills">
          <Skills />
        </Section>

        <Section id="experience" title="Experience">
          <Experience />
        </Section>

        <Section id="projects" title="Projects">
          <Projects />
        </Section>

        <Section id="contact" title="Contact">
          <Contact />
        </Section>
      </main>

      <Footer />
    </div>
  );
}
