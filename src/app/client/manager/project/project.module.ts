import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectService } from '../project/project.service';
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { MaterialModule } from '../../../material-module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectDetailComponent } from './project-detail/project-detail.component';



@NgModule({
    imports: [  
        CommonModule,
        HttpClientModule,
        MaterialModule,
        ProjectRoutingModule,
    ],
    exports: [],
    declarations: [ProjectComponent,
        ProjectListComponent,
        ProjectDetailComponent],
    providers: [ProjectService],
})
export class ProjectModule { }
