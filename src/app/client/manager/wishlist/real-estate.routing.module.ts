import { ListRealEstateComponent } from './list-real-estate/list-real-estate.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RealEstateComponent } from './real-estate.component';
import { RealEstateDetailComponent } from './detail/detail.component';

const routes: Routes = [{
    path: '',
    component: RealEstateComponent,
    children: [
        { path: '', redirectTo: 'list', pathMatch: '**' },
        {
            path: 'list',
            component: ListRealEstateComponent,
        },
        {
            path: ':id',
            component: RealEstateDetailComponent,
        },
    ],
}];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RealEstateRoutingModule { }
