import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country.component';
import { CountryService } from './country.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateCountryComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteCountryComponent } from './delete/delete.component';
import { MaterialModule } from '../../../material-module';
import { CountryRoutingModule } from './country-routing.module'

@NgModule({
  declarations: [CountryComponent, CreateCountryComponent, DeleteCountryComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    CountryRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CountryService],
  entryComponents: [
    CreateCountryComponent, DeleteCountryComponent
  ],
})
export class CountryModule { }
