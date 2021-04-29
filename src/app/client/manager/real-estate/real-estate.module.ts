import { RealEstateDetailComponent } from './detail/detail.component';
import { RealEstateComponent } from './real-estate.component';
import { RealEstateRoutingModule } from './real-estate.routing.module';
import { MaterialModule } from './../../../material-module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ListRealEstateComponent } from './list-real-estate/list-real-estate.component';
import { SearchRealEstateComponent } from './list-real-estate/search/search.component';
import { RealEstateService } from './real.estate.service';

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
        RealEstateService
    ],
})
export class RealEstateModule { }
