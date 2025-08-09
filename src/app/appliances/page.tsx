'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { appliances, serviceHistory } from "@/lib/data";
import { cn } from "@/lib/utils";
import { PlusCircle, Wrench, Calendar, ShieldCheck } from "lucide-react";

export default function AppliancesPage() {

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold font-headline">Appliance Inventory</h1>
          <p className="text-muted-foreground">Manage your home appliances and their service history.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Appliance
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Appliance</DialogTitle>
              <DialogDescription>
                Enter the details of your new appliance to track it.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="type" className="text-right">Type</Label>
                <Input id="type" placeholder="e.g. Refrigerator" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="brand" className="text-right">Brand</Label>
                <Input id="brand" placeholder="e.g. Samsung" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="model" className="text-right">Model</Label>
                <Input id="model" placeholder="e.g. RF28R7351SR" className="col-span-3" />
              </div>
               <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="purchase-date" className="text-right">Purchase Date</Label>
                <Input id="purchase-date" type="date" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save Appliance</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {appliances.map((appliance) => (
          <Card key={appliance.id} className="flex flex-col glassmorphic-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{appliance.name}</span>
                <span className={cn("text-xs font-normal px-2 py-1 rounded-full", appliance.status === 'Operational' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800' )}>
                    {appliance.status}
                </span>
              </CardTitle>
              <CardDescription>{appliance.brand} - {appliance.model}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="space-y-4">
                    <div className="flex items-center text-sm">
                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Next Maintenance: <span className="font-semibold">{appliance.nextMaintenance}</span></span>
                    </div>
                    <div className="flex items-center text-sm">
                        <ShieldCheck className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Warranty Ends: <span className="font-semibold">{appliance.warrantyEnd}</span></span>
                    </div>
                    <Separator />
                    <h4 className="font-semibold text-sm">Service History</h4>
                    <ul className="space-y-2">
                        {serviceHistory.filter(h => h.applianceId === appliance.id).map(history => (
                             <li key={history.id} className="flex items-start text-xs">
                                <Wrench className="mr-2 h-3 w-3 mt-0.5 shrink-0 text-primary"/>
                                <div>
                                    <span className="font-medium">{history.service}</span> on <span className="text-muted-foreground">{history.date}</span>
                                </div>
                             </li>
                        ))}
                    </ul>
                </div>
            </CardContent>
            <CardFooter>
                 <Button variant="outline" className="w-full">Schedule Service</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
