import "dotenv/config";
import { migrate } from "drizzle-orm/mysql2/migrator";
import { db, connection } from "../utils/db";

// This will run migrations on the database, skipping the ones already applied
await migrate(db, { migrationsFolder: "./server/db/migrations" });

// This will close the connection to the database
await connection.end();
