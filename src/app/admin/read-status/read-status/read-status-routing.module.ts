import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadStatusComponent } from './read-status.component';

const routes: Routes = [
  { path: '', component: ReadStatusComponent, pathMatch: '**' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadStatusRoutingModule { }
