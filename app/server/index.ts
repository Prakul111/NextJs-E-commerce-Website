// import { neon } from "@neondatabase/severless"
// import { drizzle } from "drizzle-orm/connect"

// import * as schema from "@/app/server/schema"



// const sql = neon(process.env.POSTGRES_URL!)
// export const db = drizzle(sql, {schema, logger: true}) 



import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
async function main() {
    const sql = neon(process.env.POSTGRES_URL!);
    const db = drizzle(sql);
}
main();