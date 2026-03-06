
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ImageIcon, Filter, Maximize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const categories = ["All", "Events", "Campus", "Academic", "Sports"];

const galleryImages = [
  { id: 1, category: "Events", title: "Annual Sports 2024", url: "https://picsum.photos/seed/sch1/800/600", hint: "school sports" },
  { id: 2, category: "Campus", title: "Main Building", url: "https://picsum.photos/seed/sch2/800/600", hint: "school building" },
  { id: 3, category: "Academic", title: "Science Lab", url: "https://picsum.photos/seed/sch3/800/600", hint: "science laboratory" },
  { id: 4, category: "Events", title: "Cultural Program", url: "https://picsum.photos/seed/sch4/800/600", hint: "cultural dance" },
  { id: 5, category: "Sports", title: "Football Team", url: "https://picsum.photos/seed/sch5/800/600", hint: "football match" },
  { id: 6, category: "Campus", title: "School Garden", url: "https://picsum.photos/seed/sch6/800/600", hint: "school garden" },
  { id: 7, category: "Academic", title: "Computer Lab", url: "https://picsum.photos/seed/sch7/800/600", hint: "computer class" },
  { id: 8, category: "Events", title: "Prize Giving Ceremony", url: "https://picsum.photos/seed/sch8/800/600", hint: "award ceremony" },
  { id: 9, category: "Sports", title: "Cricket Tournament", url: "https://picsum.photos/seed/sch9/800/600", hint: "cricket game" },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const filteredImages = galleryImages.filter(
    (img) => selectedCategory === "All" || img.category === selectedCategory
  );

  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <Link href="/">
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary px-0 active:scale-95 transition-transform">
                <ArrowLeft size={18} /> প্রচ্ছদ পাতায় ফিরে যান
              </Button>
            </Link>
            <div className="space-y-1">
              <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px]">Visual Journey</span>
              <h1 className="text-4xl font-headline font-black text-primary">আমাদের গ্যালারি</h1>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "rounded-full h-9 px-6 text-xs font-bold uppercase tracking-widest transition-all",
                  selectedCategory === cat ? "shadow-lg bg-primary" : "bg-white/50 border-white/40"
                )}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative glass-card !rounded-[2.5rem] overflow-hidden aspect-[4/3] cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.url}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                data-ai-hint={image.hint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                <Badge className="w-fit mb-2 bg-accent text-primary uppercase font-black text-[9px]">
                  {image.category}
                </Badge>
                <h3 className="text-white font-bold text-xl">{image.title}</h3>
                <div className="mt-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform delay-100">
                  <Maximize2 size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors p-2"
            >
              <X size={32} />
            </button>
            <div className="relative w-full max-w-5xl aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in duration-300">
              <Image
                src={selectedImage.url}
                alt={selectedImage.title}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black/80 to-transparent">
                <Badge className="mb-4 bg-accent text-primary font-black uppercase">
                  {selectedImage.category}
                </Badge>
                <h2 className="text-white text-3xl font-headline font-black">
                  {selectedImage.title}
                </h2>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="py-32 text-center space-y-4">
            <ImageIcon size={64} className="mx-auto text-muted-foreground/30" />
            <p className="text-muted-foreground font-medium">এই ক্যাটাগরিতে কোনো ছবি পাওয়া যায়নি।</p>
          </div>
        )}
      </div>
    </div>
  );
}
