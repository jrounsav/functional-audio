import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const libraryCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/library' }),
  schema: z.object({
    title: z.string(),
    description: z.string(), // Meta description for SEO
    category: z.string(),    // e.g., "Noise Spectrum", "Brainwave Entrainment", "Natural Drones"
    targetState: z.string(), // e.g., "Deep Sleep", "High Focus", "Calm & Anxiety Relief"
    formula: z.string().optional(), // Mathematical formula (e.g. 1/f)
    scientificReferences: z.array(z.object({
      title: z.string(),
      author: z.string().optional(),
      journal: z.string(),
      year: z.number(),
      url: z.string().url().optional()
    })).optional(),
    seoKeywords: z.array(z.string()).optional()
  })
});

export const collections = {
  'library': libraryCollection
};
