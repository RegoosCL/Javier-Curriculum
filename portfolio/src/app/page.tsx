import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import SocialLinks from "@/components/social-links"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-5xl">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <SocialLinks />
    </main>
  )
}

