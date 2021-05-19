import { Component, Input, OnInit } from '@angular/core';
import { WishlistService } from '../../wishlist.service';
@Component({
    selector: 'wishlist-post',
    templateUrl: 'post.component.html'
})

export class WishlistPostComponent implements OnInit {

    @Input() posts: any[] = [];

    constructor(private postService: WishlistService) { }

    ngOnInit() { }
    addWishlist(post: any) {
        this.postService.saveWishlist({ post_id: post.id }).subscribe((res: any) => {
            const index = this.posts.findIndex(p => p.id === res.post_id);
            this.posts.splice(index, 1);
        });
    }
}