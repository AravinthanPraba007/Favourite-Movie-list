import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthenticationService } from './authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private baseUrl = environment.baseUrl + '/movies-service';

  constructor(private authenticationService: AuthenticationService, private httpClient: HttpClient) { }

  getAllFavoritesItems(userId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };
    return this.httpClient.get(this.baseUrl + "/favorites/" + userId, httpOptions);
  }

  addFavoritesItem(userId: number, id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };
    return this.httpClient.post<void>(this.baseUrl + "/favorites/" + userId + "/" + id, id, httpOptions);
  }

  removeFavoritesItem(userId: number, moviesId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };
    return this.httpClient.delete<void>(this.baseUrl + "/favorites/" + userId + "/" + moviesId, httpOptions);
  }
}
