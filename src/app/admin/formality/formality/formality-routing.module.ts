import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormalityComponent } from './formality.component';

const routes: Routes = [
  { path: '', component: FormalityComponent, pathMatch: '**' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormalityRoutingModule { }
