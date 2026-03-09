import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import TechStack from "@/components/TechStack"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import CursorGlow from "@/components/CursorGlow"
import Reveal from "@/components/Reveal"

export default function Home() {
  return (
    <main className="relative overflow-hidden">

      {/* Cursor Glow Background */}
      <CursorGlow />

      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Tech Stack */}
      <Reveal>
        <TechStack />
      </Reveal>

      {/* Projects */}
      <Reveal>
        <Projects />
      </Reveal>

      {/* Experience */}
      <Reveal>
        <Experience />
      </Reveal>

      {/* Contact */}
      <Reveal>
        <Contact />
      </Reveal>

      {/* Footer */}
      <Footer />

    </main>
  )
}