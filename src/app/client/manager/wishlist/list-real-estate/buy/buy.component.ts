import { Component, OnInit } from '@angular/core';
import { RealEstateService } from './../../real.estate.service';

@Component({
    selector: 'wishlist-buy',
    templateUrl: 'buy.component.html',
    styleUrls: ["./buy.component.scss"]
})

export class WishlistBuyComponent implements OnInit {
    constructor(private realEstateService: RealEstateService) { }

    allProducts: any[] = [];
    products: any[] = [];

    ngOnInit() {
        this.realEstateService.getProducts().subscribe((res: any[]) => {
            this.allProducts = res;
            this.products = this.allProducts;
        })
    }

    changeConditionSearch(search) {
        console.log(search);
        
        this.products = this.allProducts.filter(product => this.compareObjectAndObject(product, search));
        console.log(this.products);
        
    }


    compareObjectAndObject(product, search) {
        const keys = Object.keys(search);
    
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (product[key] === search[key]) {
                continue;
            } else {
                // case đặc biêt
                return false;
            }
        }

        return true;
    }
}