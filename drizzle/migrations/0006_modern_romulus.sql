ALTER TABLE `order` DROP FOREIGN KEY `order_customer_id_user_id_fk`;
--> statement-breakpoint
ALTER TABLE `order` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `order` MODIFY COLUMN `customer_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `order_to_product` MODIFY COLUMN `order_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `order_to_product` MODIFY COLUMN `product_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `refresh_token` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `refresh_token` MODIFY COLUMN `user_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `user` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;