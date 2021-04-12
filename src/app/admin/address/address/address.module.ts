import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address.component';
import { AddressService } from './address.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateAddressComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteAddressComponent } from './delete/delete.component';
import { AddressRoutingModule } from './address-routing.module';
import { MaterialModule } from '../../../material-module';
 

@NgModule({
  declarations: [AddressComponent, CreateAddressComponent, DeleteAddressComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    AddressRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AddressService],
  entryComponents: [
    CreateAddressComponent, DeleteAddressComponent
  ],
})
export class AddressModule { }
