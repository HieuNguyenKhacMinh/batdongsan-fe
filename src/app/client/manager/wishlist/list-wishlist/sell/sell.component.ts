import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'wishlist-sell',
    templateUrl: 'sell.component.html'
})

export class WishlistSellComponent implements OnInit {

    @Input() products: any[];

    constructor() { }

    ngOnInit() { }
}