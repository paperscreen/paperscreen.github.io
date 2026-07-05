import { defineCollection, z } from 'astro:content';

const baseSchema = {
  title: z.string(),
  description: z.string(),
  author: z.string(),
  pubDate: z.string().transform((val) => new Date(val)),
  tags: z.array(z.string()).default([]),
  category: z.string().optional(),
  image: z.string().optional(),
  featured: z.boolean().default(false)
};

const productCollection = defineCollection({
  schema: z.object({
    ...baseSchema,
    priceRange: z.string().optional(),
    availability: z.string().optional(),
    rating: z.number().optional()
  })
});

const reviewCollection = defineCollection({
  schema: z.object({
    ...baseSchema,
    product: z.string().optional(),
    score: z.number().optional()
  })
});

const newsCollection = defineCollection({
  schema: z.object({
    ...baseSchema,
    source: z.string().optional()
  })
});

const guideCollection = defineCollection({
  schema: z.object({
    ...baseSchema,
    readingTime: z.string().optional()
  })
});

const comparisonCollection = defineCollection({
  schema: z.object({
    ...baseSchema,
    comparisonType: z.string().optional()
  })
});

export const collections = {
  products: productCollection,
  reviews: reviewCollection,
  news: newsCollection,
  guides: guideCollection,
  comparisons: comparisonCollection
};
