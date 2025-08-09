
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { upcomingAppointments } from "@/lib/data";
import { Calendar } from "lucide-react";

export default function UpcomingAppointmentsCard() {
  return (
    <Card className="glassmorphic-card">
      <CardHeader>
        <CardTitle>Upcoming Appointments</CardTitle>
        <CardDescription>Your scheduled services.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {upcomingAppointments.map((appt) => (
            <li key={appt.id} className="flex items-start">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-muted mr-4">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold">{appt.service}</p>
                <p className="text-sm text-muted-foreground">
                  {appt.date} at {appt.time}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
