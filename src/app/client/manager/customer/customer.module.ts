import { CustomerService } from './customer.service';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { MaterialModule } from '../../../material-module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
    imports: [  
        CommonModule,
        HttpClientModule,
        MaterialModule,
        CustomerRoutingModule,
    ],
    exports: [],
    declarations: [CustomerComponent, CustomerDetailComponent],
    providers: [CustomerService],
})
export class CustomerModule { }
