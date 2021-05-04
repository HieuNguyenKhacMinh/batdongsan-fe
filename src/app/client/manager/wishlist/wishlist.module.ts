import { WishlistService } from './/wishlist.service';
import { WishlistProjectComponent } from './list-wishlist/project/project.component';
import { WishlistSellComponent } from './list-wishlist/sell/sell.component';
import { WishlistBuyComponent } from './list-wishlist/buy/buy.component';
import { WishlistPostComponent } from './list-wishlist/post/post.component';
import { WishlistDetailComponent } from './detail/detail.component';
import { WishlistComponent } from './wishlist.component';
import { RealEstateRoutingModule } from './wishlist.routing.module';
import { MaterialModule } from '../../../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ListWishlistComponent } from './list-wishlist/list-wishlist.component';
import { RealEstateService } from './real.estate.service';

@NgModule({
    imports: [
        RealEstateRoutingModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
    ],
    exports: [],
    declarations: [
        WishlistComponent,
        ListWishlistComponent,
        WishlistDetailComponent,
        WishlistPostComponent,
        WishlistBuyComponent,
        WishlistSellComponent,
        WishlistProjectComponent
    ],
    providers: [
        RealEstateService,
        WishlistService
    ],
})
export class WishlistModule { }
