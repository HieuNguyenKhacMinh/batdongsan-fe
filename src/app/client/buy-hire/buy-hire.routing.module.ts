import { ListBuyHireComponent } from './list-buy-hire/list-buy-hire.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyHireComponent } from './buy-hire.component';
import { BuyHireDetailComponent } from './detail/detail.component';

const routes: Routes = [{
    path: '',
    component: BuyHireComponent,
    children: [
        { path: '', redirectTo: 'list', pathMatch: '**' },
        {
            path: 'list',
            component: ListBuyHireComponent,
        },
        {
            path: ':id',
            component: BuyHireDetailComponent,
        },
    ],
}];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BuyHireRoutingModule { }
