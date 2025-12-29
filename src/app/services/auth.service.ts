import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn() {
    return !!localStorage.getItem('user');
  }

  login(email: string, password: string) {
    const users = JSON.parse(localStorage.getItem('users') || "[]");
    const user = users.find((u:any) => u.email === email && u.password === password);

    if (!user) return false;

    localStorage.setItem('user', email);
    return true;
  }

  register(email: string, password: string) {
    const users = JSON.parse(localStorage.getItem('users') || "[]");

    const exists = users.find((u:any) => u.email === email);
    if (exists) return false;

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  logout() {
    localStorage.removeItem('user');
  }

  getUser() {
    return localStorage.getItem('user');
  }
}
