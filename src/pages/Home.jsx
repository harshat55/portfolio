import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../sections/About'
import Work from '../sections/Work'
import Capabilities from '../sections/Capabilities'
import Toolkit from '../sections/Toolkit'
import Experiments from '../sections/Experiments'
import Contact from '../sections/Contact'
import Footer from '../components/Footer'
import Scene3D from '../components/Scene3D'

export default function Home() {
  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-[#08090A] text-[#F4F3EE]">
      {/* Fixed Full-Screen Background 3D Canvas spanning entire website */}
      <Scene3D />

      {/* Foreground Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Work />
          <Capabilities />
          <Toolkit />
          <Experiments />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
