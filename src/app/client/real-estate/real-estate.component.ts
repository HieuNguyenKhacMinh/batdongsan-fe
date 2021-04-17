import { RealEstateService } from '../real-estate/real.estate.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-real-estate',
    templateUrl: 'real-estate.component.html'
})

export class RealEstateComponent implements OnInit {
    constructor(private realEstateService: RealEstateService) { }

    allProducts: any[] = [];
    products: any[] = [];

    ngOnInit() {
        this.realEstateService.getProducts().subscribe((res: any[]) => {
            this.allProducts = res;
            console.log(this.allProducts);

        })


    }
}