
CREATE DATABASE IF NOT EXISTS vedulich
    DEFAULT CHARSET = utf8mb4
    COLLATE = utf8mb4_unicode_ci;

USE `vedulich`;


CREATE TABLE IF NOT EXISTS `vedulich`.`user` (
    `id` BIGINT(20) NOT NULL AUTO_INCREMENT COMMENT 'Primary key',
    `username` VARCHAR(50) NOT NULL COMMENT 'Username for login',
    `email` VARCHAR(100) NOT NULL COMMENT 'User email address',
    `password_hash` VARCHAR(255) NOT NULL COMMENT 'Hashed password for security',
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Account creation time',
    `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last update time',
    PRIMARY KEY (`id`),
    UNIQUE KEY `idx_email` (`email`) -- Unique index to ensure no duplicate emails
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Table to store user information';

CREATE Table IF NOT EXISTS `vedulich`.`ticket` (
    `id` BIGINT(20) NOT NULL AUTO_INCREMENT COMMENT 'PRIMARY KEY',
    `name` VARCHAR(50) NOT NULL COMMENT 'ticket name',
    `des` TEXT COMMENT 'ticket description',
    `start_time` DATETIME NOT NULL COMMENT 'ticket sale start time',
    `end_time` DATETIME NOT NULL COMMENT 'ticket sale end time',
    `status` INT(11) NOT NULL DEFAULT 0 COMMENT 'ticket sale activity status',  -- 0: deactive, 1: active
    `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Last update time',
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Creation time',
    PRIMARY KEY (`id`),
    KEY `idx_end_time` (`end_time`), -- Index for efficient querying of tickets based on end time
    KEY `idx_start_time` (`start_time`), -- Index for efficient querying of tickets based on start time
    KEY `idx_status` (`status`) -- Index for efficient querying of tickets based on status

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Table to store ticket information for events';

CREATE TABLE IF NOT EXISTS `vedulich`.`ticket_item` (
    `id` BIGINT(20) NOT NULL AUTO_INCREMENT COMMENT 'Primary key',
    `name` VARCHAR(50) NOT NULL COMMENT 'Tick title',
    `description` TEXT COMMENT 'Description of the ticket item',
    `stock_initial` INT(11) NOT NULL DEFAULT 0 COMMENT 'Initial stock quantity',
    `stock_available` INT(11) NOT NULL DEFAULT 0 COMMENT 'Available stock quantity',
    `is_stock_prepared` BOOLEAN NOT NULL DEFAULT 0 COMMENT 'Indicates if stock is prepared (0: No, 1: Yes)',
    `price_original` BIGINT(20) NOT NULL COMMENT 'Original price of the ticket item',
    `price_flash` BIGINT(20) NOT NULL COMMENT 'Discounted price during flash sale',
    `sale_start_time` DATETIME NOT NULL COMMENT 'Flash sale start time',
    `sale_end_time` DATETIME NOT NULL COMMENT 'Flash sale end time',
    `activity_id` BIGINT(20) NOT NULL COMMENT 'Foreign key referencing the associated ticket activity',
    `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Last update time',
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Creation time',
    PRIMARY KEY (`id`),
    KEY `idx_end_time` (`sale_end_time`),
    KEY `idx_start_time` (`sale_start_time`),
    KEY `idx_activity_id` (`activity_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Table to store ticket item details for flash sale activities';








INSERT INTO `vedulich`.`ticket` (`name`, `des`, `start_time`, `end_time`, `status`) VALUES
('Vé tham quan Vạn Lý Trường Thành - Badaling', 'Đợt mở bán vé tham quan khu Badaling, phù hợp khách muốn khám phá biểu tượng lịch sử nổi tiếng nhất Trung Quốc.', '2026-04-01 08:00:00', '2026-04-30 17:30:00', 1),
('Vé tham quan Tử Cấm Thành - Bắc Kinh', 'Mở bán vé vào Cố Cung Bắc Kinh dành cho khách yêu thích kiến trúc cung đình và lịch sử triều đại Trung Hoa.', '2026-04-05 08:30:00', '2026-05-05 16:30:00', 1),
('Vé cáp treo Thiên Môn Sơn - Trương Gia Giới', 'Đợt bán vé trải nghiệm cáp treo Thiên Môn Sơn, đường kính và các điểm check-in nổi bật tại Trương Gia Giới.', '2026-04-10 07:30:00', '2026-05-15 18:00:00', 1);


INSERT INTO `vedulich`.`ticket_item` (`name`, `description`, `stock_initial`, `stock_available`, `is_stock_prepared`, `price_original`, `price_flash`, `sale_start_time`, `sale_end_time`, `activity_id`) VALUES
('Vé người lớn', 'Vé tham quan tiêu chuẩn dành cho khách từ 12 tuổi trở lên tại khu Badaling.', 500, 500, 1, 850000, 720000, '2026-04-01 08:00:00', '2026-04-30 17:30:00', 1),
('Vé trẻ em', 'Áp dụng cho trẻ em cao dưới mức quy định của khu tham quan, phù hợp gia đình đi cùng con nhỏ.', 200, 200, 1, 550000, 460000, '2026-04-01 08:00:00', '2026-04-30 17:30:00', 1),
('Combo vé + xe điện nội khu', 'Bao gồm vé vào cổng và xe điện đưa đón trong khu tham quan Badaling, tiết kiệm thời gian di chuyển.', 150, 150, 1, 1150000, 990000, '2026-04-01 08:00:00', '2026-04-25 17:30:00', 1),
('Vé vào cổng buổi sáng', 'Khung giờ tham quan buổi sáng, phù hợp khách muốn chụp ảnh sớm và tránh đông.', 300, 300, 1, 950000, 820000, '2026-04-05 08:30:00', '2026-05-05 12:00:00', 2),
('Vé vào cổng buổi chiều', 'Khung giờ sau trưa dành cho khách thích lịch trình linh hoạt khi tham quan trung tâm Bắc Kinh.', 280, 280, 1, 900000, 790000, '2026-04-05 12:30:00', '2026-05-05 16:30:00', 2),
('Combo vé + thuyết minh audio', 'Bao gồm vé vào Tử Cấm Thành và thiết bị thuyết minh tiếng Việt để nghe giới thiệu từng khu điện.', 120, 120, 1, 1250000, 1090000, '2026-04-05 08:30:00', '2026-05-03 16:30:00', 2),
('Vé cáp treo khứ hồi', 'Loại vé phổ biến nhất để trải nghiệm tuyến cáp treo dài nổi tiếng tại Thiên Môn Sơn.', 350, 350, 1, 1350000, 1180000, '2026-04-10 07:30:00', '2026-05-15 18:00:00', 3),
('Combo cáp treo + cầu kính', 'Bao gồm vé cáp treo và quyền vào khu cầu kính cho khách thích trải nghiệm cảm giác mạnh.', 180, 180, 1, 1680000, 1490000, '2026-04-10 07:30:00', '2026-05-10 18:00:00', 3),
('Vé ưu tiên cuối tuần', 'Số lượng giới hạn cho thứ Bảy và Chủ nhật, hỗ trợ vào cổng nhanh trong mùa cao điểm.', 80, 80, 1, 1850000, 1650000, '2026-04-12 07:30:00', '2026-05-15 18:00:00', 3);
