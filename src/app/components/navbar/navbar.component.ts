import { Component } from '@angular/core';
import { AuthServiceService } from '../../service/auth-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private authService: AuthServiceService){}

  isAdmin(): boolean{
    return this.authService.isAdmin();
  }
  
  logout(){
    this.authService.logout();
  }

}
