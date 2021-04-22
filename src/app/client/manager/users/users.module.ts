import { FormsModule } from '@angular/forms';
import { CreateUsersComponent } from './create/create.component';
import { DeleteUsersComponent } from './delete/delete.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserService } from './users.service';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MaterialModule } from '../../../material-module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsersDetailComponent } from './users-detail/users-detail.component';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        MaterialModule,
        UsersRoutingModule,
        FormsModule,
    ],
    exports: [],
    declarations: [
        UsersComponent, 
        UsersListComponent,
        UsersDetailComponent,
        DeleteUsersComponent,
        CreateUsersComponent
    ],
    providers: [UserService],
})
export class UsersModule { }
