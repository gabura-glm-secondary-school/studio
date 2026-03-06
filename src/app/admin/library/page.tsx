
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  BookOpen, 
  Search, 
  FileText, 
  Download, 
  Trash2, 
  Edit3, 
  Upload,
  Filter,
  Plus,
  Loader2,
  X
} from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter,
  DialogDescription 
} from "@/components/ui/dialog";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const mockLibraryItems: any[] = [];

export default function AdminLibraryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate upload process
    setTimeout(() => {
      setLoading(false);
      setIsUploadModalOpen(false);
      toast({ 
        title: "রিসোর্স আপলোড সফল (SUCCESS)", 
        description: "নতুন স্টাডি মেটেরিয়াল লাইব্রেরিতে যুক্ত করা হয়েছে।",
        variant: "success"
      });
    }, 1500);
  };

  const filteredItems = mockLibraryItems.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="space-y-8 animate-in fade-in duration-500 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-headline font-bold text-primary flex items-center gap-3">
            <BookOpen className="text-accent" /> Digital Library Control
          </h1>
          <p className="text-muted-foreground text-sm font-medium">Upload and manage study materials for students.</p>
        </div>
        <Button 
          onClick={() => setIsUploadModalOpen(true)}
          className="rounded-xl gap-2 font-bold h-11 shadow-lg bg-primary active:scale-95 transition-transform"
        >
          <Upload size={18} /> Upload Resource
        </Button>
      </div>

      <Card className="border-none shadow-sm overflow-hidden bg-white/80 backdrop-blur-md">
        <CardHeader className="bg-secondary/10 border-b py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                placeholder="Search resources..." 
                className="pl-10 h-10 rounded-xl bg-white border-border focus:ring-primary/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" size="sm" className="rounded-xl gap-2 h-10 border-2 active:scale-95">
              <Filter size={16} /> <span className="hidden sm:inline">Categories</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="grid gap-4">
            {filteredItems.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-secondary/5 rounded-2xl border border-border/50 group hover:border-accent transition-all gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm border border-primary/10">
                    <FileText size={24} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-primary truncate">{item.title}</h4>
                    <div className="flex items-center gap-3 text-[10px] font-black uppercase text-muted-foreground tracking-widest mt-1">
                      <span className="text-accent">{item.category}</span>
                      <span>•</span>
                      <span>{item.type}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Download size={10} /> {item.downloads}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <Button variant="ghost" size="icon" className="rounded-xl bg-white shadow-sm border border-border/50 transition-all active:scale-90">
                    <Edit3 size={16} className="text-primary" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-xl bg-white shadow-sm border border-border/50 text-destructive hover:bg-destructive/10 transition-all active:scale-90">
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            ))}
            {filteredItems.length === 0 && (
              <div className="py-20 text-center space-y-3">
                <BookOpen className="mx-auto text-muted-foreground/20" size={48} />
                <p className="text-muted-foreground font-black uppercase tracking-widest text-xs">লাইব্রেরিতে কোনো ফাইল নেই।</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Upload Resource Modal */}
      <Dialog open={isUploadModalOpen} onOpenChange={setIsUploadModalOpen}>
        <DialogContent className="max-w-md rounded-[2.5rem] border-none shadow-2xl p-0 overflow-hidden z-[100]">
          <form onSubmit={handleUpload}>
            <DialogHeader className="p-8 bg-primary/5 border-b">
              <DialogTitle className="text-2xl font-headline font-black text-primary">Upload Resource</DialogTitle>
              <DialogDescription className="font-bold">Add new study materials or questions to the digital library.</DialogDescription>
            </DialogHeader>
            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Resource Title</Label>
                <Input placeholder="e.g. Class 10 Biology Notes" required className="rounded-xl h-12" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Category</Label>
                  <Select required>
                    <SelectTrigger className="rounded-xl h-12">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="notes">Academic Notes</SelectItem>
                      <SelectItem value="questions">Question Bank</SelectItem>
                      <SelectItem value="textbook">Textbook</SelectItem>
                      <SelectItem value="other">General</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">File Type</Label>
                  <Select defaultValue="pdf">
                    <SelectTrigger className="rounded-xl h-12">
                      <SelectValue placeholder="Format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pdf">PDF Document</SelectItem>
                      <SelectItem value="docx">Word File</SelectItem>
                      <SelectItem value="zip">Archive (ZIP)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Select File</Label>
                <div className="border-2 border-dashed border-primary/20 rounded-2xl p-8 text-center bg-secondary/5 hover:bg-secondary/10 transition-colors cursor-pointer group">
                  <Upload className="mx-auto text-primary/40 group-hover:text-primary mb-2 transition-colors" size={32} />
                  <p className="text-xs font-bold text-muted-foreground">Click to browse or drag & drop</p>
                  <p className="text-[9px] uppercase font-black text-primary/40 mt-1">Max Size: 20MB</p>
                </div>
              </div>
            </div>
            <DialogFooter className="p-8 bg-muted/10 border-t gap-3">
              <Button type="button" variant="ghost" onClick={() => setIsUploadModalOpen(false)} className="rounded-xl">Cancel</Button>
              <Button type="submit" disabled={loading} className="rounded-xl bg-primary shadow-lg min-w-[140px] active:scale-95 transition-all">
                {loading ? <Loader2 className="animate-spin" /> : <><Plus size={18} className="mr-2" /> Start Upload</>}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
