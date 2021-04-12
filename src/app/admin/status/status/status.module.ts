import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './status.component';
import { StatusService } from './status.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateStatusComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatusRoutingModule } from './status-routing.module';
import { MaterialModule } from '../../../material-module';
import { DeleteStatusComponent } from './delete/delete.component';
 

@NgModule({
  declarations: [StatusComponent, CreateStatusComponent, DeleteStatusComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    StatusRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StatusService],
  entryComponents: [
    CreateStatusComponent, DeleteStatusComponent
  ],
})
export class StatusModule { }
