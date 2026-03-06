
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* About Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 bg-white rounded-full p-1 shadow-2xl border-4 border-white/20">
              <Image
                src="https://i.postimg.cc/52gjwkTC/download-(3).jpg"
                alt="Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <div>
              <h3 className="font-headline font-black text-xl leading-tight uppercase tracking-tighter">Gabura Gopal Laxmi</h3>
              <p className="text-[10px] uppercase font-black text-accent tracking-[0.2em]">Memorial Secondary School</p>
            </div>
          </div>
          <p className="text-sm text-white leading-relaxed font-medium opacity-90 italic border-l-4 border-accent pl-4">
            “সুশিক্ষাই আমাদের অঙ্গীকার” - Dedicated to excellence in education for the students of Gabura and beyond.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <Link key={i} href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-accent transition-all duration-300 group">
                <Icon size={20} className="group-hover:scale-110 transition-transform" />
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-headline font-black text-lg mb-8 uppercase tracking-widest text-accent flex items-center gap-2">
            <span className="w-8 h-1 bg-accent rounded-full"></span> Quick Links
          </h4>
          <ul className="space-y-4">
            {[
              { label: "About Us", href: "/about" },
              { label: "Notice Board", href: "/notices" },
              { label: "School Gallery", href: "/gallery" },
              { label: "SSC Batch Directory", href: "/ssc-batches" },
              { label: "Online Complaint", href: "/complaints" }
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm font-bold flex items-center gap-2 hover:text-accent transition-colors group">
                  <ChevronRight size={14} className="text-accent opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Academic Section */}
        <div>
          <h4 className="font-headline font-black text-lg mb-8 uppercase tracking-widest text-accent flex items-center gap-2">
            <span className="w-8 h-1 bg-accent rounded-full"></span> Academic
          </h4>
          <ul className="space-y-4">
            {[
              { label: "SSC Results", href: "/ssc-results" },
              { label: "Upcoming Events", href: "/events" },
              { label: "Admission Info", href: "/contact" },
              { label: "Student Portal", href: "/auth/portal" },
              { label: "Administration", href: "/about/head-teachers" }
            ].map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm font-bold flex items-center gap-2 hover:text-accent transition-colors group">
                  <ChevronRight size={14} className="text-accent opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-headline font-black text-lg mb-8 uppercase tracking-widest text-accent flex items-center gap-2">
            <span className="w-8 h-1 bg-accent rounded-full"></span> Contact Us
          </h4>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shrink-0 text-primary">
                <MapPin size={20} />
              </div>
              <span className="text-sm font-bold leading-snug">Gabura, Shyamnagar, Satkhira, Bangladesh</span>
            </li>
            <li className="flex gap-4">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shrink-0 text-primary">
                <Phone size={20} />
              </div>
              <span className="text-sm font-bold">+880 1234 567890</span>
            </li>
            <li className="flex gap-4">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shrink-0 text-primary">
                <Mail size={20} />
              </div>
              <span className="text-sm font-bold">info@gglmss.edu.bd</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
        <p>© {new Date().getFullYear()} Gabura Gopal Laxmi Memorial Secondary School.</p>
        <p>Developed for Excellence</p>
      </div>
    </footer>
  );
}
