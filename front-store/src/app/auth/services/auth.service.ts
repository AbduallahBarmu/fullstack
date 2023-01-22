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
  constructor(private http: HttpClient , private router:Router) {}


  
  signIn(email: string, password: string): Promise<any> { 
    const authData: AuthData = { email: email, password: password };
    return firstValueFrom(
      this.http.post<AuthData[]>(environment.baseApi + 'auth/login', authData)
    );
  }


  signUp(email:string , password:string):Promise<AuthData[]>{
    const authData: AuthData = { email: email, password: password };
    return firstValueFrom( 
      this.http.post<AuthData[]>(environment.baseApi + 'admin' ,authData))
  }


  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/auth'])
  }
}
