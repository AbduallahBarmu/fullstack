import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  isLogedIn :boolean = true

  constructor() { }


  // onSwitchMode(){
  //   this.isLogedIn = !this.isLogedIn
  // }
  

}
