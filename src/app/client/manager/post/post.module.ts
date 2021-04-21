import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './post.service';
import { PostComponent } from '../post/post.component';
import { PostRoutingModule } from './post-routing.module';
import { PostDetailComponent } from './post-detail/post-detail.component';

import { MaterialModule } from '../../../material-module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';



@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        MaterialModule,
        PostRoutingModule,
    ],
    exports: [],
    declarations: [PostComponent,
        PostListComponent,
        PostDetailComponent],
    providers: [PostService],
})
export class PostModule { }
