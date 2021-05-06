import { MaterialModule } from './../../../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListBuyHireComponent } from './list-buy-hire/list-buy-hire.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BuyHireComponent } from './buy-hire.component';
import { SearchBuyHireComponent } from "./list-buy-hire/search/search.component"
import { BuyHireRoutingModule } from './buy-hire.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BuyHireDetailComponent } from './detail/detail.component';
import { RealEstateService } from '../buy-hire/real.estate.service';

@NgModule({
    imports: [
        BuyHireRoutingModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
    ],
    exports: [],
    declarations: [
        BuyHireComponent,
        ListBuyHireComponent,
        SearchBuyHireComponent,
        BuyHireDetailComponent
    ],
    entryComponents: [BuyHireDetailComponent],
    providers: [RealEstateService
    ],
})
export class BuyHireModule { }
