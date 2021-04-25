import { OrganizationRoutingModule } from './organization-routing.module';
import { MaterialModule } from './../../material-module';
import { HttpClientModule } from '@angular/common/http';
import { OrganizationDetailComponent } from './detail/detail.component';
import { NgModule } from '@angular/core';

import { OrganizationComponent } from './organization.component';
import { OrganizationService } from './organization.service';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ CommonModule,
        HttpClientModule,
        MaterialModule,
        OrganizationRoutingModule],
    exports: [],
    declarations: [OrganizationComponent, OrganizationDetailComponent],
    providers: [OrganizationService],
})
export class OrganizationModule { }
