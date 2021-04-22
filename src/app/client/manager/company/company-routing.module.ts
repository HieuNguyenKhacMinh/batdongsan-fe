import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyComponent } from './company.component';

const routes: Routes = [{
  path: "",
  component: CompanyComponent,
  children: [

    {
      path: "info",
      component: CompanyDetailComponent
    },
    {
      path: '',
      redirectTo: 'info',
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
