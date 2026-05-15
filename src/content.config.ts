import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/blog",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    imageAlt: z.string(),
    draft: z.boolean().default(false),
    lang: z.enum(["es", "en"]),
    translationKey: z.string(),
  }),
});

export const collections = {
  blog,
};