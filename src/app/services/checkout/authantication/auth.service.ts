import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

const AUTH_API = environment.api;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true // This is the important part
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn: boolean = false;
  private loggedInEmail: string = '';
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + '/auth/signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + '/auth/signup',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }
  getIsLoggedIn(): boolean {
    return this.loggedIn;
  }

  getLoggedInEmaiil(): string {
    return this.loggedInEmail;
  }
  logout(): Observable<any> {
    return this.http.post(AUTH_API + '/auth/signout', { }, httpOptions);
  }
}