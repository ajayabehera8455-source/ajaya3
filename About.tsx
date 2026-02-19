"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const bgImage = "https://picsum.photos/seed/about-bg/1920/1080";

  const skills = [
    "High-Retention Storytelling",
    "Cinematic Color Grading",
    "Dynamic Sound Design",
    "Audience Growth Strategy",
    "Viral Pacing Techniques",
    "Multi-Platform Optimization"
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Image with Parallax & Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="object-cover opacity-20 bg-fixed"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)] border border-white/10 group">
              <Image
                src="https://picsum.photos/seed/akshaya/800/800"
                alt="Akshaya Kumar"
                width={700}
                height={700}
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                data-ai-hint="professional portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-accent/10 rounded-full blur-[80px] -z-10" />
          </div>

          <div className="lg:w-1/2">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-6 block">The Storyteller</span>
            <h2 className="font-headline text-5xl md:text-7xl mb-8 leading-[1.1] text-white font-bold">
              Crafting Visuals that <span className="text-gold italic">Resonate</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground font-body leading-relaxed">
              <p>
                Hello, I'm Akshaya Kumar. I am a dedicated Video Editor and Content Creator with a passion for transforming raw ideas into cinematic masterpieces. With years of technical expertise, I help brands and creators capture their audience's attention in the first 3 seconds.
              </p>
              <p>
                My focus isn't just on making "pretty" videos—it's about strategic storytelling that drives engagement and audience growth. Whether it's a 60-second viral reel or a 20-minute documentary, I bring a unique blend of creativity and data-driven editing to every frame.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span className="font-bold text-sm uppercase tracking-wide">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-12 pt-10">
                <div>
                  <h4 className="text-white font-headline text-4xl mb-1">5+</h4>
                  <p className="text-xs uppercase tracking-widest text-primary font-bold">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-white font-headline text-4xl mb-1">100M+</h4>
                  <p className="text-xs uppercase tracking-widest text-primary font-bold">Total Views</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
