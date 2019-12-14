import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authentication: Boolean = false;
  isLoginValid = true;
  authSource: string = null;
  userInvalid = false;
  loginForm: FormGroup;
  username: string = "";
  password: string = "";
  constructor(private router: Router,
    private authService: AuthService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authSource = this.authService.authSource;
  }

  onSubmit(form: NgForm) {
    this.username = form.value.username;
    this.password = form.value.password;
    let authResult = this.authenticationService.authenticate(this.username, this.password);
    authResult.subscribe(
      data => {
        this.authenticationService.setToken(data.token);
        this.authenticationService.setRole(data.role);
        this.authenticationService.setId(data.id);
        this.authenticationService.setName(data.user);
        this.authentication = this.authService.logIn();
        this.router.navigate(['movie-list']);
      }, err => {
        if (err.status == 401) {
          this.userInvalid = true;

        }
      }
    );
  }

}
