import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseDirestionService } from './housedirestion.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateHouseDirestionComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteHouseDirestionComponent } from './delete/delete.component';
import { HouseDirestionRoutingModule } from './housedirestion-routing.module';
import { MaterialModule } from '../../../material-module';
import { HouseDirestionComponent } from './housedirestion.component';
 

@NgModule({
  declarations: [HouseDirestionComponent, CreateHouseDirestionComponent, DeleteHouseDirestionComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    HouseDirestionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HouseDirestionService],
  entryComponents: [
    CreateHouseDirestionComponent, DeleteHouseDirestionComponent
  ],
})
export class HouseDirestionModule { }
