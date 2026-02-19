"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

const projects = [
  { id: "portfolio-1", title: "Cinematic Journey", category: "Travel" },
  { id: "portfolio-2", title: "Athlete's Peak", category: "Sports" },
  { id: "portfolio-3", title: "Brand Identity", category: "Corporate" },
  { id: "portfolio-4", title: "Tech Unboxing", category: "YouTube" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="font-headline text-4xl md:text-6xl mb-6 text-white">Recent <span className="text-gold italic">Works</span></h2>
            <p className="text-lg text-muted-foreground font-body">
              A curated selection of projects where creativity meets technical mastery.
            </p>
          </div>
          <button className="text-primary font-bold uppercase tracking-[0.2em] text-xs hover:text-white transition-all pb-2 border-b-2 border-primary/30 hover:border-primary">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const img = PlaceHolderImages.find(p => p.id === project.id);
            return (
              <div key={idx} className="group relative aspect-video rounded-3xl overflow-hidden border border-white/5">
                <Image
                  src={img?.imageUrl || ""}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  data-ai-hint={img?.imageHint || "portfolio"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-10 flex flex-col justify-end">
                  <span className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2">{project.category}</span>
                  <h3 className="text-white font-headline text-3xl mb-6">{project.title}</h3>
                  <button className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group/btn">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md group-hover/btn:bg-primary group-hover/btn:border-primary transition-all">
                      <Play fill="white" size={16} className="ml-1" />
                    </div>
                    <span className="font-bold text-sm">Watch Project</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}