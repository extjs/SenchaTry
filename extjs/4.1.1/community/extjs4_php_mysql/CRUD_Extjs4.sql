/*
 Navicat Premium Data Transfer

 Source Server         : Localhost
 Source Server Type    : MySQL
 Source Server Version : 50509
 Source Host           : localhost
 Source Database       : CRUD_Extjs4

 Target Server Type    : MySQL
 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 11/16/2011 13:21:29 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `Users`
-- ----------------------------
DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `userID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `age` int(3) NOT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `Users`
-- ----------------------------
BEGIN;
INSERT INTO `Users` VALUES 
	('1', 'Ernesto', 'Ramirez', '23'), 
	('2', 'Maria', 'Hurtado', '23'), 
	('3', 'Jonathan', 'Caballero', '28'), 
	('4', 'Susana', 'Villal', '25'), 
	('5', 'Eduardo', 'edd', '21'), 
	('6', 'Blanca', 'Rodriguez', '27'), 
	('7', 'Javier', 'Ramirez', '32'), 
	('8', 'Extjs', 'Sencha', '7'), 
	('9', 'Touch', 'Sencha', '2'), 
	('10', 'Architect', 'Sencha', '1');
COMMIT;

