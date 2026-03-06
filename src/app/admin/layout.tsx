
"use client";

import { useState, useEffect } from "react";
import { useUser } from "@/firebase";
import { useRouter } from "next/navigation";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminTopbar } from "@/components/admin/AdminTopbar";
import { ShieldAlert, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useUser();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Master Admin Identification (Instant detection)
  const isMasterAdmin = 
    user?.email?.includes('71209026') || 
    user?.ein === '71209026' || 
    user?.idNumber === '71209026';

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

  // No more blocking loading screen if it's the Master Admin or user is present
  if (loading && !user) return null;

  if (!user && !isMasterAdmin) return null;

  // Security Gate
  if (!canAccess && !isMasterAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#EEF3F5] p-6">
        <div className="glass-card max-w-lg w-full p-12 text-center space-y-8 !rounded-[3rem] shadow-2xl border-white relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-destructive/5 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="w-24 h-24 bg-destructive/10 text-destructive rounded-[2.5rem] flex items-center justify-center mx-auto mb-8">
              <ShieldAlert size={48} />
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl font-headline font-black text-primary tracking-tighter">অনুমতি নেই (DENIED)</h1>
              <p className="text-slate-600 font-bold leading-relaxed">
                আপনার অ্যাকাউন্টটি অ্যাডমিন প্যানেল ব্যবহারের জন্য অনুমোদিত নয়।
              </p>
            </div>
            <div className="pt-10">
              <Button onClick={() => router.push("/")} className="h-14 rounded-2xl px-8 bg-primary font-black uppercase text-xs tracking-widest shadow-xl hover:scale-105 transition-all">
                <Home size={18} className="mr-2" /> প্রচ্ছদ পাতা
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
