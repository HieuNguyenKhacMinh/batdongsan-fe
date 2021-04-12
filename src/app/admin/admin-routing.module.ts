import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [{
    path: '',
    component: AdminComponent,
    children: [
        { path: '', redirectTo: 'category', pathMatch: '**' },
        {
            path: 'category',
            loadChildren: () => import('./category/category/category.module').then(m => m.CategoryModule)
        },
         {
            path: 'status',
            loadChildren: () => import('./status/status/status.module').then(m => m.StatusModule)
        }, {
            path: 'wards',
            loadChildren: () => import('./wards/wards/wards.module').then(m => m.WardsModule)
        }, {
            path: 'formality',
            loadChildren: () => import('./formality/formality/formality.module').then(m => m.FormalityModule)
        },{
            path: 'notificationtype',
            loadChildren: () => import('./notification-type/notification-type/notification-type.module').then(m => m.NotificationTypeModule)
        },{
            path: 'provincecity',
            loadChildren: () => import('./province-city/province-city/provincecity.module').then(m => m.ProvinceCityModule)
        },{
            path: 'project',
            loadChildren: () => import('./project/poject/project.module').then(m => m.ProjectModule)
        },
        {
            path: 'post',
            loadChildren: () => import('./post/post/post.module').then(m => m.PostModule)
        },
        {
            path: 'district',
            loadChildren: () => import('./district/district/district.module').then(m => m.DistrictModule)
        },
        {
            path: 'producttype',
            loadChildren: () => import('./product-type/product-type/product-type.module').then(m => m.ProductTypeModule)
        },{
            path: 'organization',
            loadChildren: () => import('./organization/organization/organization.module').then(m => m.OrganizationModule)
        },{
            path: 'widget',
            loadChildren: () => import('./widget/widget/widget.module').then(m => m.WidgetModule)
        },{
            path: 'lead',
            loadChildren: () => import('./lead/lead/lead.module').then(m => m.LeadModule)
        },{
            path: 'comment',
            loadChildren: () => import('./comment/comment/comment.module').then(m => m.CommentModule)
        },{
            path: 'dashboard',
            loadChildren: () => import('./dashboard/dashboard/dashboard.module').then(m => m.DashboardModule)
        },{
            path: 'user',
            loadChildren: () => import('./user/user/user.module').then(m => m.UserModule)
        },{
            path: 'product',
            loadChildren: () => import('./product/product/product.module').then(m => m.ProductModule)
        },
        {
            path: 'house-direstion',
            loadChildren: () => import('./house-direstion/house-direstion/housedirestion.module').then(m => m.HouseDirestionModule)
        },{
            path: 'notification',
            loadChildren: () => import('./notification/notification/notification.module').then(m => m.NotificationModule)
        },{
            path: 'readstatus',
            loadChildren: () => import('./read-status/read-status/read-status.module').then(m => m.ReadStatusModule)
        },{
            path: 'comment',
            loadChildren: () => import('./comment/comment/comment.module').then(m => m.CommentModule)
        },{
            path: 'message',
            loadChildren: () => import('./message/massage/message.module').then(m => m.MessageModule)
        },{
            path: 'address',
            loadChildren: () => import('./address/address/address.module').then(m => m.AddressModule)
        },
    ]
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
export class AdminRoutingModule { }
