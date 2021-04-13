import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductUnitComponent } from './product_unit.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateProductUnitComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteProductUnitComponent } from './delete/delete.component';
import { MaterialModule } from '../../../material-module';
import { ProductUnitRoutingModule } from './product_unit-routing.module'
import { ProductUnitService } from './product_unit.service';
@NgModule({
  declarations: [ProductUnitComponent, CreateProductUnitComponent, DeleteProductUnitComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ProductUnitRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductUnitService],
  entryComponents: [
    CreateProductUnitComponent, DeleteProductUnitComponent
  ],
})
export class ProductUnitModule { }
