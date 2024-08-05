import { Component } from '@angular/core';
import { AuthServiceService } from '../../service/auth-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private authService: AuthServiceService, private router: Router){}

  isAdmin(): boolean{
    return this.authService.isAdmin();
  }

  isLoggedIn(): boolean{
    return this.authService.isLoggedIn();
  }

  onLogin(): void {
    this.router.navigate(['login'])
  }
  
  logout(){
    this.authService.logout();
  }

}
