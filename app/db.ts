import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const client = postgres(process.env.DATABASE_URL!, { prepare: false }); // Connection Pooling 기능을 Supabase는 지원하고 Drizzle는 지원하지 않기 때문에 prepare: false 설정

const db = drizzle(client, { logger: true });

export default db;
