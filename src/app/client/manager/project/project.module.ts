import { DeleteProjectComponent } from './delete/delete.component';
import { CreateProjectectComponent } from './list/create/create.component';
import { ProjectService } from './project.service';
import { ProjectItemComponent } from './list/project/project-item.component';
import { MaterialModule } from './../../../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ProjectRoutingModule } from './project.routing.module'
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { ProjectComponent } from './project.component';
import { ListProjectComponent } from './list/list.component';
import { ProjectDetailComponent } from './detail/detail.component';

@NgModule({
    imports: [
        CommonModule,
        ProjectRoutingModule,
        HttpClientModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [],
    declarations: [
        ProjectComponent,
        ListProjectComponent,
        ProjectDetailComponent,
        ProjectItemComponent,
        CreateProjectectComponent,
        DeleteProjectComponent,
    ],
    providers: [
        ProjectService
    ],
})
export class ProjectModule { }
