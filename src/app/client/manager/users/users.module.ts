import { UsersService } from './users.service';
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
    ],
    exports: [],
    declarations: [UsersComponent, UsersDetailComponent],
    providers: [UsersService],
})
export class UsersModule { }
