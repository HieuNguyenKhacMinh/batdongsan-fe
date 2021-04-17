import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CreateOpportunityComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteOpportunityComponent } from './delete/delete.component';
import { OpportunityRoutingModule } from './opportunity-routing.module';
import { OpportunityService } from './opportunity.service';
import { OpportunityComponent } from './opportunity.component';
import { MaterialModule } from 'src/app/material-module';
 

@NgModule({
  declarations: [OpportunityComponent, CreateOpportunityComponent, DeleteOpportunityComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    OpportunityRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [OpportunityService],
  entryComponents: [
    CreateOpportunityComponent, DeleteOpportunityComponent
  ],
})
export class OpportunityModule { }
