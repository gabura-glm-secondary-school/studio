
"use client";

import { useState, useEffect } from "react";
import { useUser } from "@/firebase";
import { useRouter } from "next/navigation";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminTopbar } from "@/components/admin/AdminTopbar";
import { Loader2, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useUser();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Firestore Rule Compliance: isAdmin check helper logic
  const canAccess = user && !user.disabled && (user.role === 'admin' || user.role === 'superadmin' || user.adminApproved === true);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/portal");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-primary" size={48} />
      </div>
    );
  }

  if (!user) return null;

  if (!canAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary/5 p-4">
        <div className="glass-card p-12 max-w-md text-center space-y-6">
          <ShieldAlert size={64} className="text-destructive mx-auto animate-pulse" />
          <h1 className="text-3xl font-headline font-black text-primary">Access Denied</h1>
          <p className="text-muted-foreground font-medium">
            Your account does not have permission to access the Admin Control Panel. 
            This area is restricted to approved administrators only.
          </p>
          <Button onClick={() => router.push("/")} className="rounded-xl px-8">Return to Homepage</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-secondary/5">
      <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1 flex flex-col min-w-0">
        <AdminTopbar setIsSidebarOpen={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="p-4 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
