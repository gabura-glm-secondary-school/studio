
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  ShieldCheck, 
  Search, 
  Filter, 
  Clock, 
  AlertTriangle, 
  UserCheck, 
  Lock, 
  ArrowLeft,
  Download,
  Trash2
} from "lucide-react";
import { cn } from "@/lib/utils";

const mockLogs = [
  { id: "1", user: "Abdur Rahman (STU2024001)", action: "Login Success", ip: "192.168.1.1", time: "2 mins ago", status: "Success" },
  { id: "2", user: "Unknown", action: "Failed Login Attempt", ip: "45.12.90.11", time: "1 hour ago", status: "Alert" },
  { id: "3", user: "S.M Easminur Rahman", action: "Profile Updated", ip: "103.23.44.1", time: "3 hours ago", status: "Info" },
  { id: "4", user: "System", action: "Auto Backup Complete", ip: "Server", time: "5 hours ago", status: "Success" },
  { id: "5", user: "STU2024003", action: "Account Locked", ip: "192.168.1.45", time: "12 hours ago", status: "Danger" },
];

export default function SecurityLogsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-headline font-bold text-primary flex items-center gap-3">
            <ShieldCheck className="text-accent" /> Security & Activity Logs
          </h1>
          <p className="text-muted-foreground text-sm font-medium">Monitor all critical system actions and security alerts.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl gap-2 font-bold h-11 border-2">
            <Download size={18} /> Export Logs
          </Button>
          <Button variant="destructive" className="rounded-xl gap-2 font-bold h-11 shadow-lg">
            <Trash2 size={18} /> Clear Old Logs
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-emerald-50 border-emerald-100">
          <CardContent className="pt-6 flex gap-4 items-center">
            <div className="w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center">
              <UserCheck size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-emerald-600 tracking-widest">Successful Logins</p>
              <p className="text-2xl font-black text-emerald-700">1,204</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-amber-50 border-amber-100">
          <CardContent className="pt-6 flex gap-4 items-center">
            <div className="w-12 h-12 bg-amber-500 text-white rounded-2xl flex items-center justify-center">
              <AlertTriangle size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-amber-600 tracking-widest">Failed Attempts</p>
              <p className="text-2xl font-black text-amber-700">42</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-rose-50 border-rose-100">
          <CardContent className="pt-6 flex gap-4 items-center">
            <div className="w-12 h-12 bg-rose-500 text-white rounded-2xl flex items-center justify-center">
              <Lock size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-rose-600 tracking-widest">Account Locks</p>
              <p className="text-2xl font-black text-rose-700">03</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-sm overflow-hidden bg-white/80 backdrop-blur-md">
        <CardHeader className="bg-secondary/10 border-b py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                placeholder="Search by user or IP..." 
                className="pl-10 h-10 bg-white border-border rounded-xl"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" size="sm" className="rounded-lg gap-2 h-10 border-2">
              <Filter size={16} /> Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/30">
                  <TableHead className="w-48 font-black uppercase text-[10px] tracking-widest pl-6">Time</TableHead>
                  <TableHead className="font-black uppercase text-[10px] tracking-widest">User Identity</TableHead>
                  <TableHead className="font-black uppercase text-[10px] tracking-widest">Action Performed</TableHead>
                  <TableHead className="font-black uppercase text-[10px] tracking-widest text-center">IP Address</TableHead>
                  <TableHead className="w-32 text-center font-black uppercase text-[10px] tracking-widest pr-6">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockLogs.map((log) => (
                  <TableRow key={log.id} className="group hover:bg-secondary/5 transition-colors">
                    <TableCell className="font-medium text-xs pl-6 text-muted-foreground flex items-center gap-2">
                      <Clock size={12} className="text-accent" /> {log.time}
                    </TableCell>
                    <TableCell className="font-bold text-primary">{log.user}</TableCell>
                    <TableCell className="text-sm font-medium">{log.action}</TableCell>
                    <TableCell className="text-center font-mono text-[10px] text-muted-foreground">{log.ip}</TableCell>
                    <TableCell className="text-center pr-6">
                      <Badge className={cn(
                        "rounded-lg text-[10px] uppercase font-black px-2 py-0.5 shadow-sm",
                        log.status === "Success" ? "bg-emerald-500" : 
                        log.status === "Alert" ? "bg-amber-500" : 
                        log.status === "Danger" ? "bg-rose-500" : "bg-blue-500"
                      )}>
                        {log.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
