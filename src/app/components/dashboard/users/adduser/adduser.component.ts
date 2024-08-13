import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-adduser',
  standalone: true,
  imports: [],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {

constructor(public dialogRef: MatDialogRef<AdduserComponent>){

}
}
