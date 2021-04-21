import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpportunityListComponent } from './opportunity-list/opportunity-list.component';
import { OpportunityComponent } from './opportunity.component';

const routes: Routes = [ {
  path: "",
  component: OpportunityComponent,
  children: [
  {
    path: "list",
   component: OpportunityListComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }],}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpportunityRoutingModule { }
