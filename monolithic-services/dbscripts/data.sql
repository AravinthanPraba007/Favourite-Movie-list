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

