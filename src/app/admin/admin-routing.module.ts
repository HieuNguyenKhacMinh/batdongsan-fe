import { PipelineModule } from './pipeline/pipeline/pipeline.module';

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
            path: 'menu',
            loadChildren: () => import('./menu/menu/menu.module').then(m => m.MenuModule)
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
        }, {
            path: 'notification-type',
            loadChildren: () => import('./notification-type/notification-type/notification-type.module').then(m => m.NotificationTypeModule)
        }, {
            path: 'province-city',
            loadChildren: () => import('./province-city/province-city/provincecity.module').then(m => m.ProvinceCityModule)
        }, {
            path: 'project',
            loadChildren: () => import('./project/poject/project.module').then(m => m.ProjectModule)
        },{
            path: 'country',
            loadChildren: () => import('./country/country/country.module').then(m => m.CountryModule)
        },
        {
            path: 'post',
            loadChildren: () => import('./post/post/post.module').then(m => m.PostModule)
        }, {
            path: 'opportunity',
            loadChildren: () => import('./opportunity/opportunity.module').then(m => m.OpportunityModule)
        }, {
            path: 'balcony-direction',
            loadChildren: () => import('./balcony-direction/balcony-direction/balcony-direction.module').then(m => m.BalconyDirectionModule)
        },
        {
            path: 'district',
            loadChildren: () => import('./district/district/district.module').then(m => m.DistrictModule)
        }, {
            path: 'notification',
            loadChildren: () => import('./notification/notification/notification.module').then(m => m.NotificationModule)
        },
        {
            path: 'product-type',
            loadChildren: () => import('./product-type/product-type/product-type.module').then(m => m.ProductTypeModule)
        }, {
            path: 'organization',
            loadChildren: () => import('./organization/organization/organization.module').then(m => m.OrganizationModule)
        }, {
            path: 'widget',
            loadChildren: () => import('./widget/widget/widget.module').then(m => m.WidgetModule)
        }, {
            path: 'lead',
            loadChildren: () => import('./lead/lead/lead.module').then(m => m.LeadModule)
        }, {
            path: 'comment',
            loadChildren: () => import('./comment/comment/comment.module').then(m => m.CommentModule)
        }, {
            path: 'dashboard',
            loadChildren: () => import('./dashboard/dashboard/dashboard.module').then(m => m.DashboardModule)
        }, {
            path: 'user',
            loadChildren: () => import('./user/user/user.module').then(m => m.UserModule)
        }, 
        {
            path: 'hashtag',
            loadChildren: () => import('./hashtag/hashtag/hashtag.module').then(m => m.HashtagModule)
        },
        {
            path: 'house-direstion',
            loadChildren: () => import('./house-direstion/house-direstion/housedirestion.module').then(m => m.HouseDirestionModule)
        }, {
            path: 'notification',
            loadChildren: () => import('./notification/notification/notification.module').then(m => m.NotificationModule)
        }, {
            path: 'readstatus',
            loadChildren: () => import('./read-status/read-status/read-status.module').then(m => m.ReadStatusModule)
        },{
            path: 'page',
            loadChildren: () => import('./page/page/page.module').then(m => m.PageModule)
        }, {
            path: 'comment',
            loadChildren: () => import('./comment/comment/comment.module').then(m => m.CommentModule)
        },{
            path: 'product-type',
            loadChildren: () => import('./product-type/product-type/product-type.module').then(m => m.ProductTypeModule)
        }, {
            path: 'message',
            loadChildren: () => import('./message/massage/message.module').then(m => m.MessageModule)
        }, {
            path: 'contact',
            loadChildren: () => import('./contact/contact/contact.module').then(m => m.ContactModule)
        },{
            path: 'product-unit',
            loadChildren: () => import('./product_unit/product_unit/product_unit.module').then(m => m.ProductUnitModule)
        }, {
            path: 'address',
            loadChildren: () => import('./address/address/address.module').then(m => m.AddressModule)
        },{
            path: 'file',
            loadChildren: () => import('./file/file.module').then(m => m.FileModule)
        },{
            path: 'product',
            loadChildren: () => import('./product/product/product.module').then(m => m.ProductModule)
        },
        {
            path: 'project-type',
            loadChildren: () => import('./project-type/project-type.module').then(m => m.ProjectTypeModule)
        },{
            path: 'order',
            loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
        },{
            path: 'wishlist',
            loadChildren: () => import('./wishlist/wishlist.module').then(m => m.WishlistModule)
        },{
            path: 'pipeline',
            loadChildren: () => import('./pipeline/pipeline/pipeline.module').then(m => m.PipelineModule)
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
