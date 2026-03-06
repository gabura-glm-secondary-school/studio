"use client";

import { useEffect, useState, useRef } from "react";
import { Users, GraduationCap, Award, Calendar } from "lucide-react";

const stats = [
  { label: "Students", value: 1200, icon: Users, suffix: "+" },
  { label: "Teachers", value: 45, icon: GraduationCap, suffix: "+" },
  { label: "Pass Rate", value: 98, icon: Award, suffix: "%" },
  { label: "Excellence", value: 25, icon: Calendar, suffix: "y+" },
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
    <section ref={sectionRef} className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-card p-8 text-center hover-lift group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                <stat.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-3xl md:text-5xl font-headline font-black text-primary mb-2">
                {counts[idx]}{stat.suffix}
              </h3>
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}