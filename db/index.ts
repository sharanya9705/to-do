import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

const client = postgres(process.env.DATABASE_URL!, {
  ssl: "require",
  debug: (connection, query, params) => {
    console.log(query, params);
  },
});

export const db = drizzle(client);