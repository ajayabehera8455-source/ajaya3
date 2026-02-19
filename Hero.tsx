"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Play, Sparkles } from "lucide-react";

export function Hero() {
  const videoUrl = "https://assets.mixkit.co/videos/preview/mixkit-working-with-multiple-monitors-and-video-editing-software-43224-large.mp4";

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Cinematic Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="hero-gradient-overlay" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover scale-105"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-16">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-card text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Sparkles size={12} className="text-accent" /> Premium Visual Excellence
        </div>
        
        <h1 className="font-headline text-6xl md:text-[9rem] text-white mb-6 leading-[0.9] tracking-tighter drop-shadow-2xl font-bold">
          AKSHAYA <br />
          <span className="text-gold italic">KUMAR</span>
        </h1>
        
        <p className="text-primary font-bold uppercase tracking-[0.5em] text-xs md:text-sm mb-12 block">
          Professional Video Editor & Content Creator
        </p>
        
        <p className="text-lg md:text-2xl text-white/80 mb-12 font-body max-w-2xl mx-auto leading-relaxed">
          I transform raw footage into powerful visual stories that grow brands and creators. Let's make your vision reality.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#portfolio" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-16 px-12 rounded-full font-bold shadow-2xl shadow-primary/30 transition-all hover:scale-105 active:scale-95">
              View Portfolio
            </Button>
          </a>
          <a href="#contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto flex items-center justify-center gap-4 text-white font-bold hover:text-primary transition-all group glass-button h-16 px-10 rounded-full text-lg">
              <span>Hire Me</span>
              <Play size={18} fill="currentColor" className="group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-3">
        <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
        <ChevronDown size={20} className="animate-bounce text-primary" />
      </div>
    </section>
  );
}
