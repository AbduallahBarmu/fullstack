import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/services/admin.service';
import { AuthService } from 'src/app/auth/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  //  isLogedIn:boolean = true

  constructor(
    private route: Router,
    public authService: AuthService,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {}

  isLogedIn() {
    // console.log('check token');
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}
