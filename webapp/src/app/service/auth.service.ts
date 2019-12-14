import { Injectable } from '@angular/core';
import { User } from '../site/user';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  isAdmin = false;
  isCustomer = false;
  user: User;
  redirectUrl = '/movie-list';
  redirectUrlLogin = '/login';
  authSource: string = null; /*used to check if add to favorites is done before login*/
  userAuthenticated: User;

  constructor(private authenticationService: AuthenticationService) { }

  logIn(): Boolean {
    if (this.authenticationService.getRole() == "ADMIN") {
      this.loggedIn = true;
      this.userAuthenticated = this.user;
      this.isAdmin = true;
      this.isCustomer = false;
      return true;
    }
    else if (this.authenticationService.getRole() == "USER") {
      this.loggedIn = true;
      this.userAuthenticated = this.user;
      this.isCustomer = true;
      this.isAdmin = false;
      return true;
    }
    else {
      this.loggedIn = false;
      this.isCustomer = false;
      this.isAdmin = false;
    }

  }

  logOut() {
    this.loggedIn = false;
    this.isCustomer = false;
    this.isAdmin = false;
    this.authenticationService.setRole(null);
    this.authenticationService.setToken(null);
  }

  isAdminUser() {
    return this.isAdmin;
  }

  isCustomerUser() {
    return this.isCustomer;
  }

}
