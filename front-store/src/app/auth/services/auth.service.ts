import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';
import { AuthData } from '../models/authModels';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string): Promise<AuthData[]> {
    const authData: AuthData = { email: email, password: password };
    return firstValueFrom(
      this.http.post<AuthData[]>(environment.baseApi + 'signup', authData)
    );
  }
}
