SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';

CREATE SCHEMA IF NOT EXISTS `movie_cruiser_fse` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci ;
USE `movie_cruiser_fse` ;

-- -----------------------------------------------------
-- Table `movie_cruiser_fse`.`movie`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `movie_cruiser_fse`.`movie` ;

CREATE  TABLE IF NOT EXISTS `movie_cruiser_fse`.`movie` (
  `mo_id` INT NOT NULL AUTO_INCREMENT ,
  `mo_title` VARCHAR(100) NULL ,
  `mo_box_office` BIGINT NULL ,
  `mo_active` TINYINT(1) NULL ,
  `mo_date_of_launch` DATE NULL ,
  `mo_genre` VARCHAR(45) NULL ,
  `mo_has_teaser` TINYINT(1) NULL ,
  `mo_image_url` VARCHAR(200) NULL ,
  PRIMARY KEY (`mo_id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `movie_cruiser_fse`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `movie_cruiser_fse`.`user` ;

CREATE  TABLE IF NOT EXISTS `movie_cruiser_fse`.`user` (
  `us_id` INT NOT NULL AUTO_INCREMENT ,
  `us_name` VARCHAR(60) NULL ,
  `us_password` VARCHAR(100) NULL ,
  `us_first_name` VARCHAR(45) NULL ,
  `us_last_name` VARCHAR(45) NULL ,
  PRIMARY KEY (`us_id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `movie_cruiser_fse`.`favorites`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `movie_cruiser_fse`.`favorites` ;

CREATE  TABLE IF NOT EXISTS `movie_cruiser_fse`.`favorites` (
  `fa_id` INT NOT NULL AUTO_INCREMENT ,
  `fa_us_id` INT NULL ,
  `fa_mv_id` INT NULL ,
  PRIMARY KEY (`fa_id`) ,
  INDEX `fk_favorites_movie` (`fa_mv_id` ASC) ,
  INDEX `fk_favorites_user1` (`fa_us_id` ASC) ,
  CONSTRAINT `fk_favorites_movie`
    FOREIGN KEY (`fa_mv_id` )
    REFERENCES `movie_cruiser_fse`.`movie` (`mo_id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_favorites_user1`
    FOREIGN KEY (`fa_us_id` )
    REFERENCES `movie_cruiser_fse`.`user` (`us_id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `movie_cruiser_fse`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `movie_cruiser_fse`.`role` ;

CREATE  TABLE IF NOT EXISTS `movie_cruiser_fse`.`role` (
  `ro_id` INT NOT NULL AUTO_INCREMENT ,
  `ro_name` VARCHAR(45) NULL ,
  PRIMARY KEY (`ro_id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `movie_cruiser_fse`.`user_role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `movie_cruiser_fse`.`user_role` ;

CREATE  TABLE IF NOT EXISTS `movie_cruiser_fse`.`user_role` (
  `ur_id` INT NOT NULL AUTO_INCREMENT ,
  `ur_us_id` INT NULL ,
  `ur_ro_id` INT NULL ,
  INDEX `fk_user_has_role_role1` (`ur_ro_id` ASC) ,
  INDEX `fk_user_has_role_user1` (`ur_us_id` ASC) ,
  PRIMARY KEY (`ur_id`) ,
  CONSTRAINT `fk_user_has_role_user1`
    FOREIGN KEY (`ur_us_id` )
    REFERENCES `movie_cruiser_fse`.`user` (`us_id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_role_role1`
    FOREIGN KEY (`ur_ro_id` )
    REFERENCES `movie_cruiser_fse`.`role` (`ro_id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

START TRANSACTION;
USE `movie_cruiser_fse`;

INSERT INTO `movie_cruiser_fse`.`movie` (`mo_id`, `mo_title`, `mo_box_office`, `mo_active`, `mo_date_of_launch`, `mo_genre`, `mo_has_teaser`, `mo_image_url`) VALUES (1, 'Avatar', '2787965087', 1, '2017-03-15', 'Science Fiction', 1, 'https://cdn11.bigcommerce.com/s-xiguxu0y8i/images/stencil/1280x1280/products/5573/11115/2FoBvF7__44668.1554821742.jpg');

INSERT INTO `movie_cruiser_fse`.`movie` (`mo_id`, `mo_title`, `mo_box_office`, `mo_active`, `mo_date_of_launch`, `mo_genre`, `mo_has_teaser`, `mo_image_url`) VALUES (2, 'The Avenger', '1518812988', 1, '2017-12-23', 'Superhero', 0, 'https://www.sentinelassam.com/wp-content/uploads/2019/03/Avengers-1280x720.jpg');

INSERT INTO `movie_cruiser_fse`.`movie` (`mo_id`, `mo_title`, `mo_box_office`, `mo_active`, `mo_date_of_launch`, `mo_genre`, `mo_has_teaser`, `mo_image_url`) VALUES (3, 'Titanic', '2187463944', 1, '2017-08-21', 'Romance', 0, 'https://i.ytimg.com/vi/nOQD77yMFhE/maxresdefault.jpg');

INSERT INTO `movie_cruiser_fse`.`movie` (`mo_id`, `mo_title`, `mo_box_office`, `mo_active`, `mo_date_of_launch`, `mo_genre`, `mo_has_teaser`, `mo_image_url`) VALUES (4, 'Jurassic World', '1671713208', 0, '2017-07-02', 'Science Fiction', 1, 'https://i.ytimg.com/vi/nOQD77yMFhE/maxresdefault.jpg');

INSERT INTO `movie_cruiser_fse`.`movie` (`mo_id`, `mo_title`, `mo_box_office`, `mo_active`, `mo_date_of_launch`, `mo_genre`, `mo_has_teaser`, `mo_image_url`) VALUES (5, 'Avengers:End Game', '2750760348', 1, '2022-11-02', 'Superhero', 1, 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/04/27/817597-avengers-endgame.jpg');


INSERT INTO `movie_cruiser_fse`.`role` (`ro_id`, `ro_name`) VALUES (1, 'USER');

INSERT INTO `movie_cruiser_fse`.`role` (`ro_id`, `ro_name`) VALUES (2, 'ADMIN');


INSERT INTO `movie_cruiser_fse`.`user` (`us_id`, `us_name`, `us_password`, `us_first_name`, `us_last_name`) VALUES (1, 'user', '$2a$10$R/lZJuT9skteNmAku9Y7aeutxbOKstD5xE5bHOf74M2PHZipyt3yK', 'user', 'user');

INSERT INTO `movie_cruiser_fse`.`user` (`us_id`, `us_name`, `us_password`, `us_first_name`, `us_last_name`) VALUES (2, 'admin', '$2a$10$R/lZJuT9skteNmAku9Y7aeutxbOKstD5xE5bHOf74M2PHZipyt3yK', 'admin', 'admin');


INSERT INTO `movie_cruiser_fse`.`user_role` (`ur_id`, `ur_us_id`, `ur_ro_id`) VALUES (1, 1, 1);

INSERT INTO `movie_cruiser_fse`.`user_role` (`ur_id`, `ur_us_id`, `ur_ro_id`) VALUES (2, 2, 2);



INSERT INTO `movie_cruiser_fse`.`favorites` (`fa_id`, `fa_us_id`, `fa_mv_id`) VALUES (1, 1, 1);


COMMIT;

