-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 07 Sep 2024 pada 20.33
-- Versi server: 10.4.21-MariaDB
-- Versi PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restapi_topupApp`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `Produks`
--

CREATE TABLE `Produks` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `namaProduk` varchar(255) NOT NULL,
  `harga` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `Produks`
--

INSERT INTO `Produks` (`id`, `namaProduk`, `harga`, `createdAt`, `updatedAt`) VALUES
('030385ef-2af0-4d82-abc9-0c5f09be4ae1', 'Pulsa Telkomsel', 50000, '2024-09-07 06:42:37', '2024-09-07 06:42:37'),
('3af29a03-f2d7-4b5d-bb31-710a4d3f038e', 'Pulsa Indosat', 20000, '2024-09-07 06:42:37', '2024-09-07 06:42:37'),
('71bbb63c-44cc-4518-8c9a-551f2b0e019b', 'Voucher Game AOV', 150000, '2024-09-07 06:42:37', '2024-09-07 06:42:37');

-- --------------------------------------------------------

--
-- Struktur dari tabel `Saldos`
--

CREATE TABLE `Saldos` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `saldo` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `Saldos`
--

INSERT INTO `Saldos` (`id`, `userId`, `saldo`, `createdAt`, `updatedAt`) VALUES
('1e077d79-222f-4997-a07e-48e7f7a145ca', '32195695-da6b-4426-8de4-5a38883e4049', 500000, '2024-09-07 06:42:37', '2024-09-07 06:42:37'),
('2b20ea2f-c835-45d8-8faf-8dc691338583', '6d721117-e8a1-4be7-91b4-5fd53f5f0dcd', 250000, '2024-09-07 06:42:37', '2024-09-07 06:42:37');

-- --------------------------------------------------------

--
-- Struktur dari tabel `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20240906103930-create-user.js'),
('20240906104049-create-saldo.js'),
('20240906112342-create-produk.js'),
('20240906140616-create-transaksi.js');

-- --------------------------------------------------------

--
-- Struktur dari tabel `Transaksis`
--

CREATE TABLE `Transaksis` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `saldoId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `jumlah` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `produkId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `Transaksis`
--

INSERT INTO `Transaksis` (`id`, `userId`, `saldoId`, `jumlah`, `status`, `produkId`, `createdAt`, `updatedAt`) VALUES
('4eaaa917-73b8-4849-af0e-c3a548421587', '6d721117-e8a1-4be7-91b4-5fd53f5f0dcd', '2b20ea2f-c835-45d8-8faf-8dc691338583', 150000, 1, '3af29a03-f2d7-4b5d-bb31-710a4d3f038e', '2024-09-07 06:42:37', '2024-09-07 06:42:37'),
('dd19d8c6-2a87-40f4-9982-3492360efef7', '6d721117-e8a1-4be7-91b4-5fd53f5f0dcd', '2b20ea2f-c835-45d8-8faf-8dc691338583', 50000, 0, '3af29a03-f2d7-4b5d-bb31-710a4d3f038e', '2024-09-07 07:17:20', '2024-09-07 07:17:20'),
('fc0779dc-1ca4-4a7c-9b9a-593bc2269ed0', '32195695-da6b-4426-8de4-5a38883e4049', '1e077d79-222f-4997-a07e-48e7f7a145ca', 50000, 1, '030385ef-2af0-4d82-abc9-0c5f09be4ae1', '2024-09-07 06:42:37', '2024-09-07 06:42:37');

-- --------------------------------------------------------

--
-- Struktur dari tabel `Users`
--

CREATE TABLE `Users` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `Users`
--

INSERT INTO `Users` (`id`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
('32195695-da6b-4426-8de4-5a38883e4049', 'habis@gmail.com', '321', '2024-09-07 06:42:37', '2024-09-07 06:42:37'),
('6d721117-e8a1-4be7-91b4-5fd53f5f0dcd', 'gunawan@gmail.com', '123', '2024-09-07 06:42:37', '2024-09-07 06:42:37');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `Produks`
--
ALTER TABLE `Produks`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `Saldos`
--
ALTER TABLE `Saldos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indeks untuk tabel `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indeks untuk tabel `Transaksis`
--
ALTER TABLE `Transaksis`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `saldoId` (`saldoId`),
  ADD KEY `produkId` (`produkId`);

--
-- Indeks untuk tabel `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `Saldos`
--
ALTER TABLE `Saldos`
  ADD CONSTRAINT `saldos_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`);

--
-- Ketidakleluasaan untuk tabel `Transaksis`
--
ALTER TABLE `Transaksis`
  ADD CONSTRAINT `transaksis_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`),
  ADD CONSTRAINT `transaksis_ibfk_2` FOREIGN KEY (`saldoId`) REFERENCES `Saldos` (`id`),
  ADD CONSTRAINT `transaksis_ibfk_3` FOREIGN KEY (`produkId`) REFERENCES `Produks` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
