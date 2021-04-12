import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistrictComponent } from './district.component';
import { DistrictService } from './district.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateDistrictComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteDistrictComponent } from './delete/delete.component';
import { DistrictRoutingModule } from './district-routing.module';
import { MaterialModule } from '../../../material-module';
 

@NgModule({
  declarations: [DistrictComponent, CreateDistrictComponent, DeleteDistrictComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    DistrictRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DistrictService],
  entryComponents: [
    CreateDistrictComponent, DeleteDistrictComponent
  ],
})
export class DistrictModule { }
