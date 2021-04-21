import { PostListComponent } from './post-list/post-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post.component';

const routes: Routes = [{
  path: "",
  component: PostComponent,
  children: [
    {
      path: "list",
      component: PostListComponent
    },
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
    }],
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
export class PostRoutingModule { }
