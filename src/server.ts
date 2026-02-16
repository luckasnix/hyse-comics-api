import { createYoga } from "graphql-yoga";

import { schema } from "./schema.ts";

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
  { port: 4000, hostname: "127.0.0.1" },
  yoga,
);
