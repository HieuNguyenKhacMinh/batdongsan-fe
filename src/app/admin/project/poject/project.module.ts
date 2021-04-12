import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ProjectService } from './project.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateProjectComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteProjectComponent } from './delete/delete.component';
import { ProjectRoutingModule } from './project-routing.module';
import { MaterialModule } from '../../../material-module';
 

@NgModule({
  declarations: [ProjectComponent, CreateProjectComponent, DeleteProjectComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ProjectRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProjectService],
  entryComponents: [
    CreateProjectComponent, DeleteProjectComponent
  ],
})
export class ProjectModule { }
