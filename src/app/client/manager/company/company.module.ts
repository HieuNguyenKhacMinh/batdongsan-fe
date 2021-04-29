import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyService } from './company.service';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { MaterialModule } from './../../../material-module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CompanyComponent } from './company.component';
import { CompanyRoutingModule } from './company-routing.module';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        MaterialModule,
        CompanyRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [],
    declarations: [CompanyComponent,
        CompanyListComponent,
        CompanyDetailComponent],
    providers: [CompanyService],
})
export class CompanyModule { }
