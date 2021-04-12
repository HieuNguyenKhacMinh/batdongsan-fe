import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment.component';
import { CommentService } from './comment.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateCommentComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteCommentComponent } from './delete/delete.component';
import { CommentRoutingModule } from './comment-routing.module';
import { MaterialModule } from '../../../material-module';
 

@NgModule({
  declarations: [CommentComponent, CreateCommentComponent, DeleteCommentComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    CommentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CommentService],
  entryComponents: [
    CreateCommentComponent, DeleteCommentComponent
  ],
})
export class CommentModule { }
