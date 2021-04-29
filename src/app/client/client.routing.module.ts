import { CreateRealEstateComponent } from './create-real-estate/create-real-estate.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';

const routes: Routes = [{
  path: '',
  component: ClientComponent,
  children: [
    { path: '', redirectTo: 'real-estate', pathMatch: 'full' },
    {
      path: "news",
      loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
    },
    {
      path: "real-estate",
      loadChildren: () => import('./real-estate/real-estate.module').then(m => m.RealEstateModule)
    },
    {
      path: "buy-hire",
      loadChildren: () => import('./buy-hire/buy-hire.module').then(m => m.BuyHireModule)
    },
    {
      path: "projects",
      loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)
    },
    {
      path: "manager",
      loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule)
    },
    {
      path: "organization",
      loadChildren: () => import('./organization/organization.module').then(m => m.OrganizationModule)
    },
    {
      path: "page",
      loadChildren: () => import('./page/page.module').then(m => m.PageModule)
    },
    {
      path: "create-real-estate",
      component: CreateRealEstateComponent,
    },
  ],
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
