import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MovieService } from 'src/app/service/movies.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Movie } from 'src/app/movie/movie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  movie: Movie[];
  constructor(private router: Router,
    private authenticationService: AuthenticationService,
    private authService: AuthService, private movieService: MovieService) { }
  movieInEdit: Boolean;

  isAuthenticated() {
    return this.authService.loggedIn;
  }

  getUserName() {
    return this.authenticationService.getName();
  }

  isAdmin() {
    this.movieInEdit = this.movieService.movieInEdit;
    return this.authService.isAdmin;
  }

  isCustomer() {
    return this.authService.isCustomer;
  }

  onSignOut() {
    this.authService.logOut();
    this.router.navigate([this.authService.redirectUrlLogin]);
  }


}
