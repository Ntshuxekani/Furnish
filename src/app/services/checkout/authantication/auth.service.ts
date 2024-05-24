import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;
  private loggedInEmail: string = '';

  constructor() { }
  login(email: string): void {
    this.loggedIn = true;
    this.loggedInEmail = email;
    localStorage.setItem('loggedInEmail', email);
  }

  
  logout(): void {
    this.loggedIn = false;
    this.loggedInEmail = '';
    localStorage.removeItem('loggedInEmail');
     }

  getIsLoggedIn(): boolean {
    return this.loggedIn;
  }

  getLoggedInEmaiil(): string {
    return this.loggedInEmail;
  }

  initAuth():void {
    const userEmail = localStorage.getItem('loggedInEmail');
    if(userEmail) {
      this.login(userEmail);
    }
  }
}
