import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HashtagComponent } from './hashtag.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateHashtagComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteHashtagComponent } from './delete/delete.component';
import { MaterialModule } from '../../../material-module';
import { HashtagRoutingModule } from './hashtag-routing.module'
import { HashtagService } from './hashtag.service';
@NgModule({
  declarations: [HashtagComponent, CreateHashtagComponent, DeleteHashtagComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    HashtagRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HashtagService],
  entryComponents: [
    CreateHashtagComponent, DeleteHashtagComponent
  ],
})
export class HashtagModule { }
