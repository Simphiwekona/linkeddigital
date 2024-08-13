import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-quotations',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule,MatMenuModule, MatButtonModule,MatIconModule ],
  templateUrl: './quotations.component.html',
  styleUrl: './quotations.component.css'
})
export class QuotationsComponent {

}
