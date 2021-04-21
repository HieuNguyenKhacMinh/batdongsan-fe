import { ContactService } from './../../../admin/contact/contact/contact.service';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { MaterialModule } from '../../../material-module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
    imports: [  
        CommonModule,
        HttpClientModule,
        MaterialModule,
        ContactRoutingModule,
    ],
    exports: [],
    declarations: [ContactComponent, ContactDetailComponent],
    providers: [ContactService],
})
export class ContactModule { }
