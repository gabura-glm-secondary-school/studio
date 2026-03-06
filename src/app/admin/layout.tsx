
"use client";

import { useState, useEffect } from "react";
import { useUser } from "@/firebase";
import { useRouter } from "next/navigation";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminTopbar } from "@/components/admin/AdminTopbar";
import { Loader2, ShieldAlert, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useUser();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Robust Master Admin Check
  const isMasterAdmin = user?.email === '71209026@gglmss.edu.bd' || user?.ein === '71209026' || user?.idNumber === '71209026';
  
  const canAccess = user && !user.disabled && (
    user.role === 'admin' || 
    user.role === 'superadmin' || 
    user.adminApproved === true || 
    isMasterAdmin
  );

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/auth/portal");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-primary/10 border-t-primary rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <ShieldAlert className="text-primary/20" size={24} />
            </div>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 animate-pulse">Security Check...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  if (!canAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#EEF3F5] p-6">
        <div className="glass-card max-w-lg w-full p-12 text-center space-y-8 !rounded-[3rem] shadow-2xl border-white relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-destructive/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="w-24 h-24 bg-destructive/10 text-destructive rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 shadow-inner animate-bounce">
              <ShieldAlert size={48} />
            </div>
            
            <div className="space-y-3">
              <h1 className="text-4xl font-headline font-black text-primary tracking-tighter">অনুমতি নেই (DENIED)</h1>
              <p className="text-slate-600 font-bold leading-relaxed">
                আপনার অ্যাকাউন্টটি অ্যাডমিন প্যানেল ব্যবহারের জন্য অনুমোদিত নয়। এটি শুধুমাত্র অনুমোদিত কর্মকর্তা ও কর্মচারীদের জন্য সংরক্ষিত।
              </p>
            </div>

            <div className="pt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => router.push("/")} 
                className="h-14 rounded-2xl px-8 bg-primary font-black uppercase text-xs tracking-widest shadow-xl hover:scale-105 transition-all gap-2"
              >
                <Home size={18} /> প্রচ্ছদ পাতায় ফিরে যান
              </Button>
              <Button 
                variant="outline"
                onClick={() => router.push("/auth/portal")} 
                className="h-14 rounded-2xl px-8 border-2 border-primary/10 font-black uppercase text-xs tracking-widest hover:bg-white transition-all gap-2"
              >
                <ArrowLeft size={18} /> পোর্টাল লগইন
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#EEF3F5]">
      <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1 flex flex-col min-w-0">
        <AdminTopbar setIsSidebarOpen={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="p-4 md:p-10 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
