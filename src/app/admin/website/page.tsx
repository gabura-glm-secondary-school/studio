"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Save, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock, 
  Image as ImageIcon, 
  CheckCircle2, 
  Loader2, 
  Layout, 
  GraduationCap, 
  Briefcase, 
  Megaphone, 
  Plus, 
  Trash2, 
  BarChart3 as BarChartIcon 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

export default function WebsiteSettings() {
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);
  const [tickerNotices, setTickerNotices] = useState([
    "SSC 2025 Result Published - Students can now check their results through the student portal.",
    "Admission Open 2025 - Enrollment for the new academic session is now active for all classes.",
    "School Picnic Registration Open - Join us for the annual excursion to the Sundarbans Mangrove Forest."
  ]);

  const logoUrl = "https://i.postimg.cc/rwjdJqQK/1000144744-removebg-preview-(1).png";

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      toast({ title: "Settings Updated", description: "School information has been saved successfully." });
    }, 1500);
  };

  const addTickerNotice = () => {
    setTickerNotices([...tickerNotices, ""]);
  };

  const removeTickerNotice = (index: number) => {
    setTickerNotices(tickerNotices.filter((_, i) => i !== index));
  };

  const updateTickerNotice = (index: number, val: string) => {
    const next = [...tickerNotices];
    next[index] = val;
    setTickerNotices(next);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-headline font-bold text-primary">Website Settings</h1>
          <p className="text-muted-foreground text-sm font-medium">Control homepage content and school contact information.</p>
        </div>
        <Button onClick={handleSave} disabled={saving} className="rounded-xl gap-2 font-bold h-11 shadow-lg bg-emerald-600 hover:bg-emerald-700">
          {saving ? <Loader2 className="animate-spin" /> : <Save size={18} />} Save All Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-8">
        <TabsList className="bg-white/50 p-1 border rounded-2xl h-auto flex flex-wrap gap-2 justify-start shadow-sm">
          <TabsTrigger value="general" className="rounded-xl gap-2 h-10 font-bold data-[state=active]:bg-primary data-[state=active]:text-white">
            <Layout size={16} /> General Info
          </TabsTrigger>
          <TabsTrigger value="ticker" className="rounded-xl gap-2 h-10 font-bold data-[state=active]:bg-primary data-[state=active]:text-white">
            <Megaphone size={16} /> Notice Ticker
          </TabsTrigger>
          <TabsTrigger value="contact" className="rounded-xl gap-2 h-10 font-bold data-[state=active]:bg-primary data-[state=active]:text-white">
            <MapPin size={16} /> Contact Details
          </TabsTrigger>
          <TabsTrigger value="stats" className="rounded-xl gap-2 h-10 font-bold data-[state=active]:bg-primary data-[state=active]:text-white">
            <BarChartIcon size={16} /> Homepage Stats
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="animate-in slide-in-from-bottom-4 duration-500">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-sm">
              <CardHeader><CardTitle>Basic Configuration</CardTitle></CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>School Name</Label>
                  <Input defaultValue="Gabura Gopal Laxmi Memorial Secondary School" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label>School Motto (Bangla)</Label>
                  <Input defaultValue="সুশিক্ষাই আমাদের অঙ্গীকার" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label>Official Website URL</Label>
                  <Input defaultValue="https://gglmss.edu.bd" className="rounded-xl" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader><CardTitle>Identity & Assets</CardTitle></CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6 p-6 bg-secondary/30 rounded-3xl border-2 border-dashed">
                  <div className="w-20 h-20 relative bg-white rounded-2xl p-2 shadow-inner shrink-0 overflow-hidden">
                    <Image src={logoUrl} alt="Logo" fill className="object-contain" />
                  </div>
                  <div className="space-y-2">
                    <p className="font-bold text-sm text-primary leading-tight">School Official Logo</p>
                    <p className="text-[10px] text-muted-foreground font-black italic">Active Logo: New GGLMSS Design</p>
                    <Button variant="outline" size="sm" className="rounded-lg gap-2 h-8 border-2">
                      <ImageIcon size={14} /> Change Logo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ticker" className="animate-in slide-in-from-bottom-4 duration-500">
          <Card className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Notice Ticker Management</CardTitle>
                <CardDescription>Messages appearing in the sliding bar below the navbar.</CardDescription>
              </div>
              <Button onClick={addTickerNotice} size="sm" className="rounded-xl gap-2 font-black">
                <Plus size={16} /> Add Notice
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {tickerNotices.map((notice, idx) => (
                <div key={idx} className="flex gap-3">
                  <Input 
                    value={notice} 
                    onChange={(e) => updateTickerNotice(idx, e.target.value)}
                    placeholder="Enter notice text..." 
                    className="rounded-xl"
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => removeTickerNotice(idx)}
                    className="rounded-xl text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 size={18} />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="animate-in slide-in-from-bottom-4 duration-500">
          <Card className="border-none shadow-sm">
            <CardHeader><CardTitle>Official Contact Information</CardTitle></CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2"><Phone size={14} /> Primary Phone Number</Label>
                  <Input defaultValue="+880 1234 567890" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2"><Mail size={14} /> Official Email Address</Label>
                  <Input defaultValue="info@gglmss.edu.bd" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2"><Clock size={14} /> Office Hours</Label>
                  <Input defaultValue="Sat - Thu: 09:00 AM - 04:00 PM" className="rounded-xl" />
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2"><MapPin size={14} /> Physical Address</Label>
                  <Input defaultValue="Gabura, Shyamnagar, Satkhira, Bangladesh" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2"><Globe size={14} /> Google Maps Link</Label>
                  <Input defaultValue="https://maps.app.goo.gl/1jFDAVUPxMuXgDx69" className="rounded-xl font-mono text-xs" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats" className="animate-in slide-in-from-bottom-4 duration-500">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>Homepage Statistics</CardTitle>
              <CardDescription>Animate on scroll values for the impact section.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { l: "Students", v: "1200", icon: GraduationCap },
                { l: "Teachers", v: "45", icon: Briefcase },
                { l: "SSC Pass Rate (%)", v: "98", icon: CheckCircle2 },
                { l: "Excellence (Years)", v: "75", icon: Clock },
              ].map((s, i) => (
                <div key={i} className="space-y-2 p-6 bg-secondary/20 rounded-3xl border border-border/50 text-center group">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <s.icon size={20} />
                  </div>
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground block">{s.l}</Label>
                  <Input defaultValue={s.v} className="text-center font-black text-xl bg-white border-none h-12 shadow-inner" />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}