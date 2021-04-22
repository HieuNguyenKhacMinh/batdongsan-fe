import { MaterialModule } from '../../material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist.component';
import { WishlistService } from './wishlist.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateWishlistComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteWishlistComponent } from './delete/delete.component';
import { WishlistRoutingModule } from './wishlist-routing.module';

 

@NgModule({
  declarations: [WishlistComponent, CreateWishlistComponent, DeleteWishlistComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    WishlistRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WishlistService],
  entryComponents: [
    CreateWishlistComponent, DeleteWishlistComponent
  ],
})
export class WishlistModule { }
