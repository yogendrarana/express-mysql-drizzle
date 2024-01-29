import { relations, type InferInsertModel, type InferSelectModel } from "drizzle-orm";
import { int, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

// import schemas
import { orderToProductSchema } from "./orderToProduct.js";

// schema definition
export const productSchema = mysqlTable(
    "product",

    {
        id: int("id").primaryKey().autoincrement().unique().notNull(),
        name: varchar("name", { length: 50 }).notNull(),
        description: text("description").notNull(),
        price: int("price").notNull(),
        stock: int("stock").notNull(),
        image: text("image").notNull(),

        createdAt: timestamp("created_at").defaultNow().notNull(),
        updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
    }
)


// define relationships
export const productRelations = relations(productSchema, ({ many }) => ({
    ordersToProducts: many(orderToProductSchema)
}))


// export the types
export type SelectProduct = InferSelectModel<typeof productSchema>
export type InsertProduct = InferInsertModel<typeof productSchema>