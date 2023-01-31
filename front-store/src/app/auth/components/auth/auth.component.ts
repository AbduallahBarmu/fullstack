import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AuthData } from '../../models/auth';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  isLoading: boolean = false; // initily we are not loading
  errorMessage: string = ''; // should hold an error message
  authData: AuthData[] = [];

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  async onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;

    if (this.isLoginMode) {
      try {
        const res = await this.authService.signIn(email, password);
        // set token in the local storage
        localStorage.setItem('token', res.access_token);

        // redurect route into dashbord page
        this.router.navigate(['/dashboard']);

        this.isLoading = false;
      } catch (error) {
        this.errorMessage = ' LogIn Faild :(';
        this.isLoading = false;
      }
    } else {
      try {
        await this.authService.signUp(email, password);

        this.isLoading = false;
      } catch (error) {
        this.errorMessage = ' SignUp Faild :(';
        this.isLoading = false;
      }
    }
  }
}
