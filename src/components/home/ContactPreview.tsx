import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ContactPreview() {
  return (
    <section className="py-24 px-4 pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card p-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-accent font-black uppercase tracking-[0.2em] text-xs">Get In Touch</span>
              <h2 className="text-4xl lg:text-5xl font-headline font-black text-primary">Visit Our Office</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: MapPin, title: "Address", content: "Gabura, Shyamnagar, Satkhira" },
                { icon: Phone, title: "Phone", content: "+880 1234 567890" },
                { icon: Mail, title: "Email", content: "info@gglmss.edu.bd" },
                { icon: Clock, title: "Hours", content: "Sat - Thu: 9AM - 4PM" },
              ].map((item, idx) => (
                <div key={idx} className="glass-card p-6 border-white/20 !rounded-[2rem] bg-white/30 hover-lift">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <h4 className="font-black text-[10px] uppercase tracking-widest text-primary mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground font-bold">{item.content}</p>
                </div>
              ))}
            </div>

            <Link href="/contact" className="inline-flex items-center gap-3 text-primary font-black uppercase tracking-widest text-xs hover:text-accent transition-colors group">
              Get detailed contact info <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/60 relative group">
             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14757.99408226922!2d89.243004!3d22.254181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a01ae746e50e181%3A0xc3f837e3d6467612!2sGabura!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-[12px] border-white/40 rounded-[3rem]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}