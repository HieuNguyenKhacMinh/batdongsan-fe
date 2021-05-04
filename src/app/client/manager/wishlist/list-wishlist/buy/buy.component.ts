import { Component, Input, OnInit } from '@angular/core';
import { RealEstateService } from './../../real.estate.service';

@Component({
    selector: 'wishlist-buy',
    templateUrl: 'buy.component.html',
    styleUrls: ["./buy.component.scss"]
})

export class WishlistBuyComponent implements OnInit {
    constructor( ) { }

    @Input() products: any[];

    ngOnInit() {
    }
}