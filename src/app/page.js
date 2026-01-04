import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-6">
        <section id="home">
          <Hero />
        </section>

        <Section id="about" title="About">
          <p className="max-w-2xl text-gray-600">
            I am a Software Engineer with experience building full-stack
            applications using modern technologies. I focus on writing
            clean, maintainable code and continuously improving my
            problem-solving skills through data structures, algorithms,
            and real-world systems.
          </p>
        </Section>

        <Section id="skills" title="Skills">
          {/* next step */}
        </Section>

        <Section id="experience" title="Experience">
          {/* next step */}
        </Section>

        <Section id="projects" title="Projects">
          {/* next step */}
        </Section>

        <Section id="contact" title="Contact">
          {/* next step */}
        </Section>
      </main>
    </>
  );
}
