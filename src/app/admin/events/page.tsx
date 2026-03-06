
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  Plus, 
  Search, 
  MapPin, 
  Clock, 
  Edit3, 
  Trash2, 
  Users,
  Sparkles,
  MoreVertical
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mockEvents = [
  { id: "1", title: "Annual School Picnic", date: "Dec 15, 2024", location: "Sundarbans Eco Park", registrations: 450, status: "Open" },
  { id: "2", title: "Cultural Program", date: "Jan 20, 2025", location: "Main Stage", registrations: 120, status: "Upcoming" },
  { id: "3", title: "Sports Day", date: "Feb 10, 2025", location: "School Ground", registrations: 0, status: "Scheduled" },
];

export default function AdminEventsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-headline font-bold text-primary flex items-center gap-3">
            <Calendar className="text-accent" /> Event Management
          </h1>
          <p className="text-muted-foreground text-sm font-medium">Create and manage school events, registrations and venues.</p>
        </div>
        <Button className="rounded-xl gap-2 font-bold h-11 shadow-lg bg-primary">
          <Plus size={18} /> Create New Event
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockEvents.map((event) => (
          <Card key={event.id} className="border-none shadow-sm group hover:shadow-md transition-all overflow-hidden bg-white">
            <CardHeader className="bg-primary/5 pb-4">
              <div className="flex justify-between items-start">
                <Badge className="bg-accent text-primary font-black text-[9px] uppercase">{event.status}</Badge>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <MoreVertical size={16} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="rounded-xl">
                    <DropdownMenuItem className="gap-2"><Edit3 size={14} /> Edit Event</DropdownMenuItem>
                    <DropdownMenuItem className="gap-2 text-destructive"><Trash2 size={14} /> Cancel Event</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <CardTitle className="text-xl font-headline font-black text-primary group-hover:text-accent transition-colors pt-2">
                {event.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase">
                  <Calendar size={14} className="text-primary" /> {event.date}
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase">
                  <MapPin size={14} className="text-primary" /> {event.location}
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase">
                  <Users size={14} className="text-primary" /> {event.registrations} Registrations
                </div>
              </div>
              <Button variant="secondary" className="w-full rounded-xl text-[10px] font-black uppercase tracking-widest h-10">
                Manage Registrations
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
