
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeIcon } from "@/components/icons/BadgeIcon";
import { Separator } from "@/components/ui/separator";
import { ShieldCheck, Star, Zap } from "lucide-react";

const badges = [
    { name: "Early Bird", icon: <Star className="text-yellow-500" /> },
    { name: "Pro User", icon: <ShieldCheck className="text-green-500" /> },
    { name: "Quick Reporter", icon: <Zap className="text-blue-500" /> }
]

export default function GamificationCard() {
  return (
    <Card className="glassmorphic-card">
      <CardHeader>
        <CardTitle>Your Achievements</CardTitle>
        <CardDescription>Badges and points you've earned.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center text-center space-y-2">
            <h3 className="text-4xl font-bold text-primary">1,250</h3>
            <p className="text-sm text-muted-foreground">Total Usage Points</p>
        </div>
        <Separator className="my-4"/>
        <div className="flex justify-around">
            {badges.map(badge => (
                <div key={badge.name} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted">
                        <BadgeIcon>{badge.icon}</BadgeIcon>
                    </div>
                    <p className="text-xs font-medium">{badge.name}</p>
                </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
