import { createSchema } from "graphql-yoga";

import { chaptersResolvers } from "./resolvers/chapters.ts";
import { comicsResolvers } from "./resolvers/comics.ts";
import { pagesResolvers } from "./resolvers/pages.ts";
import { recommendationsResolvers } from "./resolvers/recommendations.ts";
import typeDefs from "./type-defs.gql" with { type: "text" };

export const schema = createSchema({
  typeDefs,
  resolvers: [
    comicsResolvers,
    chaptersResolvers,
    pagesResolvers,
    recommendationsResolvers,
  ],
});
