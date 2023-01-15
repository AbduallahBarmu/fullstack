import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isLoginMode = true ; 
  

  constructor(public authService:AuthService){}


  onSwitchMode(){
    // this.isLoginMode = false
    this.isLoginMode = !this.isLoginMode
  }
  onSubmit(form:NgForm){
    if(form.invalid){
      return ; 
    }
    this.authService.signup(form.value.email, form.value.password)
  }
}
