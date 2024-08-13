import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import {
  MatDialogActions,
  MatDialogContainer,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-description',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatDialogTitle,
    MatDialogActions,
    MatDialogContent,
    MatDialogContainer,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.css'], // Corrected styleUrl to styleUrls
})
export class ItemDescriptionComponent implements OnInit {
  formData: FormGroup;
  items: any[] = [];

  constructor(
    private fb: FormBuilder,
    public matDialogRef: MatDialogRef<ItemDescriptionComponent>
  ) {
    this.formData = this.fb.group({
      quantity: ['', [Validators.required, Validators.min(1)]],
      description: ['', Validators.required],
      unitPrice: [0, Validators.required],
      total: [{value: ''}]
    });
  }

  ngOnInit(): void {
    this.onChanges(); // Call onChanges to set up subscriptions
  }

  onChanges(): void {
    this.formData.get('quantity')?.valueChanges.subscribe(() => {
      this.calculateTotal();
    });
    this.formData.get('unitPrice')?.valueChanges.subscribe(() => {
      this.calculateTotal();
    });
  }

  calculateTotal(): void {
    const quantity = this.formData.get('quantity')?.value || 0;
    const unitPrice = this.formData.get('unitPrice')?.value || 0;
    const total = quantity * unitPrice;
    this.formData.get('total')?.setValue(total);
  }

  onSubmit(): void {
    if (this.formData.valid) {
      const newItem = {
        quantity: this.formData.get('quantity')?.value,
        description: this.formData.get('description')?.value,
        unitPrice: this.formData.get('unitPrice')?.value,
        total: this.formData.get('total')?.value
      }

      this.items.push(newItem);
      this.matDialogRef.close(this.formData.value);
    }
  }

  onCancel(): void {
    this.matDialogRef.close();
  }
}
