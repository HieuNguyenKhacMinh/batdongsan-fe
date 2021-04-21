import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company.component';

const routes: Routes = [{
  path: "",
  component: CompanyComponent,
  children: [

    {
      path: "list",
      component: CompanyListComponent
    },
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
    }]
},
{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
