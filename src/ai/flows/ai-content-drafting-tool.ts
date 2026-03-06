'use server';
/**
 * @fileOverview An AI-powered content drafting tool for school administrators.
 *
 * - draftContent - A function that handles the content drafting process.
 * - AiContentDraftingInput - The input type for the draftContent function.
 * - AiContentDraftingOutput - The return type for the draftContent function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiContentDraftingInputSchema = z.object({
  contentType: z.enum(['announcement', 'news_article', 'event_description']).describe('The type of content to draft (e.g., announcement, news article, event description).'),
  keyPoints: z.string().describe('Key information or main ideas to include in the draft.').min(1, 'Key points cannot be empty.'),
  tone: z.enum(['formal', 'friendly', 'urgent', 'informative', 'inspirational', 'celebratory']).default('informative').describe('The desired tone for the drafted content.'),
  length: z.enum(['short', 'medium', 'long']).default('medium').describe('The desired length of the drafted content.'),
});
export type AiContentDraftingInput = z.infer<typeof AiContentDraftingInputSchema>;

const AiContentDraftingOutputSchema = z.object({
  draftedContent: z.string().describe('The AI-generated draft of the content.'),
});
export type AiContentDraftingOutput = z.infer<typeof AiContentDraftingOutputSchema>;

export async function draftContent(input: AiContentDraftingInput): Promise<AiContentDraftingOutput> {
  return aiContentDraftingFlow(input);
}

const aiContentDraftingPrompt = ai.definePrompt({
  name: 'aiContentDraftingPrompt',
  input: { schema: AiContentDraftingInputSchema },
  output: { schema: AiContentDraftingOutputSchema },
  prompt: `You are an AI assistant specialized in drafting engaging, grammatically correct, and high-quality content for school websites. Your goal is to help school administrators quickly generate content for announcements, news articles, and event descriptions.

Draft a {{length}} {{contentType}} with a {{tone}} tone, incorporating the following key points:
"{{{keyPoints}}}"

Ensure the output is well-structured, clear, and ready for publication on a school website. Focus on delivering the core message effectively.

Output only the drafted content, nothing else.`,
});

const aiContentDraftingFlow = ai.defineFlow(
  {
    name: 'aiContentDraftingFlow',
    inputSchema: AiContentDraftingInputSchema,
    outputSchema: AiContentDraftingOutputSchema,
  },
  async (input) => {
    const { output } = await aiContentDraftingPrompt(input);
    return output!;
  }
);
