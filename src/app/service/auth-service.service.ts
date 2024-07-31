import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DUMMY_USERS } from '../dummy-users';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router: Router) { }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  login(username: string, password: string): boolean {
    const user = DUMMY_USERS.find(
      (u) => u.userName === username && u.password === password
    );

    if (user && this.isBrowser()) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      if(user.role === 'admin'){
        this.router.navigate(['/dashboard']);
      }else {
        this.router.navigate(['/home']);
      }
      return true;
    }
    return false;
  }

  logout(): void {
    if(this.isBrowser()){
      localStorage.removeItem('currentUser');
      this.router.navigate(['/login']);
    }
  }

  getCurrentUser(): any {
    if (this.isBrowser()){
      return JSON.parse(localStorage.getItem('currentUser')!);  
    }
    return null;
  }

  isAdmin(): boolean {
    const user = this.getCurrentUser();
    return user && user.role === 'admin';
  }

  isLoggedIn(): boolean {
    if(this.isBrowser()){
      return !!localStorage.getItem('currentUser');  
    }
    return false;
  }
}
