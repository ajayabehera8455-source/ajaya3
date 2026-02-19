"use client";

import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export function CinematicCTA() {
  return (
    <section className="relative py-40 overflow-hidden">
      {/* Background Video/GIF Container */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          poster="https://picsum.photos/seed/cta-bg/1920/1080"
        >
          {/* Replace this URL with your video or GIF source */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-his-laptop-34440-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container relative z-20 mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-5xl md:text-8xl text-white mb-8 leading-tight">
            Ready to <span className="text-gold italic">Elevate</span> <br />
            Your Vision?
          </h2>
          <p className="text-xl md:text-2xl text-white/70 mb-12 font-body max-w-2xl mx-auto leading-relaxed">
            Let's collaborate on your next project and create something that truly resonates with your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl h-20 px-16 rounded-full font-bold shadow-2xl shadow-primary/30 transition-all hover:scale-105">
                <Zap size={24} className="mr-3" /> Start Your Project
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
