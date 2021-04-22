import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipelineComponent } from './pipeline.component';
import { PipelineService } from './pipeline.service';
import { HttpClientModule } from '@angular/common/http';
import { CreatePipelineComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeletePipelineComponent } from './delete/delete.component';
import { PipelineRoutingModule } from './pipeline-routing.module';
import { MaterialModule } from '../../../material-module';
 

@NgModule({
  declarations: [PipelineComponent, CreatePipelineComponent, DeletePipelineComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    PipelineRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PipelineService],
  entryComponents: [
    CreatePipelineComponent, DeletePipelineComponent
  ],
})
export class PipelineModule { }
