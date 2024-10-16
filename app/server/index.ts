import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

import { config } from "dotenv";
import * as schema from "@/app/server/schema"


config({ path: ".env.local" });
 
    const sql = neon(process.env.POSTGRES_URL!);
   export  const db = drizzle(sql, {schema, logger: true});



