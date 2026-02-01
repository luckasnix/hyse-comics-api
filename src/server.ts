import { createYoga } from "graphql-yoga";

import { schema } from "./schema.ts";

const yoga = createYoga({ schema });

Deno.serve(
  { port: 4000, hostname: "127.0.0.1" },
  yoga,
);
