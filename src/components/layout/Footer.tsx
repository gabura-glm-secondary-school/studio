import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 bg-white rounded-full p-1">
              <Image
                src="https://i.postimg.cc/52gjwkTC/download-(3).jpg"
                alt="Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <div>
              <h3 className="font-headline font-bold text-lg">Gabura Gopal Laxmi</h3>
              <p className="text-[10px] uppercase opacity-80 tracking-widest">Memorial Secondary School</p>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            “সুশিক্ষাই আমাদের অঙ্গীকার” - Dedicated to excellence in education for the students of Gabura and beyond.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-accent transition-colors"><Facebook size={20}/></Link>
            <Link href="#" className="hover:text-accent transition-colors"><Twitter size={20}/></Link>
            <Link href="#" className="hover:text-accent transition-colors"><Instagram size={20}/></Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-headline font-semibold text-lg mb-6 border-b border-white/10 pb-2">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/notices" className="hover:text-white transition-colors">Notice Board</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition-colors">School Gallery</Link></li>
            <li><Link href="/ssc-batches" className="hover:text-white transition-colors">SSC Batch Directory</Link></li>
            <li><Link href="/complaints" className="hover:text-white transition-colors">Online Complaint</Link></li>
          </ul>
        </div>

        {/* Academic */}
        <div>
          <h4 className="font-headline font-semibold text-lg mb-6 border-b border-white/10 pb-2">Academic</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li><Link href="/ssc-results" className="hover:text-white transition-colors">SSC Results</Link></li>
            <li><Link href="/events" className="hover:text-white transition-colors">Upcoming Events</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Admission Info</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Student Portal</Link></li>
            <li><Link href="/about/head-teachers" className="hover:text-white transition-colors">Administration</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-headline font-semibold text-lg mb-6 border-b border-white/10 pb-2">Contact Us</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin size={18} className="text-accent shrink-0" />
              <span>Gabura, Shyamnagar, Satkhira, Bangladesh</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-accent shrink-0" />
              <span>+880 1234 567890</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-accent shrink-0" />
              <span>info@gglmss.edu.bd</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-center text-xs text-white/50">
        <p>© {new Date().getFullYear()} Gabura Gopal Laxmi Memorial Secondary School. All rights reserved.</p>
      </div>
    </footer>
  );
}