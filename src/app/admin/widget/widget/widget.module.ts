import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget.component';
import { WidgetService } from './widget.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateWidgetComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteWidgetComponent } from './delete/delete.component';
import { WidgetRoutingModule } from './widget-routing.module';
import { MaterialModule } from '../../../material-module';
 

@NgModule({
  declarations: [WidgetComponent, CreateWidgetComponent, DeleteWidgetComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    WidgetRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WidgetService],
  entryComponents: [
    CreateWidgetComponent, DeleteWidgetComponent
  ],
})
export class WidgetModule { }
