import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  //  isLogedIn:boolean = true

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  isLogedIn(): boolean {
    // console.log('check token');
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}
