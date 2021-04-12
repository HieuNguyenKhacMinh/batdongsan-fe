import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CreateNotificationTypeComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteNotificationTypeComponent } from './delete/delete.component';
import { NotificationTypeRoutingModule } from './notification-type-routing.module';
import { MaterialModule } from '../../../material-module';
import { NotificationTypeComponent } from './notification-type-type.component';
import { NotificationTypeService } from './notification-type-type.service';
 

@NgModule({
  declarations: [NotificationTypeComponent, CreateNotificationTypeComponent, DeleteNotificationTypeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    NotificationTypeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NotificationTypeService],
  entryComponents: [
    CreateNotificationTypeComponent, DeleteNotificationTypeComponent
  ],
})
export class NotificationTypeModule { }
