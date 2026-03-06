
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
  Pin,
  Eye,
  EyeOff,
  MoreVertical,
  Bell,
  Megaphone,
  User,
  Download,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const mockMainNotices = [
  { id: "1", title: "SSC 2025 Test Exam Schedule", date: "Oct 12, 2024", type: "exam", status: "Active", isPinned: true },
  { id: "2", title: "Admission Open 2025", date: "Oct 10, 2024", type: "admission", status: "Active", isPinned: false },
  { id: "3", title: "Half-yearly Vacation", date: "Oct 05, 2024", type: "holiday", status: "Inactive", isPinned: false },
];

const mockTeacherNotices = [
  { id: "t1", title: "Physics Lab Submission", teacher: "Asaduzzaman", classes: ["9", "10"], date: "Oct 11, 2024", status: "Active" },
  { id: "t2", title: "Math Special Class", teacher: "Sushanta Mondal", classes: ["10"], date: "Oct 09, 2024", status: "Active" },
];

export default function AdminNoticeManagement() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-headline font-bold text-primary">Notice Management</h1>
          <p className="text-muted-foreground text-sm font-medium">Control official bulletins and monitor teacher communications.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl gap-2 font-bold h-11 border-2">
            <Download size={18} /> Archive All
          </Button>
          <Button className="rounded-xl gap-2 font-bold h-11 shadow-lg bg-primary">
            <Plus size={18} /> Create New Notice
          </Button>
        </div>
      </div>

      <Tabs defaultValue="main" className="space-y-6">
        <TabsList className="bg-white/50 p-1 border rounded-2xl h-auto flex gap-2 justify-start shadow-sm">
          <TabsTrigger value="main" className="rounded-xl gap-2 h-10 font-bold data-[state=active]:bg-primary data-[state=active]:text-white">
            <Megaphone size={16} /> Main Board
          </TabsTrigger>
          <TabsTrigger value="teacher" className="rounded-xl gap-2 h-10 font-bold data-[state=active]:bg-primary data-[state=active]:text-white">
            <User size={16} /> Teacher Notices
          </TabsTrigger>
        </TabsList>

        <Card className="border-none shadow-sm overflow-hidden">
          <CardHeader className="bg-secondary/10 border-b py-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="relative max-w-sm w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input 
                  placeholder="Search notices..." 
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
            <TabsContent value="main" className="m-0">
              <NoticeTable data={mockMainNotices} />
            </TabsContent>
            <TabsContent value="teacher" className="m-0">
              <NoticeTable data={mockTeacherNotices} isTeacherTab />
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-emerald-50 border-emerald-100">
          <CardContent className="pt-6 flex gap-4 items-center">
            <div className="w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center shrink-0">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-emerald-600 tracking-widest">Active Notices</p>
              <p className="text-2xl font-black text-emerald-700">12</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-blue-50 border-blue-100">
          <CardContent className="pt-6 flex gap-4 items-center">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-2xl flex items-center justify-center shrink-0">
              <Bell size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-blue-600 tracking-widest">Scheduled</p>
              <p className="text-2xl font-black text-blue-700">04</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-amber-50 border-amber-100">
          <CardContent className="pt-6 flex gap-4 items-center">
            <div className="w-12 h-12 bg-amber-500 text-white rounded-2xl flex items-center justify-center shrink-0">
              <AlertCircle size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-amber-600 tracking-widest">Awaiting Review</p>
              <p className="text-2xl font-black text-amber-700">02</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function NoticeTable({ data, isTeacherTab = false }: { data: any[], isTeacherTab?: boolean }) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-muted/30">
          <TableHead className="w-32 font-black uppercase text-[10px] tracking-widest pl-6">Date</TableHead>
          <TableHead className="font-black uppercase text-[10px] tracking-widest">Notice Title</TableHead>
          {isTeacherTab && <TableHead className="font-black uppercase text-[10px] tracking-widest">Teacher / Classes</TableHead>}
          {!isTeacherTab && <TableHead className="font-black uppercase text-[10px] tracking-widest text-center">Type</TableHead>}
          <TableHead className="font-black uppercase text-[10px] tracking-widest text-center">Status</TableHead>
          <TableHead className="w-20 text-right pr-6"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id} className="group hover:bg-secondary/5 transition-colors">
            <TableCell className="font-medium text-xs pl-6 text-muted-foreground">{item.date}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                {item.isPinned && <Pin size={14} className="text-accent fill-accent" />}
                <div className="font-bold text-primary">{item.title}</div>
              </div>
            </TableCell>
            {isTeacherTab ? (
              <TableCell>
                <div className="text-xs font-bold text-primary">{item.teacher}</div>
                <div className="flex gap-1 mt-1">
                  {item.classes.map((c: string) => (
                    <Badge key={c} variant="secondary" className="text-[8px] px-1 py-0 h-4">Cl {c}</Badge>
                  ))}
                </div>
              </TableCell>
            ) : (
              <TableCell className="text-center uppercase text-[10px] font-black text-accent">{item.type}</TableCell>
            )}
            <TableCell className="text-center">
              <Badge className={cn(
                "rounded-lg text-[10px] uppercase font-black px-2 py-0.5",
                item.status === "Active" ? "bg-emerald-500" : "bg-muted text-muted-foreground"
              )}>
                {item.status}
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
                    <Edit3 size={16} /> Edit Notice
                  </DropdownMenuItem>
                  {!isTeacherTab && (
                    <DropdownMenuItem className="gap-2 rounded-lg cursor-pointer">
                      <Pin size={16} /> {item.isPinned ? "Unpin Notice" : "Pin to Top"}
                    </DropdownMenuItem>
                  )}
                  {item.status === "Active" ? (
                    <DropdownMenuItem className="gap-2 rounded-lg cursor-pointer text-amber-600 font-bold">
                      <EyeOff size={16} /> Deactivate
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem className="gap-2 rounded-lg cursor-pointer text-emerald-600 font-bold">
                      <Eye size={16} /> Activate
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="gap-2 rounded-lg cursor-pointer text-destructive font-bold">
                    <Trash2 size={16} /> Delete Notice
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
