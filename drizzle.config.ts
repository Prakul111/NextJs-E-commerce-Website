// import { defineConfig } from "drizzle-kit";
// export default defineConfig({
//   dialect: "postgresql",
//   schema: "./src/schema.ts",
//   out: "./drizzle",
// });



import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './app/server/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});