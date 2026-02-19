"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, Send, ClipboardList, User, Smartphone, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const phone = "8455092030";
  const email = "akshayabehera7721@gmail.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Requirements Submitted!",
        description: "I will review your project details and contact you within 24 hours.",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto">
          <div className="flex flex-col justify-center">
            <span className="text-primary font-bold uppercase tracking-widest text-[10px] mb-6 block">Direct Contact</span>
            <h2 className="font-headline text-6xl md:text-8xl mb-8 text-white leading-[1] font-bold">
              Let's Create <br />
              <span className="text-gold italic">Something Iconic</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl">
              I'm always ready to discuss new projects and creative visual storytelling. Reach out via your preferred channel.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <a href={`tel:${phone}`} className="flex items-center gap-4 group p-6 rounded-2xl glass-card hover:border-primary/50 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                  <Phone size={20} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-0.5">Call</p>
                  <p className="text-lg font-bold text-white">+91 {phone}</p>
                </div>
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-4 group p-6 rounded-2xl glass-card hover:border-primary/50 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                  <Mail size={20} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-0.5">Email</p>
                  <p className="text-lg font-bold text-white truncate max-w-[150px]">{email}</p>
                </div>
              </a>
            </div>

            <a 
              href={`https://wa.me/91${phone}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full flex items-center justify-center gap-4 p-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xl transition-all shadow-xl shadow-[#25D366]/20"
            >
              <MessageCircle size={28} />
              Message on WhatsApp
            </a>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[3rem] border-white/5 relative">
            <div className="absolute top-8 right-8 text-primary/20">
              <Sparkles size={48} />
            </div>
            
            <div className="flex items-center gap-4 mb-10">
              <ClipboardList className="text-primary" size={28} />
              <h3 className="text-3xl font-headline font-bold text-white">Project Requirements</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1 flex items-center gap-2">
                    <User size={12} /> Full Name
                  </label>
                  <Input placeholder="Your Name" className="bg-white/5 border-white/10 h-14 rounded-xl focus:ring-primary text-white" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1 flex items-center gap-2">
                    <Mail size={12} /> Email
                  </label>
                  <Input type="email" placeholder="email@example.com" className="bg-white/5 border-white/10 h-14 rounded-xl focus:ring-primary text-white" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1 flex items-center gap-2">
                  <Smartphone size={12} /> Phone Number
                </label>
                <Input type="tel" placeholder="Mobile Number" className="bg-white/5 border-white/10 h-14 rounded-xl focus:ring-primary text-white" required />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Project Details</label>
                <Textarea placeholder="Describe your project, reference links, and deadline..." className="bg-white/5 border-white/10 min-h-[160px] rounded-xl focus:ring-primary text-white resize-none" required />
              </div>

              <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-16 rounded-xl text-lg font-bold transition-all shadow-xl shadow-primary/20 group">
                {loading ? "Submitting..." : "Submit Project Details"}
                {!loading && <Send size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />}
              </Button>
              
              <p className="text-center text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                I'll respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
