CREATE TABLE IF NOT EXISTS `leads` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(120) NOT NULL,
  `telefono` VARCHAR(60) NOT NULL,
  `email` VARCHAR(190) NOT NULL,
  `mensaje` TEXT NULL,
  `origen` VARCHAR(120) NULL,
  `created_at` DATETIME NOT NULL,
  `ip` VARCHAR(64) NULL,
  `user_agent` VARCHAR(255) NULL,
  `referrer` VARCHAR(255) NULL,
  `path` VARCHAR(255) NULL,
  PRIMARY KEY (`id`),
  KEY `idx_created_at` (`created_at`),
  KEY `idx_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

