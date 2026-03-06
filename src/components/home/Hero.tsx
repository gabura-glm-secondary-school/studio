
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
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/70 to-background"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="glass-card p-8 md:p-14 grid lg:grid-cols-2 gap-12 items-center !bg-white/70">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom duration-700">
            <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/50 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></span>
              <p className="text-[11px] font-black uppercase tracking-[0.1em] text-primary">Admission Open 2025</p>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-headline font-black text-primary leading-[1.05] tracking-tight">
                Shaping <span className="gradient-text">Futures</span> <br />
                In Sundarbans
              </h1>
              <p className="text-xl text-slate-900 leading-relaxed font-black max-w-lg italic">
                "Quality Education is Our Commitment"
              </p>
              <p className="text-lg text-slate-800 leading-relaxed font-bold max-w-lg">
                Gabura Gopal Laxmi Memorial Secondary School is committed to providing quality education and fostering excellence in every student.
              </p>
            </div>

            <div className="flex flex-wrap gap-5 pt-2">
              <Link href="/contact" className="block">
                <Button size="lg" className="btn-pill btn-gradient-primary group h-16 min-w-[200px] text-lg shadow-2xl">
                  Apply Now <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Link href="/ssc-batches" className="block">
                <Button size="lg" variant="outline" className="btn-pill border-2 border-primary/30 bg-white/40 hover:bg-white/60 h-16 min-w-[200px] text-lg text-primary font-black">
                  Explore Programs
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-5 pt-8 border-t border-primary/10">
              {[
                { icon: FileText, label: "Notices", href: "/notices" },
                { icon: User, label: "Portal", href: "/auth/portal" },
                { icon: Phone, label: "Contact", href: "/contact" }
              ].map((item, i) => (
                <Link key={i} href={item.href} className="flex flex-col items-center gap-3 p-5 bg-white/40 backdrop-blur-xl rounded-[2rem] border border-white/60 hover:bg-white/60 transition-all group shadow-sm active:scale-95">
                  <item.icon className="text-primary group-hover:scale-125 transition-transform duration-300" size={24} />
                  <span className="text-[11px] font-black uppercase tracking-widest text-primary">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative aspect-square animate-in fade-in zoom-in duration-700 delay-200">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-[4rem] -rotate-6 scale-105"></div>
            <div className="relative w-full h-full rounded-[4rem] overflow-hidden rotate-3 shadow-2xl border-[6px] border-white">
              <Image
                src="https://picsum.photos/seed/school1/800/800"
                alt="Students"
                fill
                className="object-cover"
                data-ai-hint="happy students"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
