import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUsersComponent } from '../create/create.component';
import { DeactiveUsersComponent } from '../deactive/deactive.component';
import { DeleteUsersComponent } from '../delete/delete.component';
import { UserService } from '../users.service';

@Component({
  selector: 'selector-client-manager-usres-usres-detail',
  templateUrl: 'users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})

export class UsersListComponent implements OnInit {

  constructor(private userService: UserService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    //get table properties
    this.userService.getProperties().subscribe((res: any) => {
      // change column display
      this.properties = res.content;
      const arr = ["organization_id", "password"]
      this.columnsToDisplay = Object.keys(res.content).filter(c => !arr.includes(c));
      const role = localStorage.getItem("user_role");
      if (0 === +role) {
        this.columnsToDisplay.push('action');
      }
    })

    this.getDatasource();
  }

  getDatasource() {
    // set datasource
    this.userService.all().subscribe((res: any) => {
      this.dataSource = res;
    })
  }

  dataSource: any;
  columnsToDisplay: any;
  expandedElement: any | null | undefined;
  properties: any;
  openDialog(dataSource?: any): void {
    const dialogRef = this.dialog.open(CreateUsersComponent, {
      width: '550px',
      data: { properties: this.properties, dataSource }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getDatasource();
    });
  }
  confirmDialog(dataSource?: any): void {
    const dialogRef = this.dialog.open(DeleteUsersComponent, {
      width: '550px',
      data: { properties: this.properties, dataSource }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getDatasource();
    });
  }
  confirmDeactiveDialog(dataSource?: any): void {
    const dialogRef = this.dialog.open(DeactiveUsersComponent, {
      width: '550px',
      data: { properties: this.properties, dataSource }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getDatasource();
    });
  }

  active(dataSource?: any): void {
    this.userService.active(dataSource).subscribe(res => {
      this.getDatasource();
    })
  }
}
