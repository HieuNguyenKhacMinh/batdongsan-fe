import { PipelineModule } from './../../admin/pipeline/pipeline/pipeline.module';
import { ManagerComponent } from './manager.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: ManagerComponent,
  children: [
    {
      path: "company",
      loadChildren: () => import('./company/company.module').then(m => m.CompanyModule)
    },
    {
      path: "contact",
      loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
    },
    {
      path: "customer",
      loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
    },
    {
      path: "lead",
      loadChildren: () => import('./lead/lead.module').then(m => m.LeadModule)
    },
    {
      path: "opportunity",
      loadChildren: () => import('./opportunity/opportunity.module').then(m => m.OpportunityModule)
    },
    {
      path: "post",
      loadChildren: () => import('./post/post.module').then(m => m.PostModule)
    },
    {
      path: "project",
      loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)
    },
    {
      path: "users",
      loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
    },
    {
      path: "pipeline",
      loadChildren: () => import('./pipeline/pipeline.module').then(m => m.PipelineModule)
    },
    {
      path: "notification",
      loadChildren: () => import('./notification/notification.module').then(m => m.NotificationModule)
    },
    {
      path: '',
      redirectTo: 'company',
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
export class ManagerRoutingModule { }
