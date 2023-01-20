import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   isLogedIn:boolean = false
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  logOut(){
    this.isLogedIn = false
    this.route.navigate(['/auth'])
    localStorage.clear() // rest TOKEN
  } 
}
