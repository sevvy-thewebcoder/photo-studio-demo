import { glob, file } from "astro/loaders";
import { z, defineCollection } from "astro:content";

// Define a `loader` and `schema` for each collection
// const project = defineCollection({
//     loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/projects" }),
//     schema: z.object({
//       title: z.string().min(2),
//       type: z.enum(['fashion', 'portrait', 'body-swim']).default('fashion'),
//       coverImage: z.string(),
//       client: z.string().optional(),
//       images: z.array(z.object({
//         url: z.string(),
//         alt: z.string()
//       })),
//       description: z.string().optional()
//     })
// });


const project = defineCollection({
  loader: file("./src/db/projectsDB.json"),
  schema: z.object({
      id: z.string().optional(),
      title: z.string().min(2),
      type: z.enum(['fashion', 'portrait', 'body-swim']).default('fashion'),
      coverImage: z.string(),
      client: z.string().optional(),
      images: z.array(z.object({
        url: z.string(),
        alt: z.string()
      })),
      description: z.string().optional()
    })
});


// Export a single `collections` object to register your collection(s)
export const collections = { project };