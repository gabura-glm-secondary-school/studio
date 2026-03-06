
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Search, 
  Plus, 
  Filter, 
  Edit3, 
  Trash2, 
  Lock, 
  Unlock,
  MoreVertical,
  Download,
  UserPlus
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mockStudents = [
  { id: "STU2024001", name: "Abdur Rahman", class: "9", section: "A", roll: "101", status: "Active" },
  { id: "STU2024002", name: "Fatima Khatun", class: "9", section: "A", roll: "102", status: "Active" },
  { id: "STU2024003", name: "Siddiqur Ahmed", class: "10", section: "B", roll: "205", status: "Locked" },
  { id: "STU2024004", name: "Nusrat Jahan", class: "8", section: "A", roll: "112", status: "Inactive" },
  { id: "STU2024005", name: "Imran Hossain", class: "9", section: "B", roll: "301", status: "Active" },
];

export default function StudentManagement() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-headline font-bold text-primary">Student Management</h1>
          <p className="text-muted-foreground text-sm font-medium">Create and manage pre-verified student records.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl gap-2 font-bold h-11 border-2">
            <Download size={18} /> Export List
          </Button>
          <Button className="rounded-xl gap-2 font-bold h-11 shadow-lg bg-primary">
            <UserPlus size={18} /> Add New Student
          </Button>
        </div>
      </div>

      <Card className="border-none shadow-sm">
        <CardHeader className="bg-secondary/10 border-b py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                placeholder="Search ID, name, or roll..." 
                className="pl-10 h-10 bg-white border-border rounded-xl"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="rounded-lg gap-2 h-10 border-2">
                <Filter size={16} /> Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30">
                <TableHead className="w-32 font-black uppercase text-[10px] tracking-widest pl-6">Student ID</TableHead>
                <TableHead className="font-black uppercase text-[10px] tracking-widest">Full Name</TableHead>
                <TableHead className="font-black uppercase text-[10px] tracking-widest text-center">Class</TableHead>
                <TableHead className="font-black uppercase text-[10px] tracking-widest text-center">Roll</TableHead>
                <TableHead className="font-black uppercase text-[10px] tracking-widest text-center">Status</TableHead>
                <TableHead className="w-20 text-right pr-6"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockStudents.map((student) => (
                <TableRow key={student.id} className="group hover:bg-secondary/5 transition-colors">
                  <TableCell className="font-mono text-xs font-bold pl-6 text-primary">{student.id}</TableCell>
                  <TableCell>
                    <div className="font-bold text-primary">{student.name}</div>
                    <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">Verified Profile</div>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant="outline" className="rounded-lg font-black">{student.class}-{student.section}</Badge>
                  </TableCell>
                  <TableCell className="text-center font-black text-muted-foreground">{student.roll}</TableCell>
                  <TableCell className="text-center">
                    <Badge className={cn(
                      "rounded-lg text-[10px] uppercase font-black px-2 py-0.5 shadow-sm",
                      student.status === "Active" ? "bg-emerald-500" : 
                      student.status === "Locked" ? "bg-destructive" : "bg-muted text-muted-foreground"
                    )}>
                      {student.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                          <MoreVertical size={18} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="rounded-xl p-2 w-48 shadow-xl">
                        <DropdownMenuItem className="gap-2 rounded-lg cursor-pointer">
                          <Edit3 size={16} /> Edit Details
                        </DropdownMenuItem>
                        {student.status === "Locked" ? (
                          <DropdownMenuItem className="gap-2 rounded-lg cursor-pointer text-emerald-600 font-bold">
                            <Unlock size={16} /> Unlock Account
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem className="gap-2 rounded-lg cursor-pointer text-amber-600 font-bold">
                            <Lock size={16} /> Force Lock
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem className="gap-2 rounded-lg cursor-pointer text-destructive font-bold">
                          <Trash2 size={16} /> Delete Record
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

      <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-border/50">
        <p className="text-xs font-bold text-muted-foreground">Showing 1 to 5 of 1,240 students</p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled className="rounded-xl h-9">Previous</Button>
          <Button variant="outline" size="sm" className="rounded-xl h-9">Next</Button>
        </div>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
