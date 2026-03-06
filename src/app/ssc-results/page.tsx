"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Loader2, Download, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function SscResultsPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setResult({
        name: "Abdur Rahman",
        roll: "123456",
        gpa: "5.00",
        year: "2024",
        board: "Jessore",
        subjects: [
          { name: "Bangla", grade: "A+" },
          { name: "English", grade: "A+" },
          { name: "Mathematics", grade: "A+" },
          { name: "Religion", grade: "A+" },
          { name: "Physics", grade: "A+" },
          { name: "Chemistry", grade: "A+" },
          { name: "Biology", grade: "A+" },
        ]
      });
      toast({
        title: "Result Found",
        description: "Successfully retrieved result for Roll: 123456",
      });
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary/10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl lg:text-5xl font-headline font-bold text-primary">Check SSC Board Results</h1>
          <p className="text-muted-foreground">Securely check your secondary school certificate examination results.</p>
        </div>

        <Card className="glass-card mb-12">
          <CardHeader>
            <CardTitle>Search Information</CardTitle>
            <CardDescription>Enter your examination details accurately to get your result.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
              <div className="space-y-2">
                <label className="text-sm font-bold">Roll Number</label>
                <Input placeholder="Enter Roll" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Board</label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Board" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jessore">Jessore</SelectItem>
                    <SelectItem value="dhaka">Dhaka</SelectItem>
                    <SelectItem value="rajshahi">Rajshahi</SelectItem>
                    <SelectItem value="cumilla">Cumilla</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Year</label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" disabled={loading} className="w-full h-10 gap-2">
                {loading ? <Loader2 className="animate-spin" /> : <Search size={18} />} Get Result
              </Button>
            </form>
          </CardContent>
        </Card>

        {result && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-500">
            <Card className="glass-card border-accent/50 bg-accent/5 overflow-hidden">
               <div className="bg-accent p-6 flex justify-between items-center text-primary">
                 <div>
                    <h2 className="text-2xl font-bold">{result.name}</h2>
                    <p className="font-semibold opacity-80 uppercase tracking-widest text-sm">Roll: {result.roll} | Year: {result.year}</p>
                 </div>
                 <div className="text-center bg-white/40 backdrop-blur-md px-6 py-2 rounded-2xl border border-white/40">
                    <p className="text-xs uppercase font-black">Result GPA</p>
                    <p className="text-4xl font-black">{result.gpa}</p>
                 </div>
               </div>
               <CardContent className="p-8">
                 <div className="flex items-center gap-2 mb-8 text-primary font-bold">
                    <CheckCircle2 className="text-accent" />
                    <span>Grade Sheet Details</span>
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {result.subjects.map((s: any, idx: number) => (
                      <div key={idx} className="flex justify-between p-4 bg-white/50 rounded-xl border border-border">
                        <span className="font-semibold">{s.name}</span>
                        <span className="font-black text-primary">{s.grade}</span>
                      </div>
                    ))}
                 </div>
                 <Button variant="outline" className="w-full mt-8 gap-2 rounded-full border-primary text-primary hover:bg-primary hover:text-white">
                    <Download size={18} /> Download Marksheet (PDF)
                 </Button>
               </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}