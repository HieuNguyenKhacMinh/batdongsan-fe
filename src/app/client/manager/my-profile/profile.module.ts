import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './profile-list/profile-list.component';
import { ProfileService } from './profile.service';
import { UserDetailComponent } from './profile-detail/profile-detail.component';
import { MaterialModule } from '../../../material-module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile.component';
import { UserRoutingModule } from './profile-routing.module';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        MaterialModule,
        UserRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [],
    declarations: [ProfileComponent,
        UserListComponent,
        UserDetailComponent],
    providers: [ProfileService],
})
export class ProfileModule { }
