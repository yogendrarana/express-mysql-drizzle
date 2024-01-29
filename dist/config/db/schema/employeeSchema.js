import { mysqlEnum, mysqlTable, int, varchar, timestamp } from 'drizzle-orm/mysql-core';
// employee roles
export const roles = ['employee', 'admin', 'manager'];
// schema definition
export const employeeSchema = mysqlTable('employee', {
    id: int('id').primaryKey().autoincrement().unique().notNull(),
    name: varchar('name', { length: 50 }),
    email: varchar('email', { length: 255 }).notNull().unique(),
    password: varchar('password', { length: 255 }).notNull(),
    role: mysqlEnum('role', roles).notNull().default('employee'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
});
