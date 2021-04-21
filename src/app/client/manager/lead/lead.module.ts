import { LeadListComponent } from './lead-list/lead-list.component';
import { LeadService } from './lead.service';
import { LeadRoutingModule } from './lead-routing.module';
import { MaterialModule } from '../../../material-module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LeadComponent } from './lead.component';
import { LeadDetailComponent } from './lead-detail/lead-detail.component';


@NgModule({
    imports: [  
        CommonModule,
        HttpClientModule,
        MaterialModule,
        LeadRoutingModule,
    ],
    exports: [],
    declarations: [LeadComponent, 
        LeadListComponent,
        LeadDetailComponent],
    providers: [LeadService],
})
export class LeadModule { }
