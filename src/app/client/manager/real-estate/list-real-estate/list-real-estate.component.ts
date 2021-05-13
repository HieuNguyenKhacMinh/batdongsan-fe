import { RealEstateService } from './../real.estate.service';
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
            this.products = this.allProducts.filter(product => this.compareObjectAndObject(product, ""));
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