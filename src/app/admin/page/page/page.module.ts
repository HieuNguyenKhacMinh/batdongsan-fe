import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatePageComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeletePageComponent } from './delete/delete.component';
import { MaterialModule } from '../../../material-module';
import { PageRoutingModule } from './page-routing.module'
import { PageService } from './page.service';
@NgModule({
  declarations: [PageComponent, CreatePageComponent, DeletePageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    PageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PageService],
  entryComponents: [
    CreatePageComponent, DeletePageComponent
  ],
})
export class PageModule { }
