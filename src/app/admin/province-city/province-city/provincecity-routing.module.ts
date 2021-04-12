import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProvinceCityComponent } from './provincecity.component';

const routes: Routes = [
  { path: '', component: ProvinceCityComponent, pathMatch: '**' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvinceCityRoutingModule { }
