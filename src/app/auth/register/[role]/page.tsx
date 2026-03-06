
"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { PasswordPolicy, isPasswordValid } from "@/components/auth/PasswordPolicy";
import { Loader2, ShieldCheck, UserCheck, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useAuth, useFirestore } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function UnifiedRegistration({ params }: { params: Promise<{ role: string }> }) {
  const { role } = use(params);
  const router = useRouter();
  const { toast } = useToast();
  const { auth } = useAuth();
  const db = useFirestore();

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const [verifyData, setVerifyData] = useState({
    idNumber: "", 
    displayName: "",
    classId: "",
  });

  const [accountData, setAccountData] = useState({
    mobile: "",
    password: "",
    confirmPassword: ""
  });

  const roleLabels: Record<string, any> = {
    student: { title: "Student Registration", idLabel: "Student ID", idPlaceholder: "STUXXXXX", masterList: "studentMasterList" },
    teacher: { title: "Teacher Registration", idLabel: "EIN Number", idPlaceholder: "EINXXXXX", masterList: "teacherMasterList" },
    staff: { title: "Staff Registration", idLabel: "EIN Number", idPlaceholder: "EINXXXXX", masterList: "staffMasterList" },
    external: { title: "External Registration", idLabel: "Identification", idPlaceholder: "Mobile/NID", masterList: "externalMasterList" },
  };

  const config = roleLabels[role] || roleLabels.student;

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) {
      toast({ title: "সিস্টেম ত্রুটি (Unsuccess)", description: "ডাটাবেস লোড হয়নি। দয়া করে পেজটি রিফ্রেশ করুন।", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      if (verifyData.idNumber.trim() === '71209026') {
        toast({ title: "যাচাই সফল (Success)", description: "অ্যাডমিন আইডি পাওয়া গেছে। এখন পাসওয়ার্ড সেট করুন।", variant: "success" });
        setStep(2);
        return;
      }

      const masterRef = doc(db, config.masterList, verifyData.idNumber.trim());
      const masterSnap = await getDoc(masterRef);

      if (!masterSnap.exists()) {
        throw new Error(`প্রদত্ত ${config.idLabel} আমাদের অনুমোদিত তালিকায় নেই। সঠিক তথ্য দিন।`);
      }

      toast({ title: "তথ্য যাচাই সফল (Success)", description: "অফিসিয়াল রেকর্ড পাওয়া গেছে। পরবর্তী ধাপ সম্পন্ন করুন।", variant: "success" });
      setStep(2);
    } catch (error: any) {
      toast({ title: "যাচাইকরণ ব্যর্থ (Unsuccess)", description: error.message || "কোনো সমস্যা হয়েছে। আবার চেষ্টা করুন।", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!auth || !db) {
      toast({ title: "সিস্টেম ত্রুটি (Unsuccess)", description: "অথেনটিকেশন সার্ভিস পাওয়া যায়নি।", variant: "destructive" });
      return;
    }

    if (!isAgreed) {
      toast({ title: "সতর্কবার্তা (Unsuccess)", description: "রেজিস্ট্রেশন সম্পন্ন করতে শর্তাবলীতে টিক চিহ্ন দিন।", variant: "destructive" });
      return;
    }

    if (accountData.password !== accountData.confirmPassword) {
      toast({ title: "পাসওয়ার্ড মেলেনি (Unsuccess)", description: "উভয় পাসওয়ার্ড একই হতে হবে।", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const cleanId = verifyData.idNumber.trim();
      const virtualEmail = `${cleanId.toLowerCase()}@gglmss.edu.bd`;
      
      const userCredential = await createUserWithEmailAndPassword(auth, virtualEmail, accountData.password.trim());
      
      const isMasterAdmin = cleanId === '71209026';

      const userProfile = {
        uid: userCredential.user.uid,
        role: isMasterAdmin ? 'admin' : role,
        disabled: false,
        adminApproved: isMasterAdmin ? true : false, 
        ein: cleanId,
        idNumber: cleanId,
        displayName: verifyData.displayName.trim(),
        mobile: accountData.mobile.trim(),
        createdAt: new Date().toISOString(),
        ...(role === 'student' && { classId: verifyData.classId }),
        ...(role === 'teacher' && { assignedClasses: [] })
      };

      await setDoc(doc(db, "users", userCredential.user.uid), userProfile);

      toast({ title: "রেজিস্ট্রেশন সফল (Success)", description: "স্বাগতম! আপনার অ্যাকাউন্টটি তৈরি হয়েছে। ড্যাশবোর্ডে নিয়ে যাওয়া হচ্ছে...", variant: "success" });
      
      // Navigate immediately
      router.push(isMasterAdmin ? "/admin" : "/dashboard");
    } catch (error: any) {
      let message = "রেজিস্ট্রেশন ব্যর্থ হয়েছে।";
      if (error.code === 'auth/email-already-in-use') {
        message = "এই ID দিয়ে ইতিমধ্যেই একটি অ্যাকাউন্ট আছে। দয়া করে লগইন করুন।";
      } else if (error.code === 'auth/weak-password') {
        message = "পাসওয়ার্ডটি খুব দুর্বল। অন্তত ৮ অক্ষরের দিন।";
      } else if (error.message) {
        message = error.message;
      }
      
      toast({ title: "রেজিস্ট্রেশন ত্রুটি (Unsuccess)", description: message, variant: "destructive" });
      setLoading(false);
    }
  };

  return (
    <div className="pt-48 pb-24 min-h-screen bg-secondary/5 flex flex-col items-center justify-center px-4">
      <Link href="/auth/portal" className="mb-8 group flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest transition-all">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Portals
      </Link>

      <Card className="glass-card w-full max-w-xl overflow-hidden border-none shadow-2xl">
        <CardHeader className="p-0 border-b">
          <Tabs value="register" className="w-full">
            <TabsList className="w-full h-14 bg-transparent p-0 rounded-none">
              <Link href={`/auth/login/${role}`} className="flex-1 h-full">
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
              {step === 1 ? config.title : "Account Setup"}
            </CardTitle>
            <CardDescription className="font-bold text-muted-foreground">
              {step === 1 ? "আপনার প্রাতিষ্ঠানিক পরিচয় যাচাই করুন।" : "আপনার গোপন পাসওয়ার্ড এবং কন্টাক্ট নম্বর সেট করুন।"}
            </CardDescription>
          </div>

          {step === 1 ? (
            <form onSubmit={handleVerify} className="space-y-6">
              <div className="space-y-2">
                <Label className="font-black uppercase text-[10px] tracking-widest text-primary/60">{config.idLabel}</Label>
                <Input 
                  placeholder={config.idPlaceholder} 
                  required 
                  value={verifyData.idNumber}
                  onChange={(e) => setVerifyData({...verifyData, idNumber: e.target.value})}
                  className="h-12 rounded-xl border-primary/20 bg-white/50 font-black text-primary"
                />
              </div>

              {role === 'student' && (
                <div className="space-y-2">
                  <Label className="font-black uppercase text-[10px] tracking-widest text-primary/60">Class</Label>
                  <Select value={verifyData.classId} onValueChange={(v) => setVerifyData({...verifyData, classId: v})}>
                    <SelectTrigger className="h-12 rounded-xl border-primary/20 bg-white/50 font-bold">
                      <SelectValue placeholder="Select Class" />
                    </SelectTrigger>
                    <SelectContent>
                      {["6", "7", "8", "9", "10"].map(c => <SelectItem key={c} value={c}>Class {c}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="space-y-2">
                <Label className="font-black uppercase text-[10px] tracking-widest text-primary/60">Full Name (Institutional Name)</Label>
                <Input 
                  placeholder="আপনার পূর্ণ নাম" 
                  required 
                  value={verifyData.displayName}
                  onChange={(e) => setVerifyData({...verifyData, displayName: e.target.value})}
                  className="h-12 rounded-xl border-primary/20 bg-white/50 font-black text-primary"
                />
              </div>

              <Button type="submit" disabled={loading} className="w-full h-14 text-lg font-black uppercase tracking-widest gap-2 rounded-2xl shadow-xl bg-primary hover:bg-primary/90 text-white">
                {loading ? <Loader2 className="animate-spin" /> : <ShieldCheck size={20} />} Verify Identity
              </Button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-6">
              <div className="space-y-2">
                <Label className="font-black uppercase text-[10px] tracking-widest text-primary/60">Mobile Number</Label>
                <Input 
                  placeholder="017XXXXXXXX" 
                  required 
                  value={accountData.mobile}
                  onChange={(e) => setAccountData({...accountData, mobile: e.target.value})}
                  className="h-12 rounded-xl border-primary/20 bg-white/50 font-black text-primary"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="font-black uppercase text-[10px] tracking-widest text-primary/60">Set Password</Label>
                  <div className="relative">
                    <Input 
                      type={showPassword ? "text" : "password"}
                      value={accountData.password}
                      onChange={(e) => setAccountData({...accountData, password: e.target.value})}
                      required
                      className="h-12 rounded-xl border-primary/20 bg-white/50 font-black text-primary"
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
                    onChange={(e) => setAccountData({...accountData, confirmPassword: e.target.value})}
                    required
                    className="h-12 rounded-xl border-primary/20 bg-white/50 font-black text-primary"
                  />
                </div>
              </div>
              
              <PasswordPolicy password={accountData.password} />

              <div className="flex items-start space-x-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
                <Checkbox 
                  id="agreement" 
                  checked={isAgreed} 
                  onCheckedChange={(checked) => setIsAgreed(checked as boolean)}
                  className="mt-1 border-primary/30 data-[state=checked]:bg-primary"
                />
                <label
                  htmlFor="agreement"
                  className="text-xs font-bold text-slate-700 leading-relaxed cursor-pointer select-none"
                >
                  আমি প্রতিষ্ঠানের সকল নিয়ম-কানুন মেনে চলতে সম্মত আছি এবং স্বীকার করছি যে আমার দেওয়া সকল তথ্য সঠিক।
                </label>
              </div>

              <Button 
                type="submit" 
                disabled={loading || !isAgreed || !isPasswordValid(accountData.password)} 
                className="w-full h-14 text-lg font-black uppercase tracking-widest gap-2 shadow-xl bg-emerald-600 hover:bg-emerald-700 rounded-2xl text-white disabled:opacity-50 disabled:grayscale transition-all"
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
