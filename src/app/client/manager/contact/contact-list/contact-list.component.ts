import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactService } from '../contact.service';
import { CreateContactComponent } from '../create/create.component';
import { DeleteContactComponent } from '../delete/delete.component';

@Component({
    selector: 'selector-client-manager-contact-contact-list',
    templateUrl: 'contact-list.component.html',
    styleUrls: ['./contact-list.component.scss']
})

export class ContactListComponent implements OnInit {

    constructor(private contactService: ContactService, public dialog: MatDialog) {

    }

    dataSource: any;
    columnsToDisplay: any;
    expandedElement: any | null | undefined;
    properties: any;
    
    ngOnInit(): void {
        //get table properties
        this.contactService.getProperties().subscribe((res: any) => {
            // change column display
            this.properties = res.content;
            this.columnsToDisplay = Object.keys(res.content);
            this.columnsToDisplay.push('action');
            console.log(this.columnsToDisplay);

        })

        this.getDatasource();
    }

    getDatasource() {
        // set datasource
        this.contactService.all().subscribe((res: any) => {
            this.dataSource = res;
        })
    }

    openDialog(dataSource?: any): void {
        const dialogRef = this.dialog.open(CreateContactComponent, {
            width: '550px',
            data: { properties: this.properties, dataSource }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');

            this.getDatasource();
        });
    }
    confirmDialog(dataSource?: any): void {
        const dialogRef = this.dialog.open(DeleteContactComponent, {
            width: '550px',
            data: { properties: this.properties, dataSource }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');

            this.getDatasource();
        });
    }
}