import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, ChevronRight } from "lucide-react";

const mockBatches = [
  { id: "ssc-2025", year: 2025, totalStudents: 145, gpa5Count: 32, passRate: "TBD" },
  { id: "ssc-2024", year: 2024, totalStudents: 138, gpa5Count: 28, passRate: "100%" },
  { id: "ssc-2023", year: 2023, totalStudents: 152, gpa5Count: 35, passRate: "99.3%" },
  { id: "ssc-2022", year: 2022, totalStudents: 130, gpa5Count: 24, passRate: "100%" },
  { id: "ssc-2021", year: 2021, totalStudents: 125, gpa5Count: 20, passRate: "98.5%" },
];

export default function SscBatchesPage() {
  return (
    <div className="pt-48 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm">Our Pride</span>
          <h1 className="text-4xl lg:text-6xl font-headline font-bold text-primary">SSC Batch Directory</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Celebrating the legacy of our students across different generations. Browse through the batches of Gabura Gopal Laxmi Memorial Secondary School.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockBatches.map((batch) => (
            <Link key={batch.id} href={`/ssc-batches/${batch.id}`} className="group">
              <Card className="glass-card hover:border-accent transition-all overflow-hidden border-2 border-transparent">
                <CardHeader className="bg-primary/5 p-8 text-center space-y-2 group-hover:bg-accent/10 transition-colors">
                  <GraduationCap size={48} className="mx-auto text-primary" />
                  <CardTitle className="text-3xl font-headline font-bold text-primary">Class of {batch.year}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">SSC {batch.year}</Badge>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Students</p>
                      <p className="text-xl font-bold flex items-center gap-2"><Users size={18} /> {batch.totalStudents}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">GPA 5.00</p>
                      <p className="text-xl font-bold">{batch.gpa5Count}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border flex items-center justify-between group-hover:text-accent transition-colors">
                    <span className="font-bold">View Full Directory</span>
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
