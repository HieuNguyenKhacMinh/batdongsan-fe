import { IsBuyHire } from './../../../create-real-estate/need-buy/need-buy.component';
import { WishlistService } from '../wishlist.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-wishlist',
    templateUrl: 'list-wishlist.component.html',
    styleUrls: ["./list-wishlist.component.scss"]
})

export class ListWishlistComponent implements OnInit {
    posts: any[] = [];
    wishlists: any[]= [];
    projects : any[]= [];
    sellProducts: any[]= [];
    buyProducts: any[] = [];
    constructor(private service: WishlistService) { }
    ngOnInit() {

        this.service.all().subscribe((ws: any[]) => {
            this.wishlists = ws;

            this.posts = ws.filter(w=> w.post).map(w=> w.post);
            this.projects = ws.filter(w=> w.project).map(w=> w.project);
            this.buyProducts = ws.filter(w=> w.product && w.product.is_buy_hire === 0).map(w=> w.product);
            this.sellProducts = ws.filter(w=> w.product && w.product.is_buy_hire === 1).map(w=> w.product);
            console.log(this.wishlists);
            console.log(this.buyProducts);
            
        })

    }
}