import { z } from 'zod';

export const ProjectSchema = z.object({
  title: z.string().min(2),
  type: z.enum(['fashion', 'portrait', 'body-swim']).default('fashion'),
  coverImage: z.string(),
  client: z.string().optional(),
  images: z.array(z.object({
    url: z.string(),
    alt: z.string()
  })),
  description: z.string().optional(),
  models: z.array(z.string()).optional(),
  location: z.string().optional(),
  hairAndMakeupBy: z.string().optional(),
  stylingBy: z.string().optional(),
  stylingAssistanceBy: z.string().optional(),
  videoBy: z.string().optional(),
  year: z.number().optional()
});

export type Project = z.infer<typeof ProjectSchema>;