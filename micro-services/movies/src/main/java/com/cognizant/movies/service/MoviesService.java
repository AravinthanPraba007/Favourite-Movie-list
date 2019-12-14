package com.cognizant.movies.service;

import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.movies.model.Movies;
import com.cognizant.movies.repository.MoviesRepository;

@Service
public class MoviesService {

	@Autowired
	private MoviesRepository moviesRepository;

	@Autowired
	private AppUserDetailsService appUserDetailsService;
	private static final Logger LOGGER = LoggerFactory.getLogger(MoviesService.class);

	@Transactional
	public Set<Movies> getAllMoviesList() {
		LOGGER.info("getAllMoviess START");
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String user = authentication.getName();
		LOGGER.debug("The user is   ---------" + user);
		if (user.equals("anonymousUser")) {
			LOGGER.info("user is anonymous");
			return this.getMoviesListCustomer();
		} else {
			UserDetails userDetails = appUserDetailsService.loadUserByUsername(user);
			String role = userDetails.getAuthorities().toArray()[0].toString();
			LOGGER.debug("the role is" + role);

			if (role.equals("ADMIN")) {
				LOGGER.debug("the role is " + role);
				return this.getMoviesListAdmin();
			} else {
				LOGGER.debug("the role is customer " + role);
				return this.getMoviesListCustomer();
			}
		}
	}

	@Transactional
	public Movies getMovies(int moviesId) {
		LOGGER.info("getMovies START");
		LOGGER.info("getMovies END");
		return this.moviesRepository.findById(moviesId).get();
	}

	@Transactional
	public void modifyMovies(Movies movies) {
		LOGGER.info("ModifyMovies START");
		this.moviesRepository.save(movies);
		LOGGER.info("ModifyMovies END");
	}

	@Transactional
	public void addMovies(Movies movies) {
		LOGGER.info("AddMovies START");
		this.moviesRepository.save(movies);
		LOGGER.info("AddMovies END");
	}

	@Transactional
	public Set<Movies> getMoviesListCustomer() {
		LOGGER.info("getMoviesListCustomer START");
		LOGGER.info("getMoviesListCustomer END");
		return this.moviesRepository.getMoviesListCustomer();
	}

	@Transactional
	public Set<Movies> getMoviesListAdmin() {
		LOGGER.info("getMoviesListAdmin START");
		LOGGER.info("getMoviesListCustomer END");
		return this.moviesRepository.getAllMoviesList();
	}

}
