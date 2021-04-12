import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvinceCityComponent } from './provincecity.component';
import { ProvinceCityService } from './provincecity.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateProvinceCityComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteProvinceCityComponent } from './delete/delete.component';
import { ProvinceCityRoutingModule } from './provincecity-routing.module';
import { MaterialModule } from '../../../material-module';
 

@NgModule({
  declarations: [ProvinceCityComponent, CreateProvinceCityComponent, DeleteProvinceCityComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ProvinceCityRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProvinceCityService],
  entryComponents: [
    CreateProvinceCityComponent, DeleteProvinceCityComponent
  ],
})
export class ProvinceCityModule { }
