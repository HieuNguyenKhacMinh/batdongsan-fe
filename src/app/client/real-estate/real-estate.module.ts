import { FormsModule } from '@angular/forms';
import { RealEstateService } from './real.estate.service';
import { ListRealEstateComponent } from './list-real-estate/list-real-estate.component';
import { MaterialModule } from '../../material-module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RealEstateComponent } from './real-estate.component';
import {SearchRealEstateComponent} from "./list-real-estate/search/search.component"
import { RealEstateRoutingModule } from './real-estate.routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        RealEstateRoutingModule,
        CommonModule,
        MaterialModule,
        HttpClientModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        RealEstateComponent,
        ListRealEstateComponent,
        SearchRealEstateComponent,
    ],

    providers: [
        RealEstateService
    ],
})
export class RealEstateModule { }
