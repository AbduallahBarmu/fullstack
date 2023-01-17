import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  isLoginMode: boolean = true;
  isLoading: boolean = false;   // initily we are not loading
  errorMessage: any = null      // should hold an error message 
  
  constructor(public authService: AuthService) {}

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
        await this.authService.signIn(email, password);
        alert('LogIn Successfully :) ');
        this.isLoading = false;
        // redurect root dashbord also must import from constractor 

      } catch (error) {
        this.errorMessage = ' LogIn Faild :('
        this.isLoading = false;
      }
    } else {
      try {
        await this.authService.signUp(email, password);
        // alert('SignUp Successfully :) ');
        this.isLoading = false;
      } catch (error) {
        this.errorMessage = ' SignUp Faild'
        this.isLoading = false;
      }
    }

    form.reset();
  }
}
