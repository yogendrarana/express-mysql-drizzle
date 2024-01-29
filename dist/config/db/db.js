import mysql2 from "mysql2";
import { drizzle } from "drizzle-orm/mysql2";
// import schemas
import { userSchema } from "./schema/userSchema.js";
import { orderSchema } from "./schema/orderSchema.js";
import { productSchema } from "./schema/productSchema.js";
import { orderToProductSchema } from "./schema/orderToProduct.js";
// import relations
import { userRelations } from "./schema/userSchema.js";
import { orderRelations } from "./schema/orderSchema.js";
import { productRelations } from "./schema/productSchema.js";
import { orderToProductRelations } from "./schema/orderToProduct.js";
import { refreshTokenSchema } from "./schema/refreshTokenSchema.js";
import { refreshTokenRelations } from "./schema/refreshTokenSchema.js";
// create pool connection
const poolConnection = mysql2.createPool({
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "password",
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_DATABASE || "hobby",
    port: Number(process.env.DB_PORT) || 3306,
}).promise();
// create drizzle instance
export const db = drizzle(poolConnection, {
    mode: "default",
    schema: {
        userSchema,
        userRelations,
        orderSchema,
        orderRelations,
        productSchema,
        productRelations,
        orderToProductSchema,
        orderToProductRelations,
        refreshTokenSchema,
        refreshTokenRelations,
    }
});
