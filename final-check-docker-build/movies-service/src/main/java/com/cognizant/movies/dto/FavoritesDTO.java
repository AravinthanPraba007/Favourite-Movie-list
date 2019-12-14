package com.cognizant.movies.dto;

import java.util.Set;

import com.cognizant.movies.model.Movies;

public class FavoritesDTO {
	private Set<Movies> moviesList;
	private int noOfFavorites;

	public FavoritesDTO() {
		super();
	}

	public FavoritesDTO(Set<Movies> moviesList, int noOfFavorites) {
		super();
		this.moviesList = moviesList;
		this.noOfFavorites = noOfFavorites;
	}

	public Set<Movies> getMoviesList() {
		return moviesList;
	}

	public void setMoviesList(Set<Movies> moviesList) {
		this.moviesList = moviesList;
	}

	public int getNoOfFavorites() {
		return noOfFavorites;
	}

	public void setNoOfFavorites(int noOfFavorites) {
		this.noOfFavorites = noOfFavorites;
	}


	@Override
	public String toString() {
		return "Favorites [moviesList=" + moviesList + ", noOfFavorites=" + noOfFavorites + "]";
	}
}
