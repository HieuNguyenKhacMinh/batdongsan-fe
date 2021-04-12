import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateDashboardComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteDashboardComponent } from './delete/delete.component';
import { MaterialModule } from '../../../material-module';
import { DashboardService } from './dashboard.service';
import { DashboardRoutingModule } from './dashboard-routing.module';
 

@NgModule({
  declarations: [DashboardComponent, CreateDashboardComponent, DeleteDashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DashboardService],
  entryComponents: [
    CreateDashboardComponent, DeleteDashboardComponent
  ],
})
export class DashboardModule { }
