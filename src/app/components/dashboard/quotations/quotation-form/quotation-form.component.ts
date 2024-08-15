import { Component } from '@angular/core';
import { NavbarComponent } from "../../../navbar/navbar.component";
import { FooterComponent } from "../../../footer/footer.component";
import { FormGroup, FormBuilder, FormsModule } from '@angular/forms';
import { DUMMY_USERS } from '../../../../dummy-users';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ItemDescriptionComponent } from '../item-description/item-description.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-quotation-form',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule, FormsModule, MatIcon],
  templateUrl: './quotation-form.component.html',
  styleUrl: './quotation-form.component.css'
})
export class QuotationFormComponent {
  clientType = '';
  selectedUser : any;
  userData: any = null;
  showModal = false;
  items: any[] = [];
  formData: FormGroup;
  newClientData: FormGroup;
  discount = 0;

  mockUserData = DUMMY_USERS;

  constructor(private fb: FormBuilder, private dialog: MatDialog, private route: ActivatedRoute, private router: Router) {
    this.formData = this.fb.group({
      quatity: [''],
      description: [''],
      unitPrice: ['']
    });

    this.newClientData = this.fb.group({
      customer_name: [''],
      customer_email: [''],
      phoneNumber: [''],
      location: ['']
    });
  }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.selectedUser = DUMMY_USERS.find(user => user.id === userId);
    }
  }

 onOpenItemDescriptionForm(){
  const dialogRef =this.dialog.open(ItemDescriptionComponent, {
    width: '450px',
    height: '450px'
  });

dialogRef.afterClosed().subscribe(result => {
  if (result) {
    this.items.push(result);
  }
})
 }

  handleDiscountChange(event: any) {
    this.discount = event.target.value;
  }

  handleChange(event: any) {
    const { name, value } = event.target;
    this.formData.patchValue({ [name]: value });
  }

  handleNewClientChange(event: any) {
    const { name, value } = event.target;
    this.newClientData.patchValue({ [name]: value });
  }


  calculateTotalSum() {
    return this.items.reduce((sum, item) => sum + parseFloat(item.totalPrice), 0).toFixed(2);
  }

  calculateDiscountTotal() {
    const totalSum = this.calculateTotalSum();
    return (totalSum - (totalSum * (this.discount / 100))).toFixed(2);
  }

  handleClientTypeChange(event: any) {
    this.clientType = event.target.value;
    this.selectedUser = '';
    this.userData = null;
  }

  handleUserChange(event: any) {
    const userId = event.target.value;
    this.selectedUser = userId;
    if (userId) {
      this.userData = this.mockUserData[userId];
    } else {
      this.userData = null;
    }
  }

  onSubmit(){
    this.router.navigate(['/quotation']);
  }

  handleSaveQuote() {
    const payload = {
      clients: this.clientType === 'existing' ? {
        customer_name: this.userData.name,
        customer_email: this.userData.email,
        phoneNumber: this.userData.phoneNumber || '',
        location: this.userData.location || ''
      } : this.newClientData.value,
      products: this.items.map(item => ({
        quantity: item.quatity,
        description: item.description,
        unitPrice: item.unitPrice,
        totalPrice: item.totalPrice
      })),
      discount: parseFloat(this.discount.toString())
    };

    // fetch('http://localhost:8085/api/quotations/create', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(payload),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Success:', data);
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });
  }
}
