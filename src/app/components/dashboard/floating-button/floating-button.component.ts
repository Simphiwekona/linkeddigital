import { Component, EventEmitter, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ChatBoxComponent } from '../chat-box/chat-box.component';

@Component({
  selector: 'app-floating-button',
  standalone: true,
  imports: [MatIcon, ChatBoxComponent],
  templateUrl: './floating-button.component.html',
  styleUrl: './floating-button.component.css'
})
export class FloatingButtonComponent {
  @Output() chatToggle = new EventEmitter<void>();

  toggleChat() {
    this.chatToggle.emit();
  }
}
