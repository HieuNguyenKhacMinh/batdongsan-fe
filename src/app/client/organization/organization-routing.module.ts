import { OrganizationDetailComponent } from './detail/detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizationComponent } from './organization.component';

const routes: Routes = [
  { path: '', component: OrganizationComponent, pathMatch: '**' },
  
{
    path: ':id',
    component: OrganizationDetailComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
