
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function Gallery() {
  const galleryImages = [
    PlaceHolderImages.find(img => img.id === "gallery-1"),
    PlaceHolderImages.find(img => img.id === "gallery-2"),
    PlaceHolderImages.find(img => img.id === "gallery-3"),
    PlaceHolderImages.find(img => img.id === "health-mango"),
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-headline text-4xl md:text-5xl mb-6">Captured <span className="text-primary italic">Bliss</span></h2>
            <p className="text-lg text-muted-foreground font-body">
              A glimpse into our vibrant harvest and the beauty of nature's finest creation.
            </p>
          </div>
          <button className="text-accent font-bold uppercase tracking-widest hover:underline transition-all">
            Follow our Instagram
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px]">
          <div className="md:col-span-8 relative rounded-3xl overflow-hidden group">
            <Image
              src={galleryImages[0]?.imageUrl || ""}
              alt="Mango Detail"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
              data-ai-hint="mango fruit"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex items-end">
              <span className="text-white font-headline text-2xl">Exquisite Textures</span>
            </div>
          </div>
          <div className="md:col-span-4 relative rounded-3xl overflow-hidden group">
            <Image
              src={galleryImages[1]?.imageUrl || ""}
              alt="Mango Blossom"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
              data-ai-hint="mango blossom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex items-end">
              <span className="text-white font-headline text-2xl">Spring Blooms</span>
            </div>
          </div>
          <div className="md:col-span-4 relative rounded-3xl overflow-hidden group">
            <Image
              src={galleryImages[2]?.imageUrl || ""}
              alt="Harvest"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
              data-ai-hint="mango harvest"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex items-end">
              <span className="text-white font-headline text-2xl">The Harvest</span>
            </div>
          </div>
          <div className="md:col-span-8 relative rounded-3xl overflow-hidden group">
            <Image
              src={galleryImages[3]?.imageUrl || ""}
              alt="Mango Dish"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
              data-ai-hint="mango salad"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex items-end">
              <span className="text-white font-headline text-2xl">Culinary Delight</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
