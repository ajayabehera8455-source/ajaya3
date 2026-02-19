"use client";

import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "John Doe",
    role: "Tech YouTuber",
    text: "Akshaya's editing style took my channel to the next level. His attention to detail and pacing is world-class.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Brand Director",
    text: "Professional, fast, and creative. He understood our vision perfectly and delivered beyond expectations.",
    rating: 5
  },
  {
    name: "Mike Ross",
    role: "Content Creator",
    text: "The motion graphics and sound design in his work are incredible. Best editor I've worked with.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-headline text-4xl md:text-5xl mb-6 text-white">Client <span className="text-gold italic">Stories</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="p-10 glass-card rounded-2xl relative">
              <Quote size={40} className="text-primary/10 absolute top-8 right-8" />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" className="text-primary" />
                ))}
              </div>
              <p className="text-lg text-white/80 mb-8 font-body italic leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <h4 className="font-bold text-white">{review.name}</h4>
                <p className="text-xs text-primary font-bold uppercase tracking-widest">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}