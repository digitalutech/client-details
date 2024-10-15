import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
  companyDetails = {
    name: '',
    type: '',
    address: '',
    link: '',
    description: ''
  };

  contactPersons: any[] = [{ name: '', position: '', phone: '', email: '' }];

  addContactPerson() {
    this.contactPersons.push({ name: '', position: '', phone: '', email: '' });
  }

  submitForm() {
    console.log('Company Details:', this.companyDetails);
    console.log('Contact Persons:', this.contactPersons);
    // Handle form submission logic here
  }
  constructor(public dialogRef: MatDialogRef<AddClientComponent>) {}

  closeDialog(): void {
    this.dialogRef.close(); // Close the dialog
  }
}
