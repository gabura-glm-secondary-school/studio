import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function GalleryPreview() {
  const images = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card p-12 overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-4">
              <span className="text-accent font-black uppercase tracking-[0.2em] text-xs">Visual Journey</span>
              <h2 className="text-4xl lg:text-5xl font-headline font-black text-primary">Our School Gallery</h2>
            </div>
            <Button variant="outline" asChild className="btn-pill border-2 border-primary/20 hover:bg-primary hover:text-white">
              <Link href="/gallery" className="flex items-center">
                Explore All <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="col-span-2 row-span-2 relative rounded-[2.5rem] overflow-hidden group shadow-xl">
              <Image 
                src={images[0]?.imageUrl || "https://picsum.photos/seed/gallery1/800/600"} 
                alt="Gallery" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
                data-ai-hint="school event"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                <div className="text-white">
                  <h4 className="font-bold text-2xl">Annual Sports Day</h4>
                  <p className="text-sm opacity-80">Celebrating athleticism and team spirit</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-[2rem] overflow-hidden h-64 group shadow-lg">
               <Image 
                 src={images[1]?.imageUrl || "https://picsum.photos/seed/gallery2/600/400"} 
                 alt="Gallery" 
                 fill 
                 className="object-cover group-hover:scale-110 transition-transform duration-700" 
                 data-ai-hint="school sports"
               />
            </div>
            <div className="relative rounded-[2rem] overflow-hidden h-64 group shadow-lg">
               <Image 
                 src={images[2]?.imageUrl || "https://picsum.photos/seed/gallery3/600/400"} 
                 alt="Gallery" 
                 fill 
                 className="object-cover group-hover:scale-110 transition-transform duration-700" 
                 data-ai-hint="classroom"
               />
            </div>
            <div className="col-span-2 relative rounded-[2.5rem] overflow-hidden h-64 group shadow-xl">
               <Image 
                 src="https://picsum.photos/seed/gall4/800/400" 
                 alt="Gallery" 
                 fill 
                 className="object-cover group-hover:scale-110 transition-transform duration-700" 
                 data-ai-hint="campus life"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <Link href="/gallery" className="glass-card px-8 py-4 flex items-center gap-3 text-primary font-black hover:bg-accent hover:text-white transition-all shadow-2xl">
                    <ImageIcon size={20} /> View 100+ More
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}