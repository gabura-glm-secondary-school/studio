"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send, Loader2, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent",
        description: "We have received your message and will get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 2000);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm">Connect With Us</span>
          <h1 className="text-4xl lg:text-6xl font-headline font-bold text-primary">Get in Touch</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about admissions, academic programs, or school life? We are here to help. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1 space-y-6">
            {[
              { icon: MapPin, title: "Our Location", content: "Gabura, Shyamnagar, Satkhira, Bangladesh", sub: "District: Satkhira, Division: Khulna" },
              { icon: Phone, title: "Phone Numbers", content: "+880 1234 567890", sub: "Support: +880 0987 654321" },
              { icon: Mail, title: "Email Address", content: "info@gglmss.edu.bd", sub: "Admissions: admin@gglmss.edu.bd" },
              { icon: Clock, title: "Office Time", content: "Sat - Thu: 9 AM - 4 PM", sub: "Friday: Closed" },
            ].map((item, idx) => (
              <Card key={idx} className="glass-card">
                <CardContent className="p-6 flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">{item.title}</h3>
                    <p className="text-muted-foreground">{item.content}</p>
                    <p className="text-xs text-muted-foreground/60">{item.sub}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-2">
            <Card className="glass-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-headline font-bold text-primary mb-8">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold">Your Name</label>
                      <Input placeholder="Full Name" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold">Email Address</label>
                      <Input type="email" placeholder="email@example.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold">Subject</label>
                    <Input placeholder="How can we help you?" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold">Message</label>
                    <Textarea placeholder="Type your message here..." className="min-h-[150px]" required />
                  </div>
                  <Button type="submit" disabled={loading} className="w-full h-12 rounded-full text-lg gap-2">
                    {loading ? <Loader2 className="animate-spin" /> : <Send size={18} />} Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="mt-8 space-y-4">
              <div className="h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14757.99408226922!2d89.243004!3d22.254181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a01ae746e50e181%3A0xc3f837e3d6467612!2sGabura!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
              <Link 
                href="https://maps.app.goo.gl/1jFDAVUPxMuXgDx69" 
                target="_blank"
                className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors"
              >
                <ExternalLink size={18} /> View on Google Maps
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
