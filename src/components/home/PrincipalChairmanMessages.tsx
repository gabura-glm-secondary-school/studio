import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Quote } from "lucide-react";

export function PrincipalChairmanMessages() {
  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Principal Message */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-in slide-in-from-left duration-500">
            <div className="absolute inset-0 bg-primary/10 rounded-[3rem] -rotate-3 scale-105"></div>
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/60">
              <Image 
                src="https://picsum.photos/seed/principal1/600/750" 
                alt="Principal" 
                fill 
                className="object-cover" 
                data-ai-hint="headteacher portrait"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-8 hidden md:block max-w-xs shadow-2xl border-white/60">
               <Quote className="text-accent mb-3" size={32} fill="currentColor" />
               <p className="text-primary font-black italic text-base leading-tight">"Excellence is an attitude, not just a skill."</p>
            </div>
          </div>
          <div className="space-y-6 lg:pl-8">
            <div className="space-y-3">
              <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px]">Leadership Message</span>
              <h2 className="text-3xl lg:text-5xl font-headline font-black text-primary">Principal's Vision</h2>
            </div>
            <div className="glass-card p-8 space-y-4">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
                At GGLMSS, we believe every child has unique potential. Our mission is to provide a nurturing environment where students can discover their strengths.
              </p>
              <div className="pt-2">
                <h4 className="font-headline font-black text-xl text-primary leading-none">Md. Ashraful Islam</h4>
                <p className="text-[10px] font-black text-accent uppercase tracking-widest mt-1">Principal, GGLMSS</p>
              </div>
              <Button size="lg" className="btn-pill btn-gradient-primary w-full md:w-auto h-12" asChild>
                <Link href="/about/principal">Read Message</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Chairman Message */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6 lg:pr-8">
             <div className="space-y-3 text-right lg:text-left">
              <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px]">Governing Body</span>
              <h2 className="text-3xl lg:text-5xl font-headline font-black text-primary">Chairman's Note</h2>
            </div>
            <div className="glass-card p-8 space-y-4 bg-gradient-to-br from-white/60 to-accent/5">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
                Our school serves as the pillar of education in the Gabura region. Since inception, we have strived to bridge the gap between rural challenges and modern opportunities.
              </p>
              <div className="pt-2">
                <h4 className="font-headline font-black text-xl text-primary leading-none">Hazi Md. Mofizul Haque</h4>
                <p className="text-[10px] font-black text-accent uppercase tracking-widest mt-1">Chairman, Governing Body</p>
              </div>
              <Button size="lg" className="btn-pill btn-gradient-accent w-full md:w-auto h-12" asChild>
                <Link href="/about/chairman">Full Story</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative animate-in slide-in-from-right duration-500">
             <div className="absolute inset-0 bg-accent/10 rounded-[3rem] rotate-3 scale-105"></div>
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/60">
              <Image 
                src="https://picsum.photos/seed/chairman1/600/750" 
                alt="Chairman" 
                fill 
                className="object-cover" 
                data-ai-hint="professional leader"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
