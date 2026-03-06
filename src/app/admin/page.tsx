"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  BarChart3, 
  FileEdit, 
  Megaphone, 
  Settings, 
  Sparkles, 
  Users, 
  ShieldAlert, 
  CheckCircle2,
  Plus,
  Trash2,
  Loader2
} from "lucide-react";
import { draftContent, AiContentDraftingInput } from "@/ai/flows/ai-content-drafting-tool";

export default function AdminDashboard() {
  const { toast } = useToast();
  const [isAiDrafting, setIsAiDrafting] = useState(false);
  const [draftedContent, setDraftedContent] = useState("");

  const [aiForm, setAiForm] = useState<AiContentDraftingInput>({
    contentType: "announcement",
    keyPoints: "",
    tone: "informative",
    length: "medium"
  });

  const handleAiDraft = async () => {
    if (!aiForm.keyPoints) {
      toast({ title: "Missing Input", description: "Please enter key points for AI drafting.", variant: "destructive" });
      return;
    }
    setIsAiDrafting(true);
    try {
      const result = await draftContent(aiForm);
      setDraftedContent(result.draftedContent);
      toast({ title: "Draft Generated", description: "AI has successfully drafted your content." });
    } catch (error) {
      toast({ title: "Drafting Failed", description: "Could not generate content at this time.", variant: "destructive" });
    } finally {
      setIsAiDrafting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm">Control Panel</span>
            <h1 className="text-4xl lg:text-5xl font-headline font-bold text-primary">School Management</h1>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="rounded-full gap-2">
              <Settings size={18} /> Settings
            </Button>
            <Button className="rounded-full gap-2">
              <Plus size={18} /> New Notice
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="bg-white/50 backdrop-blur-md p-1 border h-auto flex flex-wrap gap-2 justify-start">
            <TabsTrigger value="overview" className="gap-2"><BarChart3 size={16} /> Overview</TabsTrigger>
            <TabsTrigger value="content" className="gap-2"><FileEdit size={16} /> Content Mgmt</TabsTrigger>
            <TabsTrigger value="ai-tools" className="gap-2"><Sparkles size={16} /> AI Assistant</TabsTrigger>
            <TabsTrigger value="students" className="gap-2"><Users size={16} /> Students & Batches</TabsTrigger>
            <TabsTrigger value="complaints" className="gap-2"><ShieldAlert size={16} /> Complaints</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Active Notices", val: "12", icon: Megaphone },
                { label: "Unread Complaints", val: "5", icon: ShieldAlert, color: "text-destructive" },
                { label: "Pending Admissions", val: "24", icon: Users },
                { label: "Total Batches", val: "48", icon: CheckCircle2 },
              ].map((s, idx) => (
                <Card key={idx} className="glass-card">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground font-semibold">{s.label}</p>
                        <p className={`text-3xl font-black ${s.color || "text-primary"}`}>{s.val}</p>
                      </div>
                      <div className="p-2 bg-primary/5 rounded-xl">
                        <s.icon className={s.color || "text-primary"} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 grid lg:grid-cols-2 gap-8">
              <Card className="glass-card">
                <CardHeader><CardTitle>Latest Complaints</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-muted/50 rounded-xl border border-border">
                      <div className="space-y-1">
                        <p className="font-bold">Facility Issue: Canteen Water</p>
                        <p className="text-xs text-muted-foreground">Submitted 2 hours ago • Anonymous</p>
                      </div>
                      <Button variant="ghost" size="sm">Review</Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardHeader><CardTitle>Active Notices</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white rounded-xl border border-border">
                      <div className="space-y-1">
                        <p className="font-bold">Winter Vacation Notice Published</p>
                        <p className="text-xs text-muted-foreground">Expires in 5 days • Public</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="text-primary"><FileEdit size={16}/></Button>
                        <Button variant="ghost" size="icon" className="text-destructive"><Trash2 size={16}/></Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ai-tools">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="text-accent" /> AI Content Drafting
                  </CardTitle>
                  <CardDescription>Generate high-quality drafts for announcements and events.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase">Content Type</label>
                      <Select 
                        value={aiForm.contentType} 
                        onValueChange={(v: any) => setAiForm({...aiForm, contentType: v})}
                      >
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="announcement">Announcement</SelectItem>
                          <SelectItem value="news_article">News Article</SelectItem>
                          <SelectItem value="event_description">Event Description</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase">Tone</label>
                      <Select 
                        value={aiForm.tone} 
                        onValueChange={(v: any) => setAiForm({...aiForm, tone: v})}
                      >
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="formal">Formal</SelectItem>
                          <SelectItem value="friendly">Friendly</SelectItem>
                          <SelectItem value="urgent">Urgent</SelectItem>
                          <SelectItem value="informative">Informative</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase">Key Points</label>
                    <Textarea 
                      placeholder="Enter the main facts or points to include..."
                      className="min-h-[120px]"
                      value={aiForm.keyPoints}
                      onChange={(e) => setAiForm({...aiForm, keyPoints: e.target.value})}
                    />
                  </div>
                  <Button 
                    className="w-full h-12 gap-2 bg-primary text-white hover:bg-primary/90 rounded-xl"
                    onClick={handleAiDraft}
                    disabled={isAiDrafting}
                  >
                    {isAiDrafting ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
                    Generate Draft with AI
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card flex flex-col">
                <CardHeader>
                  <CardTitle>AI Generated Result</CardTitle>
                  <CardDescription>Review and edit the AI output before publishing.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-6">
                  <Textarea 
                    className="flex-1 min-h-[300px] h-full font-mono text-sm leading-relaxed"
                    value={draftedContent}
                    onChange={(e) => setDraftedContent(e.target.value)}
                    placeholder="Generated draft will appear here..."
                  />
                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      className="flex-1 rounded-xl"
                      disabled={!draftedContent}
                      onClick={() => {
                        navigator.clipboard.writeText(draftedContent);
                        toast({ title: "Copied", description: "Draft copied to clipboard." });
                      }}
                    >
                      Copy to Clipboard
                    </Button>
                    <Button 
                      className="flex-1 rounded-xl bg-accent text-primary hover:bg-accent/90"
                      disabled={!draftedContent}
                    >
                      Use as New Notice
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="content">
            <Card className="glass-card">
               <CardHeader><CardTitle>Manage Home Page Statistics</CardTitle></CardHeader>
               <CardContent className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                 {[
                   { l: "Total Students", v: "1200" },
                   { l: "Total Teachers", v: "45" },
                   { l: "SSC Pass Rate (%)", v: "98" },
                   { l: "Years of Excellence", v: "25" },
                 ].map((s, i) => (
                   <div key={i} className="space-y-2">
                     <label className="text-xs font-bold text-muted-foreground">{s.l}</label>
                     <Input defaultValue={s.v} />
                   </div>
                 ))}
                 <div className="sm:col-span-2 lg:col-span-4 pt-4 border-t">
                    <Button className="rounded-full px-8">Save Statistics</Button>
                 </div>
               </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students">
             <Card className="glass-card">
               <CardHeader>
                 <CardTitle>SSC Batch Directory Management</CardTitle>
                 <CardDescription>Add new batches and manage student lists for each year.</CardDescription>
               </CardHeader>
               <CardContent>
                  <div className="border rounded-xl overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-primary/5">
                        <tr className="border-b">
                          <th className="p-4 text-left">Year</th>
                          <th className="p-4 text-left">Total Students</th>
                          <th className="p-4 text-left">GPA 5.00</th>
                          <th className="p-4 text-left">Pass Rate</th>
                          <th className="p-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[2024, 2023, 2022].map((y) => (
                          <tr key={y} className="border-b hover:bg-muted/30">
                            <td className="p-4 font-bold">{y}</td>
                            <td className="p-4">135</td>
                            <td className="p-4">28</td>
                            <td className="p-4">100%</td>
                            <td className="p-4 text-right flex justify-end gap-2">
                              <Button variant="ghost" size="sm">Edit List</Button>
                              <Button variant="ghost" size="sm" className="text-destructive"><Trash2 size={16}/></Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <Button className="mt-6 gap-2 rounded-full"><Plus size={18}/> Add New Batch Record</Button>
               </CardContent>
             </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}