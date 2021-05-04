import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'wishlist-post',
    templateUrl: 'post.component.html'
})

export class WishlistPostComponent implements OnInit {

    @Input() posts: any[] = [];
    
    constructor() { }

    ngOnInit() { }
}