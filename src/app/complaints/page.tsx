"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, ShieldAlert, Loader2 } from "lucide-react";

export default function ComplaintsPage() {
  const [loading, setLoading] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Complaint Submitted",
        description: "Your complaint has been received. We will review it shortly.",
      });
      (e.target as HTMLFormElement).reset();
      setIsAnonymous(false);
    }, 2000);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary/10">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <ShieldAlert className="w-16 h-16 text-destructive mx-auto" />
          <h1 className="text-4xl lg:text-5xl font-headline font-bold text-primary">Complaint Box</h1>
          <p className="text-muted-foreground">We value your feedback. Submit any issues or concerns to help us improve.</p>
        </div>

        <Card className="glass-card">
          <CardHeader className="border-b">
            <CardTitle>Submit New Complaint</CardTitle>
            <CardDescription>All submissions are reviewed by the school administration board.</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl border border-border">
                <div className="space-y-0.5">
                  <Label className="text-base">Anonymous Submission</Label>
                  <p className="text-xs text-muted-foreground">Keep your identity hidden from administrators.</p>
                </div>
                <Switch 
                  checked={isAnonymous} 
                  onCheckedChange={setIsAnonymous}
                />
              </div>

              {!isAnonymous && (
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email / Phone</Label>
                    <Input id="email" placeholder="contact@example.com" required />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="subject">Complaint Subject</Label>
                <Input id="subject" placeholder="e.g. Facilities Issue, Staff Behavior" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Detailed Description</Label>
                <Textarea 
                  id="message" 
                  placeholder="Please provide details about your concern..." 
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button 
                type="submit" 
                disabled={loading} 
                className="w-full h-12 text-lg gap-2 rounded-full"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Send size={18} />} Submit Complaint
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Your data is secure. For urgent issues, please visit the administrative office directly.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}