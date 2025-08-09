
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { personalTips } from "@/lib/data";
import { Lightbulb } from "lucide-react";

export default function PersonalTipsCard() {
  return (
    <Card className="glassmorphic-card">
      <CardHeader>
        <CardTitle>Personalized Tips</CardTitle>
        <CardDescription>Advice based on your usage.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {personalTips.map((tip) => (
            <li key={tip.id} className="flex items-start">
              <Lightbulb className="h-4 w-4 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
              <p className="text-sm">{tip.tip}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
