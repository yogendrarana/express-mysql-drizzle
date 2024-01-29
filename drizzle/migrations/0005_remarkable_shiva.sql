ALTER TABLE `order` MODIFY COLUMN `id` binary NOT NULL;--> statement-breakpoint
ALTER TABLE `order` MODIFY COLUMN `customer_id` binary NOT NULL;--> statement-breakpoint
ALTER TABLE `order_to_product` MODIFY COLUMN `order_id` binary NOT NULL;--> statement-breakpoint
ALTER TABLE `order_to_product` MODIFY COLUMN `product_id` binary NOT NULL;--> statement-breakpoint
ALTER TABLE `refresh_token` MODIFY COLUMN `id` binary NOT NULL;--> statement-breakpoint
ALTER TABLE `user` MODIFY COLUMN `id` binary NOT NULL;--> statement-breakpoint
ALTER TABLE `refresh_token` ADD CONSTRAINT `refresh_token_id_unique` UNIQUE(`id`);--> statement-breakpoint
ALTER TABLE `user` ADD CONSTRAINT `user_id_unique` UNIQUE(`id`);