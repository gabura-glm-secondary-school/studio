"use client";

import { useEffect, useState, useRef } from "react";
import { Users, GraduationCap, Award, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  { label: "Total Students", value: 1200, icon: Users, prefix: "", suffix: "+" },
  { label: "Total Teachers", value: 45, icon: GraduationCap, prefix: "", suffix: "+" },
  { label: "SSC Pass Rate", value: 98, icon: Award, prefix: "", suffix: "%" },
  { label: "Years of Excellence", value: 25, icon: Calendar, prefix: "", suffix: "+" },
];

export function Statistics() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const frameDuration = 1000 / 60;
          const totalFrames = Math.round(duration / frameDuration);

          let frame = 0;
          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            setCounts(
              stats.map((stat) => Math.floor(stat.value * progress))
            );

            if (frame === totalFrames) {
              clearInterval(timer);
              setCounts(stats.map(s => s.value));
            }
          }, frameDuration);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-20 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <Card key={idx} className="glass-card p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-primary transition-colors">
                <stat.icon size={32} className="text-primary group-hover:text-primary" />
              </div>
              <h3 className="text-4xl font-headline font-bold text-primary mb-2">
                {stat.prefix}{counts[idx]}{stat.suffix}
              </h3>
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}