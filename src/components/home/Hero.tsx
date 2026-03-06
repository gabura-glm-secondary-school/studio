import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, User, Phone } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const bg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bg?.imageUrl || "https://picsum.photos/seed/sundar1/1920/1080"}
          alt="Sundarbans Background"
          fill
          priority
          className="object-cover"
          data-ai-hint="sundarbans forest"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 relative bg-white rounded-2xl p-2 shadow-xl">
              <Image
                src="https://i.postimg.cc/52gjwkTC/download-(3).jpg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-accent font-bold tracking-widest uppercase text-sm">Welcome to</p>
              <h2 className="text-white font-headline font-extrabold text-2xl lg:text-3xl">
                Gabura Gopal Laxmi Memorial Secondary School
              </h2>
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-headline font-black text-white leading-[1.1]">
            <span className="text-accent italic block mb-2">“সুশিক্ষাই আমাদের অঙ্গীকার”</span>
            Shaping Futures in the <br />
            <span className="text-accent">Heart of Sundarbans</span>
          </h1>

          <p className="text-lg text-white/80 max-w-xl leading-relaxed">
            Providing high-quality education since decades, we empower students to achieve excellence and contribute positively to society.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 rounded-full px-8 shadow-xl group">
              Admission Info <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-full px-8 backdrop-blur-sm shadow-xl">
              Contact Us
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8">
            <Link href="/notices" className="flex flex-col items-center gap-2 p-4 bg-white/10 backdrop-blur-md rounded-2xl text-white hover:bg-white/20 transition-all border border-white/20">
              <FileText className="text-accent" />
              <span className="text-xs font-bold uppercase tracking-widest">Notice Board</span>
            </Link>
            <Link href="#" className="flex flex-col items-center gap-2 p-4 bg-white/10 backdrop-blur-md rounded-2xl text-white hover:bg-white/20 transition-all border border-white/20">
              <User className="text-accent" />
              <span className="text-xs font-bold uppercase tracking-widest">Portal</span>
            </Link>
            <Link href="/contact" className="flex flex-col items-center gap-2 p-4 bg-white/10 backdrop-blur-md rounded-2xl text-white hover:bg-white/20 transition-all border border-white/20">
              <Phone className="text-accent" />
              <span className="text-xs font-bold uppercase tracking-widest">Contact</span>
            </Link>
          </div>
        </div>

        <div className="hidden lg:block relative h-[600px] animate-in fade-in zoom-in duration-1000">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
           <div className="relative w-full h-full glass-card rounded-[2rem] overflow-hidden rotate-3 shadow-2xl border-white/20">
             <Image
               src="https://picsum.photos/seed/school1/800/1000"
               alt="School Life"
               fill
               className="object-cover"
               data-ai-hint="happy students"
             />
           </div>
        </div>
      </div>
    </section>
  );
}