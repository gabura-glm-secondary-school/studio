
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, User, Phone } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const bg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative min-h-[95vh] flex items-center pt-48 pb-16 overflow-hidden px-4">
      {/* Background with Ambient Glow */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bg?.imageUrl || "https://picsum.photos/seed/sundar1/1920/1080"}
          alt="Sundarbans"
          fill
          priority
          className="object-cover scale-105 blur-[1px]"
          data-ai-hint="sundarbans forest"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background/80 to-background"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="glass-card p-8 md:p-14 grid lg:grid-cols-2 gap-12 items-center !bg-white/85 shadow-2xl border-white/50">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom duration-700">
            <div className="inline-flex items-center gap-3 bg-primary text-white px-5 py-2.5 rounded-full shadow-xl border border-white/20">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(20,184,166,0.8)]"></span>
              <p className="text-[11px] font-black uppercase tracking-[0.15em]">Admission Open 2025</p>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-headline font-black text-primary leading-[1.1] tracking-tighter">
                <span className="gradient-text">"Quality Education is Our Commitment"</span>
              </h1>
              <div className="h-1 w-20 bg-accent rounded-full"></div>
              <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-black">
                Gabura Gopal Laxmi Memorial Secondary School is committed to providing quality education and fostering excellence in every student.
              </p>
            </div>

            <div className="flex flex-wrap gap-5 pt-4">
              <Link href="/contact" className="block">
                <Button size="lg" className="btn-pill btn-gradient-primary group h-16 min-w-[200px] text-lg shadow-2xl font-black">
                  Apply Now <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Link href="/ssc-batches" className="block">
                <Button size="lg" variant="outline" className="btn-pill border-2 border-primary/40 bg-white/50 hover:bg-white/80 h-16 min-w-[200px] text-lg text-primary font-black shadow-lg">
                  Explore Programs
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-5 pt-10 border-t-2 border-dashed border-primary/10">
              {[
                { icon: FileText, label: "Notices", href: "/notices" },
                { icon: User, label: "Portal", href: "/auth/portal" },
                { icon: Phone, label: "Contact", href: "/contact" }
              ].map((item, i) => (
                <Link key={i} href={item.href} className="flex flex-col items-center gap-3 p-5 bg-white/60 backdrop-blur-xl rounded-[2.5rem] border border-white/80 hover:border-accent hover:bg-white transition-all group shadow-sm active:scale-95">
                  <item.icon className="text-primary group-hover:scale-125 transition-transform duration-300" size={28} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative aspect-square animate-in fade-in zoom-in duration-700 delay-200">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-accent/40 rounded-[4.5rem] -rotate-6 scale-105 shadow-xl"></div>
            <div className="relative w-full h-full rounded-[4.5rem] overflow-hidden rotate-3 shadow-2xl border-[8px] border-white">
              <Image
                src="https://picsum.photos/seed/school1/800/800"
                alt="Students"
                fill
                className="object-cover"
                data-ai-hint="happy students"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
