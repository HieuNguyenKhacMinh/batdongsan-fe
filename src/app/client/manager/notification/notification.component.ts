import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NotificationService } from './notification.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateNotificationComponent } from './create/create.component';
import { DeleteNotificationComponent } from './delete/delete.component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class NotificationComponent implements OnInit {

  constructor(private notificationService: NotificationService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.getDatasource();
  }

  getDatasource() {
    // set datasource
    this.notificationService.all().subscribe((res: any) => {
      this.dataSource = res;
    })
  }

  dataSource: any;
  columnsToDisplay: any;
  expandedElement: any | null | undefined;
  properties: any;

}


