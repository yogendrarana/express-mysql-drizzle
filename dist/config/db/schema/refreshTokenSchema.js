import { relations } from "drizzle-orm";
import { int, mysqlTable, timestamp, text } from "drizzle-orm/mysql-core";
// import schemas
import { userSchema } from "./userSchema.js";
export const refreshTokenSchema = mysqlTable("refresh_token", {
    id: int('id').primaryKey().autoincrement().unique().notNull(),
    userId: int('user_id').notNull(),
    token: text('token').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
});
// define relationships
export const refreshTokenRelations = relations(refreshTokenSchema, ({ one }) => ({
    user: one(userSchema, { fields: [refreshTokenSchema.userId], references: [userSchema.id] })
}));
