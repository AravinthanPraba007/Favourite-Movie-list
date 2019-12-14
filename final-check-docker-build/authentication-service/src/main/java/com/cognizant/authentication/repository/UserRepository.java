package com.cognizant.authentication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.authentication.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	User findByUsername(String username);

	@Query(value = "SELECT COUNT(*) AS no_of_favorites FROM movie_cruiser_fse.movie AS m INNER JOIN movie_cruiser_fse.favorites AS f ON m.mo_id = f.fa_mv_id WHERE f.fa_us_id = ?", nativeQuery = true)
	Integer getNoOfFavorites(int userId);

}