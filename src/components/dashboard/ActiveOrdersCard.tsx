
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { activeOrders } from "@/lib/data";
import { ArrowRight, Clock } from "lucide-react";

export default function ActiveOrdersCard() {
  return (
    <Card className="glassmorphic-card">
      <CardHeader>
        <CardTitle>Active Orders</CardTitle>
        <CardDescription>Your ongoing service requests.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activeOrders.map((order, index) => (
            <div key={order.id}>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{order.service}</p>
                  <p className="text-sm text-muted-foreground">Order #{order.id}</p>
                </div>
                <Link href={`/tracking`}>
                  <Button variant="ghost" size="sm">
                    Track <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="flex items-center text-xs text-muted-foreground mt-2">
                <Clock className="mr-1.5 h-3 w-3" />
                <span>Status: {order.status}</span>
              </div>
              {index < activeOrders.length - 1 && <Separator className="mt-4" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
