import { CreatePostComponent } from './post-list/create/create.component';
import { PostListComponent } from './post-list/post-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [{
  path: "",
  component: PostComponent,
  children: [
    {
      path: "list",
      component: PostListComponent
    },
    {
      path: "create",
      component: CreatePostComponent
    },
    {
      path: ":id",
      component: PostDetailComponent
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
