
'use client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { TrendingUp } from "lucide-react";

const chartData = [
  { month: "Jan", spend: 186 },
  { month: "Feb", spend: 305 },
  { month: "Mar", spend: 237 },
  { month: "Apr", spend: 73 },
  { month: "May", spend: 209 },
  { month: "Jun", spend: 214 },
];

const chartConfig = {
  spend: {
    label: "Spend",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export default function FinancialInsightsCard({ className }: { className?: string }) {
  return (
    <Card className={`glassmorphic-card ${className}`}>
      <CardHeader>
        <CardTitle>Financial Insights</CardTitle>
        <CardDescription>Your spend history for the last 6 months.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
             <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickFormatter={(value) => `$${value}`}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="spend" fill="var(--color-spend)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          <TrendingUp className="h-4 w-4" />
          Predicted next-year maintenance cost: $1,250
        </div>
        <div className="leading-none text-muted-foreground">
          Based on your appliance age and service history.
        </div>
      </CardFooter>
    </Card>
  );
}
