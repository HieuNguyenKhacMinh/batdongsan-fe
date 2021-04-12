import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CreateMessageComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteMessageComponent } from './delete/delete.component';
import { MessageRoutingModule } from './message-routing.module';
import { MaterialModule } from '../../../material-module';
import { MessageService } from './message.service';
import { MessageComponent } from './message.component';
 

@NgModule({
  declarations: [MessageComponent, CreateMessageComponent, DeleteMessageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    MessageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MessageService],
  entryComponents: [
    CreateMessageComponent, DeleteMessageComponent
  ],
})
export class MessageModule { }
