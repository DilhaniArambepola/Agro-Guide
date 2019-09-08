-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: agroguide
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `address` (
  `addressID` int(11) NOT NULL AUTO_INCREMENT,
  `line1` varchar(155) DEFAULT NULL,
  `line2` varchar(155) DEFAULT NULL,
  `line3` varchar(155) DEFAULT NULL,
  PRIMARY KEY (`addressID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'2','gh','hfgh');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `crops`
--

DROP TABLE IF EXISTS `crops`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `crops` (
  `cropID` int(11) NOT NULL AUTO_INCREMENT,
  `cropName` varchar(155) DEFAULT NULL,
  `image` mediumtext,
  `details` mediumtext,
  PRIMARY KEY (`cropID`),
  UNIQUE KEY `cropName_UNIQUE` (`cropName`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crops`
--

LOCK TABLES `crops` WRITE;
/*!40000 ALTER TABLE `crops` DISABLE KEYS */;
INSERT INTO `crops` VALUES (73,'carrot',NULL,'aaaa'),(76,'a',NULL,'dsvsdv'),(78,'kjj',NULL,'fvdff'),(79,'zz',NULL,'des'),(80,'test',NULL,'test des'),(83,'bb',NULL,'nb n');
/*!40000 ALTER TABLE `crops` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `crops_has_diseases`
--

DROP TABLE IF EXISTS `crops_has_diseases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `crops_has_diseases` (
  `cropID` int(11) NOT NULL,
  `diseaseID` int(11) NOT NULL,
  PRIMARY KEY (`cropID`,`diseaseID`),
  KEY `fk_crops_has_diseases_diseases1_idx` (`diseaseID`),
  KEY `fk_crops_has_diseases_crops1_idx` (`cropID`),
  CONSTRAINT `fk_crops_has_diseases_crops1` FOREIGN KEY (`cropID`) REFERENCES `crops` (`cropID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_crops_has_diseases_diseases1` FOREIGN KEY (`diseaseID`) REFERENCES `diseases` (`diseaseID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crops_has_diseases`
--

LOCK TABLES `crops_has_diseases` WRITE;
/*!40000 ALTER TABLE `crops_has_diseases` DISABLE KEYS */;
/*!40000 ALTER TABLE `crops_has_diseases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `crops_has_zones`
--

DROP TABLE IF EXISTS `crops_has_zones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `crops_has_zones` (
  `cropZoneID` int(11) NOT NULL AUTO_INCREMENT,
  `cropName` varchar(100) DEFAULT NULL,
  `DryZone` tinyint(1) NOT NULL DEFAULT '0',
  `Intermediate` tinyint(1) NOT NULL DEFAULT '0',
  `LowCountryWet` tinyint(1) NOT NULL DEFAULT '0',
  `UpCountryWet` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`cropZoneID`),
  KEY `crops_idx` (`cropName`),
  CONSTRAINT `crops` FOREIGN KEY (`cropName`) REFERENCES `crops` (`cropName`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crops_has_zones`
--

LOCK TABLES `crops_has_zones` WRITE;
/*!40000 ALTER TABLE `crops_has_zones` DISABLE KEYS */;
INSERT INTO `crops_has_zones` VALUES (9,'carrot',1,0,1,0),(15,'kjj',1,1,0,0),(16,'zz',0,1,1,1),(17,'test',1,0,1,0),(20,'bb',0,1,0,1);
/*!40000 ALTER TABLE `crops_has_zones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diseases`
--

DROP TABLE IF EXISTS `diseases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `diseases` (
  `diseaseID` int(11) NOT NULL AUTO_INCREMENT,
  `disease` varchar(155) DEFAULT NULL,
  `description` longtext,
  `cropName` varchar(155) DEFAULT NULL,
  PRIMARY KEY (`diseaseID`),
  KEY `desease_idx` (`cropName`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diseases`
--

LOCK TABLES `diseases` WRITE;
/*!40000 ALTER TABLE `diseases` DISABLE KEYS */;
INSERT INTO `diseases` VALUES (8,'new di',' the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with des','carrot'),(12,'hhhh','www','kjj'),(13,'ccvv','dfgdfg','zz'),(14,'test silly me',NULL,'test'),(17,'78','vnvnvhgvh','bb');
/*!40000 ALTER TABLE `diseases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `district`
--

DROP TABLE IF EXISTS `district`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `district` (
  `districtName` varchar(100) NOT NULL,
  PRIMARY KEY (`districtName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `district`
--

LOCK TABLES `district` WRITE;
/*!40000 ALTER TABLE `district` DISABLE KEYS */;
INSERT INTO `district` VALUES ('Ampara'),('Anuradhapura'),('Badulla'),('Batticaloa'),('Colombo'),('Galle'),('Gampaha'),('Hambantota'),('Jaffna'),('Kalutara'),('Kandy'),('Kegalle'),('Kilinochchi'),('Kurunegala'),('Mannar'),('Matale'),('Matara'),('Monaragala'),('Mullative'),('Nuwara Eliya'),('Polonnaruwa'),('Puttalam'),('Rathnapura'),('Trinco'),('Vavniya');
/*!40000 ALTER TABLE `district` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `foodimages`
--

DROP TABLE IF EXISTS `foodimages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `foodimages` (
  `ImageID` int(11) NOT NULL AUTO_INCREMENT,
  `foodImage` blob,
  PRIMARY KEY (`ImageID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foodimages`
--

LOCK TABLES `foodimages` WRITE;
/*!40000 ALTER TABLE `foodimages` DISABLE KEYS */;
/*!40000 ALTER TABLE `foodimages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `organicfoodseller`
--

DROP TABLE IF EXISTS `organicfoodseller`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `organicfoodseller` (
  `sellerID` int(11) NOT NULL AUTO_INCREMENT,
  `userID` int(11) NOT NULL,
  `AddressLine1` varchar(255) DEFAULT NULL,
  `AddressLine2` varchar(255) DEFAULT NULL,
  `AddressLine3` varchar(255) DEFAULT NULL,
  `contact` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`sellerID`),
  KEY `fk_organicFoodSeller_users_idx` (`userID`),
  CONSTRAINT `fk_organicFoodSeller_users` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organicfoodseller`
--

LOCK TABLES `organicfoodseller` WRITE;
/*!40000 ALTER TABLE `organicfoodseller` DISABLE KEYS */;
INSERT INTO `organicfoodseller` VALUES (2,84,'ad1','ad2','ad3','4534534534'),(3,25,'Add1','Add2','Add3','111111'),(4,54,'polgahawela','fsdfs','erwe','345345'),(5,28,'bbb','bb2','b3q','2434343542'),(6,29,'kk','web','oo','6557575756'),(7,30,'Add1','Add2','Add3','contact'),(8,82,'vvxvdfb','vvxvdfb','vvxvdfb','dsfsdf'),(9,84,'a','a','a','34234');
/*!40000 ALTER TABLE `organicfoodseller` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `userRoleId` int(11) NOT NULL AUTO_INCREMENT,
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  `farmer` tinyint(1) NOT NULL DEFAULT '0',
  `foodSeller` tinyint(1) NOT NULL DEFAULT '0',
  `seedSeller` tinyint(1) DEFAULT '0',
  `rolecol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`userRoleId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seeds`
--

DROP TABLE IF EXISTS `seeds`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seeds` (
  `seedID` int(11) NOT NULL AUTO_INCREMENT,
  `seedName` varchar(45) NOT NULL,
  `shopID` int(11) DEFAULT NULL,
  `quantity` varchar(45) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `seedPlant` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`seedID`),
  KEY `shopID_idx` (`shopID`),
  CONSTRAINT `shopID` FOREIGN KEY (`shopID`) REFERENCES `seedshop` (`shopID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seeds`
--

LOCK TABLES `seeds` WRITE;
/*!40000 ALTER TABLE `seeds` DISABLE KEYS */;
INSERT INTO `seeds` VALUES (3,'dfsd',13,'23',23,'plant'),(4,'qqq',13,'435',34,'seed'),(5,'jknk',13,'678',99,'seed'),(6,'fsff',13,'34',432,'plant'),(7,'cbvbb',13,'546',234,'plant');
/*!40000 ALTER TABLE `seeds` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seedshop`
--

DROP TABLE IF EXISTS `seedshop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seedshop` (
  `shopID` int(11) NOT NULL AUTO_INCREMENT,
  `userID` int(11) NOT NULL,
  `AddressLine1` varchar(255) DEFAULT NULL,
  `AddressLine2` varchar(255) DEFAULT NULL,
  `AddressLine3` varchar(255) DEFAULT NULL,
  `contact` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`shopID`),
  KEY `fk_seedShop_users1_idx` (`userID`),
  CONSTRAINT `user_seedshop` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seedshop`
--

LOCK TABLES `seedshop` WRITE;
/*!40000 ALTER TABLE `seedshop` DISABLE KEYS */;
INSERT INTO `seedshop` VALUES (2,14,'Add1','Add2','Add3','7888888'),(6,45,'vvxvdfb','vvxvdfb','vvxvdfb','dsfsdf'),(7,50,'fdvfgfg','fdvfgfg','fdvfgfg','bfgfg'),(10,71,'asd','asd','asd','123444'),(11,74,'xzc','xzc','xzc','wfwfwfwfwf'),(12,75,'czcz','czcz','czcz','dfds'),(13,85,'fdvfd','fdvfd','fdvfd','435345');
/*!40000 ALTER TABLE `seedshop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seedshop_has_seeds`
--

DROP TABLE IF EXISTS `seedshop_has_seeds`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seedshop_has_seeds` (
  `shopID` int(11) NOT NULL,
  `seedID` int(11) NOT NULL,
  `quantity` decimal(10,0) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`shopID`,`seedID`),
  KEY `fk_seedShop_has_seeds_seeds1_idx` (`seedID`),
  KEY `fk_seedShop_has_seeds_seedShop1_idx` (`shopID`),
  CONSTRAINT `fk_seedShop_has_seeds_seedShop1` FOREIGN KEY (`shopID`) REFERENCES `seedshop` (`shopID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_seedShop_has_seeds_seeds1` FOREIGN KEY (`seedID`) REFERENCES `seeds` (`seedID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seedshop_has_seeds`
--

LOCK TABLES `seedshop_has_seeds` WRITE;
/*!40000 ALTER TABLE `seedshop_has_seeds` DISABLE KEYS */;
/*!40000 ALTER TABLE `seedshop_has_seeds` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sellingvegetable`
--

DROP TABLE IF EXISTS `sellingvegetable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sellingvegetable` (
  `sellingVegetableID` int(11) NOT NULL AUTO_INCREMENT,
  `itemName` varchar(155) DEFAULT NULL,
  `Quantity` decimal(10,0) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `sellerID` int(11) DEFAULT NULL,
  PRIMARY KEY (`sellingVegetableID`),
  KEY `sellerID_idx` (`sellerID`),
  CONSTRAINT `sellerID` FOREIGN KEY (`sellerID`) REFERENCES `organicfoodseller` (`sellerID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sellingvegetable`
--

LOCK TABLES `sellingvegetable` WRITE;
/*!40000 ALTER TABLE `sellingvegetable` DISABLE KEYS */;
INSERT INTO `sellingvegetable` VALUES (2,'Beat',1000,120,3),(4,'Cabbage',3000,78,3),(5,'Beans',4500,100,7),(6,'Potatoes',1000,120,5),(9,'Beans',675,79,2),(16,'dfdf34',34,234,3),(18,'fdfg',23,34,3),(19,'fvdf',23,42,2),(20,'bcvb',324,43,2),(21,'fghfg',657,56,2);
/*!40000 ALTER TABLE `sellingvegetable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `userID` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(100) DEFAULT NULL,
  `lname` varchar(100) DEFAULT NULL,
  `userName` varchar(45) DEFAULT 'user',
  `password` varchar(100) DEFAULT NULL,
  `email` varchar(155) DEFAULT NULL,
  `userRole` varchar(60) NOT NULL,
  `districtName` varchar(100) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`userID`),
  KEY `fk_users_district1_idx` (`districtName`),
  CONSTRAINT `fk_users_district1` FOREIGN KEY (`districtName`) REFERENCES `district` (`districtName`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (13,NULL,NULL,'test51 nim','4638756347','nim2@gmail.com','seller','Kurunegala','2019-06-01 01:39:07','2019-06-01 01:39:07'),(14,NULL,NULL,'test1 nim','4638756347','nim2@gmail.com','SeedSeller','Kurunegala','2019-06-01 01:39:36','2019-06-01 01:39:36'),(15,NULL,NULL,'test1 nim','4638756347','nim2@gmail.com','seller','Kurunegala','2019-06-01 05:21:20','2019-06-01 05:21:20'),(16,NULL,NULL,'test1 nim','4638756347','nim2@gmail.com','seller','Kurunegala','2019-06-01 05:21:53','2019-06-01 05:21:53'),(17,NULL,NULL,'test1 nim','4638756347','nim2@gmail.com','organicfoodseller','Kurunegala','2019-06-01 05:23:26','2019-06-01 05:23:26'),(18,NULL,NULL,'test1 nim','4638756347','nim2@gmail.com','Organic food seller','Kurunegala','2019-06-01 10:30:52','2019-06-01 10:30:52'),(19,NULL,NULL,'test1 nim','4638756347','nim2@gmail.com','Organic food seller','Kurunegala','2019-06-01 10:33:28','2019-06-01 10:33:28'),(20,NULL,NULL,'test1 nim','4638756347','nim2@gmail.com','Organic food seller','Kandy','2019-06-01 10:34:38','2019-06-01 10:34:38'),(21,NULL,NULL,'t nim','4638756347','nim2@gmail.com','Organic food seller','Kurunegala','2019-06-01 10:39:53','2019-06-01 10:39:53'),(22,NULL,NULL,'t nim','4638756347','nim2@gmail.com','Organic food seller','Colombo','2019-06-01 10:40:47','2019-06-01 10:40:47'),(23,NULL,NULL,'t nim','4638756347','nim2@gmail.com','Organic food seller','Kurunegala','2019-06-01 10:41:03','2019-06-01 10:41:03'),(24,NULL,NULL,'tnim','4638756347','nim2@gmail.com','Organic food seller','Kurunegala','2019-06-01 10:42:51','2019-06-01 10:42:51'),(25,NULL,NULL,'dil','4638756347','nim2@gmail.com','Organic food seller','Kandy','2019-06-01 10:48:17','2019-06-01 10:48:17'),(26,NULL,NULL,'dil','4638756347','nim2@gmail.com','Organic food seller','Kurunegala','2019-06-01 10:49:59','2019-06-01 10:49:59'),(27,NULL,NULL,'d1','4638756347','nim2@gmail.com','Organic food seller','Kurunegala','2019-06-02 00:53:04','2019-06-02 00:53:04'),(28,NULL,NULL,'test pass','4638756347','nim2@gmail.com','Organic food seller','Mannar','2019-06-02 01:23:01','2019-06-02 01:23:01'),(29,NULL,NULL,'test pass1','4638756347','nim2@gmail.com','Organic food seller','Colombo','2019-06-02 01:23:38','2019-06-02 01:23:38'),(30,NULL,NULL,'test pass2','8d15e8e4d3','nim2@gmail.com','Organic food seller','Kurunegala','2019-06-02 01:24:38','2019-06-02 01:24:38'),(33,'fgxf','rer','cvxc','eecfb3a71a','dfsdg','farmer','Kandy','2019-06-03 10:41:28','2019-06-03 10:41:28'),(34,'asdfg','bcvbcvb','vfvfd','5430a12c0b','dvxvxvx','farmer','Kandy','2019-06-04 04:54:52','2019-06-04 04:54:52'),(35,'cxzc','dsd','scsd','4f1803e2b8','dfsdfds','farmer','Kandy','2019-06-04 05:28:34','2019-06-04 05:28:34'),(36,'nim','dil','nimdil','4cd6450695','nim123','farmer','Kandy','2019-06-11 14:42:01','2019-06-11 14:42:01'),(37,'nim','dil','nimdil','4cd6450695','nim123','farmer','Kandy','2019-06-11 14:43:47','2019-06-11 14:43:47'),(38,'x','xx','xxx','9395ad0be0','xxx','farmer','Kandy','2019-06-11 14:45:37','2019-06-11 14:45:37'),(39,'x','xx','xxx','9395ad0be0','xxx','req.','Kandy','2019-06-11 14:46:19','2019-06-11 14:46:19'),(40,'gerge','fgdfg','dfgdfg','913811531c','cvxcvxcv','Food seller','Monaragala','2019-06-13 16:01:43','2019-06-13 16:01:43'),(41,'gerge','fgdfg','dfgdfg','913811531c','cvxcvxcv','Food seller','Monaragala','2019-06-13 16:09:33','2019-06-13 16:09:33'),(42,'gerge','fgdfg','dfgdfg','913811531c','cvxcvxcv','Food seller','Monaragala','2019-06-13 16:11:33','2019-06-13 16:11:33'),(43,'fdgdfgdfg3242423','eertererg','fdgdfg','d48c11fab2','fddfgfdgd','Food seller','Matara','2019-06-14 04:59:52','2019-06-14 04:59:52'),(44,'fdgdfgdfg3242423','eertererg','fdgdfg','d48c11fab2','fddfgfdgd','Food seller','Matara','2019-06-14 05:01:52','2019-06-14 05:01:52'),(45,'wfwefwe','frefer','fwefw','d722674ae2','fvdfvdfv','Food seller','Kilinochchi','2019-06-14 05:15:17','2019-06-14 05:15:17'),(46,'wfwefwe','frefer','fwefw','d722674ae2','fvdfvdfv','Food seller','Kilinochchi','2019-06-14 05:16:41','2019-06-14 05:16:41'),(47,'wfwefwe','frefer','fwefw','d722674ae2','fvdfvdfv','Food seller','Kilinochchi','2019-06-14 05:17:39','2019-06-14 05:17:39'),(48,'wfwefwe','frefer','fwefw','d722674ae2','fvdfvdfv','Seed seller','Kilinochchi','2019-06-14 05:18:34','2019-06-14 05:18:34'),(49,'dvsf','fsdfsdf','xvxcv','1f842d126e','dfvfdv','Farmer','Kegalle','2019-06-14 05:21:11','2019-06-14 05:21:11'),(50,'vxcvxvc','fddfgdfg','dffd','b69e8e6fdb','dgfgfdgdf','Farmer','Mullative','2019-06-14 05:26:59','2019-06-14 05:26:59'),(51,'vxcvxvc','fddfgdfg','dffd','b69e8e6fdb','dgfgfdgdf','Seed seller','Mullative','2019-06-14 05:27:20','2019-06-14 05:27:20'),(52,'gregeger','tretet','fdgfg','572628c5ba','dgdgfggfg','Farmer','Matale','2019-06-14 06:59:20','2019-06-14 06:59:20'),(53,'gregeger','tretet','fdgfg','572628c5ba','dgdgfggfg','Farmer','Matale','2019-06-14 07:01:20','2019-06-14 07:01:20'),(54,'gffhgfhg','ererr','fddf','feaefc00c7','dgfg','Organic food seller','Matara','2019-06-14 07:02:08','2019-06-14 07:02:08'),(55,'gffhgfhg','ererr','fddf','feaefc00c7','dgfg','Farmer','Matara','2019-06-14 07:04:08','2019-06-14 07:04:08'),(56,'dsdfsdf','dsfsdf','dfsdfsd','963b304af3','dsfsdfsdf@gmail','Farmer','Monaragala','2019-06-14 07:08:55','2019-06-14 07:08:55'),(57,'nbmbmnbm','nfhfhfh','rtertetr','3ea2e2ec40','dffgdg@gh.com','Farmer','Nuwara Eliya','2019-06-14 07:10:22','2019-06-14 07:10:22'),(58,'vbdfgfghf','hrthrhr','ghfghfgh','0773ae7041','gfdgf@gmail.com','Farmer','Mullative','2019-06-14 14:47:08','2019-06-14 14:47:08'),(59,'vbdfgfghf','hrthrhr','ghfghfgh','0773ae7041','gfdgf@gmail.com','Farmer','Mullative','2019-06-14 14:49:08','2019-06-14 14:49:08'),(60,'gfgdfg','rwewt','fddfgd','37a7b03cab','fdbd@gmai.vom','Farmer','Monaragala','2019-06-14 15:57:09','2019-06-14 15:57:09'),(61,'bhjbj','gjhj','cvgvgh','b16ff8b126','dfsdsfd@gailfv.com','Farmer','Mannar','2019-06-14 15:59:04','2019-06-14 15:59:04'),(62,'bhjbj','gjhj','cvgvgh','b16ff8b126','dfsdsfd@gailfv.com','Farmer','Mannar','2019-06-14 16:01:12','2019-06-14 16:01:12'),(63,'bhjbj','gjhj','cvgvgh','b16ff8b126','dfsdsfd@gailfv.com','Farmer','Mannar','2019-06-14 16:01:33','2019-06-14 16:01:33'),(64,'fgdfgdf','sdfsdf','dfgdfg','f0023d60c4','fdgdfg@gmail.com','Farmer','Mannar','2019-06-14 16:02:14','2019-06-14 16:02:14'),(65,'fgdfgdf','sdfsdf','dfgdfg','f0023d60c4','fdgdfg@gmail.com','Farmer','Mannar','2019-06-14 16:03:21','2019-06-14 16:03:21'),(66,'fgdfgdf','sdfsdf','dfgdfg','f0023d60c4','fdgdfg@gmail.com','Farmer','Mannar','2019-06-14 16:31:47','2019-06-14 16:31:47'),(67,'fgdfgdf','sdfsdf','dfgdfg','f0023d60c4','fdgdfg@gmail.com','Farmer','Mannar','2019-06-14 16:32:22','2019-06-14 16:32:22'),(68,'fgdfgdf','sdfsdf','dfgdfg','f0023d60c4','fdgdfg@gmail.com','Farmer','Mannar','2019-06-14 16:33:14','2019-06-14 16:33:14'),(69,'bmbn','vhg','bnnbn','0773ae7041','nvn@gmail.com','Farmer','Kilinochchi','2019-06-14 16:34:03','2019-06-14 16:34:03'),(70,'nb mn','cvbnb','bnmnbmn','0773ae7041','bnmbm@gmail.com','Farmer','Matara','2019-06-14 16:35:48','2019-06-14 16:35:48'),(71,'bfgfg','hgfhf','ghfg','0773ae7041','nimfdgd@gmail.com','Seed seller','Kilinochchi','2019-06-29 16:52:09','2019-06-29 16:52:09'),(72,'bfgfg','hgfhf','ghfg','0773ae7041','nimfdgd@gmail.com','Seed seller','Kilinochchi','2019-06-29 17:00:49','2019-06-29 17:00:49'),(73,'bfgfg','hgfhf','ghfg','0773ae7041','nimfdgd@gmail.com','Seed seller','Kilinochchi','2019-06-29 17:07:12','2019-06-29 17:07:12'),(74,'fhfgh','fhfh','fghfgh','04cabe3832','dsfga@gmail.com','Seed seller','Kandy','2019-06-29 17:17:28','2019-06-29 17:17:28'),(75,'b nnn','dfbdg','gdfgd','f442eed247','hfgh@gmail.com','Seed seller','Kalutara','2019-06-29 17:22:50','2019-06-29 17:22:50'),(76,'mnbm','vhvj','jhj','5530b2b7e0','bm@gmfgc.com','Farmer','Mullative','2019-06-29 17:32:33','2019-06-29 17:32:33'),(77,'bdhdgh','dfgdf','fdfd','aece52fc61','fdgd@gmail.com','Farmer','Monaragala','2019-06-29 17:35:50','2019-06-29 17:35:50'),(78,'admin','nimasha','admin1','c049608fe0','ad@gmail.com','Farmer','Kurunegala','2019-06-29 17:37:54','2019-06-29 17:37:54'),(79,'nim','dil','nimdil','615dd91b23','nim@gmail.com','Farmer','Kurunegala','2019-06-30 06:29:30','2019-06-30 06:29:30'),(80,'testnim','testnim','testnim1','c5189bcd9daf580ad323e75de13e077d','test@gmail.com','Farmer','Matale','2019-06-30 06:32:21','2019-06-30 06:32:21'),(81,'admin','admin','admin','f2d82f780731db849379d5bba2198814','admin@gmail.com','Admin','Kurunegala','2019-07-03 01:01:58','2019-07-03 01:01:58'),(82,'Nimasha','Kalpani','Nimz','f4d0a630f9020effabc1425adbb974f5','nimz@gmail.com','Farmer','Mannar','2019-08-27 13:02:43','2019-08-27 13:02:43'),(83,'nim','dil','abcd','0773ae704144eed02f6a11cb44d9109f','abcd@gmail.com','Farmer','Matale','2019-09-01 04:24:07','2019-09-01 04:24:07'),(84,'a','b','xyz','5190142cd283081965add85dfc970798','xyz@gmail.com','Food seller','Hambantota','2019-09-02 03:08:38','2019-09-02 03:08:38'),(85,'dd','ds','cds','0773ae704144eed02f6a11cb44d9109f','ss@gmail.com','Seed seller','Nuwara Eliya','2019-09-03 15:22:48','2019-09-03 15:22:48'),(87,NULL,NULL,'admin','admin123','admin@gmail.com','Admin','Kurunegala','2019-09-04 17:21:34','2019-09-04 17:21:34');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_has_crops`
--

DROP TABLE IF EXISTS `users_has_crops`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_has_crops` (
  `userID` int(11) NOT NULL,
  `cropID` int(11) NOT NULL,
  PRIMARY KEY (`userID`,`cropID`),
  KEY `fk_users_has_crops_crops1_idx` (`cropID`),
  KEY `fk_users_has_crops_users1_idx` (`userID`),
  CONSTRAINT `fk_users_has_crops_crops1` FOREIGN KEY (`cropID`) REFERENCES `crops` (`cropID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_crops_users1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_has_crops`
--

LOCK TABLES `users_has_crops` WRITE;
/*!40000 ALTER TABLE `users_has_crops` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_has_crops` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zone`
--

DROP TABLE IF EXISTS `zone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zone` (
  `zoneID` int(11) NOT NULL AUTO_INCREMENT,
  `zone` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`zoneID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zone`
--

LOCK TABLES `zone` WRITE;
/*!40000 ALTER TABLE `zone` DISABLE KEYS */;
INSERT INTO `zone` VALUES (1,'Dry zone'),(2,'Intermediate zone'),(3,'Low country wet zone'),(4,'Up country wet zone');
/*!40000 ALTER TABLE `zone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zone_has_district`
--

DROP TABLE IF EXISTS `zone_has_district`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zone_has_district` (
  `zoneID` int(11) NOT NULL,
  `districtName` varchar(100) NOT NULL,
  PRIMARY KEY (`zoneID`,`districtName`),
  KEY `fk_zone_has_district_district1_idx` (`districtName`),
  KEY `fk_zone_has_district_zone1_idx` (`zoneID`),
  CONSTRAINT `fk_zone_has_district_district1` FOREIGN KEY (`districtName`) REFERENCES `district` (`districtName`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_zone_has_district_zone1` FOREIGN KEY (`zoneID`) REFERENCES `zone` (`zoneID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zone_has_district`
--

LOCK TABLES `zone_has_district` WRITE;
/*!40000 ALTER TABLE `zone_has_district` DISABLE KEYS */;
INSERT INTO `zone_has_district` VALUES (1,'Ampara'),(1,'Anuradhapura'),(1,'Batticaloa'),(1,'Jaffna'),(1,'Kilinochchi'),(1,'Mannar'),(1,'Monaragala'),(1,'Mullative'),(1,'Polonnaruwa'),(1,'Puttalam'),(1,'Trinco'),(1,'Vavniya'),(2,'Colombo'),(2,'Galle'),(2,'Gampaha'),(2,'Kalutara'),(2,'Kegalle'),(2,'Matara'),(3,'Badulla'),(3,'Kandy'),(3,'Nuwara Eliya'),(4,'Hambantota'),(4,'Kurunegala'),(4,'Matale');
/*!40000 ALTER TABLE `zone_has_district` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'agroguide'
--
/*!50003 DROP PROCEDURE IF EXISTS `addDiseases` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `addDiseases`(IN crop VARCHAR(50), d VARCHAR(50), des VARCHAR(255))
BEGIN
DECLARE count, cropid, diseaseid INT;

SELECT count(*) into count from diseases where disease = d;

IF count < 1 Then
	INSERT INTO diseases(disease, description, cropName) VALUES (d, des, crop);

END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `deleteCrops` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteCrops`(IN crop VARCHAR(100))
BEGIN
DECLARE countZone, countDisease INT; 

select count(*) into countDisease from diseases where cropName=crop;

IF countDisease > 0 Then
	DELETE from diseases where cropName = crop;
END IF;

select count(*) into countZone from crops_has_zones where cropName=crop;

IF countZone > 0 Then
	DELETE from crops_has_zones where cropName = crop;
END IF;

DELETE from crops where cropName = crop;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-08  6:31:11
