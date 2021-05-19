import { Component, Input, OnInit } from '@angular/core';
import { WishlistService } from '../../wishlist.service';

@Component({
    selector: 'wishlist-sell',
    templateUrl: 'sell.component.html'
})

export class WishlistSellComponent implements OnInit {

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