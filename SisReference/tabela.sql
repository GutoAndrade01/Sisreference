CREATE TABLE `sisreference`.`references` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `OP` VARCHAR(8) NULL DEFAULT 'Sem OP',
  `referencia` VARCHAR(5) NOT NULL,
  `tam_36` VARCHAR(4) NOT NULL,
  `tam_38` VARCHAR(4) NOT NULL,
  `tam_40` VARCHAR(4) NOT NULL,
  `tam_42` VARCHAR(4) NOT NULL,
  `tam_44` VARCHAR(4) NOT NULL,
  `tam_46` VARCHAR(4) NOT NULL,
  `tam_48` VARCHAR(4) NOT NULL,
  `tam_50` VARCHAR(4) NOT NULL,
  `tam_52` VARCHAR(4) NOT NULL,
  `tam_54` VARCHAR(4) NOT NULL,
  `dataInclude` DATE NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE `sisreference`.`reference` (
  `id` int NOT NULL AUTO_INCREMENT,
  `produto` varchar(8) DEFAULT NULL,
  `referencia` varchar(30) NOT NULL,
  `variacao` varchar(15) DEFAULT NULL,
  `tam_36` varchar(4) NOT NULL,
  `tam_38` varchar(4) NOT NULL,
  `tam_40` varchar(4) NOT NULL,
  `tam_42` varchar(4) NOT NULL,
  `tam_44` varchar(4) NOT NULL,
  `tam_46` varchar(4) NOT NULL,
  `tam_48` varchar(4) NOT NULL,
  `tam_50` varchar(4) NOT NULL,
  `tam_52` varchar(4) NOT NULL,
  `tam_54` varchar(4) NOT NULL,
  `total` varchar(8) NOT NULL,
  `dataInclude` date NOT NULL,
  PRIMARY KEY (`id`)) 
ENGINE=InnoDB
DEFAULT CHARACTER SET = utf8;