
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { PasswordPolicy, isPasswordValid } from "@/components/auth/PasswordPolicy";
import { Loader2, ShieldCheck, UserCheck, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useAuth, useFirestore } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs, setDoc, doc } from "firebase/firestore";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function StudentRegistration() {
  const router = useRouter();
  const { toast } = useToast();
  const { auth } = useAuth();
  const db = useFirestore();

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [verifyData, setVerifyData] = useState({
    studentId: "",
    rollNumber: "",
    class: ""
  });

  const [accountData, setSetAccountData] = useState({
    mobile: "",
    password: "",
    confirmPassword: ""
  });

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) return;

    setLoading(true);
    try {
      const q = query(
        collection(db, "student_records"),
        where("studentId", "==", verifyData.studentId),
        where("rollNumber", "==", verifyData.rollNumber),
        where("class", "==", verifyData.class)
      );
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        throw new Error("Student ID, Roll Number and Class do not match our records.");
      }

      const record = snapshot.docs[0].data();
      if (record.isRegistered) {
        throw new Error("This record is already registered. Please login or recover your account.");
      }

      toast({ title: "Identity Verified", description: "Please complete your account setup." });
      setStep(2);
    } catch (error: any) {
      toast({ title: "Verification Failed", description: error.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth || !db) return;

    if (accountData.password !== accountData.confirmPassword) {
      toast({ title: "Passwords Mismatch", description: "Passwords do not match.", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const virtualEmail = `${verifyData.studentId.toLowerCase()}@gglmss.edu.bd`;
      const userCredential = await createUserWithEmailAndPassword(auth, virtualEmail, accountData.password);
      
      await setDoc(doc(db, "users", userCredential.user.uid), {
        uid: userCredential.user.uid,
        role: "student",
        status: "active",
        idNumber: verifyData.studentId,
        rollNumber: verifyData.rollNumber,
        class: verifyData.class,
        mobile: accountData.mobile,
        createdAt: new Date().toISOString()
      });

      toast({ title: "Registration Successful", description: "Welcome to GGLMSS platform!" });
      router.push("/dashboard");
    } catch (error: any) {
      toast({ title: "Registration Failed", description: error.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary/5 flex flex-col items-center justify-center px-4">
      <Link href="/auth/portal" className="mb-8 group flex items-center gap-2 text-muted-foreground hover:text-primary font-black uppercase text-xs tracking-widest transition-all">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Portals
      </Link>

      <Card className="glass-card w-full max-w-xl overflow-hidden border-none shadow-2xl">
        <CardHeader className="p-0 border-b">
          <Tabs value="register" className="w-full">
            <TabsList className="w-full h-14 bg-transparent p-0 rounded-none">
              <Link href="/auth/login/student" className="flex-1 h-full">
                <div className="flex items-center justify-center h-full font-black uppercase tracking-widest text-[10px] text-muted-foreground hover:bg-white/50 transition-colors border-r">
                  Login
                </div>
              </Link>
              <TabsTrigger 
                value="register" 
                className="flex-1 h-full rounded-none font-black uppercase tracking-widest text-[10px] data-[state=active]:bg-white data-[state=active]:text-primary"
              >
                Register
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>

        <CardContent className="p-8 md:p-12 space-y-8">
          <div className="flex justify-center gap-4 mb-4">
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center font-black shadow-lg transition-all", step === 1 ? "bg-primary text-white scale-110" : "bg-emerald-500 text-white")}>
              {step === 1 ? 1 : <ShieldCheck size={24} />}
            </div>
            <div className="flex items-center"><div className="w-8 h-0.5 bg-primary/10 rounded-full"></div></div>
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center font-black shadow-lg transition-all", step === 2 ? "bg-primary text-white scale-110 shadow-primary/20" : "bg-muted text-muted-foreground")}>
              2
            </div>
          </div>

          <div className="text-center space-y-2">
            <CardTitle className="text-3xl font-headline font-black text-primary">
              {step === 1 ? "Identity Verification" : "Complete Account Setup"}
            </CardTitle>
            <CardDescription className="font-medium">
              {step === 1 ? "Enter your school details to verify your record." : "Set your secure password and contact information."}
            </CardDescription>
          </div>

          {step === 1 ? (
            <form onSubmit={handleVerify} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="font-black uppercase text-[10px] tracking-widest text-primary/60">Student ID</Label>
                  <Input 
                    placeholder="STUXXXXX" 
                    required 
                    value={verifyData.studentId}
                    onChange={(e) => setVerifyData({...verifyData, studentId: e.target.value})}
                    className="h-12 rounded-xl border-primary/10 bg-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="font-black uppercase text-[10px] tracking-widest text-primary/60">Roll Number</Label>
                  <Input 
                    placeholder="e.g. 101" 
                    required 
                    value={verifyData.rollNumber}
                    onChange={(e) => setVerifyData({...verifyData, rollNumber: e.target.value})}
                    className="h-12 rounded-xl border-primary/10 bg-white/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="font-black uppercase text-[10px] tracking-widest text-primary/60">Class</Label>
                <Select value={verifyData.class} onValueChange={(v) => setVerifyData({...verifyData, class: v})}>
                  <SelectTrigger className="h-12 rounded-xl border-primary/10 bg-white/50">
                    <SelectValue placeholder="Select Class" />
                  </SelectTrigger>
                  <SelectContent>
                    {["6", "7", "8", "9", "10"].map(c => <SelectItem key={c} value={c}>Class {c}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" disabled={loading} className="w-full h-14 text-lg font-black uppercase tracking-widest gap-2 rounded-2xl shadow-xl bg-primary hover:bg-primary/90">
                {loading ? <Loader2 className="animate-spin" /> : "Verify Identity"}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-6">
              <div className="space-y-2">
                <Label className="font-black uppercase text-[10px] tracking-widest text-primary/60">Mobile Number (Guardian or Self)</Label>
                <Input 
                  placeholder="017XXXXXXXX" 
                  required 
                  value={accountData.mobile}
                  onChange={(e) => setSetAccountData({...accountData, mobile: e.target.value})}
                  className="h-12 rounded-xl border-primary/10 bg-white/50"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="font-black uppercase text-[10px] tracking-widest text-primary/60">Set Password</Label>
                  <div className="relative">
                    <Input 
                      type={showPassword ? "text" : "password"}
                      value={accountData.password}
                      onChange={(e) => setSetAccountData({...accountData, password: e.target.value})}
                      required
                      className="h-12 rounded-xl border-primary/10 bg-white/50"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      {showPassword ? <EyeOff size={16}/> : <Eye size={16}/>}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="font-black uppercase text-[10px] tracking-widest text-primary/60">Confirm Password</Label>
                  <Input 
                    type="password"
                    value={accountData.confirmPassword}
                    onChange={(e) => setSetAccountData({...accountData, confirmPassword: e.target.value})}
                    required
                    className="h-12 rounded-xl border-primary/10 bg-white/50"
                  />
                </div>
              </div>
              
              <PasswordPolicy password={accountData.password} />

              <Button 
                type="submit" 
                disabled={loading || !isPasswordValid(accountData.password)} 
                className="w-full h-14 text-lg font-black uppercase tracking-widest gap-2 shadow-xl bg-emerald-600 hover:bg-emerald-700 rounded-2xl"
              >
                {loading ? <Loader2 className="animate-spin" /> : <UserCheck size={20} />} Complete Registration
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
