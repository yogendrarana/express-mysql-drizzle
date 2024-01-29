import { relations, type InferSelectModel, type InferInsertModel } from 'drizzle-orm'
import { mysqlEnum, mysqlTable, int, varchar, timestamp } from 'drizzle-orm/mysql-core';

// import schemas
import { orderSchema } from './orderSchema.js';
import { refreshTokenSchema } from './refreshTokenSchema.js';

// roles
export const roleEnum = mysqlEnum('role', ['user', 'admin']);

// schema definition
export const userSchema = mysqlTable(
    'user',

    {
        id: int('id').primaryKey().autoincrement().unique().notNull(),
        name: varchar('name', { length: 50 }),
        email: varchar('email', { length: 255 }).notNull().unique(),
        password: varchar('password', { length: 255 }).notNull(),
        role: roleEnum.notNull().default('user'),

        createdAt: timestamp('created_at').defaultNow().notNull(),
        updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
    }
);

// relations
export const userRelations = relations(userSchema, ({ many }) => ({
    orders: many(orderSchema),
    refreshTokens: many(refreshTokenSchema)
}));


// type
export type SelectUser = InferSelectModel<typeof userSchema>;
export type InsertUser = InferInsertModel<typeof userSchema>;