
"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Loader2, Lock, ShieldAlert } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { useAuth, useFirestore } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function LoginPage({ params }: { params: Promise<{ role: string }> }) {
  const { role } = use(params);
  const router = useRouter();
  const { toast } = useToast();
  const { auth } = useAuth();
  const db = useFirestore();

  const [idNumber, setIdNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const roleConfig: Record<string, any> = {
    student: { title: "Student Login", label: "Student ID", placeholder: "e.g. STU12345" },
    teacher: { title: "Teacher Login", label: "EIN Number", placeholder: "e.g. EIN98765" },
    staff: { title: "Staff Login", label: "EIN Number", placeholder: "e.g. EIN11223" },
    external: { title: "External Login", label: "Mobile Number", placeholder: "017xxxxxxxx" },
  };

  const config = roleConfig[role] || roleConfig.student;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth || !db) return;

    setLoading(true);
    try {
      // In a real scenario, we'd map ID/EIN to a Firebase email or use a service
      // For this MVP, we'll use a virtual email: idNumber@gglmss.edu.bd
      const virtualEmail = `${idNumber.toLowerCase()}@gglmss.edu.bd`;
      const userCredential = await signInWithEmailAndPassword(auth, virtualEmail, password);
      
      // Verify role in Firestore
      const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));
      const userData = userDoc.data();

      if (userData?.role !== role && !userData?.isSuperAdmin) {
        throw new Error("Invalid portal for this account.");
      }

      toast({ title: "Login Successful", description: "Redirecting to your dashboard..." });
      router.push(userData?.isAdmin ? "/admin" : "/dashboard");
    } catch (error: any) {
      toast({ 
        title: "Login Failed", 
        description: error.message || "Invalid credentials. Please try again.", 
        variant: "destructive" 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary/5 flex items-center justify-center px-4">
      <Card className="glass-card w-full max-w-md">
        <CardHeader className="text-center space-y-2">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-2">
            <Lock size={24} />
          </div>
          <CardTitle className="text-3xl font-headline font-bold">{config.title}</CardTitle>
          <CardDescription>Enter your credentials to access your dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="idNumber">{config.label}</Label>
              <Input 
                id="idNumber" 
                placeholder={config.placeholder} 
                required 
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                className="h-12"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/auth/recovery" className="text-xs font-bold text-accent hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"} 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 pr-12"
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

            <Button type="submit" disabled={loading} className="w-full h-12 text-lg gap-2 rounded-xl shadow-lg">
              {loading ? <Loader2 className="animate-spin" /> : "Sign In"}
            </Button>

            <div className="text-center space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border" /></div>
                <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-muted-foreground">New Here?</span></div>
              </div>
              <Link href={`/auth/register/${role}`}>
                <Button variant="outline" className="w-full h-12 rounded-xl border-2">
                  Create {role.charAt(0).toUpperCase() + role.slice(1)} Account
                </Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
