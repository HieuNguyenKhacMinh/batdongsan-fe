import { DeleteProjectComponent } from './delete/delete.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';
import { ListProjectComponent } from './list/list.component';
import { ProjectDetailComponent } from './detail/detail.component';
import {  CreateProjectectComponent } from './list/create/create.component';
const routes: Routes = [{
  path: '',
  component: ProjectComponent,
  children: [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    {
      path: "list",
      component: ListProjectComponent,
    },
    {
      path: ":id",
      component: ProjectDetailComponent,
    },
    {
      path: "create",
      component: CreateProjectectComponent,
    },
    {
      path: "delete",
      component: DeleteProjectComponent,
    },
  ],
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
