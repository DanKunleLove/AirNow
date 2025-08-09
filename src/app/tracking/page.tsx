import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CheckCircle, Clock, MapPin, Wrench } from "lucide-react";

const timelineEvents = [
  { status: 'Completed', title: 'Service Completed', description: 'Technician has completed the service. Your appliance is now operational.', time: '1:45 PM', icon: CheckCircle, isDone: true },
  { status: 'In Progress', title: 'Technician On-Site', description: 'David Wilson has arrived and started the repair.', time: '12:30 PM', icon: Wrench, isDone: true },
  { status: 'Dispatched', title: 'Technician Dispatched', description: 'David Wilson is on the way. ETA: 12:30 PM.', time: '11:00 AM', icon: MapPin, isDone: true },
  { status: 'Confirmed', title: 'Order Confirmed', description: 'Your service request for AC repair has been confirmed.', time: '9:05 AM', icon: Clock, isDone: true },
];


export default function TrackingPage() {
  return (
    <div className="space-y-6">
        <div>
            <h1 className="text-2xl font-bold font-headline">Service Tracking</h1>
            <p className="text-muted-foreground">Follow your service request in real-time.</p>
        </div>
        <Card className="glassmorphic-card overflow-hidden">
            <CardHeader className="bg-muted/30">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <CardTitle>AC Unit Repair</CardTitle>
                        <CardDescription>Order #ORD-2024-84351</CardDescription>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <p className="text-sm font-medium">Technician Assigned</p>
                            <p className="text-sm text-muted-foreground">David Wilson</p>
                        </div>
                        <Avatar>
                            <AvatarImage src="https://placehold.co/40x40.png" alt="Technician" data-ai-hint="person technician" />
                            <AvatarFallback>DW</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-6">
                <div className="relative">
                    {/* Dotted line */}
                    <div className="absolute left-5 top-5 h-full border-l-2 border-dashed border-primary/50" aria-hidden="true" />
                    
                    <ul className="space-y-8">
                        {timelineEvents.map((event, index) => (
                        <li key={index} className="relative flex items-start">
                            <div className={cn(
                                "flex h-10 w-10 items-center justify-center rounded-full shrink-0",
                                event.isDone ? "bg-primary text-primary-foreground" : "bg-muted border border-dashed"
                            )}>
                                <event.icon className="h-5 w-5" />
                            </div>
                            <div className="ml-4">
                                <h4 className="font-semibold text-base">{event.title}</h4>
                                <p className="text-sm text-muted-foreground">{event.description}</p>
                                <span className="text-xs text-muted-foreground/80">{event.time}</span>
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
