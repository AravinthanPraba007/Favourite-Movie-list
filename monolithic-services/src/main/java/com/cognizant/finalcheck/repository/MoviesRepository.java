package com.cognizant.finalcheck.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.finalcheck.model.Movies;

@Repository
public interface MoviesRepository extends JpaRepository<Movies, Integer>{
	@Query(value = "SELECT m FROM Movies m  WHERE m.dateOfLaunch < CURRENT_DATE() and m.active=1")
	Set<Movies> getMoviesListCustomer();
	
	@Query(value="SELECT m FROM Movies m")
	Set<Movies> getAllMoviesList();
}
