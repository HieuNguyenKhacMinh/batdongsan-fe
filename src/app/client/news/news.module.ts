import { NeedSellComponent } from './../create-real-estate/need-sell/need-sell.component';
import { NeedBuyComponent } from './../create-real-estate/need-buy/need-buy.component';
import { NgModule } from "@angular/core";
import { NewsComponent } from "./news.component";
import { NewsRoutingModule } from './news-routing.module';
import { CommonModule } from "@angular/common";
import { NewsDetailComponent } from './detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../material-module';
import { CategoryComponent } from './category/category.component';
import { NewsService } from './news.service';
import { CategoryPostComponent } from './category/post/post.component';

@NgModule({
    declarations: [
        NewsComponent,
        NewsDetailComponent,
        CategoryComponent,
        CategoryPostComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        HttpClientModule,
        NewsRoutingModule,
    ],
    providers: [NewsService]
})
export class NewsModule { }