
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from 'next/image';
import { MapPin } from "lucide-react";

export default function TechnicianTrackerCard() {
  return (
    <Card className="glassmorphic-card">
      <CardHeader>
        <CardTitle>Technician Tracking</CardTitle>
        <CardDescription>Live ETA and location.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
             <Image 
                src="https://placehold.co/600x400.png" 
                alt="Map with technician location" 
                layout="fill"
                objectFit="cover"
                data-ai-hint="map city"
                />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <MapPin className="h-8 w-8 text-primary animate-pulse" />
             </div>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Avatar>
                    <AvatarImage src="https://placehold.co/40x40.png" alt="Technician" data-ai-hint="person technician"/>
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold">John Doe</p>
                    <p className="text-xs text-muted-foreground">On the way</p>
                </div>
            </div>
            <div className="text-right">
                <p className="font-bold text-lg text-primary">15 min</p>
                <p className="text-xs text-muted-foreground">ETA</p>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
