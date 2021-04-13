import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuService } from './menu.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateMenuComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteMenuComponent } from './delete/delete.component';
import { MenuRoutingModule } from './menu-routing.module';
import { MaterialModule } from '../../../material-module';
 

@NgModule({
  declarations: [MenuComponent, CreateMenuComponent, DeleteMenuComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    MenuRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MenuService],
  entryComponents: [
    CreateMenuComponent, DeleteMenuComponent
  ],
})
export class MenuModule { }
