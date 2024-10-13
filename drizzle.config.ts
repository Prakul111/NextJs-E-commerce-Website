import 'dotenv/config';
import * as dotenv from "dotenv";
import { defineConfig } from 'drizzle-kit';


dotenv.config({
  path: ".env.local",
})

export default defineConfig({
  out: './app/server/migrations',
  schema: './app/server/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});



 