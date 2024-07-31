import { Component,Input} from '@angular/core';
import { AuthServiceService } from '../service/auth-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   username: string = '';
   password: string = '';
   errorMessage: string = '';

   constructor(private authService: AuthServiceService, private router: Router){

   }
 

  onLogin(): void {
    if (!this.authService.login(this.username, this.password)){
      this.errorMessage = 'Invalid username or password';
    }
  }
}
