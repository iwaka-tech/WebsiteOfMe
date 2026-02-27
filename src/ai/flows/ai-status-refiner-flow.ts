'use server';
/**
 * @fileOverview AI поток за подобряване и рафиниране на лични статуси и мнения.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIStatusRefinerInputSchema = z.object({
  rawText: z.string().describe('Първоначалният текст на статуса или мнението.'),
});
export type AIStatusRefinerInput = z.infer<typeof AIStatusRefinerInputSchema>;

const AIStatusRefinerOutputSchema = z.object({
  refinedText: z.string().describe('Подобрена и по-въздействаща версия на текста.'),
});
export type AIStatusRefinerOutput = z.infer<typeof AIStatusRefinerOutputSchema>;

export async function aiStatusRefiner(input: AIStatusRefinerInput): Promise<AIStatusRefinerOutput> {
  return aiStatusRefinerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiStatusRefinerPrompt',
  input: {schema: AIStatusRefinerInputSchema},
  output: {schema: AIStatusRefinerOutputSchema},
  prompt: `Ти си творчески редактор. Твоята задача е да вземеш една сурова мисъл или статус и да я превърнеш в по-красив, философски или вдъхновяващ текст за уебсайт. 
Запази смисъла, но подобри изказа и стилистиката.
Текстът трябва да бъде на български език.

Суров текст: {{{rawText}}}

Подобрен статус:`,
});

const aiStatusRefinerFlow = ai.defineFlow(
  {
    name: 'aiStatusRefinerFlow',
    inputSchema: AIStatusRefinerInputSchema,
    outputSchema: AIStatusRefinerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
