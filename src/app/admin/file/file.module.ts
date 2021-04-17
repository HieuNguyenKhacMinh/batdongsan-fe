import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileComponent } from './file.component';
import { FileService } from './file.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateFileComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteFileComponent } from './delete/delete.component';
import { FileRoutingModule } from './file-routing.module';
import { MaterialModule } from 'src/app/material-module';
 

@NgModule({
  declarations: [FileComponent, CreateFileComponent, DeleteFileComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FileRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FileService],
  entryComponents: [
    CreateFileComponent, DeleteFileComponent
  ],
})
export class FileModule { }
