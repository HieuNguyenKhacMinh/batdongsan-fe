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
  ],
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
