import { ContactListComponent } from './contact-list/contact-list.component';
import { FormsModule } from '@angular/forms';
import { ContactService } from './contact.service';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { MaterialModule } from '../../../material-module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { DeleteContactComponent } from './delete/delete.component';
import { CreateContactComponent } from './create/create.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ContactRoutingModule,
        MaterialModule,
    ],
    exports: [],
    declarations: [
        ContactComponent,
        ContactListComponent,
        ContactDetailComponent,
        DeleteContactComponent,
        CreateContactComponent
    ],
    entryComponents: [
        DeleteContactComponent,
        CreateContactComponent
    ],
    providers: [ContactService],
})
export class ContactModule { }
