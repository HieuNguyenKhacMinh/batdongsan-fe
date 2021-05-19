import { Component, Input, OnInit } from '@angular/core';
import { RealEstateService } from './../../real.estate.service';
import { WishlistService } from '../../wishlist.service';
@Component({
    selector: 'wishlist-buy',
    templateUrl: 'buy.component.html',
    styleUrls: ["./buy.component.scss"]
})

export class WishlistBuyComponent implements OnInit {
  
    @Input() products: any[];

    constructor(private productService: WishlistService) { }

    ngOnInit() { }
    addWishlist(product: any) {
        console.log(product.id);
        this.productService.saveWishlist({ product_id: product.id }).subscribe((res: any) => {
            const index = this.products.findIndex(p => p.id === res.product_id);
            this.products.splice(index, 1);
        });
    }
}