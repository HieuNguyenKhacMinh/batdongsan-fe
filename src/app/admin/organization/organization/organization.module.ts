import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationComponent } from './organization.component';
import { OrganizationService } from './organization.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateOrganizationComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteOrganizationComponent } from './delete/delete.component';
import { OrganizationRoutingModule } from './organization-routing.module';
import { MaterialModule } from '../../../material-module';
 

@NgModule({
  declarations: [OrganizationComponent, CreateOrganizationComponent, DeleteOrganizationComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    OrganizationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [OrganizationService],
  entryComponents: [
    CreateOrganizationComponent, DeleteOrganizationComponent
  ],
})
export class OrganizationModule { }
