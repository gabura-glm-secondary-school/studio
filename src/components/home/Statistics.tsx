"use client";

import { useEffect, useState, useRef } from "react";
import { Users, GraduationCap, Award, Calendar } from "lucide-react";

const stats = [
  { label: "Students", value: 1200, icon: Users, suffix: "+" },
  { label: "Teachers", value: 45, icon: GraduationCap, suffix: "" },
  { label: "SSC Pass Rate", value: 98, icon: Award, suffix: "%" },
  { label: "Years of Excellence", value: 75, icon: Calendar, suffix: "+" },
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
          const duration = 1000;
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
    <section ref={sectionRef} className="py-12 md:py-20 px-4 overflow-hidden -mt-12 md:-mt-24 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-card p-6 md:p-8 text-center hover-lift group active:scale-95 transition-transform cursor-default bg-white/80">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:rotate-12 transition-transform duration-200">
                <stat.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl md:text-5xl font-headline font-black text-primary mb-1 md:mb-2">
                {counts[idx]}{stat.suffix}
              </h3>
              <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
