package com.cognizant.finalcheck.service;

import java.util.HashSet;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.finalcheck.dto.FavoritesDTO;
import com.cognizant.finalcheck.exception.FavoritesEmptyException;
import com.cognizant.finalcheck.model.Movies;
import com.cognizant.finalcheck.model.User;
import com.cognizant.finalcheck.repository.MoviesRepository;
import com.cognizant.finalcheck.repository.UserRepository;

@Service
public class FavoritesService {
	@Autowired
	UserRepository userRepository;

	@Autowired
	MoviesRepository moviesRepository;

	private static final Logger LOGGER = LoggerFactory.getLogger(FavoritesService.class);

	public void addFavoritesItem(int userId, int moviesId) {
		LOGGER.info("addFavoritesItem START");
		Set<Movies> moviesList = new HashSet<Movies>();
		User user = this.userRepository.findById(userId).get();
		Movies movies = this.moviesRepository.findById(moviesId).get();
		if (movies != null) {
			if (user.getMoviesList().isEmpty()) {
				moviesList.add(movies);
				user.setMoviesList(moviesList);
			} else {
				moviesList = user.getMoviesList();
				moviesList.add(movies);
				user.setMoviesList(moviesList);
			}
			this.userRepository.save(user);
		}
		LOGGER.info("addFavoritesItem END");
	}

	public FavoritesDTO getAllFavoritesItems(int userId) throws FavoritesEmptyException {
		LOGGER.info("getAllFavoritesItems START");
		FavoritesDTO favoritesDTO = new FavoritesDTO();

		User user = this.userRepository.findById(userId).get();
		if (!user.getMoviesList().isEmpty()) {
			favoritesDTO.setMoviesList(user.getMoviesList());
			favoritesDTO.setNoOfFavorites(userRepository.getNoOfFavorites(userId));
		} else {
			throw new FavoritesEmptyException();
		}
		LOGGER.info("getAllFavoritesItems END");
		return favoritesDTO;
	}

	public void removeFavoritesItem(int userId, int moviesId) {
		LOGGER.info("removeFavoritesItem START");
		User user = this.userRepository.findById(userId).get();
		Movies movies = this.moviesRepository.findById(moviesId).get();
		if (movies != null) {
			Set<Movies> moviesList = user.getMoviesList();
			moviesList.remove(movies);
			user.setMoviesList(moviesList);
			this.userRepository.save(user);
		}
		LOGGER.info("removeFavoritesItem END");
	}

}
