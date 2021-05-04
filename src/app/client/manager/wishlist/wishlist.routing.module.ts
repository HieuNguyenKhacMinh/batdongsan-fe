import { ListWishlistComponent } from './list-wishlist/list-wishlist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishlistComponent } from './wishlist.component';
import {  WishlistDetailComponent } from './detail/detail.component';

const routes: Routes = [{
    path: '',
    component: WishlistComponent,
    children: [
        { path: '', redirectTo: 'list', pathMatch: '**' },
        {
            path: 'list',
            component: ListWishlistComponent,
        },
        {
            path: ':id',
            component: WishlistDetailComponent,
        },
    ],
}];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RealEstateRoutingModule { }
