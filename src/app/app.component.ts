import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddClientComponent } from './add-client/add-client.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client Details';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddClientComponent, {
      width: '90%', // Make the dialog full width
      height: '90%', // Make the dialog full height
      panelClass: 'custom-dialog-container', // Use the custom dialog container class
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
