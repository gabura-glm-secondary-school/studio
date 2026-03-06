
"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Loader2, Lock, ArrowLeft, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { useAuth, useFirestore, useUser } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function LoginPage({ params }: { params: Promise<{ role: string }> }) {
  const { role } = use(params);
  const router = useRouter();
  const { toast } = useToast();
  const { auth } = useAuth();
  const { user, loading: userLoading } = useUser();
  const db = useFirestore();

  const [idNumber, setIdNumber] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Instant Redirect if already logged in
  useEffect(() => {
    if (!userLoading && user) {
      const isMasterAdmin = user.email === '71209026@gglmss.edu.bd' || user.idNumber === '71209026';
      const isAdmin = user.role === 'admin' || user.role === 'superadmin' || user.adminApproved === true || isMasterAdmin;
      router.replace(isAdmin ? "/admin" : "/dashboard");
    }
  }, [user, userLoading, router]);

  useEffect(() => {
    const savedId = localStorage.getItem(`gglmss_id_${role}`);
    const savedPass = localStorage.getItem(`gglmss_pass_${role}`);
    if (savedId && savedPass) {
      setIdNumber(savedId);
      setPassword(savedPass);
      setRememberMe(true);
    }
  }, [role]);

  if (!userLoading && user) return null;

  const roleConfig: Record<string, any> = {
    student: { title: "Student Login", label: "Student ID", placeholder: "e.g. STU12345" },
    teacher: { title: "Teacher Login", label: "EIN Number", placeholder: "e.g. EIN98765" },
    staff: { title: "Staff Login", label: "EIN Number", placeholder: "e.g. 71209026" },
    external: { title: "External Login", label: "Identification", placeholder: "Mobile/NID" },
  };

  const config = roleConfig[role] || roleConfig.student;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth) return;

    setLoading(true);
    try {
      const cleanId = idNumber.trim().toLowerCase();
      const virtualEmail = `${cleanId}@gglmss.edu.bd`;
      const cleanPassword = password.trim();

      // Sign in first
      await signInWithEmailAndPassword(auth, virtualEmail, cleanPassword);

      if (rememberMe) {
        localStorage.setItem(`gglmss_id_${role}`, idNumber);
        localStorage.setItem(`gglmss_pass_${role}`, password);
      }

      toast({ 
        title: "লগইন সফল (SUCCESS)", 
        description: "স্বাগতম! ড্যাশবোর্ডে নিয়ে যাওয়া হচ্ছে...", 
        variant: "success",
      });
      
      // The useEffect will handle redirecting automatically
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      let message = "লগইন ব্যর্থ হয়েছে।";
      if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        message = "আপনার ID অথবা পাসওয়ার্ড ভুল।";
      }
      toast({ title: "লগইন ব্যর্থ (UNSUCCESS)", description: message, variant: "destructive" });
    }
  };

  return (
    <div className="pt-48 pb-24 min-h-screen bg-secondary/5 flex flex-col items-center justify-center px-4">
      <Link href="/auth/portal" className="mb-8 group flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest transition-all">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Portals
      </Link>

      <Card className="glass-card w-full max-w-md overflow-hidden border-none shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
        <CardHeader className="p-0 border-b">
          <Tabs value="login" className="w-full">
            <TabsList className="w-full h-14 bg-transparent p-0 rounded-none">
              <TabsTrigger 
                value="login" 
                className="flex-1 h-full rounded-none font-black uppercase tracking-widest text-[10px] data-[state=active]:bg-white data-[state=active]:text-primary border-r"
              >
                Login
              </TabsTrigger>
              <Link href={`/auth/register/${role}`} className="flex-1 h-full">
                <div className="flex items-center justify-center h-full font-black uppercase tracking-widest text-[10px] text-muted-foreground hover:bg-white/50 transition-colors">
                  Register
                </div>
              </Link>
            </TabsList>
          </Tabs>
        </CardHeader>
        
        <CardContent className="p-8 md:p-10 space-y-8">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Lock size={24} />
            </div>
            <CardTitle className="text-3xl font-headline font-black text-primary">{config.title}</CardTitle>
            <CardDescription className="font-bold text-muted-foreground">Enter your credentials to access your dashboard.</CardDescription>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="idNumber" className="font-black uppercase text-[10px] tracking-widest text-primary/60">{config.label}</Label>
              <Input 
                id="idNumber" 
                placeholder={config.placeholder} 
                required 
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                className="h-12 rounded-xl border-primary/20 bg-white/50 font-black text-primary text-lg focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="font-black uppercase text-[10px] tracking-widest text-primary/60">Password</Label>
                <Link href="/auth/recovery" className="text-[10px] font-black text-accent hover:underline uppercase tracking-widest">
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"} 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 pr-12 rounded-xl border-primary/20 bg-white/50 font-black text-primary text-lg focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="remember" 
                checked={rememberMe} 
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                className="border-primary/20 data-[state=checked]:bg-primary"
              />
              <label
                htmlFor="remember"
                className="text-xs font-black uppercase tracking-widest text-muted-foreground cursor-pointer select-none"
              >
                Password Reminder / তথ্য মনে রাখুন
              </label>
            </div>

            <Button type="submit" disabled={loading} className="w-full h-14 text-lg font-black uppercase tracking-widest gap-2 rounded-2xl shadow-xl bg-primary hover:bg-primary/90 text-white transform active:scale-95 transition-all">
              {loading ? <Loader2 className="animate-spin" /> : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
