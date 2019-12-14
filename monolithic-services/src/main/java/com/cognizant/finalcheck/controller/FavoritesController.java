package com.cognizant.finalcheck.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.finalcheck.dto.FavoritesDTO;
import com.cognizant.finalcheck.exception.FavoritesEmptyException;
import com.cognizant.finalcheck.service.FavoritesService;

@RestController
@RequestMapping("/favorites")
public class FavoritesController {
	@Autowired
	FavoritesService favoritesService;
	private static final Logger LOGGER = LoggerFactory.getLogger(FavoritesController.class);

	@PostMapping("/{userId}/{moviesId}")
	void addFavoritesItem(@PathVariable int userId, @PathVariable int moviesId) {
		LOGGER.info("addfavorites start");
		this.favoritesService.addFavoritesItem(userId, moviesId);
		LOGGER.info("addfavorites end");
	}

	@GetMapping("/{userId}")
	FavoritesDTO getAllFavoritesItems(@PathVariable int userId) throws FavoritesEmptyException {
		LOGGER.info("getfavorites start");
		LOGGER.info("getfavorites end");
		return this.favoritesService.getAllFavoritesItems(userId);
	}

	@DeleteMapping("/{userId}/{moviesId}")
	void removeFavoritesItem(@PathVariable int userId, @PathVariable int moviesId) {
		LOGGER.info("remove favorites start");
		this.favoritesService.removeFavoritesItem(userId, moviesId);
		LOGGER.info("remove favorites end");
	}
}
