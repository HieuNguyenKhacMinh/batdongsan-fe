import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CreateLeadComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteLeadComponent } from './delete/delete.component';
import { LeadRoutingModule } from './lead-routing.module';
import { MaterialModule } from '../../../material-module';
import { LeadService } from './lead.service';
import { LeadComponent } from './lead.component';
 

@NgModule({
  declarations: [LeadComponent, CreateLeadComponent, DeleteLeadComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    LeadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LeadService],
  entryComponents: [
    CreateLeadComponent, DeleteLeadComponent
  ],
})
export class LeadModule { }
