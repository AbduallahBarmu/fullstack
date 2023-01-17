import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { AuthData } from '../../models/auth';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  isLoginMode = true;

  constructor(public authService: AuthService) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  // onSubmit(form:NgForm){
  //   // console.log(form)
  //   if(form.invalid){
  //     return ;
  //   }
  //   this.authService.signIn(form.value.email,form.value.password)
  // }

  async onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    // let authObs :Observable<AuthData>

    if (this.isLoginMode) {
      try {
        await this.authService.signIn(email, password);
        alert('admin logIn successfully');
      } catch (error) {
        alert('admin logIn faild');
      }
   

    } else {
      await this.authService.signUp(email, password);
      alert('admin signUp successfully');
    }

    form.reset();
  }
}
