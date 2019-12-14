import { Injectable } from '@angular/core';
import { User } from '../site/user';
import { AuthenticationService } from './authentication.service';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.baseUrl + '/authentication-service';

  constructor(private authenticationService: AuthenticationService, private httpClient: HttpClient) { }

  addUserCustomer(userAdd: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };
    return this.httpClient.post<void>(this.baseUrl + "/users", userAdd, httpOptions);
  }
}
