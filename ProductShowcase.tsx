"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { CheckCircle2, Zap, Droplets, Leaf } from "lucide-react";

export function ProductShowcase() {
  const bottleImage = PlaceHolderImages.find(img => img.id === "juice-bottle-front");
  
  const features = [
    { icon: <Droplets className="text-primary" />, title: "No Added Sugar", desc: "Just the natural sweetness of sun-ripened fruit." },
    { icon: <Zap className="text-accent" />, title: "Instant Energy", desc: "Natural electrolytes and vitamins for your day." },
    { icon: <Leaf className="text-green-500" />, title: "Eco-Glass Packaging", desc: "100% recyclable, preserving flavor and the planet." },
    { icon: <CheckCircle2 className="text-primary" />, title: "Vitamin C Rich", desc: "Boost your immunity with every refreshing sip." },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Bottle Visual */}
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="relative h-[600px] w-full flex justify-center">
              <Image
                src={bottleImage?.imageUrl || ""}
                alt="MangoBliss Juice Bottle"
                width={400}
                height={600}
                className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-500"
                data-ai-hint="juice bottle"
              />
              {/* Floating Splashes/Elements */}
              <div className="absolute top-1/4 -left-8 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-bounce" />
              <div className="absolute bottom-1/4 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float" />
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Product Spotlight</span>
            <h2 className="font-headline text-5xl md:text-6xl mb-8 text-foreground leading-tight">
              The <span className="text-gradient">Ultimate</span> Mango Experience
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-xl">
              Our signature cold-pressed juice capture the soul of the MangoBliss orchard. Each bottle contains the nectar of three perfectly ripe mangos, with zero additives.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">{f.icon}</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{f.title}</h4>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-10 h-14 font-bold shadow-lg shadow-accent/20">
                Buy Now — $4.99
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-10 h-14 border-foreground hover:bg-foreground hover:text-white transition-all font-bold">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}