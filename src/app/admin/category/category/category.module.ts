import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryService } from './category.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateCategoryComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteCategoryComponent } from './delete/delete.component';
import { CategoryRoutingModule } from './category-routing.module';
import { MaterialModule } from '../../../material-module';
 

@NgModule({
  declarations: [CategoryComponent, CreateCategoryComponent, DeleteCategoryComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    CategoryRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CategoryService],
  entryComponents: [
    CreateCategoryComponent, DeleteCategoryComponent
  ],
})
export class CategoryModule { }
