'use server';

/**
 * @fileOverview Diagnoses appliance issues based on user descriptions.
 *
 * - diagnoseApplianceIssue - A function that takes a user's description of an appliance issue and returns a diagnosis and possible solutions.
 * - DiagnoseApplianceIssueInput - The input type for the diagnoseApplianceIssue function.
 * - DiagnoseApplianceIssueOutput - The return type for the diagnoseApplianceIssue function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DiagnoseApplianceIssueInputSchema = z.object({
  issueDescription: z
    .string()
    .describe('A description of the appliance issue, provided by the user.'),
});

export type DiagnoseApplianceIssueInput = z.infer<typeof DiagnoseApplianceIssueInputSchema>;

const DiagnoseApplianceIssueOutputSchema = z.object({
  diagnosis: z.string().describe('The diagnosis of the appliance issue.'),
  possibleSolutions: z
    .string()
    .describe('Possible solutions to resolve the appliance issue.'),
});

export type DiagnoseApplianceIssueOutput = z.infer<typeof DiagnoseApplianceIssueOutputSchema>;

export async function diagnoseApplianceIssue(
  input: DiagnoseApplianceIssueInput
): Promise<DiagnoseApplianceIssueOutput> {
  return diagnoseApplianceIssueFlow(input);
}

const prompt = ai.definePrompt({
  name: 'diagnoseApplianceIssuePrompt',
  input: {schema: DiagnoseApplianceIssueInputSchema},
  output: {schema: DiagnoseApplianceIssueOutputSchema},
  prompt: `You are an expert appliance repair technician. A user describes an issue with their appliance, and you provide a diagnosis and possible solutions.

Issue Description: {{{issueDescription}}}

Diagnosis:
Possible Solutions: `,
});

const diagnoseApplianceIssueFlow = ai.defineFlow(
  {
    name: 'diagnoseApplianceIssueFlow',
    inputSchema: DiagnoseApplianceIssueInputSchema,
    outputSchema: DiagnoseApplianceIssueOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
