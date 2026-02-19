"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ExternalLink, Smartphone, Info } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { useToast } from "@/hooks/use-toast";

const tiers = [
  { name: "Basic", price: 50, features: ["Cut & Trim", "Basic Transitions", "Background Music", "720p Export", "1 Revision"] },
  { name: "Standard", price: 150, features: ["Color Grading", "Text Overlays", "Sound Enhancement", "1080p HD Export", "2 Revisions"] },
  { name: "Advanced", price: 300, features: ["Motion Graphics", "Subtitles", "Speed Ramping", "4K Ultra HD", "3 Revisions"] },
  { name: "Premium", price: 500, features: ["Full Production", "Viral Pacing", "Advanced SFX", "Unlimited Revisions", "Express Delivery"] },
];

export function Pricing() {
  const { toast } = useToast();
  const upiId = "8455092030ind@ibl";
  const razorpayLink = "https://rzp.io/rzp/dRxnA3tO";
  const scannerImg = PlaceHolderImages.find(img => img.id === "phonepe-scanner")?.imageUrl || "";

  const handlePayNow = () => {
    window.open(razorpayLink, "_blank", "noopener,noreferrer");
    toast({
      title: "Secure Payment Opened",
      description: "After payment, please fill the project requirement form below.",
      duration: 8000,
    });
  };

  return (
    <section id="pricing" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Pricing</span>
          <h2 className="font-headline text-5xl md:text-7xl mb-6 text-white font-bold">Simple <span className="text-gold">Investment</span></h2>
          <p className="text-xl text-muted-foreground">Premium editing services tailored to your budget.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {tiers.map((tier, idx) => (
            <Card key={idx} className="glass-card border-white/5 hover:border-primary/50 transition-all duration-500 bg-white/[0.01] flex flex-col group">
              <CardHeader className="text-center pt-10">
                <span className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2 block group-hover:scale-110 transition-transform">{tier.name}</span>
                <CardTitle className="text-4xl font-headline text-white">₹{tier.price}</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-10 flex-grow flex flex-col justify-between">
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check size={14} className="text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={handlePayNow}
                  className="w-full bg-white/5 hover:bg-primary text-white hover:text-primary-foreground rounded-full font-bold uppercase tracking-widest text-[10px] transition-all"
                >
                  Pay Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-5xl mx-auto glass-card rounded-[3rem] p-12 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-transparent relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
                <Smartphone size={14} /> Secure Razorpay Checkout
              </div>
              <h3 className="text-4xl md:text-5xl font-headline font-bold text-white">Instant <span className="text-gold">Checkout</span></h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Choose your preferred method. Pay directly via the secure Razorpay portal or scan the official UPI QR code.
              </p>
              
              <div className="space-y-4">
                <Button 
                  onClick={handlePayNow}
                  className="w-full sm:w-auto h-16 px-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl font-bold text-lg shadow-2xl shadow-primary/20 group transition-all"
                >
                  Pay Now via Razorpay
                  <ExternalLink size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 max-w-sm">
                  <Info className="text-primary shrink-0 mt-1" size={18} />
                  <p className="text-xs text-white/70 leading-relaxed">
                    <strong>Important:</strong> After payment, please scroll down to fill the project requirement form below to start your edit.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative group">
                <h4 className="text-center text-white font-headline text-lg mb-6 uppercase tracking-widest opacity-80">Scan to Pay via UPI</h4>
                <div className="p-4 bg-white rounded-[2.5rem] shadow-[0_0_60px_rgba(255,165,0,0.15)] transition-transform duration-700 hover:scale-105">
                  <div className="w-56 h-56 md:w-64 md:h-64 relative overflow-hidden rounded-3xl bg-black">
                    <Image 
                      src={scannerImg}
                      alt="PhonePe QR Code" 
                      fill
                      className="object-cover scale-[2.1] object-center translate-y-[-5%]"
                    />
                  </div>
                </div>
                <div className="mt-6 text-center space-y-2">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">UPI ID</p>
                  <p className="text-gold font-bold text-xl tracking-wider select-all">{upiId}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
