import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HouseDirestionComponent } from './housedirestion.component';

const routes: Routes = [
  { path: '', component: HouseDirestionComponent, pathMatch: '**' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseDirestionRoutingModule { }
