import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateContactComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteContactComponent } from './delete/delete.component';
import { ContactRoutingModule } from './contact-routing.module';
import { MaterialModule } from '../../../material-module';
 

@NgModule({
  declarations: [ContactComponent, CreateContactComponent, DeleteContactComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ContactService],
  entryComponents: [
    CreateContactComponent, DeleteContactComponent
  ],
})
export class ContactModule { }
