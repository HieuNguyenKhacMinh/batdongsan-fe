import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ProjectTypeService } from './project-type.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateProjectTypeComponent } from './create/create.component';
import { DeleteProjectTypeComponent } from './delete/delete.component';

@Component({
  selector: 'app-project-type',
  templateUrl: './project-type.component.html',
  styleUrls: ['./project-type.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProjectTypeComponent implements OnInit {

  constructor(private projecttypeService: ProjectTypeService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    //get table properties
    this.projecttypeService.getProperties().subscribe((res: any) => {
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
 this.projecttypeService.all().subscribe((res: any) => {
  this.dataSource = res;
})
  }

  dataSource: any;
  columnsToDisplay: any;
  expandedElement: any | null | undefined;
  properties: any;
  openDialog(dataSource?: any): void {
    const dialogRef = this.dialog.open(CreateProjectTypeComponent, {
      width: '550px',
      data: {properties: this.properties, dataSource}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getDatasource();
    });
  }
  confirmDialog(dataSource?: any): void {
    const dialogRef = this.dialog.open(DeleteProjectTypeComponent, {
      width: '550px',
      data: {properties: this.properties, dataSource}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getDatasource();
    });
  }
}


