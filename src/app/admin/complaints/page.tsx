
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  ShieldAlert, 
  Search, 
  MessageSquare, 
  CheckCircle2, 
  Clock, 
  MoreVertical,
  Eye,
  Trash2,
  Filter
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const mockComplaints = [
  { id: "1", subject: "Canteen Water Issue", user: "Anonymous", date: "Oct 12, 2024", status: "Pending", priority: "High" },
  { id: "2", subject: "Library Fan Not Working", user: "Abdur Rahman", date: "Oct 11, 2024", status: "Resolved", priority: "Low" },
  { id: "3", subject: "Late Teacher Reporting", user: "Anonymous", date: "Oct 10, 2024", status: "Reviewing", priority: "Medium" },
];

export default function AdminComplaintsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-headline font-bold text-primary flex items-center gap-3">
            <ShieldAlert className="text-destructive" /> Complaint Management
          </h1>
          <p className="text-muted-foreground text-sm font-medium">Review and resolve feedback submitted through the digital box.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl gap-2 font-bold h-11 border-2">
            Archive All Resolved
          </Button>
        </div>
      </div>

      <Card className="border-none shadow-sm overflow-hidden">
        <CardHeader className="bg-secondary/10 border-b py-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-primary flex items-center gap-2">
              <MessageSquare size={18} className="text-accent" /> Recent Submissions
            </h3>
            <Button variant="ghost" size="sm" className="rounded-lg gap-2 border">
              <Filter size={16} /> Filter Status
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30">
                <TableHead className="font-black uppercase text-[10px] tracking-widest pl-6">Date</TableHead>
                <TableHead className="font-black uppercase text-[10px] tracking-widest">Subject / Issue</TableHead>
                <TableHead className="font-black uppercase text-[10px] tracking-widest">Submitted By</TableHead>
                <TableHead className="text-center font-black uppercase text-[10px] tracking-widest">Priority</TableHead>
                <TableHead className="text-center font-black uppercase text-[10px] tracking-widest">Status</TableHead>
                <TableHead className="w-20 text-right pr-6"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockComplaints.map((c) => (
                <TableRow key={c.id} className="group hover:bg-secondary/5 transition-colors">
                  <TableCell className="font-medium text-xs pl-6 text-muted-foreground">{c.date}</TableCell>
                  <TableCell className="font-bold text-primary">{c.subject}</TableCell>
                  <TableCell className="text-xs font-bold text-muted-foreground italic">{c.user}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant="outline" className={cn(
                      "text-[9px] font-black uppercase",
                      c.priority === 'High' ? "border-rose-500 text-rose-500 bg-rose-50" : "border-muted text-muted-foreground"
                    )}>
                      {c.priority}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge className={cn(
                      "rounded-lg text-[9px] uppercase font-black px-2 py-0.5",
                      c.status === "Resolved" ? "bg-emerald-500" : 
                      c.status === "Pending" ? "bg-amber-500" : "bg-blue-500"
                    )}>
                      {c.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full opacity-0 group-hover:opacity-100">
                          <MoreVertical size={18} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="rounded-xl p-2 w-48 shadow-xl">
                        <DropdownMenuItem className="gap-2 cursor-pointer rounded-lg">
                          <Eye size={16} /> View Full Details
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2 cursor-pointer rounded-lg text-emerald-600 font-bold">
                          <CheckCircle2 size={16} /> Mark as Resolved
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2 cursor-pointer rounded-lg text-destructive font-bold">
                          <Trash2 size={16} /> Delete Entry
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
