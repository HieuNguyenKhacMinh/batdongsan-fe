import { MaterialModule } from './../../material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectTypeComponent } from './project-type.component';
import { ProjectTypeService } from './project-type.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateProjectTypeComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteProjectTypeComponent } from './delete/delete.component';
import { ProjectTypeRoutingModule } from './project-type-routing.module';

@NgModule({
  declarations: [ProjectTypeComponent, CreateProjectTypeComponent, DeleteProjectTypeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ProjectTypeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProjectTypeService],
  entryComponents: [
    CreateProjectTypeComponent, DeleteProjectTypeComponent
  ],
})
export class ProjectTypeModule { }
