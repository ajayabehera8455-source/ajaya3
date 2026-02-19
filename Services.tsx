"use client";

import Image from "next/image";
import { Youtube, Instagram, Briefcase, Layout, Layers, Scissors } from "lucide-react";

const services = [
  {
    icon: <Youtube className="w-10 h-10 text-primary" />,
    title: "YouTube Editing",
    description: "Long-form content optimized for watch time, professional pacing, and storytelling."
  },
  {
    icon: <Instagram className="w-10 h-10 text-primary" />,
    title: "Reels Editing",
    description: "Fast-paced, viral-optimized vertical videos designed to grab attention instantly."
  },
  {
    icon: <Scissors className="w-10 h-10 text-primary" />,
    title: "Shorts Editing",
    description: "High-retention shorts tailored for platform algorithms and audience engagement."
  },
  {
    icon: <Layers className="w-10 h-10 text-primary" />,
    title: "Motion Graphics",
    description: "Advanced text animations, transitions, and dynamic visual elements."
  },
  {
    icon: <Layout className="w-10 h-10 text-primary" />,
    title: "Thumbnail Design",
    description: "High-CTR custom thumbnails that scream 'Click Me' and match your brand."
  },
  {
    icon: <Briefcase className="w-10 h-10 text-primary" />,
    title: "Corporate Edits",
    description: "Polished, professional edits for brands, interviews, and promotional films."
  }
];

export function Services() {
  const bgImage = "https://picsum.photos/seed/services-bg/1920/1080";

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="object-cover opacity-10 bg-fixed"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">What I Offer</span>
          <h2 className="font-headline text-5xl md:text-7xl mb-6 text-white font-bold">Premium <span className="text-gold">Services</span></h2>
          <p className="text-xl text-muted-foreground font-body">
            Tailored solutions to elevate your digital presence and scale your impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="p-10 rounded-[2rem] glass-card border-white/5 hover:border-primary/40 transition-all duration-700 hover:-translate-y-3 group bg-white/[0.02]"
            >
              <div className="mb-8 p-5 bg-white/5 rounded-2xl w-fit group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="font-headline text-2xl mb-4 text-white font-bold">{service.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed group-hover:text-white/80 transition-colors">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
