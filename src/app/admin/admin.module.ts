import { MenuDisplayComponent } from './menu-display/menu.component';
import { MenuDisplayService } from './menu-display/menu.service';
import { FilterDataPipe } from './opportunity/opportunity.pipe';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        HttpClientModule,
        AdminRoutingModule,
    ],
    exports: [],
    declarations: [AdminComponent, MenuDisplayComponent],
    providers: [MenuDisplayService],
})
export class AdminModule { }
