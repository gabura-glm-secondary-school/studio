import Link from "next/link";
import { Calendar, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    title: "Annual School Picnic",
    date: "Dec 15, 2024",
    location: "Sundarbans Eco Park",
    description: "A fun-filled day at the world's largest mangrove forest for students and staff.",
    category: "Recreation"
  },
  {
    title: "Annual Cultural Program",
    date: "Jan 20, 2025",
    location: "School Main Stage",
    description: "Showcasing the diverse talents of our students in music, dance, and drama.",
    category: "Culture"
  },
  {
    title: "School Sports Day",
    date: "Feb 10, 2025",
    location: "School Grounds",
    description: "A day of athletic competition and sportsmanship for all classes.",
    category: "Sports"
  }
];

export function EventHighlights() {
  return (
    <section className="py-24 px-4 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 px-4">
          <div className="space-y-4">
            <span className="text-accent font-black uppercase tracking-[0.2em] text-xs flex items-center gap-2">
              <Sparkles size={14} /> Mark Your Calendar
            </span>
            <h2 className="text-4xl lg:text-5xl font-headline font-black text-primary">Event Highlights</h2>
          </div>
          <Button variant="outline" asChild className="btn-pill border-2 border-primary/20 hover:bg-primary hover:text-white">
            <Link href="/events" className="flex items-center">
              View All Events <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((event, idx) => (
            <div key={idx} className="glass-card p-8 space-y-6 hover-lift bg-white/80 group">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest bg-accent/10 text-accent px-3 py-1 rounded-full">
                  {event.category}
                </span>
                <Calendar className="text-primary/30" size={20} />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-headline font-black text-primary group-hover:text-accent transition-colors leading-tight">
                  {event.title}
                </h3>
                <div className="flex flex-col gap-1 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  <span className="flex items-center gap-2"><Calendar size={12} className="text-primary" /> {event.date}</span>
                  <span className="flex items-center gap-2"><MapPin size={12} className="text-primary" /> {event.location}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground font-medium leading-relaxed line-clamp-3">
                {event.description}
              </p>

              <Button className="w-full h-12 rounded-2xl bg-primary text-white font-black uppercase tracking-widest text-[10px] shadow-lg group-hover:bg-accent transition-colors">
                Register Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
