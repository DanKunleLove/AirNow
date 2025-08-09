
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useActionState } from "react";
import { diagnoseIssueAction, predictServiceNeedsAction, recommendUpgradesAction } from "@/app/actions";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Bot, Lightbulb, Sparkles, Wand2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "../ui/badge";

const initialState = {};

function DiagnoseForm() {
  const [state, formAction] = useActionState(diagnoseIssueAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.data) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="issueDescription">Describe the issue</Label>
        <Textarea id="issueDescription" name="issueDescription" placeholder="e.g., My AC is making a rattling noise." required />
        {state?.error?.issueDescription && <p className="text-sm text-destructive">{state.error.issueDescription[0]}</p>}
      </div>
      <Button type="submit" className="w-full">
        <Wand2 className="mr-2 h-4 w-4" /> Diagnose Issue
      </Button>
      {state?.data && (
        <div className="mt-4 rounded-lg border bg-muted/50 p-4 space-y-2 text-sm">
          <p><strong>Diagnosis:</strong> {state.data.diagnosis}</p>
          <p><strong>Possible Solutions:</strong> {state.data.possibleSolutions}</p>
        </div>
      )}
    </form>
  );
}

function PredictForm() {
    const [state, formAction] = useActionState(predictServiceNeedsAction, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
      if (state?.data) {
        formRef.current?.reset();
      }
    }, [state]);

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="applianceType">Appliance Type</Label>
        <Input id="applianceType" name="applianceType" placeholder="e.g., Refrigerator" required />
        {state?.error?.applianceType && <p className="text-sm text-destructive">{state.error.applianceType[0]}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="usagePattern">Usage Pattern</Label>
        <Input id="usagePattern" name="usagePattern" placeholder="e.g., Runs 24/7" required />
        {state?.error?.usagePattern && <p className="text-sm text-destructive">{state.error.usagePattern[0]}</p>}
      </div>
       <div className="space-y-2">
        <Label htmlFor="historicalData">Historical Data (Optional)</Label>
        <Textarea id="historicalData" name="historicalData" placeholder="e.g., Last serviced 2 years ago." />
      </div>
      <Button type="submit" className="w-full">
        <Sparkles className="mr-2 h-4 w-4" /> Predict Needs
      </Button>
       {state?.data && (
        <div className="mt-4 rounded-lg border bg-muted/50 p-4 space-y-4 text-sm">
          <div>
            <p className="font-semibold">Predicted Service Needs:</p>
            <p>{state.data.predictedServiceNeeds}</p>
          </div>
          <div>
            <p className="font-semibold">Urgency:</p>
            <Badge variant={state.data.urgency.toLowerCase() === 'high' ? 'destructive' : 'secondary'}>{state.data.urgency}</Badge>
          </div>
           <div>
            <p className="font-semibold">Suggested Actions:</p>
            <p>{state.data.suggestedActions}</p>
          </div>
        </div>
      )}
    </form>
  );
}

function RecommendForm() {
    const [state, formAction] = useActionState(recommendUpgradesAction, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
      if (state?.data) {
        formRef.current?.reset();
      }
    }, [state]);

    return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="budget">Your Budget ($)</Label>
        <Input id="budget" name="budget" type="number" placeholder="e.g., 1500" required/>
        {state?.error?.budget && <p className="text-sm text-destructive">{state.error.budget[0]}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="currentAppliances">Current Appliances</Label>
        <Textarea id="currentAppliances" name="currentAppliances" placeholder="e.g., 10-year old AC unit, 5-year old furnace" required/>
        {state?.error?.currentAppliances && <p className="text-sm text-destructive">{state.error.currentAppliances[0]}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="energyEfficiencyGoals">Energy Efficiency Goals</Label>
        <Textarea id="energyEfficiencyGoals" name="energyEfficiencyGoals" placeholder="e.g., Reduce electricity bill by 20%" required/>
        {state?.error?.energyEfficiencyGoals && <p className="text-sm text-destructive">{state.error.energyEfficiencyGoals[0]}</p>}
      </div>
      <Button type="submit" className="w-full">
        <Lightbulb className="mr-2 h-4 w-4" /> Recommend Upgrades
      </Button>
      {state?.data && (
        <div className="mt-4 rounded-lg border bg-muted/50 p-4 space-y-4 text-sm">
           <div>
            <p className="font-semibold">Recommendations:</p>
            <p className="whitespace-pre-wrap">{state.data.recommendations}</p>
          </div>
           <div>
            <p className="font-semibold">Justification:</p>
            <p className="whitespace-pre-wrap">{state.data.justification}</p>
          </div>
        </div>
      )}
    </form>
    );
}


export default function AiAssistantCard() {
  return (
    <Card className="glassmorphic-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <Bot />
            AI Assistant
        </CardTitle>
        <CardDescription>Get instant help with diagnostics, predictions, and recommendations.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="diagnose">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="diagnose">Diagnose</TabsTrigger>
            <TabsTrigger value="predict">Predict</TabsTrigger>
            <TabsTrigger value="recommend">Recommend</TabsTrigger>
          </TabsList>
          <TabsContent value="diagnose" className="mt-4">
            <DiagnoseForm />
          </TabsContent>
          <TabsContent value="predict" className="mt-4">
            <PredictForm />
          </TabsContent>
          <TabsContent value="recommend" className="mt-4">
            <RecommendForm />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
