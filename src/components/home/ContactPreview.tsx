import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm">Get In Touch</span>
              <h2 className="text-4xl lg:text-5xl font-headline font-bold text-primary">Contact Our Office</h2>
            </div>
            
            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Address", content: "Gabura, Shyamnagar, Satkhira, Bangladesh" },
                { icon: Phone, title: "Phone", content: "+880 1234 567890, +880 0987 654321" },
                { icon: Mail, title: "Email", content: "info@gglmss.edu.bd, admission@gglmss.edu.bd" },
                { icon: Clock, title: "Office Hours", content: "Sat - Thu: 09:00 AM - 04:00 PM" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0">
                    <item.icon className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{item.title}</h4>
                    <p className="text-muted-foreground">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden border border-border shadow-xl">
             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14757.99408226922!2d89.243004!3d22.254181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a01ae746e50e181%3A0xc3f837e3d6467612!2sGabura!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}