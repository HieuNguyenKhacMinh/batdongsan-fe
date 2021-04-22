import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipelineComponent } from './pipeline.component';

const routes: Routes = [
  { path: '', component: PipelineComponent, pathMatch: '**' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipelineRoutingModule { }
