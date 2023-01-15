import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isLoginMode = true ; 
  
  onSwitchMode(){
    // this.isLoginMode = false
    this.isLoginMode = !this.isLoginMode
  }
}
