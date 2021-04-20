import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { NewsDetailComponent } from './detail/detail.component';
import { CategoryComponent } from './list/list.component';

const routes: Routes = [
    {
        path: '',
        component: NewsComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: '**' },
            {
                path: 'list',
                component: CategoryComponent,
            }, {
                path: ':id',
                component: NewsDetailComponent
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
