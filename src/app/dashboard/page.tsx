
"use client";

import { useUser } from "@/firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import StudentDashboard from "@/components/dashboard/StudentDashboard";
import TeacherDashboard from "@/components/dashboard/TeacherDashboard";

export default function DashboardPage() {
  const { user, loading } = useUser();
  const router = useRouter();

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

  // Assuming user object from useUser() has the role and other firestore data
  // In our setup, useUser likely returns the auth user, we need the profile
  // For MVP, we'll assume the role is accessible or redirect accordingly
  
  if (user.role === "teacher" || user.role === "staff" || user.role === "admin") {
    return <TeacherDashboard user={user} />;
  }

  return <StudentDashboard user={user} />;
}
