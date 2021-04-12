import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateProductComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteProductComponent } from './delete/delete.component';
import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from '../../../material-module';
 

@NgModule({
  declarations: [ProductComponent, CreateProductComponent, DeleteProductComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  entryComponents: [
    CreateProductComponent, DeleteProductComponent
  ],
})
export class ProductModule { }
