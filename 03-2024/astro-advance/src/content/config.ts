import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    heroImage: z.string(),
    title: z.string(),
    pubDate: z.string(),
    tags: z.string().array(),
  }),
});

export const collections = { blog };
