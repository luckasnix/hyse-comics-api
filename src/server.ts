import { createYoga } from "graphql-yoga";

import { schema } from "./schema.ts";

const port = Number(Deno.env.get("PORT") ?? 4000);
const allowedOrigins = Deno.env.get("ALLOWED_ORIGINS")?.split(",") ?? [];

const yoga = createYoga({
  cors: {
    origin: allowedOrigins,
    credentials: true,
    methods: ["POST"],
  },
  schema,
});

Deno.serve(
  { port },
  yoga,
);
