'use server';
/**
 * @fileOverview A Genkit flow for generating personalized thank-you responses to client reviews.
 *
 * - aiReviewResponse - A function that generates a thank-you response based on a client review.
 * - AIReviewResponseInput - The input type for the aiReviewResponse function.
 * - AIReviewResponseOutput - The return type for the aiReviewResponse function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIReviewResponseInputSchema = z.object({
  reviewText: z.string().describe('The full text of the client review.'),
});
export type AIReviewResponseInput = z.infer<typeof AIReviewResponseInputSchema>;

const AIReviewResponseOutputSchema = z.object({
  thankYouResponse: z.string().describe('A personalized thank-you response to the client review.'),
});
export type AIReviewResponseOutput = z.infer<typeof AIReviewResponseOutputSchema>;

export async function aiReviewResponse(input: AIReviewResponseInput): Promise<AIReviewResponseOutput> {
  return aiReviewResponseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiReviewResponsePrompt',
  input: {schema: AIReviewResponseInputSchema},
  output: {schema: AIReviewResponseOutputSchema},
  prompt: `Ти си любезен и внимателен асистент, който генерира персонализирани благодарствени отговори на клиентски отзиви.
Създай кратък, но сърдечен отговор, който благодари на клиента за неговия отзив и отразява същността на споменатото в него.
Отговорът трябва да бъде на български език.

Клиентски отзив: {{{reviewText}}}

Благодарствен отговор:`,
});

const aiReviewResponseFlow = ai.defineFlow(
  {
    name: 'aiReviewResponseFlow',
    inputSchema: AIReviewResponseInputSchema,
    outputSchema: AIReviewResponseOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
