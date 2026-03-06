
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
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
  Filter, 
  Edit3, 
  Trash2, 
  Lock, 
  Unlock,
  MoreVertical,
  Download,
  UserPlus,
  Loader2,
  Plus
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const mockStudents = [
  { id: "STU2024001", name: "Abdur Rahman", class: "9", section: "A", roll: "101", status: "Active" },
  { id: "STU2024002", name: "Fatima Khatun", class: "9", section: "A", roll: "102", status: "Active" },
  { id: "STU2024003", name: "Siddiqur Ahmed", class: "10", section: "B", roll: "205", status: "Locked" },
  { id: "STU2024004", name: "Nusrat Jahan", class: "8", section: "A", roll: "112", status: "Inactive" },
  { id: "STU2024005", name: "Imran Hossain", class: "9", section: "B", roll: "301", status: "Active" },
];

export default function StudentManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsAddModalOpen(false);
      toast({ title: "Student Added", description: "The student record has been saved successfully.", variant: "success" });
    }, 1000);
  };

  const handleExport = () => {
    toast({ title: "Exporting Data", description: "Preparing student list for download..." });
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-headline font-bold text-primary">Student Management</h1>
          <p className="text-muted-foreground text-sm font-medium">Create and manage pre-verified student records.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button onClick={handleExport} variant="outline" className="rounded-xl gap-2 font-bold h-11 border-2 active:scale-95 transition-transform">
            <Download size={18} /> Export List
          </Button>
          <Button onClick={() => setIsAddModalOpen(true)} className="rounded-xl gap-2 font-bold h-11 shadow-lg bg-primary active:scale-95 transition-transform">
            <UserPlus size={18} /> Add New Student
          </Button>
        </div>
      </div>

      <Card className="border-none shadow-sm overflow-hidden bg-white/80 backdrop-blur-md">
        <CardHeader className="bg-secondary/10 border-b py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                placeholder="Search ID, name, or roll..." 
                className="pl-10 h-10 bg-white border-border rounded-xl focus:ring-primary/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="rounded-lg gap-2 h-10 border-2 active:scale-95">
                <Filter size={16} /> Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
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
                {mockStudents.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.id.includes(searchTerm)).map((student) => (
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
                        student.status === "Active" ? "bg-emerald-500 text-white" : 
                        student.status === "Locked" ? "bg-destructive text-white" : "bg-muted text-muted-foreground"
                      )}>
                        {student.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right pr-6">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="rounded-full bg-white sm:bg-transparent shadow-sm sm:shadow-none border sm:border-none active:scale-90 transition-all">
                            <MoreVertical size={18} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="rounded-xl p-2 w-48 shadow-xl z-[80]">
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
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-border/50 gap-4">
        <p className="text-xs font-bold text-muted-foreground">Showing {mockStudents.length} of 1,240 students</p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled className="rounded-xl h-9">Previous</Button>
          <Button variant="outline" size="sm" className="rounded-xl h-9">Next</Button>
        </div>
      </div>

      {/* Add Student Modal */}
      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogContent className="max-w-md rounded-[2.5rem] border-none shadow-2xl p-0 overflow-hidden z-[100]">
          <form onSubmit={handleAddStudent}>
            <DialogHeader className="p-8 bg-primary/5 border-b">
              <DialogTitle className="text-2xl font-headline font-black text-primary">New Student Record</DialogTitle>
              <DialogDescription className="font-bold">Add a pre-verified student to the master list.</DialogDescription>
            </DialogHeader>
            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Full Name</Label>
                <Input placeholder="Student's Legal Name" required className="rounded-xl h-12" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Class</Label>
                  <Input placeholder="e.g. 9" required className="rounded-xl h-12" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Roll No</Label>
                  <Input placeholder="e.g. 101" required className="rounded-xl h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">System ID (Optional)</Label>
                <Input placeholder="STUXXXXX" className="rounded-xl h-12 font-mono" />
              </div>
            </div>
            <DialogFooter className="p-8 bg-muted/10 border-t gap-3">
              <Button type="button" variant="ghost" onClick={() => setIsAddModalOpen(false)} className="rounded-xl">Cancel</Button>
              <Button type="submit" disabled={loading} className="rounded-xl bg-primary shadow-lg min-w-[120px] active:scale-95">
                {loading ? <Loader2 className="animate-spin" /> : <Plus size={18} className="mr-2" />} Save Record
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
