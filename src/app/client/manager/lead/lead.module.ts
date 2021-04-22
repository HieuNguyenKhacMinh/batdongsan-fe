import { FormsModule } from '@angular/forms';
import { LeadListComponent } from './lead-list/lead-list.component';
import { LeadService } from './lead.service';
import { LeadRoutingModule } from './lead-routing.module';
import { MaterialModule } from '../../../material-module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LeadComponent } from './lead.component';
import { LeadDetailComponent } from './lead-detail/lead-detail.component';
import { CreateLeadComponent } from "./create/create.component";
import { DeleteLeadComponent } from "./delete/delete.component";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        MaterialModule,
        LeadRoutingModule,
        FormsModule,
    ],
    exports: [],
    declarations: [LeadComponent,
        LeadListComponent,
        LeadDetailComponent,
        CreateLeadComponent,
        DeleteLeadComponent,
    ],
    providers: [LeadService],
})
export class LeadModule { }
