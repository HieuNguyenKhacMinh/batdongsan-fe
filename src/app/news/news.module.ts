import { NgModule } from "@angular/core";
import { NewsComponent } from "./news.component";
import { NewsRoutingModule } from './news-routing.module';
import { CommonModule } from "@angular/common";
import { PostComponent } from './post/post.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuService } from './menu/menu.service';
import { MaterialModule } from '../material-module';
import {CategoryComponent} from './category/category.component';
import {CategoryService} from './category/category.service';
import {CategoryPostComponent} from './category/post/post.component';

@NgModule({
    declarations: [
        NewsComponent,
        MenuComponent,
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
    providers: [MenuService, CategoryService]
})
export class NewsModule { }