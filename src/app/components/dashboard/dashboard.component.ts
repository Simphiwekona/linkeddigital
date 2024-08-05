import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { UsersComponent } from './users/users.component';
import { StatesComponent } from "./states/states.component";
import { TasksComponent } from "./tasks/tasks.component";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, UsersComponent, StatesComponent, TasksComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
