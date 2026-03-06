import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Quote } from "lucide-react";

export function PrincipalChairmanMessages() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 space-y-32">
        {/* Principal Message */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-in slide-in-from-left duration-700">
            <div className="absolute inset-0 bg-accent/20 rounded-3xl -rotate-3"></div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/principal1/600/750" 
                alt="Principal" 
                fill 
                className="object-cover" 
                data-ai-hint="headteacher portrait"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-2xl hidden md:block border-accent/20">
               <Quote className="text-accent mb-4" size={32} fill="currentColor" />
               <p className="text-primary font-bold italic text-lg">"Excellence is not a skill, it is an attitude."</p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm">Leadership Message</span>
              <h2 className="text-4xl lg:text-5xl font-headline font-bold text-primary">Message from the Principal</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Gabura Gopal Laxmi Memorial Secondary School, we believe every child has unique potential. Our mission is to provide a nurturing environment where students can discover their strengths and prepare for the challenges of tomorrow. 
            </p>
            <p className="text-muted-foreground leading-relaxed italic">
              "We are committed to delivering quality education that combines academic rigor with character building, ensuring our students become responsible global citizens."
            </p>
            <div className="pt-4">
              <h4 className="font-headline font-bold text-xl text-primary">Md. Ashraful Islam</h4>
              <p className="text-sm font-semibold text-accent uppercase tracking-widest">Principal, GGLMSS</p>
            </div>
            <Button variant="outline" className="rounded-full px-8" asChild>
              <Link href="/about/principal">Read Full Message</Link>
            </Button>
          </div>
        </div>

        {/* Chairman Message */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
             <div className="space-y-4">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm">Governing Body</span>
              <h2 className="text-4xl lg:text-5xl font-headline font-bold text-primary">Message from the Chairman</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our school serves as the pillar of education in the Gabura region. Since its inception, we have strived to bridge the gap between rural challenges and modern opportunities through knowledge.
            </p>
            <p className="text-muted-foreground leading-relaxed italic">
              "Education is the most powerful weapon which you can use to change the world. We are here to provide that weapon to our community's future leaders."
            </p>
             <div className="pt-4">
              <h4 className="font-headline font-bold text-xl text-primary">Hazi Md. Mofizul Haque</h4>
              <p className="text-sm font-semibold text-accent uppercase tracking-widest">Chairman, Governing Body</p>
            </div>
            <Button variant="outline" className="rounded-full px-8" asChild>
              <Link href="/about/chairman">Read Full Message</Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2 relative animate-in slide-in-from-right duration-700">
             <div className="absolute inset-0 bg-primary/10 rounded-3xl rotate-3"></div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
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