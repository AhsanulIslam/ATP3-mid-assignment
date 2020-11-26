-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 26, 2020 at 06:15 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `car_rent`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(10) NOT NULL,
  `fname` varchar(30) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `address` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `fname`, `username`, `password`, `email`, `phone`, `address`) VALUES
(1, 'Ahsanul Islam', 'Imon', '123', 'ahsanul@gmail.com', '01788229119', 'Bashundhara R/A');

-- --------------------------------------------------------

--
-- Table structure for table `car_list`
--

CREATE TABLE `car_list` (
  `id` int(200) NOT NULL,
  `car_name` varchar(30) NOT NULL,
  `company` varchar(30) NOT NULL,
  `rent_amount` int(30) NOT NULL,
  `image` varchar(250) NOT NULL,
  `category_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `car_list`
--

INSERT INTO `car_list` (`id`, `car_name`, `company`, `rent_amount`, `image`, `category_id`) VALUES
(2, 'premio(2015)', 'toyota ', 500, '', 1),
(3, 'corolla(2015)', 'toyota', 500, '', 2);

-- --------------------------------------------------------

--
-- Table structure for table `car_rent`
--

CREATE TABLE `car_rent` (
  `rent_id` int(10) NOT NULL,
  `car_name` varchar(30) NOT NULL,
  `company` varchar(30) NOT NULL,
  `category_id` int(10) NOT NULL,
  `rent_date` date NOT NULL,
  `rent_days` int(10) NOT NULL,
  `total_amount` int(10) NOT NULL,
  `id` int(10) NOT NULL,
  `member_id` int(10) NOT NULL,
  `member_uname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `car_rent`
--

INSERT INTO `car_rent` (`rent_id`, `car_name`, `company`, `category_id`, `rent_date`, `rent_days`, `total_amount`, `id`, `member_id`, `member_uname`) VALUES
(1, 'premio(2015)', 'toyota ', 1, '2020-11-26', 2, 1000, 2, 1, ''),
(2, 'premio(2015)', 'toyota ', 1, '2020-11-26', 1, 500, 2, 1, ''),
(3, 'premio(2015)', 'toyota ', 1, '2020-11-26', 2, 1000, 2, 1, ''),
(4, 'premio(2015)', 'toyota ', 1, '2020-11-26', 2, 1000, 2, 1, ''),
(5, 'premio(2015)', 'toyota ', 1, '2020-11-26', 1, 500, 2, 1, ''),
(6, 'premio(2015)', 'toyota ', 1, '2020-11-26', 3, 1500, 2, 1, ''),
(7, 'premio(2015)', 'toyota ', 1, '2020-11-26', 1, 500, 2, 1, ''),
(8, 'corolla(2015)', 'toyota', 2, '2020-11-26', 1, 500, 3, 1, ''),
(9, 'premio(2015)', 'toyota ', 1, '2020-11-26', 1, 500, 2, 1, ''),
(10, 'premio(2015)', 'toyota ', 1, '2020-11-26', 1, 500, 2, 1, ''),
(11, 'premio(2015)', 'toyota ', 1, '2020-11-26', 1, 500, 2, 1, ''),
(12, 'premio(2015)', 'toyota ', 1, '2020-11-26', 2, 1000, 2, 1, ''),
(13, 'premio(2015)', 'toyota ', 1, '2020-11-26', 1, 500, 2, 1, ''),
(14, 'premio(2015)', 'toyota ', 1, '0000-00-00', 1, 500, 2, 1, ''),
(15, 'corolla(2015)', 'toyota', 2, '2020-10-26', 2, 1000, 3, 1, ''),
(16, 'premio(2015)', 'toyota ', 1, '2020-10-26', 3, 1500, 2, 1, 'shanin');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `name`) VALUES
(1, 'sedan'),
(2, 'suv'),
(3, 'micro bus');

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `id_chat` int(10) NOT NULL COMMENT '1',
  `message` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `username` varchar(30) NOT NULL,
  `Admin_Username` varchar(11) NOT NULL,
  `reply` varchar(22) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chat`
--

INSERT INTO `chat` (`id_chat`, `message`, `date`, `username`, `Admin_Username`, `reply`) VALUES
(39, 'hy', '2020-11-26', 'shanin', 'Imon', 'shanin'),
(40, 'hello', '2020-11-26', 'shanin', 'Imon', 'shanin');

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `id` int(10) NOT NULL,
  `fname` varchar(30) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `address` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`id`, `fname`, `username`, `password`, `email`, `phone`, `address`) VALUES
(1, 'Shanin', 'shanin', '123', 'shanin@gmail.com', '01744545487', 'Uttora, Dhaka\r\n'),
(5, 'sam wilson', 'sam', '123', 'sam@gmail.com', '01869217629', 'dhanmondi');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `car_list`
--
ALTER TABLE `car_list`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `car_rent`
--
ALTER TABLE `car_rent`
  ADD PRIMARY KEY (`rent_id`),
  ADD KEY `id` (`id`),
  ADD KEY `member_id` (`member_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`id_chat`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `car_list`
--
ALTER TABLE `car_list`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `car_rent`
--
ALTER TABLE `car_rent`
  MODIFY `rent_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `id_chat` int(10) NOT NULL AUTO_INCREMENT COMMENT '1', AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `car_rent`
--
ALTER TABLE `car_rent`
  ADD CONSTRAINT `car_rent_ibfk_1` FOREIGN KEY (`id`) REFERENCES `car_list` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
