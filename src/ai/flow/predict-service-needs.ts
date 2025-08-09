'use server';

/**
 * @fileOverview This file defines a Genkit flow for predicting appliance service needs based on usage patterns and historical data.
 *
 * - predictServiceNeeds - A function that predicts service needs for appliances.
 * - PredictServiceNeedsInput - The input type for the predictServiceNeeds function.
 * - PredictServiceNeedsOutput - The return type for the predictServiceNeeds function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PredictServiceNeedsInputSchema = z.object({
  applianceType: z.string().describe('The type of appliance (e.g., refrigerator, washing machine).'),
  usagePattern: z.string().describe('Description of how the appliance is used (e.g., daily, weekly).'),
  historicalData: z.string().describe('Historical data of the appliance, including past services and issues.'),
});
export type PredictServiceNeedsInput = z.infer<typeof PredictServiceNeedsInputSchema>;

const PredictServiceNeedsOutputSchema = z.object({
  predictedServiceNeeds: z.string().describe('A prediction of upcoming service needs for the appliance.'),
  urgency: z.string().describe('The urgency of the predicted service needs (e.g., low, medium, high).'),
  suggestedActions: z.string().describe('Suggested actions to take based on the predicted service needs.'),
});
export type PredictServiceNeedsOutput = z.infer<typeof PredictServiceNeedsOutputSchema>;

export async function predictServiceNeeds(input: PredictServiceNeedsInput): Promise<PredictServiceNeedsOutput> {
  return predictServiceNeedsFlow(input);
}

const predictServiceNeedsPrompt = ai.definePrompt({
  name: 'predictServiceNeedsPrompt',
  input: {schema: PredictServiceNeedsInputSchema},
  output: {schema: PredictServiceNeedsOutputSchema},
  prompt: `You are an AI assistant specializing in predicting appliance service needs.

  Based on the appliance type, usage pattern, and historical data provided, predict the upcoming service needs for the appliance.
  Also, determine the urgency of these needs and suggest actions to take.

  Appliance Type: {{{applianceType}}}
  Usage Pattern: {{{usagePattern}}}
  Historical Data: {{{historicalData}}}

  Respond with the predicted service needs, urgency, and suggested actions.
  `,
});

const predictServiceNeedsFlow = ai.defineFlow(
  {
    name: 'predictServiceNeedsFlow',
    inputSchema: PredictServiceNeedsInputSchema,
    outputSchema: PredictServiceNeedsOutputSchema,
  },
  async input => {
    const {output} = await predictServiceNeedsPrompt(input);
    return output!;
  }
);
