package com.cognizant.movies.controller;

import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.movies.model.Movies;
import com.cognizant.movies.service.MoviesService;

@RestController
@RequestMapping("/movies")
public class MoviesController {
	@Autowired
	private MoviesService moviesService;

	private static final Logger LOGGER = LoggerFactory.getLogger(MoviesController.class);

	public void setMoviesService(MoviesService moviesService) {
		LOGGER.info("setMoviesService start");
		this.moviesService = moviesService;
		LOGGER.info("setMoviesService end");
	}

	@GetMapping()
	public Set<Movies> getAllMovies() {
		LOGGER.info("getAllMoviesList start");
		LOGGER.info("getAllMoviesList end");
		return this.moviesService.getAllMoviesList();
	}

	@GetMapping("/{moviesId}")
	public Movies getMovies(@PathVariable int moviesId) {
		LOGGER.info("getMovie start");
		LOGGER.info("getMovie end");
		return this.moviesService.getMovies(moviesId);
	}

	@PutMapping()
	public void modifyMovies(@RequestBody Movies movies) {
		LOGGER.info("modify movies start");
		LOGGER.debug("start all movies" + movies);
		this.moviesService.modifyMovies(movies);
		LOGGER.info("modify movies end");
	}

	@PostMapping()
	public void addMovies(@RequestBody Movies movies) {
		LOGGER.info("add movies start");
		LOGGER.debug("start" + movies);
		this.moviesService.addMovies(movies);
		LOGGER.info("add movies end");
	}

}
