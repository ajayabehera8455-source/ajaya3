"use client";

import { Video, MessageSquare, RefreshCw, Truck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: <Video size={32} />,
    title: "Share Raw Footage",
    desc: "Send over your raw video files via Google Drive, Dropbox, or WeTransfer."
  },
  {
    icon: <MessageSquare size={32} />,
    title: "Style Discussion",
    desc: "We discuss your vision, target audience, and specific style requirements."
  },
  {
    icon: <RefreshCw size={32} />,
    title: "Editing & Revisions",
    desc: "I craft the story and we refine it through feedback until it's perfect."
  },
  {
    icon: <Truck size={32} />,
    title: "Final Delivery",
    desc: "Get your high-quality, export-ready files in the format of your choice."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">The Process</span>
          <h2 className="font-headline text-5xl md:text-7xl mb-6 text-white font-bold">How We <span className="text-gold">Work</span></h2>
          <p className="text-xl text-muted-foreground">A seamless workflow designed for high-end results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="p-8 rounded-[2rem] glass-card border-white/5 hover:border-accent/30 transition-all duration-500 h-full">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  {step.icon}
                </div>
                <h3 className="text-xl font-headline font-bold text-white mb-4">Step {idx + 1}: {step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20 text-primary/30">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
