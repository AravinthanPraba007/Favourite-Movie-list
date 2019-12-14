import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/service/movies.service';
import { AuthService } from 'src/app/service/auth.service';
import { FavoritesService } from 'src/app/service/favorites.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  @Input() movie: Movie[];
  @Output() addedToFavorites = new EventEmitter();
  isAdmin: boolean = true;
  isCustomer: boolean = this.authService.isCustomerUser();
  itemId: number;
  itemAdded = false;

  constructor(private movieService: MovieService, private authService: AuthService, private authenticationService: AuthenticationService, private favoriteService: FavoritesService, private router: Router) { }

  ngOnInit() {
    this.movieService.getAllMovies().subscribe(movie => { this.movie = movie; });
    this.movieService.movieInEdit = false;
  }

  /*adding movie item to favorites*/
  onAddToFavoritesClick(id: number) {
    if (this.isCustomer) {
      this.favoriteService.addFavoritesItem(this.authenticationService.getId(), id).subscribe(() => {
        this.itemId = id;
        this.addedToFavorites.emit(id);
        this.itemAdded = true;
        setTimeout(() => {
          this.itemAdded = false;
        }, 1000);
        this.authService.authSource = null;
        return false;
      });
    }
    else {
      this.authService.authSource = 'favorite';
      this.router.navigate([this.authService.redirectUrlLogin]);
    }
  }


  isEditAllowed(): Boolean {
    return this.authService.isAdmin;
  }

}
