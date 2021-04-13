import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { BalconyDirectionService } from './balcony-direction.service';
import { CreateBalconyDirectionComponent } from './create/create.component';
import { DeleteBalconyDirectionComponent } from './delete/delete.component';


@Component({
  selector: 'app- balcony-direction',
  templateUrl: './balcony-direction.component.html',
  styleUrls: ['./balcony-direction.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class BalconyDirectionComponent implements OnInit {

  constructor(private balconydirectionService: BalconyDirectionService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    //get table properties
    this.balconydirectionService.getProperties().subscribe((res: any) => {
      // change column display
      this.properties = res.content;
      this.columnsToDisplay = Object.keys(res.content);
      this.columnsToDisplay.push('action');
    })

    this.getDatasource();
  }

  getDatasource() {
    // set datasource
    this.balconydirectionService.all().subscribe((res: any) => {
      this.dataSource = res;
    })
  }

  dataSource: any;
  columnsToDisplay: any;
  expandedElement: any | null | undefined;
  properties: any;
  openDialog(dataSource?: any): void {
    const dialogRef = this.dialog.open(CreateBalconyDirectionComponent, {
      width: '550px',
      data: { properties: this.properties, dataSource }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getDatasource();
    });
  }
  confirmDialog(dataSource?: any): void {
    const dialogRef = this.dialog.open(DeleteBalconyDirectionComponent, {
      width: '550px',
      data: { properties: this.properties, dataSource }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getDatasource();
    });
  }
}

