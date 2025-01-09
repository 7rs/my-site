import { z, defineCollection } from 'astro:content';

export const Frontmatter = z.object({
  title: z.ostring().default('No title'),

  // Generates by Astro
  file: z.ostring(),
  url: z.ostring(),
});
export type Frontmatter = z.infer<typeof Frontmatter>;

const blogCollection = defineCollection({
  type: 'content',
  schema: Frontmatter,
});

export const collections = {
  blog: blogCollection,
};
