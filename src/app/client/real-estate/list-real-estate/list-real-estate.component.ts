import { RealEstateService } from '../../real.estate.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-real-estate',
    templateUrl: 'list-real-estate.component.html',
    styleUrls: ["./list-real-estate.component.scss"]
})

export class ListRealEstateComponent implements OnInit {
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

    get_min_max_price (prices: string){
      let price= prices.split("-");
      if(price[0]){
        const min : number = +price[0];
      }
      if(price[1]){
        const max : number = +price[1];
      }
      
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
    addWishlist(product: any) {
        console.log(product.id);
        this.realEstateService.saveWishlist({ product_id: product.id }).subscribe((res: any) => {
            const product = this.products.find(p => p.id === res.product_id);
            if (res.delete_flag === 0) {
                product.wishlists.push(res);
            } else {
                product.wishlists.splice(product.wishlists.findIndex(w => w.id === res.id), 1)
            }
        });
    }
}