import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieSearchComponent } from './movie/movie-search/movie-search.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './site/login/login.component';
import { MovieEditComponent } from './movie/movie-edit/movie-edit.component';
import { FavoritesComponent } from './wishlist/favorites/favorites.component';
import { AuthGuardGuard } from './site/auth-guard.guard';
const routes: Routes = [
  {
    path: "movie-list", component: MovieSearchComponent
  },
  {
    path: "signup", component: SignupComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: 'movie-edit/:id', component: MovieEditComponent, canActivate: [AuthGuardGuard]
  },
  {
    path: 'movie-edit', component: MovieEditComponent, canActivate: [AuthGuardGuard]
  },
  {
    path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuardGuard]
  },
  {
    path: '', redirectTo: 'movie-list', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
