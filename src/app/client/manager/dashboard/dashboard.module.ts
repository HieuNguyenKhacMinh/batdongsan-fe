import { MaterialModule } from '../../../material-module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardService } from './dashboard.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        MaterialModule,
        DashboardRoutingModule,
        FormsModule,],
    exports: [],
    declarations: [DashboardComponent],
    providers: [DashboardService],
})
export class DashboardModule { }
