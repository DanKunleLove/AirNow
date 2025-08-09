
'use client';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";

export default function QuickActionButton() {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg" size="icon">
                <Plus className="h-6 w-6"/>
                <span className="sr-only">New Booking</span>
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>New Service Booking</DialogTitle>
                <DialogDescription>
                    What service do you need today?
                </DialogDescription>
            </DialogHeader>
            {/* Form can go here */}
            <p>Booking form will be here.</p>
        </DialogContent>
    </Dialog>
  );
}
