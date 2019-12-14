import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './site/header/header.component';
import { MovieInfoComponent } from './movie/movie-info/movie-info.component';
import { MovieSearchComponent } from './movie/movie-search/movie-search.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './site/login/login.component';
import { MovieEditComponent } from './movie/movie-edit/movie-edit.component';
import { FavoritesComponent } from './wishlist/favorites/favorites.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieInfoComponent,
    MovieSearchComponent,
    SignupComponent,
    LoginComponent,
    MovieEditComponent,
    FavoritesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
