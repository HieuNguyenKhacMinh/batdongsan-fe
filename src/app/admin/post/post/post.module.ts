import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostService } from './post.service';
import { HttpClientModule } from '@angular/common/http';
import { CreatePostComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeletePostComponent } from './delete/delete.component';
import { PostRoutingModule } from './post-routing.module';
import { MaterialModule } from '../../../material-module';
 

@NgModule({
  declarations: [PostComponent, CreatePostComponent, DeletePostComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PostService],
  entryComponents: [
    CreatePostComponent, DeletePostComponent
  ],
})
export class PostModule { }
