import Navbar from "@/components/Navbar";
import SocialSidebar from "@/components/SocialSidebar";
import Hero from "@/components/Hero";
import HeroVisual from "@/components/HeroVisual";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import ScrollIndicator from "@/components/ScrollIndicator";
import RocketAnimation from "@/components/RocketAnimation";
import RainBackground from "@/components/RainBackground";
import GlowBackground from "@/components/GlowBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-background">
      <GlowBackground />
      <RainBackground />
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full grid-pattern opacity-20" />
        <div className="cyber-glow -top-[10%] -left-[10%] opacity-30 animate-pulse" />
        <div className="purple-glow -bottom-[10%] -right-[10%] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,5,36,1)_80%)]" />
      </div>

      <Navbar />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-32 lg:pt-20 relative overflow-hidden">
          <RocketAnimation />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-10 items-center">
              <SocialSidebar />
              <Hero />
              <HeroVisual />
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
        
        <footer className="py-20 px-10 border-t border-white/5 text-center">
          <p className="text-on-surface-variant font-mono text-sm">
            © {new Date().getFullYear()} S.B. Himel. Crafted with <span className="text-secondary">Passion</span>.
          </p>
        </footer>
      </div>

      <ScrollIndicator />
    </main>
  );
}
