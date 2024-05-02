-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.28-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para fenixdevelopment
CREATE DATABASE IF NOT EXISTS `fenixdevelopment` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `fenixdevelopment`;

-- Copiando estrutura para tabela fenixdevelopment.adminlist
CREATE TABLE IF NOT EXISTS `adminlist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(255) NOT NULL DEFAULT '0',
  `DISCORD_ID` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela fenixdevelopment.adminlist: ~1 rows (aproximadamente)
INSERT INTO `adminlist` (`id`, `NAME`, `DISCORD_ID`) VALUES
	(1, 'SR VINIX', '530706233389350912');

-- Copiando estrutura para tabela fenixdevelopment.scripts
CREATE TABLE IF NOT EXISTS `scripts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` bigint(20) NOT NULL DEFAULT 0,
  `name` varchar(50) DEFAULT NULL,
  `type` varchar(50) NOT NULL DEFAULT '0',
  `src` varchar(2000) NOT NULL DEFAULT 'https://cdn.discordapp.com/attachments/1145697791096655974/1179516790011859035/user.jpg',
  `category` varchar(1000) NOT NULL DEFAULT '0',
  `descrsiption` varchar(1000) NOT NULL DEFAULT '0',
  `value` varchar(1000) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela fenixdevelopment.scripts: ~6 rows (aproximadamente)
INSERT INTO `scripts` (`id`, `product_id`, `name`, `type`, `src`, `category`, `descrsiption`, `value`) VALUES
	(10, 1, 'terraria', '1', 'https://cdn.discordapp.com/attachments/1145697791096655974/1175508026782912512/logo.png', 'Anual', 'Produto Authenticado e Criptografado', '95'),
	(11, 2, 'ssvv', '1', 'https://cdn.discordapp.com/attachments/1145697791096655974/1175508026782912512/logo.png', 'Trimestral', 'Produto Authenticado e Criptografado', '50'),
	(12, 3, 'songfy3', '1', 'https://cdn.discordapp.com/attachments/1145697791096655974/1175508026782912512/logo.png', 'Semanal', 'Produto Authenticado e Criptografado', '50'),
	(13, 4, 'songfy4', '1', 'https://cdn.discordapp.com/attachments/1145697791096655974/1175508026782912512/logo.png', 'Mensal', 'Produto Authenticado e Criptografado', '142'),
	(14, 5, 'songfy5', '1', 'https://cdn.discordapp.com/attachments/1145697791096655974/1175508026782912512/logo.png', 'Mensal', 'Produto Authenticado e Criptografado', '50'),
	(15, 6, 'songfy6', '1', 'https://cdn.discordapp.com/attachments/1145697791096655974/1175508026782912512/logo.png', 'Mensal', 'Produto Authenticado e Criptografado', '50');

-- Copiando estrutura para tabela fenixdevelopment.tokens
CREATE TABLE IF NOT EXISTS `tokens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` varchar(50) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '0',
  `discord_id` varchar(50) NOT NULL DEFAULT '0',
  `cliente` varchar(255) NOT NULL DEFAULT '0',
  `date` varchar(50) DEFAULT NULL,
  `token` varchar(255) NOT NULL DEFAULT '0',
  `ip_authorization` varchar(255) NOT NULL DEFAULT '0',
  `authorized` varchar(50) NOT NULL DEFAULT 'true',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela fenixdevelopment.tokens: ~1 rows (aproximadamente)
INSERT INTO `tokens` (`id`, `product_id`, `name`, `discord_id`, `cliente`, `date`, `token`, `ip_authorization`, `authorized`) VALUES
	(67, '145', 'songfy', '856529593635831829', 'vitorsantos04', '2023-12-30', '3aa2b8e28b2-3aa2b8e28b2-61b81619-', '1270.0.0.1', 'true');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
