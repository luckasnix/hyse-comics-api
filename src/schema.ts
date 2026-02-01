import { createSchema } from "graphql-yoga";

import typeDefs from "./type-defs.gql" with { type: "text" };

export const schema = createSchema({
  typeDefs,
  resolvers: {
    Query: {
      message: () => "Hello world!",
    },
  },
});
