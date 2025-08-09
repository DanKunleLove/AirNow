import { config } from 'dotenv';
config();

import '@/ai/flows/predict-service-needs.ts';
import '@/ai/flows/recommend-budget-upgrades.ts';
import '@/ai/flows/diagnose-issue.ts';
