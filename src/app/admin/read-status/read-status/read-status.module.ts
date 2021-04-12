import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadStatusComponent } from './read-status.component';
import { ReadStatusService } from './read-status.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateReadStatusComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteReadStatusComponent } from './delete/delete.component';
import { ReadStatusRoutingModule } from './read-status-routing.module';
import { MaterialModule } from '../../../material-module';
 

@NgModule({
  declarations: [ReadStatusComponent, CreateReadStatusComponent, DeleteReadStatusComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReadStatusRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ReadStatusService],
  entryComponents: [
    CreateReadStatusComponent, DeleteReadStatusComponent
  ],
})
export class ReadStatusModule { }
