import { Component } from '@angular/core';

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
}
