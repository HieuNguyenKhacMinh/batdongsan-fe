import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormalityComponent } from './formality.component';
import { FormalityService } from './formality.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateFormalityComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteFormalityComponent } from './delete/delete.component';
import { FormalityRoutingModule } from './formality-routing.module';
import { MaterialModule } from '../../../material-module';
 

@NgModule({
  declarations: [FormalityComponent, CreateFormalityComponent, DeleteFormalityComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormalityRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FormalityService],
  entryComponents: [
    CreateFormalityComponent, DeleteFormalityComponent
  ],
})
export class FormalityModule { }
