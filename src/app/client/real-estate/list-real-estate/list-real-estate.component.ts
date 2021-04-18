import { RealEstateService } from '../../real-estate/real.estate.service';
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
            console.log(this.allProducts);

        })


    }
}