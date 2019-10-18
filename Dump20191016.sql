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
  `step1` mediumtext,
  `step2` mediumtext,
  `step3` mediumtext,
  `step4` mediumtext,
  PRIMARY KEY (`cropID`),
  UNIQUE KEY `cropName_UNIQUE` (`cropName`)
) ENGINE=InnoDB AUTO_INCREMENT=138 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crops`
--

LOCK TABLES `crops` WRITE;
/*!40000 ALTER TABLE `crops` DISABLE KEYS */;
INSERT INTO `crops` VALUES (113,'Leeks',NULL,'Leeks grow very well in cool climates and can be successfully grown in most soils as long as they are rich and well draining. ','Propagation In areas with short growing seasons, leeks should be planted from transplants started indoors. Seeds should be planted at a depth of 0.6-1.3 cm (0.25-0.5 in) leaving 7.5-10 cm (3-4 in) between plants and allowing 20-40 cm (8-16 in) between rows. The soil should be moist to a depth of (18 in) and have reached a minimum temperature of 7˚C (45˚F) for successful germination. Transplants should be planted 5-8 cm (2-6 in) apart in rows spaced 30-90 cm (12-36 in) apart. In order to produce large stalks either plant the leek in a depression 7-10 cm (3-4 in) deep and gradually fill to the leaves.',' Leeks require regular watering for optimum development and should be provided with water once a week by soaking the soil to a depth of around 18 inches. ','Harvesting: Leeks develop slowly and take about 100 and 120 days to reach maturity. Leeks are ready for harvest when the stalk has reach 3.5 cm (1 in) in diameter. Harvest by carefully loosening the plant with a garden fork and pulling from the soil.'),(114,'Cabbage',NULL,'Basic requirements Cabbage is cool season crop that grows best in cool, moist conditions. The plant will grow best at temperatures between 4 and 21°C (40–50°F) allowing it to be grown in both Spring and Fall. ','Sowing seeds Cabbage can be direct seeded or started indoors to produce transplants. The optimum soil temperature for germination is between 12 and 24°C (55–75°F). Cabbage seeds can be planted outdoors 6–8 weeks before the last spring frost date in a cold frame and transplanted to their final location approximately 4 weeks before the last frost.','Cabbage should be kept evenly watered to ensure the development of tight heads. Uneven watering can cause heads to crack. Application of mulch around plants helps to conserve soil moisture.','Harvesting Cabbages are ready to harvest when the head is fully formed and feels firm and well-packed when squeezed. Cut the head away from the stalk with a sharp knife.'),(115,'Cauliflower',NULL,' Cauliflower is a cool season crop and grows best in well draining, organic soil at a pH of 6.5 or above. A high amount of organic matter in the soil will help to hold moisture.','Plant seeds in a sterile seed starting mix to a depth of 0.6-1.3 cm (0.25-0.5 in) deep and keep moist. Seedlings can be transplanted when they are approximately 6 weeks old after hardening. ','Cauliflower requires consistent moisture during the growing season in order to produce large, tender heads. Do not let the soil dry out. Test update','Harvesting Cauliflower heads are ready for harvest when the head reaches 15 to 20 cm in diameter (6-8 in), usually about 7 to 12 days after blanching begins. Harvest the head by cutting the main stem with a sharp knife, including some of the central leaves which will protect the head.'),(118,'Beet',NULL,'Beets are cool season vegetables with a long growing season. They grow best in cool climates but can tolerate some heat as well as some freezing. The optimum temperature for their growth is between 15.5 and 18.3°C (60–65°F). ','Beets are direct seeded and can be planted as soon as the soil is workable in Spring. The soil should be prepared for planting by first removing any large rocks and stones and then working in 2–3 inches of compost or well-rotted manure. ','Beets require plenty of moisture to develop optimally. Even watering will promote the development of good quality roots and prevent the formation of rings in the root. Soil moisture can be conserved by applying a layer of mulch around the plants. ','Harvesting:: Young beet greens can be harvested for salads when they are 2.5–5.0 cm (1–2 in) high and older greens before they reach 15 cm (6 in) in length. The roots are ready for harvest when they have reached 2.5 cm (1 in) in diameter and are most tender before the exceed 7.5–10 cm (3–4 in). '),(119,'Pumpkin',NULL,' Pumpkin is a warm-season crop, requiring lots of sun and good drainage to develop optimally and growing best at temperatures between 18 and 25°C (65–75°F). ','Pumpkin can be direct seeded or sown indoors and transplanted. If direct seeding,seeds should be sown after the last frosts and when the soil has warmed to at least 15.6°C (60°F). Sow 1–2 seeds 1.3–2.5 cm (0.5–1.0 in) deep, at least 90 cm (~3 ft) apart if growing bush varieties and 120–150 cm (4–5 ft) apart if growing vining varieties.','Pumpkin vines are sprawling and require plenty space to grow. Vines can be trained to grow on a trellis or fence. Pumpkin also require a continuous supply of water and where drip irrigation is not being used, plants should be watered deeply once per week, providing at least an inch of water.','Harvesting Pumpkins are harvested by hand when the fruit reaches full maturity. The fruit is ripe when the color changes uniformly and the rind becomes hard.'),(120,'Red onion',NULL,' Onions are hardy, cool season vegetables that grow best at temperatures of 12 to 24 °C (55–75 °F), growing particularly well in areas with cool spring weather and drier, hotter summer weather. ',' In milder climates, onion seeds can be direct seeded as soon as the soil is workable in the Spring, 4–6 weeks before the last frost date, or even earlier if starting seeds indoors to produce transplants. The planting site should be cultivated deeply and be free of stones.','Onions should be watered thoroughly after planting and once every week thereafter, applying approximately 1 inch of water each time.',' Harvesting When the soil at the base of the plants begins to crack, this indicates that the bulbing process has begun. Fertilizer applications should be stopped at this point. '),(125,'Green chill',NULL,' Peppers are warm-season crops and grow best at temperatures between 18 and 30°C (65–86°F). They can be grown in many soil types although sandy soils warm faster in Spring and are good for early planting.','The soil should have a pH between 6 and 7. Peppers will not tolerate water saturated soil and should be planted in a well draining soil or raised bed. Peppers should be planted in an area that receives full sun for most of the day.','Peppers are usually transplanted 2–3 weeks after the last frost when the soil temperature has reached a minimum of 15.5°C (60°F). Covering soil with dark plastic or mulch a week prior to planting outdoors can help bring the soil temperature up more quickly in colder regions, allowing earlier planting.','When transplanting seedlings, allow 30–45 cm (12–18 in) between plants and 60–76 cm (24–30 in) between rows. Side dress plants with a nitrogen fertilizer at planting.'),(130,'Carrot',NULL,'Carrots are cool-season crops which can be planted in early Spring and left in the ground all summer for harvest in the fall. Carrots grow best in a well-draining, loose, sandy soil which is free of large rocks and has a pH between 5.5 and 7.0. ','They require full sun for optimum development but will tolerate some very light shade. The optimum temperature for their growth is between 16 and 24°C (61–74°F). ',' Carrots benefit from a plentiful moisture supply and should be provided with 2.5 cm (1 in) of water each week. ','Carrots are generally ready to harvest after around 2–3 months when the roots have reached 1.3 cm (0.5 in) in diameter. '),(133,'Banana',NULL,'Bananas grow best in hot and humid climates, require a rainfall of at least 1000 mm (39.4 in) per year to survive and have a high light requirement. Banana plants grow optimally at 27°C (98.6°F) and require a deep soil, rich in organic matter which is well draining and well aerated.','The plants will grow optimally in soil with a pH between 5.5 and 7.0. Young banana plants are very susceptible to wind damage and it is recommended that they are planted in sufficient shelter or in a block so that the plants will protect one another.','The desired pieces of the plant are usually planted 30–60 cm (11.8–23.6 in) deep in the soil and should generally be planted at the end of the dry season or the beginning of the wet season. ','The banana plants are fast growing and require the frequent addition of nutrients as well as additional irrigation in the dry season.'),(135,'Cucumber',NULL,'Cucumbers require warm, dry conditions to develop optimally, preferring both warm days and warm nights and growing best at a temperature of 30°C (86°F). Cucumbers will yield best if grown in a fertile, well-draining soil, rich in organic matter and with a pH between 6.5 and 7.5. ','Seeds should be sown after the last frosts and when the soil has warmed to at least 15.6°C (60°F). Sow seeds 1.3–2.5 cm (0.5–1.0 in) deep, thinning to a spacing of at least 30 cm (12 in) between plants after germination. ','Cucumber vines are sprawling and require plenty space to grow. Vines can be trained to grow on a trellis or fence. Providing burpless varieties with vertical support allows the fruits to hang loose and grow straight.','Cucumbers should be harvested from the plant when they are still immature and green in color. Mature fruits are yellow and the flesh is often tough with woody seeds. ');
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
  KEY `crop_idx` (`cropName`),
  CONSTRAINT `crop` FOREIGN KEY (`cropName`) REFERENCES `crops` (`cropName`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crops_has_zones`
--

LOCK TABLES `crops_has_zones` WRITE;
/*!40000 ALTER TABLE `crops_has_zones` DISABLE KEYS */;
INSERT INTO `crops_has_zones` VALUES (50,'Leeks',0,0,1,1),(51,'Cabbage',0,0,1,1),(52,'Cauliflower',0,0,1,1),(55,'Beet',0,0,1,1),(56,'Pumpkin',1,1,1,0),(57,'Red onion',1,1,1,1),(62,'Green chill',1,1,0,0),(67,'Carrot',0,0,1,1),(70,'Banana',1,1,0,0),(72,'Cucumber',1,1,0,0);
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
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diseases`
--

LOCK TABLES `diseases` WRITE;
/*!40000 ALTER TABLE `diseases` DISABLE KEYS */;
INSERT INTO `diseases` VALUES (47,'Downy mildew','Symptoms::\nPale spots or elongated patches on leaves; gray-purple fuzzy growth on leaf surface; leaves turning pale then yellow; leaf tips collapsing.\nManagement::\nAvoid planting infected sets; rotate crops to non-allium species for 3-4 years; plant in well-draining areas and do not overcrowd plants; destroy all infected crop debris; apply appropriate foliar fungicides taking care to apply thoroughly to waxy leaves','Leeks'),(48,'Black Rot','Black rot is caused by a bacterium, Xanthomonas campestris pathovar campestris, and can affect all vegetables in the crucifer family. Preventing:: disease prevention is very important. The bacteria survive the winter on plant debris and on weeds, such as wild mustard and Shepherd’s purse. It also can survive in and on seeds from infected plants. ','Cabbage'),(49,'Downy mildew','Caused by the fungus-like organism, which is an obligate parasite, needing live plants to grow and reproduce. The disease affects leaves (Figure 3), stems, and heads of cauliflower. The pathogen can survive on crop and weed hosts in some areas and may survive as spores in infested crop debris. The disease is favored by moist conditions with temperatures near 60° to 70°F.\n\n','Cauliflower'),(52,'Scab','Small round spots on roots that enlarge, turn brown and rupture the epidermis; raised corky spots on root surface that are gray, white or tan in color. Management::\nDo not plant in soil know to be infected; avoid crop rotation with potato.','Beet'),(53,'Alternaria leaf spot','Initial symptoms appear as necrotic flecks on leaves with chlorotic halos; as the disease progresses,\nManagement::\nCrops debris should be removed from the field or plowed deeply into the soil after harvest;','Pumpkin'),(54,'Downy mildew','Pale spots or elongated patches on leaves; gray-purple fuzzy growth on leaf surface; leaves turning pale then yellow; leaf tips collapsing\nManagement::\nAvoid planting infected sets; rotate crops to non-allium species for 3-4 years; plant in well-draining areas and do not overcrowd plants;\n','Red onion'),(58,'Damping-off ','Seeds did not germinate; seedlings collapsing and dying; dark stems which are shriveled near the soil line;\nManagement::\nAvoid planting in poorly draining, cool, wet soil; planting in raised beds will help with soil drainage;','Green chill'),(63,'Black Root Rot','This can be a problem disease on carrots grown on muck or high organic soils. Washed carrots may show black scattered lesions when stored in polythene bags. Management strategy: Root damage and high storage temperatures appear to favour disease development. \n','Carrot'),(66,'Fungal: Anthracnose','Symptoms::\nBrown spots on fruit peel; large brown to black areas; black lesions on green fruit.\nManagement::\nCommercially produced fruit should be washed and dipped in fungicide prior to shipping;','Banana'),(68,'Belly rot','Yellow/brown discoloration on fruit; water soaked spots on side of fruit in contact with soil; Management::\nTill soil deeply prior to planting; use plastic mulch to create a barrier between fruit and soil; ','Cucumber');
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
-- Table structure for table `farmergardening`
--

DROP TABLE IF EXISTS `farmergardening`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `farmergardening` (
  `user` int(11) NOT NULL,
  `crop` varchar(155) NOT NULL,
  `created` date DEFAULT NULL,
  `modified` date DEFAULT NULL,
  PRIMARY KEY (`user`,`crop`),
  KEY `crop_idx` (`crop`),
  CONSTRAINT `userID` FOREIGN KEY (`user`) REFERENCES `users` (`userID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `farmergardening`
--

LOCK TABLES `farmergardening` WRITE;
/*!40000 ALTER TABLE `farmergardening` DISABLE KEYS */;
INSERT INTO `farmergardening` VALUES (92,'Green chill','2019-10-15',NULL),(92,'Red onion','2019-10-15',NULL);
/*!40000 ALTER TABLE `farmergardening` ENABLE KEYS */;
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
-- Table structure for table `inquiry`
--

DROP TABLE IF EXISTS `inquiry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inquiry` (
  `inquiryID` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(155) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `topic` varchar(155) DEFAULT NULL,
  `description` longtext,
  `created_date` datetime NOT NULL,
  `respond` longtext,
  `responded_date` datetime DEFAULT NULL,
  PRIMARY KEY (`inquiryID`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inquiry`
--

LOCK TABLES `inquiry` WRITE;
/*!40000 ALTER TABLE `inquiry` DISABLE KEYS */;
INSERT INTO `inquiry` VALUES (20,'nimdilhani21@gmail.com','Kasuni','Selling organic foods','Sellings','I would like to know whether we can sell our organic products other than fruits and vegetables? Thanks.','2019-10-16 14:38:21',NULL,NULL),(21,'nimashandk94@gmail.com','Lasitha','Limited space to gardening','Cultivate','I stay in a flat and want to create a beautiful garden space. What is the best way to turn my balcony into a garden space?','2019-10-16 14:39:57','To convert a balcony into a beautiful garden space, use the wall space, the grill area and a part of floor space. Add plants and some wall décor to add vibrance. One can also make use of artificial grass to create a sitting arrangement.',NULL),(22,'nimasha.arambepola94@gmail.com','Gayani','Indoor gardening','Cultivate','Which are the best indoor plants?','2019-10-16 14:40:52',NULL,NULL),(23,'nimdilhani21@gmail.com','Harshani','Soiling','Cultivate','How often should we replace soils in pots?','2019-10-16 14:42:46','Pots in soil should be replaced once a year either in Feburary or during the rainy season.',NULL),(24,'nimdilhani21@gmail.com','Dasanka','Cabbage gardening','Cultivate','Can the bigger leaves be cut from a growing cabbage plant?','2019-10-16 14:44:26',NULL,NULL);
/*!40000 ALTER TABLE `inquiry` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organicfoodseller`
--

LOCK TABLES `organicfoodseller` WRITE;
/*!40000 ALTER TABLE `organicfoodseller` DISABLE KEYS */;
INSERT INTO `organicfoodseller` VALUES (20,120,'No 23','Kandy rd','Colombo','077110233'),(21,123,'No78','Malkaduwawa','Kurunegala','0771234565'),(22,124,'No89','Hedeniya','Kandy','0998765432'),(23,126,'No 1/233','Gattuwana','Kurunegala','1223456783'),(24,128,'No 44','Galle rd','Matara','0771123456'),(25,130,'No 8/223','Dambulla rd','Anuradhapura','1223456789'),(26,132,'No 21','Apura rd','Polonnaruwa','0669873324'),(27,133,'No 78','New town','Mulativ','0991312332'),(28,134,'No 56','Badulla rd','NuwaraEliya','0771231236'),(29,135,'No 89','Matale rd','Kandy','0781234324'),(30,136,'No 78','Mulleriyawa ','Colombo','0772256789'),(31,137,'No 67','Kandy rd','Matale','0112909876'),(32,138,'No 67','Katharagama rd','Matara','0773214567'),(33,139,'No 45','Polgolla rd','Katugasthota','0772342356'),(34,142,'No 76','Arambepola','Potuhera','0881234543'),(35,144,'No 23','Kandy rd','Nuwara Eliya','0784536245'),(36,145,'No 1/98','Kandy rd','Hatton','0993434323'),(37,147,'No 4','Rambukkana rd','Kegalle','0783455344'),(38,148,'No 67','Polgahawela rd','Kegalle','0543324234'),(39,149,'No 45','Jaffna rd','Kilinochchi','0772342313'),(40,154,'No 90','Ambathanna','Kandy','0992342342');
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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seeds`
--

LOCK TABLES `seeds` WRITE;
/*!40000 ALTER TABLE `seeds` DISABLE KEYS */;
INSERT INTO `seeds` VALUES (20,'Cucumber',NULL,'3200',60,'seed'),(21,'Cucumber',29,'1000',70,'seed'),(22,'Green Chillie',29,'2500',60,'plant');
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
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seedshop`
--

LOCK TABLES `seedshop` WRITE;
/*!40000 ALTER TABLE `seedshop` DISABLE KEYS */;
INSERT INTO `seedshop` VALUES (27,125,'No45','Kandy rd','Miriswatta','0112423432'),(28,127,'No 22','Wawniya rd','Jaffna','1234567898'),(29,129,'No89','Katugasthota','Kandy','0771234567'),(30,131,'No 76','Nuwaraeliya rd','Badulla','0772312345'),(31,141,'No 78','Ampara rd','Mannar','0771234325'),(32,146,'No 8/267','Colombo rd','Kandy','0994323456'),(33,150,'No 23','Jaffna rd','Kilinochchi','0999324232'),(34,151,'No 34','Mullativ rd','Kilinochchi','0782322453'),(35,152,'No 68','Warallapatha','Rambukkana','0772335676'),(36,153,'No 34','Kandy rd','Mawathagama','0773432243'),(37,155,'No 45','Kandy rd','Kurunegala','0883242343');
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
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sellingvegetable`
--

LOCK TABLES `sellingvegetable` WRITE;
/*!40000 ALTER TABLE `sellingvegetable` DISABLE KEYS */;
INSERT INTO `sellingvegetable` VALUES (32,'Beans',1004,85,20),(33,'Carrot',68,80,20);
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
) ENGINE=InnoDB AUTO_INCREMENT=162 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (81,'admin','f2d82f780731db849379d5bba2198814','admin@gmail.com','Admin','Kurunegala','2019-07-03 01:01:58','0000-00-00 00:00:00'),(92,'abc','0773ae704144eed02f6a11cb44d9109f','abc@gmail.com','Farmer','Mannar','2019-09-16 04:36:52','2019-09-16 04:36:52'),(120,'A.K.Perera','be51bacd320176dcfeab6d9b7a17c5cd','perera@gmail.com','Food seller','Colombo','2019-10-16 03:55:55','2019-10-16 03:55:55'),(122,'Anura Bandara','257763a56f758411d1858043602f1ff8','anura@gmail.com','Farmer','Kegalle','2019-10-16 04:41:12','2019-10-16 04:41:12'),(123,'Lalith','7061119787ea91552bfa88d891b38f2e','lalith@gmail.com','Food seller','Kurunegala','2019-10-16 04:43:13','2019-10-16 04:43:13'),(124,'A.A. Opanayaka','af8d2297fff9eb067b600ec38738639a','opanayaka@gmail.com','Food seller','Kandy','2019-10-16 04:46:26','2019-10-16 04:46:26'),(125,'Hashani ','02c28be11d7824b5477ac2c4ef3cf373','hashi@gmail.com','Seed seller','Gampaha','2019-10-16 04:49:05','2019-10-16 04:49:05'),(126,'Dasun','24096901717ddee4c13f37b7b6612995','dasun@gmail.com','Food seller','Kurunegala','2019-10-16 05:13:17','2019-10-16 05:13:17'),(127,'Gayantha','900570efc37343b12abac7a112031b17','gayantha@gmail.com','Seed seller','Jaffna','2019-10-16 05:34:22','2019-10-16 05:34:22'),(128,'Akila','d26e736c7cd95b5b9d74c3c4e82ff267','akila@gmail.com','Food seller','Matara','2019-10-16 05:36:37','2019-10-16 05:36:37'),(129,'Jehan ','4c4483f398711909163b33f90dcdda22','jehan@gmail.com','Seed seller','Kandy','2019-10-16 05:44:48','2019-10-16 05:44:48'),(130,'Yohan','6de376e3ed75691be4f1a8b7cdf6b803','yohan@gmail.com','Food seller','Anuradhapura','2019-10-16 05:49:54','2019-10-16 05:49:54'),(131,'Kasun','649896dee833356a4466bf54c9641dac','kasun@gmail.com','Seed seller','Badulla','2019-10-16 05:51:01','2019-10-16 05:51:01'),(132,'Shanka','7540e08a16bd86dd4e20871be31ceafc','shanka@gmail.com','Food seller','Polonnaruwa','2019-10-16 05:52:55','2019-10-16 05:52:55'),(133,'Prageeth','f487215ddad7ee8550693bb8798daba5','prageeth@gmail.com','Food seller','Mullative','2019-10-16 06:31:40','2019-10-16 06:31:40'),(134,'Kalpa','f798d29153f64ba796af11b8e9c12a51','kalpa@gmail.com','Food seller','Nuwara Eliya','2019-10-16 06:34:05','2019-10-16 06:34:05'),(135,'Dasanka','9aac24e5a52ca4c363c9273326a56437','daz@gmail.com','Food seller','Kandy','2019-10-16 06:35:15','2019-10-16 06:35:15'),(136,'Jayanthi','33e93909c3bf5491774ddbf77559d9a1','jaya@gmail.com','Food seller','Colombo','2019-10-16 06:36:31','2019-10-16 06:36:31'),(137,'Hashan','8f6791d56fe203a0855d71b1b39b4199','hashan@gmail.com','Food seller','Matale','2019-10-16 06:37:25','2019-10-16 06:37:25'),(138,'Thenuwara','e9508d3a81b440153887c42e8418e11a','the@gmail.com','Food seller','Matara','2019-10-16 06:38:48','2019-10-16 06:38:48'),(139,'Nuwandi','d15786532f6df9f1854940d87a2ce7f2','nuwandi@gmail.com','Food seller','Kandy','2019-10-16 06:39:45','2019-10-16 06:39:45'),(140,'Sanka','7f72fc83dd201a4b6220184f02939573','sanka@gmail.com','Farmer','Kurunegala','2019-10-16 08:11:52','2019-10-16 08:11:52'),(141,'Sanuk','72aca5014469932103e18dc8236bf6cb','sanuk@gmail.com','Seed seller','Mannar','2019-10-16 08:12:52','2019-10-16 08:12:52'),(142,'Yasas','c8dfbc9b7d200176e111391fb133675d','yasa@gmail.com','Food seller','Kurunegala','2019-10-16 08:14:04','2019-10-16 08:14:04'),(143,'Santhan','7e26ed808f52de6e222c827dbc022e57','santhan@gmail.com','Farmer','Mullative','2019-10-16 08:14:53','2019-10-16 08:14:53'),(144,'Lasi','174ef72ddda0f289338206abc888726d','lasi@gmail.com','Food seller','Badulla','2019-10-16 08:15:46','2019-10-16 08:15:46'),(145,'Omantha','358372bd45436105767a2faa02d777a0','omantha@gmail.com','Food seller','Nuwara Eliya','2019-10-16 08:16:51','2019-10-16 08:16:51'),(146,'Sandeep','c156b827fe3cefc518ddfcce6498f0e5','sandeep@gmail.com','Seed seller','Matale','2019-10-16 08:18:09','2019-10-16 08:18:09'),(147,'Kavishka','b4f4c6f157d8c4dd493124ad8491448f','kavi@gmail.com','Food seller','Kegalle','2019-10-16 08:19:45','2019-10-16 08:19:45'),(148,'Amal','016755aad29d55396e0dfcbc4af7dcce','amal@gmail.com','Food seller','Kegalle','2019-10-16 08:21:11','2019-10-16 08:21:11'),(149,'Sharankan','0773ae704144eed02f6a11cb44d9109f','sharan@gmail.com','Food seller','Kilinochchi','2019-10-16 08:22:52','2019-10-16 08:22:52'),(150,'Shiwa','3a6959b5ca448accb9324512eb37d858','shiwa@gmail.com','Seed seller','Kilinochchi','2019-10-16 08:24:57','2019-10-16 08:24:57'),(151,'Janaka','0773ae704144eed02f6a11cb44d9109f','janaka@gmail.com','Seed seller','Kilinochchi','2019-10-16 08:26:02','2019-10-16 08:26:02'),(152,'Saman','8a75ef9c144d3d4b224c2f66977820d6','saman@gmail.com','Seed seller','Kegalle','2019-10-16 08:27:36','2019-10-16 08:27:36'),(153,'Dewindi','bcdc70b60bffecff2f5f42e69b976b1c','devi@gmail.com','Seed seller','Kurunegala','2019-10-16 08:28:28','2019-10-16 08:28:28'),(154,'Kasuni','4b8f236936b6a5ae44df22c803b95f07','kasuni@gmail.com','Food seller','Kandy','2019-10-16 08:30:04','2019-10-16 08:30:04'),(155,'Janani','9e08802601d55198b728bfcad7ea5fb7','jana@gmail.com','Seed seller','Kurunegala','2019-10-16 08:31:55','2019-10-16 08:31:55'),(156,'Lasith','0381bbc12c07381da00bd78b7ebfb881','lasith@gmail.com','Farmer','Gampaha','2019-10-16 08:56:46','2019-10-16 08:56:46'),(157,'abcd@gmail.com','bdf1ff9f73481c75a26c4c3e0a09c5cb','abcd@gmail.com','Farmer','Gampaha','2019-10-16 08:57:59','2019-10-16 08:57:59'),(158,'Upali','679c3f3a5b0e305ee235b70e35f4f4b0','upali@gmail.com','Farmer','Gampaha','2019-10-16 09:01:57','2019-10-16 09:01:57'),(159,'Imalka','f74cbac45930c6a1cb02d3ab412d960e','imalka@gmail.com','Farmer','Galle','2019-10-16 09:03:34','2019-10-16 09:03:34'),(160,'Amani','67210d6ee3ef6e9e1395a19a8ff32458','amani@gmail.com','Farmer','Galle','2019-10-16 09:04:16','2019-10-16 09:04:16'),(161,'Darmapala','8c983dd8c2ec1ebb29650d013d5c3a6e','darma@gmail.com','Farmer','Hambantota','2019-10-16 09:05:45','2019-10-16 09:05:45');
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

-- Dump completed on 2019-10-16 21:00:25
