import { ProjectItemComponent } from './list/project/project-item.component';
import { ListProjectComponent } from './list/list.component';
import { ProjectDetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';
import { ProjectRoutingModule } from './project.routing.module';
import { NgModule } from '@angular/core';

import { ProjectComponent } from './project.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material-module';
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from './project.service';

@NgModule({
    imports: [
        CommonModule,
        ProjectRoutingModule,
        HttpClientModule,
        MaterialModule,
        FormsModule,
    ],
    exports: [],
    declarations: [
        ProjectComponent,
        ListProjectComponent,
        ProjectDetailComponent,
        ProjectItemComponent,
    ],
    providers: [
        ProjectService
    ],
})
export class ProjectModule { }
