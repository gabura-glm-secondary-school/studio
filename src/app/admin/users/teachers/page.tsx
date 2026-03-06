
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
  Plus, 
  Filter, 
  Edit3, 
  Trash2, 
  MoreVertical,
  Download,
  UserPlus,
  Image as ImageIcon,
  Loader2,
  X
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const mockTeachers = [
  { id: "T001", name: "S. M. Easminur Rahman", subject: "Management", role: "Head Teacher", ein: "10293", status: "Active" },
  { id: "T002", name: "Md. Mamunul Hassan", subject: "Social Science", role: "Assistant Head Teacher", ein: "10294", status: "Active" },
  { id: "T003", name: "Muhammad Sirajul Islam", subject: "Islamic Studies", role: "Assistant Teacher", ein: "10295", status: "Active" },
  { id: "T004", name: "Sushanta Kumar Mondal", subject: "Mathematics", role: "Assistant Teacher", ein: "10299", status: "Active" },
];

export default function FacultyManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSaveTeacher = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsAddModalOpen(false);
      toast({ title: "Teacher Added", description: "The new faculty member has been recorded successfully." });
    }, 1500);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-headline font-bold text-primary">Faculty Management</h1>
          <p className="text-muted-foreground text-sm font-medium">Manage teacher profiles, EIN tracking, and academic subjects.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl gap-2 font-bold h-11 border-2">
            <Download size={18} /> Export Faculty
          </Button>
          <Button onClick={() => setIsAddModalOpen(true)} className="rounded-xl gap-2 font-bold h-11 shadow-lg bg-primary">
            <UserPlus size={18} /> Add New Teacher
          </Button>
        </div>
      </div>

      <Card className="border-none shadow-sm">
        <CardHeader className="bg-secondary/10 border-b py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                placeholder="Search by name, EIN, or subject..." 
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
                <TableHead className="w-24 font-black uppercase text-[10px] tracking-widest pl-6">EIN</TableHead>
                <TableHead className="font-black uppercase text-[10px] tracking-widest">Teacher Name</TableHead>
                <TableHead className="font-black uppercase text-[10px] tracking-widest">Role / Designation</TableHead>
                <TableHead className="font-black uppercase text-[10px] tracking-widest text-center">Subject</TableHead>
                <TableHead className="font-black uppercase text-[10px] tracking-widest text-center">Status</TableHead>
                <TableHead className="w-20 text-right pr-6"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTeachers.map((teacher) => (
                <TableRow key={teacher.id} className="group hover:bg-secondary/5 transition-colors">
                  <TableCell className="font-mono text-xs font-bold pl-6 text-accent">{teacher.ein}</TableCell>
                  <TableCell>
                    <div className="font-bold text-primary">{teacher.name}</div>
                    <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">Verified Faculty</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-xs font-bold text-muted-foreground">{teacher.role}</div>
                  </TableCell>
                  <TableCell className="text-center font-black text-xs uppercase text-primary/60">{teacher.subject}</TableCell>
                  <TableCell className="text-center">
                    <Badge className="rounded-lg text-[10px] uppercase font-black px-2 py-0.5 bg-emerald-500 shadow-sm">
                      {teacher.status}
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
                          <Edit3 size={16} /> Edit Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2 rounded-lg cursor-pointer text-destructive font-bold">
                          <Trash2 size={16} /> Remove Teacher
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

      {/* Add Teacher Modal */}
      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogContent className="max-w-2xl rounded-[2rem] p-0 overflow-hidden border-none shadow-2xl">
          <form onSubmit={handleSaveTeacher}>
            <DialogHeader className="bg-primary/5 p-8 border-b">
              <DialogTitle className="text-2xl font-headline font-black text-primary">Add New Faculty Member</DialogTitle>
              <CardDescription>Enter professional details to create a new teacher profile.</CardDescription>
            </DialogHeader>
            <div className="p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Full Name (English)</Label>
                  <Input placeholder="e.g. Abdur Rahim" required />
                </div>
                <div className="space-y-2">
                  <Label>Full Name (Bengali)</Label>
                  <Input placeholder="মোঃ আব্দুর রহিম" required />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>EIN Number</Label>
                  <Input placeholder="Unique Identification" required />
                </div>
                <div className="space-y-2">
                  <Label>Joining Year</Label>
                  <Input placeholder="e.g. 2024" type="number" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Designation</Label>
                  <Select required>
                    <SelectTrigger><SelectValue placeholder="Select Role" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Head Teacher">Head Teacher</SelectItem>
                      <SelectItem value="Assistant Head Teacher">Assistant Head Teacher</SelectItem>
                      <SelectItem value="Assistant Teacher">Assistant Teacher</SelectItem>
                      <SelectItem value="Senior Teacher">Senior Teacher</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Department</Label>
                  <Select required>
                    <SelectTrigger><SelectValue placeholder="Select Dept" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Science">Science</SelectItem>
                      <SelectItem value="Arts">Arts</SelectItem>
                      <SelectItem value="Physical Education">Physical Education</SelectItem>
                      <SelectItem value="Office">Administration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Specialist Subject</Label>
                <Input placeholder="e.g. Mathematics, Physics" />
              </div>

              <div className="space-y-2">
                <Label>Biography (Optional)</Label>
                <Textarea placeholder="Professional background or mission statement..." className="min-h-[100px]" />
              </div>

              <div className="p-6 bg-secondary/5 rounded-2xl border-2 border-dashed flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-muted-foreground border">
                  <ImageIcon size={32} />
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-sm">Upload Faculty Photograph</p>
                  <p className="text-[10px] text-muted-foreground uppercase">Max size: 2MB • JPG/PNG</p>
                  <Button variant="outline" size="sm" type="button" className="h-8 text-[10px] font-black uppercase">Browse Files</Button>
                </div>
              </div>
            </div>
            <DialogFooter className="p-8 bg-muted/10 border-t gap-3">
              <Button variant="ghost" type="button" onClick={() => setIsAddModalOpen(false)} className="rounded-xl">Cancel</Button>
              <Button type="submit" disabled={loading} className="rounded-xl px-8 shadow-lg bg-primary min-w-[140px]">
                {loading ? <Loader2 className="animate-spin mr-2" /> : <Plus size={18} className="mr-2" />} Save Faculty
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
