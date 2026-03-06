"use client";

import { useState, useEffect } from "react";
import { Megaphone } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * NewsTicker Component
 * 
 * A sliding announcement bar with glassmorphism styling.
 * Displays important school notices controlled via mock data (intended for Admin Panel control).
 */
export function NewsTicker() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Threshold matches the navbar's scroll behavior for synchronized transitions
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mock notices - In production, these would be fetched from Firestore 'notices' collection
  const notices = [
    "SSC 2025 Result Published - Students can now check their results through the student portal.",
    "Admission Open 2025 - Enrollment for the new academic session is now active for all classes.",
    "School Picnic Registration Open - Join us for the annual excursion to the Sundarbans Mangrove Forest.",
    "New Academic Calendar Published - View the list of holidays and events for the upcoming session.",
    "Winter Vacation Announcement - The school will remain closed from December 24th to January 2nd."
  ];

  return (
    <div 
      className={cn(
        "fixed left-0 right-0 z-40 transition-all duration-500 flex justify-center px-4 pointer-events-none",
        isScrolled ? "top-[80px] lg:top-[88px]" : "top-[104px] lg:top-[120px]"
      )}
    >
      <div className="w-full max-w-7xl pointer-events-auto">
        <div className="glass-navbar h-10 rounded-full flex items-center px-4 overflow-hidden border border-white/20 shadow-lg">
          {/* Badge Label */}
          <div className="bg-accent text-primary text-[10px] font-black uppercase px-3 py-1.5 rounded-full mr-4 flex items-center gap-2 shrink-0 shadow-sm border border-white/40">
            <Megaphone size={14} className="animate-pulse" />
            <span className="hidden sm:inline">Notice Board</span>
          </div>

          {/* Sliding Content Container */}
          <div className="relative flex-1 overflow-hidden h-full flex items-center">
            <div className="animate-marquee whitespace-nowrap flex items-center">
              {notices.map((notice, idx) => (
                <div key={idx} className="flex items-center">
                  <span className="text-primary text-[11px] font-black uppercase tracking-wider mx-12 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(20,184,166,0.5)]"></span>
                    {notice}
                  </span>
                </div>
              ))}
              {/* Duplicate for seamless continuous looping */}
              {notices.map((notice, idx) => (
                <div key={`dup-${idx}`} className="flex items-center">
                  <span className="text-primary text-[11px] font-black uppercase tracking-wider mx-12 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(20,184,166,0.5)]"></span>
                    {notice}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
