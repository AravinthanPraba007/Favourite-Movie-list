import { Component, OnInit } from '@angular/core';
import { Favorites } from '../favorites';
import { FavoritesService } from 'src/app/service/favorites.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorite: Favorites;
  favoriteItemDeleted = false;
  totalPrice: number;
  error: String = '';
  constructor(private favoriteService: FavoritesService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.redirecting();
  }

  onDeleteFavoritesClick(item: number) {
    this.favoriteService.removeFavoritesItem(this.authenticationService.getId(), item).subscribe(() => {
      this.favoriteItemDeleted = true;
      this.error = '';
      this.redirecting();
    },
      error => {
        this.error = error.error.message;
        if (error.error.errors != null) {
          this.error = error.error.errors[0];
        }
      });

  }

  redirecting() {
    this.favoriteService.getAllFavoritesItems(this.authenticationService.getId()).subscribe(favorite => {
      this.favorite = favorite;
      this.error = '';
    },
      error => {
        this.error = error.error.message;
        if (error.error.errors != null) {
          this.error = error.error.errors[0];
        }
      });
  }
}
