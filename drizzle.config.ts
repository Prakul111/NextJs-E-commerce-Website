import 'dotenv/config';
import * as dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";


dotenv.config({
  path: ".env.local",
});

export default defineConfig({
  schema: "./app/server/schema.ts",
  out: "./app/server/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});



   