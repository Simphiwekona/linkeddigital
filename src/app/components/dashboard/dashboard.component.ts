import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { UsersComponent } from './users/users.component';
import { StatesComponent } from "./states/states.component";
import { TasksComponent } from "./tasks/tasks.component";
import { FloatingButtonComponent } from './floating-button/floating-button.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, UsersComponent, StatesComponent, TasksComponent, FloatingButtonComponent, ChatBoxComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isChatBoxOpen: boolean = false;

  toggleChatBox() {
    this.isChatBoxOpen = !this.isChatBoxOpen;
  }

}
