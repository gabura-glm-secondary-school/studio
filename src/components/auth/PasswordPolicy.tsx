
"use client";

import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface PolicyItemProps {
  label: string;
  fulfilled: boolean;
}

function PolicyItem({ label, fulfilled }: PolicyItemProps) {
  return (
    <div className="flex items-center gap-2 text-xs font-medium">
      {fulfilled ? (
        <Check size={14} className="text-emerald-500" />
      ) : (
        <X size={14} className="text-destructive" />
      )}
      <span className={cn(fulfilled ? "text-emerald-600" : "text-muted-foreground")}>
        {label}
      </span>
    </div>
  );
}

export function PasswordPolicy({ password }: { password: string }) {
  const policies = [
    { label: "At least 8 characters", test: password.length >= 8 },
    { label: "One uppercase letter", test: /[A-Z]/.test(password) },
    { label: "One lowercase letter", test: /[a-z]/.test(password) },
    { label: "One number", test: /[0-9]/.test(password) },
    { label: "One special character", test: /[^A-Za-z0-9]/.test(password) },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 p-4 bg-muted/30 rounded-xl border border-border/50">
      {policies.map((p, i) => (
        <PolicyItem key={i} label={p.label} fulfilled={p.test} />
      ))}
    </div>
  );
}

export function isPasswordValid(password: string) {
  return (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password)
  );
}
