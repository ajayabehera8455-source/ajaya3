"use client";

import { Instagram, Youtube, Linkedin, Mail, Phone, ArrowUp, MessageCircle } from "lucide-react";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const phone = "8455092030";
  const email = "akshayabehera7721@gmail.com";
  
  const socialLinks = [
    { Icon: Instagram, href: "https://www.instagram.com/akshaya.editz?igsh=bGE0Zm4zYzFvNjNq", label: "Instagram" },
    { Icon: Youtube, href: "https://youtube.com/@aloneboyeditz", label: "YouTube" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/akshayabehera7721", label: "LinkedIn" },
    { Icon: MessageCircle, href: `https://wa.me/91${phone}`, label: "WhatsApp" }
  ];

  return (
    <footer className="bg-[#020202] text-white pt-32 pb-16 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-24">
          <div className="lg:col-span-2">
            <div className="text-3xl font-headline font-bold mb-8">
              AKSHAYA<span className="text-primary">KUMAR</span>
            </div>
            <p className="text-muted-foreground text-lg mb-10 max-w-md leading-relaxed">
              Professional Video Editor & Content Creator dedicated to visual storytelling that converts. Transforming raw footage into digital assets.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href, label }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-500 hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-headline text-2xl mb-8 text-white font-bold">Contact</h4>
            <ul className="space-y-6 text-muted-foreground">
              <li className="flex items-center gap-4 hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone size={16} className="text-primary" />
                </div>
                <a href={`tel:${phone}`}>+91 {phone}</a>
              </li>
              <li className="flex items-center gap-4 hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail size={16} className="text-primary" />
                </div>
                <a href={`mailto:${email}`} className="text-sm truncate max-w-[200px]">{email}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-2xl mb-8 text-white font-bold">Quick Links</h4>
            <ul className="space-y-4 text-muted-foreground font-bold uppercase tracking-widest text-[10px]">
              <li><a href="#about" className="hover:text-primary transition-colors">About Me</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">Process</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Hire Me</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-muted-foreground text-[10px] uppercase tracking-[0.3em] font-bold">
            © 2024 AKSHAYA KUMAR. ALL RIGHTS RESERVED.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-muted-foreground hover:text-primary transition-all uppercase tracking-[0.3em] text-[10px] font-bold"
          >
            Back to top
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:-translate-y-2 transition-all duration-500">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
