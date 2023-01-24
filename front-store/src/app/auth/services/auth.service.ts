import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';
// Models
import { AuthData } from '../models/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})


export class AuthService {
  loggedIn : boolean = false
  constructor(private http: HttpClient , private router:Router) {}

   getAmdins(email:string):Promise<boolean>{
    return firstValueFrom(
      this.http.get<boolean>(environment.baseApi + 'admins'+ email)
    )
   }
  
  signIn(email: string, password: string): Promise<any> { 
    this.loggedIn = true 

    const authData: AuthData = { email: email, password: password };
    return firstValueFrom(
      this.http.post<AuthData[]>(environment.baseApi + 'auth/login', authData)
    );
  }


  signUp(email:string , password:string):Promise<AuthData[]>{
    this.loggedIn = false

    const authData: AuthData = { email: email, password: password };
    if(authData){

    }
    return firstValueFrom( 
      this.http.post<AuthData[]>(environment.baseApi + 'admin' ,authData))
  }


  logout(){
    this.loggedIn = false
    localStorage.removeItem('token')
    this.router.navigate(['/auth'])
  }

  IsAuthenticated(){
    return this.loggedIn
  }
}
