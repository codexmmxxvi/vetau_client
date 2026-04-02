CREATE DATABASE IF NOT EXISTS vetau
    DEFAULT CHARSET = utf8mb4
    COLLATE = utf8mb4_unicode_ci;

USE vetau;

CREATE TABLE IF NOT EXISTS `user` (
    `id` CHAR(36) PRIMARY KEY,
    `username` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL UNIQUE,
    `role` TINYINT NOT NULL DEFAULT 0 COMMENT '0: customer, 1: admin',
    `password` VARCHAR(50) NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `deleted_at` TIMESTAMP NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `ticket` (
    `id` CHAR(36) PRIMARY KEY,
    `user_id` CHAR(36) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `date_start` DATETIME NOT NULL,
    `date_end` DATETIME NOT NULL,
    `status` INT NOT NULL DEFAULT 0,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `deleted_at` TIMESTAMP NULL DEFAULT NULL,
    CONSTRAINT `fk_ticket_user_id`
        FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
    INDEX `idx_user_id` (`user_id`),
    INDEX `idx_date_start` (`date_start`),
    INDEX `idx_date_end` (`date_end`),
    INDEX `idx_status` (`status`)
);

CREATE TABLE IF NOT EXISTS `ticket_item` (
    `id` CHAR(36) PRIMARY KEY,
    `ticket_id` CHAR(36) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `stock_initial` INT NOT NULL,
    `stock_available` INT NOT NULL,
    `is_stock_prepared` BOOLEAN NOT NULL DEFAULT FALSE,
    `price_original` BIGINT NOT NULL,
    `price_flash` BIGINT NOT NULL,
    `sale_start_time` DATETIME NOT NULL,
    `sale_end_time` DATETIME NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `deleted_at` TIMESTAMP NULL DEFAULT NULL,
    CONSTRAINT `fk_ticket_item_ticket_id`
        FOREIGN KEY (`ticket_id`) REFERENCES `ticket` (`id`),
    INDEX `idx_ticket_id` (`ticket_id`),
    INDEX `idx_sale_start_time` (`sale_start_time`),
    INDEX `idx_sale_end_time` (`sale_end_time`)
);

CREATE TABLE IF NOT EXISTS `orders` (
    `id` CHAR(36) PRIMARY KEY,
    `user_id` CHAR(36) NOT NULL,
    `ticket_item_id` CHAR(36) NOT NULL,
    `quantity` INT NOT NULL,
    `unit_price` BIGINT NOT NULL,
    `total_price` BIGINT NOT NULL,
    `status` INT NOT NULL DEFAULT 0 COMMENT '0: hold, 1: paid, 2: completed',
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `deleted_at` TIMESTAMP NULL DEFAULT NULL,
    CONSTRAINT `fk_orders_user_id`
        FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
    CONSTRAINT `fk_orders_ticket_item_id`
        FOREIGN KEY (`ticket_item_id`) REFERENCES `ticket_item` (`id`),
    INDEX `idx_orders_user_id` (`user_id`),
    INDEX `idx_orders_ticket_item_id` (`ticket_item_id`),
    INDEX `idx_orders_status` (`status`),
    INDEX `idx_orders_created_at` (`created_at`)
);

CREATE TABLE IF NOT EXISTS `payments` (
    `id` CHAR(36) PRIMARY KEY,
    `order_id` CHAR(36) NOT NULL,
    `amount` BIGINT NOT NULL,
    `payment_method` VARCHAR(50) NOT NULL,
    `status` VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    `transaction_id` VARCHAR(100) NULL,
    `paid_at` DATETIME NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY `uq_payments_transaction_id` (`transaction_id`),
    INDEX `idx_payments_order_id` (`order_id`),
    INDEX `idx_payments_status` (`status`),
    INDEX `idx_payments_paid_at` (`paid_at`),
    CONSTRAINT `fk_payments_order_id`
        FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
);

INSERT INTO `user`
    (`id`, `username`, `email`, `role`, `password`, `created_at`, `updated_at`, `deleted_at`)
VALUES
    ('7d4a6a0d-1a27-4a16-8d7d-4d1e1a1f0001', 'rail.admin', 'admin@bacnamrail.vn', 1, 'Admin@123', '2025-12-01 08:00:00', '2026-04-03 08:00:00', NULL),
    ('7d4a6a0d-1a27-4a16-8d7d-4d1e1a1f0002', 'minhkhanh', 'khanh.nguyen@bacnamrail.vn', 0, 'Khach@123', '2024-08-15 09:20:00', '2026-04-03 08:20:00', NULL),
    ('7d4a6a0d-1a27-4a16-8d7d-4d1e1a1f0003', 'baongoc', 'ngoc.tran@bacnamrail.vn', 0, 'Khach@123', '2025-01-10 10:00:00', '2026-04-02 19:00:00', NULL),
    ('7d4a6a0d-1a27-4a16-8d7d-4d1e1a1f0004', 'giahan', 'han.le@bacnamrail.vn', 0, 'Khach@123', '2025-05-02 12:00:00', '2026-04-01 15:00:00', NULL);

INSERT INTO `ticket`
    (`id`, `user_id`, `title`, `date_start`, `date_end`, `status`, `created_at`, `updated_at`, `deleted_at`)
VALUES
    ('9c2a5a1b-4f0d-4ff4-86b1-730000000001', '7d4a6a0d-1a27-4a16-8d7d-4d1e1a1f0001', 'SE1 | Hà Nội → Sài Gòn', '2026-04-12 20:55:00', '2026-04-14 04:05:00', 1, '2026-03-20 08:00:00', '2026-04-03 08:00:00', NULL),
    ('9c2a5a1b-4f0d-4ff4-86b1-730000000002', '7d4a6a0d-1a27-4a16-8d7d-4d1e1a1f0001', 'SP3 | Hà Nội → Lào Cai', '2026-04-11 22:00:00', '2026-04-12 05:55:00', 1, '2026-03-20 08:00:00', '2026-04-03 08:00:00', NULL),
    ('9c2a5a1b-4f0d-4ff4-86b1-730000000003', '7d4a6a0d-1a27-4a16-8d7d-4d1e1a1f0001', 'SE5 | Hà Nội → Huế', '2026-04-13 15:30:00', '2026-04-14 05:10:00', 1, '2026-03-20 08:00:00', '2026-04-03 08:00:00', NULL),
    ('9c2a5a1b-4f0d-4ff4-86b1-730000000004', '7d4a6a0d-1a27-4a16-8d7d-4d1e1a1f0001', 'HD1 | Huế → Đà Nẵng', '2026-04-03 07:35:00', '2026-04-03 10:30:00', 1, '2026-03-20 08:00:00', '2026-04-03 06:30:00', NULL),
    ('9c2a5a1b-4f0d-4ff4-86b1-730000000005', '7d4a6a0d-1a27-4a16-8d7d-4d1e1a1f0001', 'SE22 | Sài Gòn → Nha Trang', '2026-04-12 21:10:00', '2026-04-13 05:35:00', 1, '2026-03-20 08:00:00', '2026-04-03 08:00:00', NULL),
    ('9c2a5a1b-4f0d-4ff4-86b1-730000000006', '7d4a6a0d-1a27-4a16-8d7d-4d1e1a1f0001', 'SPT2 | Sài Gòn → Phan Thiết', '2026-04-15 06:40:00', '2026-04-15 10:50:00', 1, '2026-03-20 08:00:00', '2026-04-03 08:00:00', NULL);

INSERT INTO `ticket_item`
    (`id`, `ticket_id`, `name`, `description`, `stock_initial`, `stock_available`, `is_stock_prepared`, `price_original`, `price_flash`, `sale_start_time`, `sale_end_time`, `created_at`, `updated_at`, `deleted_at`)
VALUES
    ('1d49c1a7-9f8e-4bd1-a001-100000000001', '9c2a5a1b-4f0d-4ff4-86b1-730000000001', 'Khoang 4 giường mềm điều hòa', 'Hạng khoang cao cấp cho hành trình xuyên Việt dài ngày.', 24, 18, TRUE, 1450000, 1350000, '2026-03-25 08:00:00', '2026-04-12 18:00:00', '2026-03-25 08:00:00', '2026-04-03 08:00:00', NULL),
    ('1d49c1a7-9f8e-4bd1-a001-100000000002', '9c2a5a1b-4f0d-4ff4-86b1-730000000001', 'Khoang 6 giường điều hòa', 'Lựa chọn cân bằng giữa ngân sách và độ riêng tư.', 36, 24, TRUE, 1120000, 980000, '2026-03-25 08:00:00', '2026-04-12 18:00:00', '2026-03-25 08:00:00', '2026-04-03 08:00:00', NULL),
    ('1d49c1a7-9f8e-4bd1-a001-100000000003', '9c2a5a1b-4f0d-4ff4-86b1-730000000002', 'Khoang nằm du lịch', 'Tàu đêm Hà Nội Lào Cai cho khách đi Sapa cuối tuần.', 18, 9, TRUE, 690000, 620000, '2026-03-26 08:00:00', '2026-04-11 20:00:00', '2026-03-26 08:00:00', '2026-04-03 08:00:00', NULL),
    ('1d49c1a7-9f8e-4bd1-a001-100000000004', '9c2a5a1b-4f0d-4ff4-86b1-730000000002', 'Ghế ngả mềm', 'Phù hợp khách đi nhẹ và cần mức giá tiết kiệm hơn.', 30, 15, TRUE, 520000, 460000, '2026-03-26 08:00:00', '2026-04-11 20:00:00', '2026-03-26 08:00:00', '2026-04-03 08:00:00', NULL),
    ('1d49c1a7-9f8e-4bd1-a001-100000000005', '9c2a5a1b-4f0d-4ff4-86b1-730000000003', 'Khoang 6 giường điều hòa', 'Tuyến đi Huế cân đối cho khách công tác hoặc nghỉ ngắn ngày.', 24, 14, TRUE, 970000, 890000, '2026-03-27 08:00:00', '2026-04-13 13:00:00', '2026-03-27 08:00:00', '2026-04-03 08:00:00', NULL),
    ('1d49c1a7-9f8e-4bd1-a001-100000000006', '9c2a5a1b-4f0d-4ff4-86b1-730000000003', 'Ghế mềm điều hòa', 'Phương án tối ưu chi phí cho khách đi một mình.', 40, 20, TRUE, 760000, 690000, '2026-03-27 08:00:00', '2026-04-13 13:00:00', '2026-03-27 08:00:00', '2026-04-03 08:00:00', NULL),
    ('1d49c1a7-9f8e-4bd1-a001-100000000007', '9c2a5a1b-4f0d-4ff4-86b1-730000000004', 'Ghế mềm cửa sổ', 'Phù hợp khách muốn ngắm cảnh đèo Hải Vân ban ngày.', 30, 22, TRUE, 290000, 240000, '2026-03-28 08:00:00', '2026-04-03 07:00:00', '2026-03-28 08:00:00', '2026-04-03 06:30:00', NULL),
    ('1d49c1a7-9f8e-4bd1-a001-100000000008', '9c2a5a1b-4f0d-4ff4-86b1-730000000004', 'Ghế mềm trung tâm toa', 'Lựa chọn phổ thông cho chặng ngắn Huế Đà Nẵng.', 36, 28, TRUE, 240000, 210000, '2026-03-28 08:00:00', '2026-04-03 07:00:00', '2026-03-28 08:00:00', '2026-04-03 06:30:00', NULL),
    ('1d49c1a7-9f8e-4bd1-a001-100000000009', '9c2a5a1b-4f0d-4ff4-86b1-730000000005', 'Khoang 4 giường mềm điều hòa', 'Tàu đêm đi Nha Trang, tiện cho nhóm bạn hoặc gia đình.', 16, 11, TRUE, 760000, 710000, '2026-03-29 08:00:00', '2026-04-12 19:00:00', '2026-03-29 08:00:00', '2026-04-03 08:00:00', NULL),
    ('1d49c1a7-9f8e-4bd1-a001-100000000010', '9c2a5a1b-4f0d-4ff4-86b1-730000000005', 'Ghế mềm điều hòa', 'Vé tàu đêm tiết kiệm cho tuyến Sài Gòn Nha Trang.', 32, 12, TRUE, 620000, 560000, '2026-03-29 08:00:00', '2026-04-12 19:00:00', '2026-03-29 08:00:00', '2026-04-03 08:00:00', NULL),
    ('1d49c1a7-9f8e-4bd1-a001-100000000011', '9c2a5a1b-4f0d-4ff4-86b1-730000000006', 'Ghế mềm điều hòa', 'Tuyến sáng Sài Gòn Phan Thiết phù hợp nghỉ dưỡng.', 40, 27, TRUE, 360000, 325000, '2026-03-30 08:00:00', '2026-04-15 05:30:00', '2026-03-30 08:00:00', '2026-04-03 08:00:00', NULL),
    ('1d49c1a7-9f8e-4bd1-a001-100000000012', '9c2a5a1b-4f0d-4ff4-86b1-730000000006', 'Ghế thương gia toa đầu', 'Ghế ngả sâu hơn cho khách cần không gian yên tĩnh.', 12, 8, TRUE, 470000, 430000, '2026-03-30 08:00:00', '2026-04-15 05:30:00', '2026-03-30 08:00:00', '2026-04-03 08:00:00', NULL);

INSERT INTO `orders`
    (`id`, `user_id`, `ticket_item_id`, `quantity`, `unit_price`, `total_price`, `status`, `created_at`, `updated_at`, `deleted_at`)
VALUES
    ('4e4d221d-1349-45c0-9478-210000000001', '7d4a6a0d-1a27-4a16-8d7d-4d1e1a1f0002', '1d49c1a7-9f8e-4bd1-a001-100000000001', 2, 1350000, 2700000, 1, '2026-04-01 10:10:00', '2026-04-01 10:15:00', NULL),
    ('4e4d221d-1349-45c0-9478-210000000002', '7d4a6a0d-1a27-4a16-8d7d-4d1e1a1f0002', '1d49c1a7-9f8e-4bd1-a001-100000000005', 1, 890000, 890000, 0, '2026-04-02 09:30:00', '2026-04-02 09:35:00', NULL),
    ('4e4d221d-1349-45c0-9478-210000000003', '7d4a6a0d-1a27-4a16-8d7d-4d1e1a1f0002', '1d49c1a7-9f8e-4bd1-a001-100000000009', 3, 710000, 2130000, 2, '2025-12-01 16:00:00', '2025-12-09 08:00:00', NULL),
    ('4e4d221d-1349-45c0-9478-210000000004', '7d4a6a0d-1a27-4a16-8d7d-4d1e1a1f0003', '1d49c1a7-9f8e-4bd1-a001-100000000003', 2, 620000, 1240000, 1, '2026-04-01 11:10:00', '2026-04-01 11:12:00', NULL),
    ('4e4d221d-1349-45c0-9478-210000000005', '7d4a6a0d-1a27-4a16-8d7d-4d1e1a1f0004', '1d49c1a7-9f8e-4bd1-a001-100000000011', 1, 325000, 325000, 1, '2026-04-02 14:20:00', '2026-04-02 14:25:00', NULL);

INSERT INTO `payments`
    (`id`, `order_id`, `amount`, `payment_method`, `status`, `transaction_id`, `paid_at`, `created_at`, `updated_at`)
VALUES
    ('5f312c41-35cf-4b1d-88ac-310000000001', '4e4d221d-1349-45c0-9478-210000000001', 2700000, 'VNPAY', 'PAID', 'TXN-SE1-260401-001', '2026-04-01 10:15:00', '2026-04-01 10:10:00', '2026-04-01 10:15:00'),
    ('5f312c41-35cf-4b1d-88ac-310000000002', '4e4d221d-1349-45c0-9478-210000000002', 890000, 'MOMO', 'PENDING', NULL, NULL, '2026-04-02 09:30:00', '2026-04-02 09:35:00'),
    ('5f312c41-35cf-4b1d-88ac-310000000003', '4e4d221d-1349-45c0-9478-210000000003', 2130000, 'Banking', 'SETTLED', 'TXN-SE22-251201-003', '2025-12-01 16:05:00', '2025-12-01 16:00:00', '2025-12-09 08:00:00'),
    ('5f312c41-35cf-4b1d-88ac-310000000004', '4e4d221d-1349-45c0-9478-210000000004', 1240000, 'VNPAY', 'PAID', 'TXN-SP3-260401-004', '2026-04-01 11:12:00', '2026-04-01 11:10:00', '2026-04-01 11:12:00'),
    ('5f312c41-35cf-4b1d-88ac-310000000005', '4e4d221d-1349-45c0-9478-210000000005', 325000, 'Credit Card', 'PAID', 'TXN-SPT2-260402-005', '2026-04-02 14:25:00', '2026-04-02 14:20:00', '2026-04-02 14:25:00');
