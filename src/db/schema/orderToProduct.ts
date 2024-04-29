import { relations } from "drizzle-orm";
import { type InferInsertModel, type InferSelectModel } from "drizzle-orm";
import { int, mysqlTable, primaryKey, timestamp } from "drizzle-orm/mysql-core";

// import schemans
import { orderSchema } from "./orderSchema.js";
import { productSchema } from "./productSchema.js";


// define schema
export const orderToProductSchema = mysqlTable(
    "order_to_product",

    {
        orderId: int("order_id").notNull(),
        productId: int("product_id").notNull(),
        quantity: int("quantity").notNull(),

        createdAt: timestamp("created_at").defaultNow().notNull(),
        updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
    },

    (t) => ({
        pk: primaryKey({ columns: [t.orderId, t.productId] }),
    }),
)

// define relationships
export const orderToProductRelations = relations(orderToProductSchema, ({ one }) => ({
    order: one(orderSchema, { fields: [orderToProductSchema.orderId], references: [orderSchema.id] }),
    product: one(productSchema, { fields: [orderToProductSchema.productId], references: [productSchema.id] })
}))


// export types
export type SelectOrderToProduct = InferSelectModel<typeof orderToProductSchema>
export type InsertOrderToProduct = InferInsertModel<typeof orderToProductSchema>