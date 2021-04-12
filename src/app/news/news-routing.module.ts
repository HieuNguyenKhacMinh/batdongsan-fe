import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [{
    path: '',
    component: NewsComponent,
    children: [{
        path: ':id',
        component: PostComponent
    },]
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
export class NewsRoutingModule { }
