"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { PasswordPolicy, isPasswordValid } from "@/components/auth/PasswordPolicy";
import { Loader2, ShieldCheck, UserCheck, Eye, EyeOff } from "lucide-react";
import { useAuth, useFirestore } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs, setDoc, doc } from "firebase/firestore";
import { cn } from "@/lib/utils";

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
    <div className="pt-32 pb-24 min-h-screen bg-secondary/5 flex items-center justify-center px-4">
      <Card className="glass-card w-full max-w-xl">
        <CardHeader className="text-center border-b mb-6">
          <div className="flex justify-center gap-4 mb-4">
            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center font-bold", step === 1 ? "bg-primary text-white" : "bg-emerald-500 text-white")}>
              {step === 1 ? 1 : <ShieldCheck />}
            </div>
            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center font-bold", step === 2 ? "bg-primary text-white" : "bg-muted text-muted-foreground")}>
              2
            </div>
          </div>
          <CardTitle className="text-2xl font-headline font-bold">
            {step === 1 ? "Identity Verification" : "Complete Account Setup"}
          </CardTitle>
          <CardDescription>
            {step === 1 ? "Enter your school details to verify your record." : "Set your secure password and contact information."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 ? (
            <form onSubmit={handleVerify} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Student ID</Label>
                  <Input 
                    placeholder="STUXXXXX" 
                    required 
                    value={verifyData.studentId}
                    onChange={(e) => setVerifyData({...verifyData, studentId: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Roll Number</Label>
                  <Input 
                    placeholder="e.g. 101" 
                    required 
                    value={verifyData.rollNumber}
                    onChange={(e) => setVerifyData({...verifyData, rollNumber: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Class</Label>
                <Select value={verifyData.class} onValueChange={(v) => setVerifyData({...verifyData, class: v})}>
                  <SelectTrigger><SelectValue placeholder="Select Class" /></SelectTrigger>
                  <SelectContent>
                    {["6", "7", "8", "9", "10"].map(c => <SelectItem key={c} value={c}>Class {c}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" disabled={loading} className="w-full h-12 rounded-xl gap-2">
                {loading ? <Loader2 className="animate-spin" /> : "Verify Identity"}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-6">
              <div className="space-y-2">
                <Label>Mobile Number (Guardian or Self)</Label>
                <Input 
                  placeholder="017XXXXXXXX" 
                  required 
                  value={accountData.mobile}
                  onChange={(e) => setSetAccountData({...accountData, mobile: e.target.value})}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Set Password</Label>
                  <div className="relative">
                    <Input 
                      type={showPassword ? "text" : "password"}
                      value={accountData.password}
                      onChange={(e) => setSetAccountData({...accountData, password: e.target.value})}
                      required
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2">
                      {showPassword ? <EyeOff size={16}/> : <Eye size={16}/>}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Confirm Password</Label>
                  <Input 
                    type="password"
                    value={accountData.confirmPassword}
                    onChange={(e) => setSetAccountData({...accountData, confirmPassword: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <PasswordPolicy password={accountData.password} />

              <Button 
                type="submit" 
                disabled={loading || !isPasswordValid(accountData.password)} 
                className="w-full h-12 rounded-xl gap-2 shadow-xl bg-emerald-600 hover:bg-emerald-700"
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
