import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { InstagramShowcase } from "@/components/sections/InstagramShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { CinematicCTA } from "@/components/sections/CinematicCTA";
import { Phone, Mail, Instagram, Youtube, Linkedin } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  const phone = "8455092030";
  const email = "akshayabehera7721@gmail.com";
  const instagram = "https://www.instagram.com/akshaya.editz?igsh=bGE0Zm4zYzFvNjNq";
  const youtube = "https://youtube.com/@aloneboyeditz";
  const linkedin = "https://www.linkedin.com/in/akshayabehera7721";

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-background/40 backdrop-blur-xl border-b border-white/5">
        <div className="flex flex-col">
          <div className="text-xl md:text-2xl font-headline font-bold tracking-tighter text-white">
            AKSHAYA<span className="text-primary">KUMAR</span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block font-bold">Video Editor & Creator</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-10 font-bold uppercase tracking-widest text-[10px] text-white/70">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
          <a href="#instagram-edits" className="hover:text-primary transition-colors">Instagram Edits</a>
          <a href="#how-it-works" className="hover:text-primary transition-colors">Process</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4 mr-4">
            <a 
              href={instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-primary transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href={youtube} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-primary transition-all hover:scale-110"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-primary transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <div className="h-6 w-px bg-white/10 mx-2" />
            <div className="flex flex-col items-end">
              <a href={`tel:${phone}`} className="text-xs font-bold flex items-center gap-2 text-white hover:text-primary transition-colors">
                <Phone size={12} className="text-primary" /> {phone}
              </a>
              <a href={`mailto:${email}`} className="text-[10px] text-muted-foreground hover:text-primary transition-colors font-bold uppercase tracking-tighter">
                {email}
              </a>
            </div>
          </div>
          <a href="#contact" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20">
            Hire Me
          </a>
        </div>
      </nav>

      <Hero />
      <About />
      <Services />
      <Portfolio />
      <InstagramShowcase />
      <CinematicCTA />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}
