import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTypeComponent } from './product-type.component';
import { ProductTypeService } from './product-type.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateProductTypeComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteProductTypeComponent } from './delete/delete.component';
import { MaterialModule } from '../../../material-module';
import { ProductTypeRoutingModule } from './product-type-routing.module';

@NgModule({
  declarations: [ProductTypeComponent, CreateProductTypeComponent, DeleteProductTypeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ProductTypeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductTypeService],
  entryComponents: [
    CreateProductTypeComponent, DeleteProductTypeComponent
  ],
})
export class ProductTypeModule { }
