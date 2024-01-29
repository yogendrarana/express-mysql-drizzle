ALTER TABLE `refresh_token` MODIFY COLUMN `id` binary(16) NOT NULL;--> statement-breakpoint
ALTER TABLE `refresh_token` MODIFY COLUMN `user_id` text NOT NULL;--> statement-breakpoint
ALTER TABLE `user` MODIFY COLUMN `id` binary(16) NOT NULL;--> statement-breakpoint
ALTER TABLE `refresh_token` DROP INDEX `refresh_token_id_unique`;--> statement-breakpoint
ALTER TABLE `user` DROP INDEX `user_id_unique`;