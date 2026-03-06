import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { History as HistoryIcon, Map, Users, Award } from "lucide-react";

export default function HistoryPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <HistoryIcon className="w-16 h-16 text-accent mx-auto" />
          <h1 className="text-4xl lg:text-6xl font-headline font-bold text-primary">Our Rich History</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the legacy of Gabura Gopal Laxmi Memorial Secondary School and how we became a beacon of education in the Sundarbans.
          </p>
        </div>

        <div className="space-y-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
                <Image 
                  src="https://picsum.photos/seed/old1/800/600" 
                  alt="Old School Building" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  data-ai-hint="old building"
                />
             </div>
             <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-3xl font-headline font-bold text-primary">The Beginning (1970s)</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Founded in the early 1970s, our school started as a small initiative by local community leaders who recognized the dire need for secondary education in the remote island of Gabura.
                </p>
                <div className="p-6 bg-accent/10 border border-accent/20 rounded-2xl italic text-primary font-medium">
                  "Our founders believed that water might separate us from the mainland, but knowledge would connect us to the world."
                </div>
             </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="space-y-6">
                <h2 className="text-3xl font-headline font-bold text-primary">Resilience & Growth</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Despite numerous challenges including cyclones like Sidr and Aila, the school has stood strong. Each time, the community rebuilt the school, making it even better. Today, it stands as a testament to the resilience of the Gabura people.
                </p>
                <div className="grid grid-cols-2 gap-4">
                   <div className="flex items-center gap-3"><Award className="text-accent" /> National Awardee</div>
                   <div className="flex items-center gap-3"><Users className="text-accent" /> 5000+ Alumni</div>
                </div>
             </div>
             <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://picsum.photos/seed/resilient1/800/600" 
                  alt="Modern School" 
                  fill 
                  className="object-cover" 
                  data-ai-hint="modern building"
                />
             </div>
          </div>

          <Card className="glass-card p-12 text-center bg-primary text-white space-y-8">
            <h2 className="text-4xl font-headline font-bold">Our Future Vision</h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
              We are now moving towards a digital-first education system, integrating modern labs, computer facilities, and AI-assisted learning to ensure our students can compete globally from their hometown.
            </p>
            <div className="flex justify-center gap-8">
               <div className="text-center">
                  <div className="text-4xl font-black text-accent">2025+</div>
                  <div className="text-xs uppercase font-bold tracking-widest opacity-60">Digital Era</div>
               </div>
               <div className="text-center">
                  <div className="text-4xl font-black text-accent">100%</div>
                  <div className="text-xs uppercase font-bold tracking-widest opacity-60">Literacy Goal</div>
               </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}