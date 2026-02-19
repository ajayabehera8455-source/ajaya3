"use client";

import { useEffect, useRef } from "react";
import { Instagram } from "lucide-react";

const reels = [
  { id: "DHtBisMpY6J", title: "Top View Reel" },
  { id: "Cm84eF3K1wQ", title: "Cinematic Edit" },
  { id: "CgjlsZMhGMl", title: "High-Energy Reel" },
  { id: "Cj23XiLj1LY", title: "Creative Storytelling" },
];

export function InstagramShowcase() {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return;

    // Load Instagram embed script with explicit HTTPS
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.id = "instagram-embed-script";
    
    script.onload = () => {
      scriptLoaded.current = true;
      // @ts-ignore
      if (window.instgrm) {
        // @ts-ignore
        window.instgrm.Embeds.process();
      }
    };

    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById("instagram-embed-script");
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="instagram-edits" className="py-32 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
            <Instagram size={14} /> Social Excellence
          </div>
          <h2 className="font-headline text-5xl md:text-7xl mb-6 text-white font-bold">
            Featured <span className="text-gold italic">Instagram Edits</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            High-retention vertical content designed for the modern algorithm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reels.map((reel) => (
            <div 
              key={reel.id} 
              className="flex justify-center group"
            >
              <div className="w-full max-w-[328px] glass-card rounded-[2.5rem] overflow-hidden border-white/5 group-hover:border-primary/30 transition-all duration-500 shadow-2xl">
                <blockquote
                  className="instagram-media"
                  data-instgrm-captioned
                  data-instgrm-permalink={`https://www.instagram.com/reel/${reel.id}/`}
                  data-instgrm-version="14"
                  style={{
                    background: "#000",
                    border: "0",
                    borderRadius: "3px",
                    boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: "1px",
                    maxWidth: "540px",
                    minWidth: "326px",
                    padding: "0",
                    width: "calc(100% - 2px)",
                  }}
                >
                  <div style={{ padding: "16px" }}>
                    <a
                      href={`https://www.instagram.com/reel/${reel.id}/`}
                      style={{
                        background: "#000000",
                        lineHeight: "0",
                        padding: "0 0",
                        textAlign: "center",
                        textDecoration: "none",
                        width: "100%",
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="h-[400px] bg-white/5 animate-pulse flex items-center justify-center">
                        <Instagram className="text-primary/20" size={48} />
                      </div>
                    </a>
                  </div>
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href="https://www.instagram.com/akshaya.editz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white hover:text-primary transition-all font-bold uppercase tracking-widest text-xs border-b-2 border-primary/30 hover:border-primary pb-2"
          >
            Explore More on Instagram
            <Instagram size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
