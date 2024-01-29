import { relations } from "drizzle-orm";
import { int, mysqlTable, timestamp } from "drizzle-orm/mysql-core";
// import schemas
import { userSchema } from "./userSchema.js";
import { orderToProductSchema } from "./orderToProduct.js";
// define schema
export const orderSchema = mysqlTable("order", {
    id: int("id").primaryKey().autoincrement().unique().notNull(),
    customerId: int("customer_id").notNull(),
    totalAmount: int("total_amount").notNull(),
    status: int("status").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});
// define relationships
export const orderRelations = relations(orderSchema, ({ many, one }) => ({
    customer: one(userSchema, { fields: [orderSchema.customerId], references: [userSchema.id] }),
    ordersToProducts: many(orderToProductSchema)
}));
