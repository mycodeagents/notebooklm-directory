import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

const posts = defineCollection({
  name: "posts",
  directory: "src/posts",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    seoScore: z.number().optional(),
  }),
});

export default defineConfig({
  collections: [posts],
});
