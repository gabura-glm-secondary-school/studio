
"use client";

import { useUser } from "@/firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import StudentDashboard from "@/components/dashboard/StudentDashboard";
import TeacherDashboard from "@/components/dashboard/TeacherDashboard";

export default function DashboardPage() {
  const { user, loading } = useUser();
  const router = useRouter();

  // Identification Logic for Master Admin
  const isMasterAdmin = 
    user?.email?.includes('71209026') || 
    user?.ein === '71209026' || 
    user?.idNumber === '71209026';

  const role = isMasterAdmin ? 'admin' : user?.role;

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/auth/portal");
    }
  }, [user, loading, router]);

  // Bypass blocking spinner if we have a user (even if profile is still syncing)
  if (!user && loading) {
    return null; // Return empty to avoid visual flicker while first check happens
  }

  if (!user) return null;

  // Use inferred role or database role to show dashboard immediately
  if (role === "teacher" || role === "staff" || role === "admin" || isMasterAdmin) {
    return <TeacherDashboard user={{...user, role: role || 'admin'}} />;
  }

  return <StudentDashboard user={user} />;
}
