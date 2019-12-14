import { Injectable } from '@angular/core';
import { Movie } from '../movie/movie';
import { AuthenticationService } from './authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieInEdit: boolean = false;
  private baseUrl = environment.baseUrl + '/movies-service';
  constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService) {
  }

  public getAllMovies(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };
    return this.httpClient.get(this.baseUrl + "/movies", httpOptions);
  }

  public getMovie(movieId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };
    return this.httpClient.get(this.baseUrl + "/movies/" + movieId, httpOptions);
  }

  public ModifyMovies(movies: Movie): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };
    return this.httpClient.put<void>(this.baseUrl + "/movies", movies, httpOptions);
  }

  public addMovies(movies: Movie): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };
    return this.httpClient.post<void>(this.baseUrl + "/movies", movies, httpOptions);
  }
}
