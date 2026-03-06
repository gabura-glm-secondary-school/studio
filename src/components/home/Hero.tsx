import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, User, Phone } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const bg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden px-4">
      {/* Background with Ambient Glow */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bg?.imageUrl || "https://picsum.photos/seed/sundar1/1920/1080"}
          alt="Sundarbans"
          fill
          priority
          className="object-cover scale-105 blur-[2px]"
          data-ai-hint="sundarbans forest"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background/80 to-background"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="glass-card p-8 md:p-12 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-500">
            <div className="inline-flex items-center gap-3 bg-white/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <p className="text-[10px] font-black uppercase tracking-widest text-primary">Admission Open 2025</p>
            </div>

            <h1 className="text-4xl md:text-6xl font-headline font-black text-primary leading-[1.1]">
              Shaping <span className="gradient-text">Futures</span> <br />
              In Sundarbans
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              Gabura Gopal Laxmi Memorial Secondary School is committed to providing quality education and fostering excellence in every student, preparing them for a dynamic future.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="btn-pill btn-gradient-primary group h-14 min-w-[180px]">
                Apply Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="btn-pill border-2 border-primary/20 bg-white/20 hover:bg-white/40 h-14 min-w-[180px]">
                Explore Programs
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { icon: FileText, label: "Notices", href: "/notices" },
                { icon: User, label: "Portal", href: "/auth/portal" },
                { icon: Phone, label: "Contact", href: "/contact" }
              ].map((item, i) => (
                <Link key={i} href={item.href} className="flex flex-col items-center gap-2 p-4 bg-white/30 backdrop-blur-lg rounded-3xl border border-white/40 hover:bg-white/50 transition-all group active:scale-95">
                  <item.icon className="text-primary group-hover:scale-110 transition-transform" size={20} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative aspect-square animate-in fade-in zoom-in duration-500 delay-150">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[3rem] -rotate-6"></div>
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden rotate-3 shadow-2xl border-4 border-white/60">
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
