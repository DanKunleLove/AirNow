"use server";

import { diagnoseApplianceIssue } from "@/ai/flows/diagnose-issue";
import { predictServiceNeeds } from "@/ai/flows/predict-service-needs";
import { recommendBudgetApplianceUpgrades } from "@/ai/flows/recommend-budget-upgrades";
import { z } from "zod";

const diagnoseSchema = z.object({
  issueDescription: z.string().min(10, "Please describe the issue in more detail."),
});

export async function diagnoseIssueAction(prevState: any, formData: FormData) {
  const validatedFields = diagnoseSchema.safeParse({
    issueDescription: formData.get('issueDescription'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await diagnoseApplianceIssue(validatedFields.data);
    return { data: result };
  } catch (error) {
    return { error: { _form: "An unexpected error occurred." } };
  }
}

const predictSchema = z.object({
  applianceType: z.string().min(2, "Appliance type is required."),
  usagePattern: z.string().min(2, "Usage pattern is required."),
  historicalData: z.string().optional(),
});

export async function predictServiceNeedsAction(prevState: any, formData: FormData) {
  const validatedFields = predictSchema.safeParse({
    applianceType: formData.get('applianceType'),
    usagePattern: formData.get('usagePattern'),
    historicalData: formData.get('historicalData'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await predictServiceNeeds({
        ...validatedFields.data,
        historicalData: validatedFields.data.historicalData || "No historical data provided."
    });
    return { data: result };
  } catch (error) {
    return { error: { _form: "An unexpected error occurred." } };
  }
}

const recommendSchema = z.object({
  budget: z.coerce.number().min(1, "Budget must be greater than 0."),
  currentAppliances: z.string().min(5, "Please list your current appliances."),
  energyEfficiencyGoals: z.string().min(5, "Please describe your goals."),
});

export async function recommendUpgradesAction(prevState: any, formData: FormData) {
  const validatedFields = recommendSchema.safeParse({
    budget: formData.get('budget'),
    currentAppliances: formData.get('currentAppliances'),
    energyEfficiencyGoals: formData.get('energyEfficiencyGoals'),
  });
  
  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await recommendBudgetApplianceUpgrades(validatedFields.data);
    return { data: result };
  } catch (error) {
    return { error: { _form: "An unexpected error occurred." } };
  }
}
