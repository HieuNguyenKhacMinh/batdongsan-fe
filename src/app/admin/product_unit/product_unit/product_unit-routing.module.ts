import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductUnitComponent } from './product_unit.component';

const routes: Routes = [
  { path: '', component: ProductUnitComponent, pathMatch: '**' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductUnitRoutingModule { }
