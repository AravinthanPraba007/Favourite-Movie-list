package com.cognizant.finalcheck.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@SuppressWarnings("serial")
@ResponseStatus(code = HttpStatus.BAD_REQUEST, reason = "No movies in favorite.")
public class FavoritesEmptyException extends Exception{

}
