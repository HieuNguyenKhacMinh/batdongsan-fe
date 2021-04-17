import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ContactService } from './contact.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateContactComponent } from './create/create.component';
import { DeleteContactComponent } from './delete/delete.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    //get table properties
    this.contactService.getProperties().subscribe((res: any) => {
      // change column display
      this.properties = res.content;
      this.columnsToDisplay = Object.keys(res.content);
      this.columnsToDisplay.push('action');
    })
   
    this.getDatasource();
  }

  getDatasource() {
 // set datasource
 this.contactService.all().subscribe((res: any) => {
  this.dataSource = res;
})
  }

  dataSource: any;
  columnsToDisplay: any;
  expandedElement: any | null | undefined;
  properties: any;
  openDialog(dataSource?: any): void {
    const dialogRef = this.dialog.open(CreateContactComponent, {
      width: '550px',
      data: {properties: this.properties, dataSource}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getDatasource();
    });
  }
  confirmDialog(dataSource?: any): void {
    const dialogRef = this.dialog.open(DeleteContactComponent, {
      width: '550px',
      data: {properties: this.properties, dataSource}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getDatasource();
    });
  }
}


