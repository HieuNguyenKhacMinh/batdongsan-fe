import { PageService } from './page.service';
import { MaterialModule } from '../../material-module';
import { PageRoutingModule } from './page-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageComponent } from './page.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        MaterialModule,
        PageRoutingModule
    ],
    exports: [],
    declarations: [PageComponent],
    providers: [PageService],
})
export class PageModule { }
