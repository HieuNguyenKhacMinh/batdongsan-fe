import { MenuComponent } from './menu/menu.component';
import { ClientRoutingModule } from './client.routing.module';
import { NgModule } from '@angular/core';

import { ClientComponent } from './client.component';
import { MenuService } from './menu/menu.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        ClientRoutingModule,
        HttpClientModule,
        MaterialModule,
    ],
    exports: [],
    declarations: [
        ClientComponent,
        MenuComponent,
    ],
    providers: [MenuService],
})
export class ClientModule { }
