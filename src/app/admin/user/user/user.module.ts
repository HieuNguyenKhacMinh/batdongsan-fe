import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteUserComponent } from './delete/delete.component';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from '../../../material-module';
 

@NgModule({
  declarations: [UserComponent, CreateUserComponent, DeleteUserComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  entryComponents: [
    CreateUserComponent, DeleteUserComponent
  ],
})
export class UserModule { }
