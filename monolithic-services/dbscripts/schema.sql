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
