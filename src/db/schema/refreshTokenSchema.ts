import { relations } from "drizzle-orm";
import { int, mysqlTable, timestamp, text, binary } from "drizzle-orm/mysql-core";
import { type InferInsertModel, type InferSelectModel } from "drizzle-orm";

// import schemas
import { userSchema } from "./userSchema.js";

export const refreshTokenSchema = mysqlTable(
    "refresh_token",

    {

        id: int('id').primaryKey().autoincrement().unique().notNull(),
        userId: int('user_id').notNull(),
        token: text('token').notNull(),

        createdAt: timestamp('created_at').defaultNow().notNull(),
        updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
    }
);


// define relationships
export const refreshTokenRelations = relations(refreshTokenSchema, ({ one }) => ({
    user: one(userSchema, { fields: [refreshTokenSchema.userId], references: [userSchema.id] })
}))


// export the types
export type SelectRefreshToken = InferSelectModel<typeof refreshTokenSchema>
export type InsertRefreshToken = InferInsertModel<typeof refreshTokenSchema>