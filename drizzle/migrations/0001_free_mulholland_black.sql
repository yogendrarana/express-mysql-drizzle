CREATE TABLE `refresh_token` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`token` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `refresh_token_id` PRIMARY KEY(`id`),
	CONSTRAINT `refresh_token_id_unique` UNIQUE(`id`)
);
--> statement-breakpoint
ALTER TABLE `user` MODIFY COLUMN `name` varchar(50);