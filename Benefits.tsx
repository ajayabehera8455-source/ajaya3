
"use client";

import { Sun, Heart, Sparkles, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: <Sun className="w-10 h-10 text-primary" />,
    title: "Vitamin C Boost",
    description: "One serving provides over 60% of your daily Vitamin C requirement, strengthening your immune system."
  },
  {
    icon: <Heart className="w-10 h-10 text-accent" />,
    title: "Digestive Health",
    description: "Rich in enzymes and fiber that help in smooth digestion and maintain a healthy gut microbiome."
  },
  {
    icon: <Sparkles className="w-10 h-10 text-primary" />,
    title: "Glowing Skin",
    description: "Packed with antioxidants and Vitamin A that promote skin regeneration and a natural radiance."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-accent" />,
    title: "Eye Care",
    description: "High levels of Zeaxanthin help filter harmful blue light rays and support overall ocular health."
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-4xl md:text-5xl mb-6">Nature's Own <span className="text-accent">Superfood</span></h2>
          <p className="text-lg text-muted-foreground font-body">
            Beyond the exquisite taste, MangoBliss mangos are nutritional powerhouses that support your vibrant lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-3xl border border-muted hover:border-primary transition-all duration-300 hover:shadow-2xl bg-white group"
            >
              <div className="mb-6 p-4 bg-muted rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="font-headline text-2xl mb-4 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
