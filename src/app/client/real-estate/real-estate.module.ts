import { FormsModule } from '@angular/forms';
import { ListRealEstateComponent } from './list-real-estate/list-real-estate.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RealEstateComponent } from './real-estate.component';
import {SearchRealEstateComponent} from "./list-real-estate/search/search.component"
import { RealEstateRoutingModule } from './real-estate.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../material-module';
import { RealEstateDetailComponent } from './detail/detail.component';

@NgModule({
    imports: [
        RealEstateRoutingModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        MaterialModule,
    ],
    exports: [],
    declarations: [
        RealEstateComponent,
        ListRealEstateComponent,
        SearchRealEstateComponent,
        RealEstateDetailComponent
    ],

    providers: [
    ],
})
export class RealEstateModule { }
