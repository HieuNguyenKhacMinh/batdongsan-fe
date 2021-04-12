import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { NotificationService } from './notification.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateNotificationComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteNotificationComponent } from './delete/delete.component';
import { NotificationRoutingModule } from './notification-routing.module';
import { MaterialModule } from '../../../material-module';
 

@NgModule({
  declarations: [NotificationComponent, CreateNotificationComponent, DeleteNotificationComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    NotificationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NotificationService],
  entryComponents: [
    CreateNotificationComponent, DeleteNotificationComponent
  ],
})
export class NotificationModule { }
