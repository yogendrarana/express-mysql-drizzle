CREATE TABLE `employee` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(50),
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`role` enum('employee','admin','manager') NOT NULL DEFAULT 'employee',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `employee_id` PRIMARY KEY(`id`),
	CONSTRAINT `employee_id_unique` UNIQUE(`id`),
	CONSTRAINT `employee_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `product` MODIFY COLUMN `price` decimal NOT NULL;--> statement-breakpoint
ALTER TABLE `user` MODIFY COLUMN `role` varchar(50) NOT NULL DEFAULT 'user';