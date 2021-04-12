import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WardsComponent } from './wards.component';

const routes: Routes = [
  { path: '', component: WardsComponent, pathMatch: '**' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WardsRoutingModule { }
