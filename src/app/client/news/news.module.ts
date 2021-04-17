import { NgModule } from "@angular/core";
import { NewsComponent } from "./news.component";
import { NewsRoutingModule } from './news-routing.module';
import { CommonModule } from "@angular/common";
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../material-module';
import {CategoryComponent} from './category/category.component';
import {CategoryService} from './category/category.service';
import {CategoryPostComponent} from './category/post/post.component';

@NgModule({
    declarations: [
        NewsComponent,
        PostComponent,
        CategoryComponent,
        CategoryPostComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        HttpClientModule,
        NewsRoutingModule,
    ],
    providers: [CategoryService]
})
export class NewsModule { }