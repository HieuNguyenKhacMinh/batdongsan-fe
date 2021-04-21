import { LeadListComponent } from './lead-list/lead-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeadComponent } from './lead.component';

const routes: Routes = [{
  path: "",
  component: LeadComponent,
  children: [
    {
      path: "list",
      component: LeadListComponent
    },
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
    }],
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadRoutingModule { }
