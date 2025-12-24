import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn() {
    return !!localStorage.getItem('user');
  }
  getUser() {
    return localStorage.getItem('user');
  }
     
  login(email: string, password: string) {
    // simple fake login
    localStorage.setItem('user', email);
    return true;
  }

  logout() {
    localStorage.removeItem('user');
  }
}
