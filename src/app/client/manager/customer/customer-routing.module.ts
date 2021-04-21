import { CustomerListComponent } from './customer-list/customer-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';


const routes: Routes = [{
  path: "",
  component: CustomerComponent,
  children: [
    {
      path: "list",
      component: CustomerListComponent
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
export class CustomerRoutingModule { }
