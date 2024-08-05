import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../../dummy-users';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatButtonModule,MatIconModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users = DUMMY_USERS;
}
