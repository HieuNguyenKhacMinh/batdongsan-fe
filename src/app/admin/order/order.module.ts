import { MaterialModule } from './../../material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { OrderService } from './order.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateOrderComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteOrderComponent } from './delete/delete.component';
import { OrderRoutingModule } from './order-routing.module';

 

@NgModule({
  declarations: [OrderComponent, CreateOrderComponent, DeleteOrderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    OrderRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [OrderService],
  entryComponents: [
    CreateOrderComponent, DeleteOrderComponent
  ],
})
export class OrderModule { }
