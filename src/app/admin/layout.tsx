
"use client";

import { useState, useEffect } from "react";
import { useUser } from "@/firebase";
import { useRouter } from "next/navigation";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminTopbar } from "@/components/admin/AdminTopbar";
import { Loader2 } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useUser();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/auth/portal");
      } else if (!user.isAdmin && !user.isSuperAdmin) {
        router.push("/dashboard");
      }
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-primary" size={48} />
      </div>
    );
  }

  if (!user || (!user.isAdmin && !user.isSuperAdmin)) return null;

  return (
    <div className="flex min-h-screen bg-secondary/5">
      {/* Sidebar Navigation */}
      <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <AdminTopbar setIsSidebarOpen={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Main Content Area */}
        <main className="p-4 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
