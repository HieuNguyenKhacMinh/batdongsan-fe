import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WardsComponent } from './wards.component';
import { WardsService } from './wards.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateWardsComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WardsRoutingModule } from './wards-routing.module';
import { MaterialModule } from '../../../material-module';
import { DeleteWardsComponent } from './delete/delete.component';
 

@NgModule({
  declarations: [WardsComponent, CreateWardsComponent, DeleteWardsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    WardsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WardsService],
  entryComponents: [
    CreateWardsComponent, DeleteWardsComponent
  ],
})
export class WardsModule { }
