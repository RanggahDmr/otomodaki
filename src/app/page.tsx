import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Workflow from "./components/Workflow"
import Footer from "./components/footer"
import Features from "./components/Features"
import Owner from "./components/Owner"


export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Features/>
      <Workflow />
      <Owner/>
      <Footer />
    </main>
  )
}
