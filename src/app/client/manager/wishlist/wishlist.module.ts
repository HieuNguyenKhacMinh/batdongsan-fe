import { WishlistService } from './/wishlist.service';
import { WishlistProjectComponent } from './list-real-estate/project/project.component';
import { WishlistSellComponent } from './list-real-estate/sell/sell.component';
import { WishlistBuyComponent } from './list-real-estate/buy/buy.component';
import { WishlistPostComponent } from './list-real-estate/post/post.component';
import { RealEstateDetailComponent } from './detail/detail.component';
import { RealEstateComponent } from './real-estate.component';
import { RealEstateRoutingModule } from './real-estate.routing.module';
import { MaterialModule } from '../../../material-module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ListRealEstateComponent } from './list-real-estate/list-real-estate.component';
import { RealEstateService } from './real.estate.service';

@NgModule({
    imports: [
        RealEstateRoutingModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        MaterialModule,
    ],
    exports: [],
    declarations: [
        RealEstateComponent,
        ListRealEstateComponent,
        RealEstateDetailComponent,
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
