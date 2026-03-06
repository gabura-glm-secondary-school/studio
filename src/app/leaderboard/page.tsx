
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Crown, Star, TrendingUp, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const topThree = [
  { rank: 2, name: "Fatima Khatun", rating: 9.4, photo: "https://picsum.photos/seed/stu2/100/100", trend: "up" },
  { rank: 1, name: "Abdur Rahman", rating: 9.7, photo: "https://picsum.photos/seed/stu1/100/100", trend: "stable" },
  { rank: 3, name: "Siddiqur Ahmed", rating: 9.1, photo: "https://picsum.photos/seed/stu3/100/100", trend: "down" },
];

const rankingList = [
  { rank: 4, name: "Nusrat Jahan", rating: 8.9, roll: "104" },
  { rank: 5, name: "Imran Hossain", rating: 8.7, roll: "105" },
  { rank: 6, name: "Sumaiya Akter", rating: 8.5, roll: "106" },
  { rank: 7, name: "Rafiqul Islam", rating: 8.4, roll: "107" },
  { rank: 8, name: "Jannatul Ferdous", rating: 8.2, roll: "108" },
];

export default function LeaderboardPage() {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-secondary/5">
      <div className="max-w-5xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-4">
          <Trophy className="w-16 h-16 text-amber-500 mx-auto animate-bounce" />
          <h1 className="text-4xl lg:text-5xl font-headline font-bold text-primary">Student Leaderboard</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Celebrating academic excellence and hard work. Ranking is based on monthly Teacher Ratings (70%) and Homework Completion (30%).
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Badge className="bg-primary text-white">Month: October 2024</Badge>
            <Badge variant="outline" className="border-accent text-accent font-bold">Class 9 Overall</Badge>
          </div>
        </div>

        {/* Podium Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-6 pt-12">
          {/* Rank 2 */}
          <div className="order-2 md:order-1 flex flex-col items-center gap-4">
            <Medal size={48} className="text-slate-400" />
            <Card className="glass-card w-full text-center p-6 border-slate-200">
              <Avatar className="w-20 h-20 mx-auto mb-4 border-4 border-slate-200 shadow-xl">
                <AvatarImage src={topThree[0].photo} />
                <AvatarFallback>FK</AvatarFallback>
              </Avatar>
              <h3 className="font-bold text-primary">{topThree[0].name}</h3>
              <p className="text-3xl font-black text-slate-500 mt-2">{topThree[0].rating}</p>
              <Badge variant="secondary" className="mt-4 uppercase tracking-widest text-[10px]">Rank #2</Badge>
            </Card>
          </div>

          {/* Rank 1 */}
          <div className="order-1 md:order-2 flex flex-col items-center gap-4 scale-110 mb-8 md:mb-12">
            <Crown size={64} className="text-amber-500" fill="currentColor" />
            <Card className="glass-card w-full text-center p-8 border-amber-200 bg-amber-50/50">
              <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-amber-400 shadow-2xl">
                <AvatarImage src={topThree[1].photo} />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-black text-primary">{topThree[1].name}</h3>
              <p className="text-5xl font-black text-amber-600 mt-2">{topThree[1].rating}</p>
              <Badge className="mt-4 bg-amber-500 text-white uppercase tracking-widest text-xs px-4 py-1">Champion</Badge>
            </Card>
          </div>

          {/* Rank 3 */}
          <div className="order-3 flex flex-col items-center gap-4">
            <Medal size={48} className="text-orange-400" />
            <Card className="glass-card w-full text-center p-6 border-orange-200">
              <Avatar className="w-20 h-20 mx-auto mb-4 border-4 border-orange-200 shadow-xl">
                <AvatarImage src={topThree[2].photo} />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
              <h3 className="font-bold text-primary">{topThree[2].name}</h3>
              <p className="text-3xl font-black text-orange-600 mt-2">{topThree[2].rating}</p>
              <Badge variant="secondary" className="mt-4 uppercase tracking-widest text-[10px]">Rank #3</Badge>
            </Card>
          </div>
        </div>

        {/* Detailed List */}
        <Card className="glass-card overflow-hidden">
          <CardHeader className="bg-primary/5 border-b">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="text-accent" /> Class Directory Ranking
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/30">
                  <TableHead className="w-24 text-center">Rank</TableHead>
                  <TableHead>Student</TableHead>
                  <TableHead>Roll</TableHead>
                  <TableHead className="text-right">Performance Score</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rankingList.map((item) => (
                  <TableRow key={item.rank} className="hover:bg-muted/20">
                    <TableCell className="text-center font-black text-muted-foreground italic">#{item.rank}</TableCell>
                    <TableCell className="font-bold text-primary">{item.name}</TableCell>
                    <TableCell className="font-medium text-muted-foreground">{item.roll}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Star size={14} className="text-accent" fill="currentColor" />
                        <span className="text-lg font-black text-primary">{item.rating}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
