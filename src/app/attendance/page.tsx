
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Check, X, Loader2, Save, Calendar as CalendarIcon, Users, ClipboardCheck } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const mockStudents: any[] = [];

export default function AttendancePage() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedClass, setSelectedClass] = useState("");
  const [attendance, setAttendance] = useState<Record<string, boolean>>({});

  const handleLoadList = () => {
    if (!selectedClass) {
      toast({ title: "Select Class", description: "Please select a class to continue.", variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1000);
  };

  const toggleAttendance = (studentId: string, status: boolean) => {
    setAttendance({ ...attendance, [studentId]: status });
  };

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Attendance Saved", description: "Successfully recorded attendance for today." });
      setStep(1);
      setAttendance({});
    }, 1500);
  };

  return (
    <div className="pt-24 pb-12 min-h-screen bg-secondary/5">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-headline font-bold text-primary flex items-center gap-3">
            <ClipboardCheck className="text-accent" /> Attendance Management
          </h1>
          {step === 2 && (
            <Button variant="outline" onClick={() => setStep(1)} className="rounded-full">Back to Select</Button>
          )}
        </div>

        {step === 1 ? (
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Select Class & Date</CardTitle>
              <CardDescription>Mark attendance for specific batches.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase">Class</label>
                  <Select value={selectedClass} onValueChange={setSelectedClass}>
                    <SelectTrigger><SelectValue placeholder="Select Class" /></SelectTrigger>
                    <SelectContent>
                      {["6-A", "7-A", "8-A", "9-A", "10-A"].map(c => <SelectItem key={c} value={c}>Class {c}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase">Date</label>
                  <Button variant="outline" className="w-full justify-start text-left font-normal h-10 px-3">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {new Date().toLocaleDateString()}
                  </Button>
                </div>
              </div>
              <Button onClick={handleLoadList} disabled={loading} className="w-full h-12 rounded-xl text-lg gap-2 shadow-lg">
                {loading ? <Loader2 className="animate-spin" /> : <Users size={20} />} Load Student List
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="glass-card overflow-hidden">
            <CardHeader className="bg-primary/5 border-b flex flex-row items-center justify-between py-4">
              <div>
                <CardTitle className="text-lg">Class {selectedClass}</CardTitle>
                <CardDescription>{new Date().toDateString()}</CardDescription>
              </div>
              <Badge className="bg-emerald-500">{mockStudents.length} Students</Badge>
            </CardHeader>
            <CardContent className="p-0">
              {mockStudents.length === 0 ? (
                <div className="py-20 text-center space-y-4">
                  <Users size={48} className="mx-auto text-muted-foreground/20" />
                  <p className="text-muted-foreground font-black uppercase tracking-widest text-xs">এই ক্লাসে কোনো শিক্ষার্থী খুঁজে পাওয়া যায়নি।</p>
                </div>
              ) : (
                <>
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/30">
                        <TableHead className="w-20">Roll</TableHead>
                        <TableHead>Student Name</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockStudents.map((s) => (
                        <TableRow key={s.id} className="hover:bg-muted/20">
                          <TableCell className="font-bold">{s.roll}</TableCell>
                          <TableCell className="font-medium">{s.name}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button 
                                size="sm" 
                                variant={attendance[s.id] === true ? "default" : "outline"}
                                className={attendance[s.id] === true ? "bg-emerald-600" : ""}
                                onClick={() => toggleAttendance(s.id, true)}
                              >
                                <Check size={16} />
                              </Button>
                              <Button 
                                size="sm" 
                                variant={attendance[s.id] === false ? "destructive" : "outline"}
                                onClick={() => toggleAttendance(s.id, false)}
                              >
                                <X size={16} />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <div className="p-6 bg-muted/10 border-t">
                    <Button onClick={handleSave} disabled={loading} className="w-full h-12 rounded-xl text-lg gap-2 bg-primary shadow-xl">
                      {loading ? <Loader2 className="animate-spin" /> : <Save size={20} />} Submit Attendance
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
