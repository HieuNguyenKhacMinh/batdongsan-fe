import { FormsModule } from '@angular/forms';
import { CreateRealEstateComponent } from './create-real-estate/create-real-estate.component';
import { MenuComponent } from './menu/menu.component';
import { ClientRoutingModule } from './client.routing.module';
import { NgModule } from '@angular/core';

import { ClientComponent } from './client.component';
import { MenuService } from './menu/menu.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module';
import { HttpClientModule } from '@angular/common/http';
import { RealEstateService } from './real.estate.service';

@NgModule({
    imports: [
        CommonModule,
        ClientRoutingModule,
        HttpClientModule,
        MaterialModule,
        FormsModule,
    ],
    exports: [],
    declarations: [
        ClientComponent,
        MenuComponent,
        CreateRealEstateComponent
    ],
    providers: [MenuService, 
        RealEstateService],
})
export class ClientModule { }
