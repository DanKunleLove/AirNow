
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { pastServices } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export default function PastServicesCard() {
  return (
    <Card className="glassmorphic-card">
      <CardHeader>
        <CardTitle>Past Services</CardTitle>
        <CardDescription>Your completed service history.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {pastServices.map((service) => (
            <li key={service.id} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1" />
              <div>
                <p className="font-semibold">{service.service}</p>
                <p className="text-sm text-muted-foreground">
                  {service.date} - Technician: {service.technician}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
