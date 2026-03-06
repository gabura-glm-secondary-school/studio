"use client";

import { Megaphone } from "lucide-react";

export function NewsTicker() {
  const notices = [
    "SSC 2025 Test Examination will start from next week.",
    "Admission for Class 6 is now open for the session 2025.",
    "Winter vacation holiday notice has been published.",
    "Congratulations to our students for achieving 100% pass rate in SSC 2024!",
    "Annual Cultural Competition scheduled for next month."
  ];

  return (
    <div className="bg-primary border-b border-primary/20 py-2 overflow-hidden relative z-40">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="bg-accent text-primary text-[10px] font-black uppercase px-3 py-1 rounded-sm mr-4 flex items-center gap-2 shrink-0 shadow-lg">
          <Megaphone size={14} />
          <span>Latest Update</span>
        </div>
        <div className="relative flex-1">
          <div className="animate-marquee whitespace-nowrap">
            {notices.map((notice, idx) => (
              <span key={idx} className="text-white text-sm font-medium mx-12">
                {notice}
              </span>
            ))}
            {/* Duplicate for seamless looping */}
            {notices.map((notice, idx) => (
              <span key={`dup-${idx}`} className="text-white text-sm font-medium mx-12">
                {notice}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}