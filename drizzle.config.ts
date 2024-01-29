import type { Config } from 'drizzle-kit';

export default {
    schema: "./dist/config/db/schema",
    out: "./drizzle/migrations",
    driver: "mysql2",
    dbCredentials: {
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "password",
        host: process.env.DB_HOST || "localhost",
        database: process.env.DB_DATABASE || "hobby",
        port: Number(process.env.DB_PORT) || 3306,
    }
} satisfies Config;