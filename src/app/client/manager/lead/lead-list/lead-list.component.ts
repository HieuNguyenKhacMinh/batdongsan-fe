import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { LeadService } from '../lead.service';
import { CreateLeadComponent } from '../create/create.component';
import { DeleteLeadComponent } from '../delete/delete.component';

@Component({
    selector: 'selector-client-manager-lead-lead-list',
    templateUrl: 'lead-list.component.html',
    styleUrls: ['./lead-list.component.scss']
})

export class LeadListComponent implements OnInit {

  constructor(private leadService: LeadService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    //get table properties
    this.leadService.getProperties().subscribe((res: any) => {
      // change column display
      this.properties = res.content;
      this.columnsToDisplay = Object.keys(res.content)
      .sort((a: any, b: any) => (this.properties[a].order > this.properties[b].order) ? 1 : ((this.properties[b].order > this.properties[a].order) ? -1 : 0));
      this.columnsToDisplay.push('action');
    })
   
    this.getDatasource();
  }

  getDatasource() {
 // set datasource
 this.leadService.all().subscribe((res: any) => {
  this.dataSource = res;
})
  }

  dataSource: any;
  columnsToDisplay: any;
  expandedElement: any | null | undefined;
  properties: any;
  openDialog(dataSource?: any): void {
    const dialogRef = this.dialog.open(CreateLeadComponent, {
      width: '550px',
      data: {properties: this.properties, dataSource}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getDatasource();
    });
  }
  confirmDialog(dataSource?: any): void {
    const dialogRef = this.dialog.open(DeleteLeadComponent, {
      width: '550px',
      data: {properties: this.properties, dataSource}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getDatasource();
    });
  }
}


