import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material-module';
import { BalconyDirectionComponent } from './balcony-direction.component';
import { BalconyDirectionService } from './balcony-direction.service';
import { CreateBalconyDirectionComponent } from './create/create.component';
import { DeleteBalconyDirectionComponent } from './delete/delete.component';
import { BalconyDirectionRoutingModule } from './balcony-direction-routing.module';

@NgModule({
  declarations: [ BalconyDirectionComponent, CreateBalconyDirectionComponent, DeleteBalconyDirectionComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    BalconyDirectionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ BalconyDirectionService],
  entryComponents: [
    CreateBalconyDirectionComponent, DeleteBalconyDirectionComponent
  ],
})
export class  BalconyDirectionModule { }
