import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './post.service';
import { PostComponent } from '../post/post.component';
import { PostRoutingModule } from './post-routing.module';
import { PostDetailComponent } from './post-detail/post-detail.component';

import { MaterialModule } from '../../../material-module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostItem2Component } from './post-list/list/post.component';
import { CreatePostComponent } from './post-list/create/create.component';
@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        MaterialModule,
        PostRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [],
    declarations: [PostComponent,
        PostListComponent,
        PostDetailComponent,
        PostItem2Component,
        CreatePostComponent],
       
    providers: [PostService],
})
export class PostModule { }
