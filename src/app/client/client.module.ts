import { ProfileService } from './profile/profile.service';
import { UserProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
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
import { NeedBuyComponent } from './create-real-estate/need-buy/need-buy.component';
import { NeedSellComponent } from './create-real-estate/need-sell/need-sell.component';

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
        CreateRealEstateComponent,
        NeedBuyComponent,
        NeedSellComponent,
        FooterComponent,
        UserProfileComponent
    ],
    providers: [MenuService,,
        ProfileService, 
        RealEstateService],
})
export class ClientModule { }
