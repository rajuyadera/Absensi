-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2022 at 09:18 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `absensi_raju`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_absensi`
--

CREATE TABLE `tbl_absensi` (
  `id` int(11) NOT NULL,
  `id_siswa` int(11) DEFAULT NULL,
  `tblSiswaIdSiswa` int(11) DEFAULT NULL,
  `keterangan` varchar(255) DEFAULT NULL,
  `tanggal` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_absensi`
--

INSERT INTO `tbl_absensi` (`id`, `id_siswa`, `tblSiswaIdSiswa`, `keterangan`, `tanggal`, `createdAt`, `updatedAt`) VALUES
(1, 13, NULL, 'Alfa', '2022-11-28 13:20:34', '2022-11-28 07:35:46', '2022-11-28 07:35:46'),
(4, 47, NULL, 'Izin', '2022-11-28 13:47:23', '2022-11-28 07:47:23', '2022-11-28 07:47:23'),
(5, 14, NULL, 'Sakit', '2022-11-28 13:20:34', '2022-11-28 06:50:52', '2022-11-28 06:50:52'),
(10, 14, NULL, 'alfa', '2022-11-30 11:33:47', '2022-11-30 05:33:47', '2022-11-30 05:33:47');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_admin`
--

INSERT INTO `tbl_admin` (`id`, `name`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
(2, 'Raju Yadera', 'admin', '$argon2id$v=19$m=65536,t=3,p=4$06yzckbi6EtgHqWK/41flA$XRBnsbqGd781mPb5bNpzlo7WcZPVGgexQZsgrPFMpB4', '2022-11-28 02:21:09', '2022-11-28 02:21:09'),
(5, 'Angger', 'anger123', '$argon2id$v=19$m=65536,t=3,p=4$NFpnLFpcrInNj68RE6+ezw$T57IqfLlfNBAreQYf/sXMhh/aJWXuqdz7/kQ1kRmYO8', '2022-11-30 08:15:36', '2022-11-30 08:15:36'),
(6, 'ahmad', 'ahmad', '$argon2id$v=19$m=65536,t=3,p=4$xx4u36Ms/88LpFkYehGOrQ$m6QfMfd9nCuQo5EYERzqwViODPnhrtvAFKrukQEW2cQ', '2022-11-30 08:15:54', '2022-11-30 08:15:54'),
(7, 'bryant', 'brian', '$argon2id$v=19$m=65536,t=3,p=4$B3FfNxy+85kkqSbPpO8Wgg$ipAeXLVXM2PQchepcTNMKizHBTi3RivTsi98LQP9EBE', '2022-11-30 08:16:23', '2022-11-30 08:16:23');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_siswa`
--

CREATE TABLE `tbl_siswa` (
  `id_siswa` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `noTelp` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_siswa`
--

INSERT INTO `tbl_siswa` (`id_siswa`, `nama`, `email`, `alamat`, `noTelp`, `createdAt`, `updatedAt`) VALUES
(13, 'Adi Putra Ramadhan', NULL, NULL, NULL, '2022-11-28 02:45:52', '2022-11-28 02:45:52'),
(14, 'Adi Saputra', NULL, NULL, NULL, '2022-11-28 05:21:45', '2022-11-28 05:21:45'),
(15, 'Agam Suteguh', NULL, NULL, NULL, '2022-11-28 05:25:29', '2022-11-28 05:25:29'),
(17, 'Albert Einstein Haro', NULL, NULL, NULL, '2022-11-28 05:34:20', '2022-11-28 05:34:20'),
(18, 'Alendra Vereno Alfarel', NULL, NULL, NULL, '2022-11-28 05:34:39', '2022-11-28 05:34:39'),
(19, 'Alvin Jeprando Barimbing', NULL, NULL, NULL, '2022-11-28 05:35:06', '2022-11-28 05:35:06'),
(20, 'Amelia Safitri', NULL, NULL, NULL, '2022-11-28 05:35:24', '2022-11-28 05:35:24'),
(21, 'Andini Novitasari', NULL, NULL, NULL, '2022-11-28 05:50:27', '2022-11-28 05:50:27'),
(22, 'Angger Cakra Wicaksono', NULL, NULL, NULL, '2022-11-28 05:50:48', '2022-11-28 05:50:48'),
(23, 'Aninda Fitri Litasni', NULL, NULL, NULL, '2022-11-28 05:51:02', '2022-11-28 05:51:02'),
(24, 'Aufa Ramadhan', NULL, NULL, NULL, '2022-11-28 05:51:18', '2022-11-28 05:51:18'),
(25, 'Bryant Sultan Nugroho', NULL, NULL, NULL, '2022-11-28 05:51:32', '2022-11-28 05:51:32'),
(26, 'Daffa Al Baihaqi Haris Lubis', NULL, NULL, NULL, '2022-11-28 05:51:47', '2022-11-28 05:51:47'),
(27, 'Destuty Angeli Lase', NULL, NULL, NULL, '2022-11-28 05:52:00', '2022-11-28 05:52:00'),
(28, 'Dimas Abidin', NULL, NULL, NULL, '2022-11-28 05:52:25', '2022-11-28 05:52:25'),
(29, 'Doni Irawan', NULL, NULL, NULL, '2022-11-28 05:52:40', '2022-11-28 05:52:40'),
(30, 'Fardan Septian', NULL, NULL, NULL, '2022-11-28 05:52:54', '2022-11-28 05:52:54'),
(31, 'Farid Mardan Aziz', NULL, NULL, NULL, '2022-11-28 05:53:05', '2022-11-28 05:53:05'),
(32, 'Fauzan Gusdani Dwi Nanda', NULL, NULL, NULL, '2022-11-28 05:53:17', '2022-11-28 05:53:17'),
(33, 'Fina Dwi Ariyani', NULL, NULL, NULL, '2022-11-28 05:53:29', '2022-11-28 05:53:29'),
(34, 'Firenze Higa Putra', NULL, NULL, NULL, '2022-11-28 05:53:40', '2022-11-28 05:53:40'),
(35, 'Haikal Prasetya Alhakim', NULL, NULL, NULL, '2022-11-28 05:53:51', '2022-11-28 05:53:51'),
(36, 'Hersa Putri Ananda', NULL, NULL, NULL, '2022-11-28 05:54:00', '2022-11-28 05:54:00'),
(37, 'Jonathan Pandu', NULL, NULL, NULL, '2022-11-28 05:54:13', '2022-11-28 05:54:13'),
(38, 'Leny Nursilah', NULL, NULL, NULL, '2022-11-28 05:54:24', '2022-11-28 05:54:24'),
(39, 'Meida Nur Afifah', NULL, NULL, NULL, '2022-11-28 05:54:34', '2022-11-28 05:54:34'),
(40, 'Mirza Elfandi', NULL, NULL, NULL, '2022-11-28 05:54:48', '2022-11-28 05:54:48'),
(41, 'M. Suratman', NULL, NULL, NULL, '2022-11-28 05:55:00', '2022-11-28 05:55:00'),
(42, 'M. Fathan Almufthi', NULL, NULL, NULL, '2022-11-28 05:55:10', '2022-11-28 05:55:10'),
(43, 'M. Refansa Ali Muzki', NULL, NULL, NULL, '2022-11-28 05:55:22', '2022-11-28 05:55:22'),
(44, 'Oni Cahyo Oktaviano', NULL, NULL, NULL, '2022-11-28 05:55:31', '2022-11-28 05:55:31'),
(45, 'Raflie Asfar Yasis', NULL, NULL, NULL, '2022-11-28 05:55:41', '2022-11-28 05:55:41'),
(46, 'Raihan Hakim', NULL, NULL, NULL, '2022-11-28 05:55:50', '2022-11-28 05:55:50'),
(47, 'Raju Yadera', NULL, NULL, NULL, '2022-11-28 05:56:00', '2022-11-28 05:56:00'),
(48, 'Rakhmawati', NULL, NULL, NULL, '2022-11-28 05:56:08', '2022-11-28 05:56:08'),
(49, 'Rifki Ihza Fathoni', NULL, NULL, NULL, '2022-11-28 05:56:16', '2022-11-28 05:56:16'),
(50, 'Rutsiana', NULL, NULL, NULL, '2022-11-28 05:56:26', '2022-11-28 05:56:26'),
(51, 'Robby Akhsan', NULL, NULL, NULL, '2022-11-28 05:56:36', '2022-11-28 05:56:36'),
(52, 'Satria Rangga Putra Ricky ', NULL, NULL, NULL, '2022-11-28 05:56:48', '2022-11-28 05:56:48'),
(53, 'Simon Rudy Hasibuan', NULL, NULL, NULL, '2022-11-28 05:56:58', '2022-11-28 05:56:58'),
(54, 'Thoriq Alfariby Permana', NULL, NULL, NULL, '2022-11-28 05:57:07', '2022-11-28 05:57:07'),
(55, 'Tri Anjani Amanah', NULL, NULL, NULL, '2022-11-28 05:57:18', '2022-11-28 05:57:18'),
(56, 'WAhyuu', NULL, 'qwdqwdq', '432423', '2022-11-28 05:57:49', '2022-11-30 08:17:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_absensi`
--
ALTER TABLE `tbl_absensi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tblSiswaIdSiswa` (`tblSiswaIdSiswa`),
  ADD KEY `id_siswa` (`id_siswa`);

--
-- Indexes for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_siswa`
--
ALTER TABLE `tbl_siswa`
  ADD PRIMARY KEY (`id_siswa`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_absensi`
--
ALTER TABLE `tbl_absensi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_siswa`
--
ALTER TABLE `tbl_siswa`
  MODIFY `id_siswa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_absensi`
--
ALTER TABLE `tbl_absensi`
  ADD CONSTRAINT `tbl_absensi_ibfk_1` FOREIGN KEY (`tblSiswaIdSiswa`) REFERENCES `tbl_siswa` (`id_siswa`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_absensi_ibfk_2` FOREIGN KEY (`id_siswa`) REFERENCES `tbl_siswa` (`id_siswa`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
