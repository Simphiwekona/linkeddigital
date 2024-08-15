import { Component, OnInit } from '@angular/core';
import { DUMMY_USERS } from '../../../dummy-users';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { AdduserComponent } from './adduser/adduser.component';
import { User } from '../../../models/user.model';
import { UsersService } from '../../../service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatButtonModule,MatIconModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  // users = DUMMY_USERS;
  searchTerm: string = '';

  constructor(private dialog: MatDialog, 
    private router: Router,
    private userService: UsersService){

  }

  onAddUser() {
    this.dialog.open(AdduserComponent, {
      width: '250px',
      height: '400px'
    });
  }
  ngOnInit(): void {
    this.fetchUsers();
  }

  onSearch(event: any): void {
    // this.searchTerm = event.target.value.toLowerCase();
    // this.users = DUMMY_USERS.filter(user =>
    //   user.name?.toLowerCase().includes(this.searchTerm) ||
    //   user.lastName?.toLowerCase().includes(this.searchTerm) ||
    //   user.userName.toLowerCase().includes(this.searchTerm) ||
    //   user.status?.toLowerCase().includes(this.searchTerm) ||
    //   user.role.toLowerCase().includes(this.searchTerm)
    // );
  }

  onCreateQuote(id:number){
      this.router.navigate(['/quotationForm', id])
  }

  fetchUsers(): void {
    this.userService.getAllUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error)
      }
    )
  }
}
