
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, MailQuestion, Send, CheckCircle2 } from "lucide-react";
import { useFirestore } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function RecoveryPage() {
  const { toast } = useToast();
  const db = useFirestore();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    role: "student",
    idNumber: "",
    class: "",
    reason: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) return;

    setLoading(true);
    try {
      await addDoc(collection(db, "recovery_requests"), {
        ...form,
        status: "pending",
        requestedAt: new Date().toISOString()
      });
      setSubmitted(true);
      toast({ title: "Request Sent", description: "Your recovery request is being reviewed." });
    } catch (error: any) {
      toast({ title: "Error", description: "Could not send request.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-secondary/5 flex items-center justify-center px-4">
        <Card className="glass-card w-full max-w-md text-center p-12">
          <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 animate-in zoom-in duration-500">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl font-headline font-bold text-primary mb-4">Request Submitted</h2>
          <p className="text-muted-foreground leading-relaxed">
            {form.role === "student" 
              ? "Your request has been sent to your Class Teacher. Please check back with them for your temporary credentials."
              : "Your request has been sent to the System Admin. They will contact you shortly."}
          </p>
          <Button className="mt-8 rounded-xl w-full" variant="outline" onClick={() => window.location.href = "/auth/portal"}>
            Back to Portal
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary/5 flex items-center justify-center px-4">
      <Card className="glass-card w-full max-w-lg">
        <CardHeader className="text-center space-y-2">
          <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mx-auto mb-2">
            <MailQuestion size={24} />
          </div>
          <CardTitle className="text-3xl font-headline font-bold">Account Recovery</CardTitle>
          <CardDescription>Request a password reset from your teacher or administrator.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label>I am a...</Label>
              <Select value={form.role} onValueChange={(v) => setForm({...form, role: v})}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="staff">Office Staff</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>{form.role === "student" ? "Student ID" : "EIN Number"}</Label>
              <Input 
                placeholder={form.role === "student" ? "STUXXXXX" : "EINXXXXX"} 
                required 
                value={form.idNumber}
                onChange={(e) => setForm({...form, idNumber: e.target.value})}
              />
            </div>

            {form.role === "student" && (
              <div className="space-y-2">
                <Label>Class</Label>
                <Select value={form.class} onValueChange={(v) => setForm({...form, class: v})}>
                  <SelectTrigger><SelectValue placeholder="Select Class" /></SelectTrigger>
                  <SelectContent>
                    {["6", "7", "8", "9", "10"].map(c => <SelectItem key={c} value={c}>Class {c}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="space-y-2">
              <Label>Reason for Request (Optional)</Label>
              <Input 
                placeholder="e.g. Forgotten password, device lost" 
                value={form.reason}
                onChange={(e) => setForm({...form, reason: e.target.value})}
              />
            </div>

            <Button type="submit" disabled={loading} className="w-full h-12 rounded-xl gap-2 shadow-lg">
              {loading ? <Loader2 className="animate-spin" /> : <Send size={18} />} Submit Recovery Request
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
