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
        console.log(post.id);
        this.postService.saveWishlist({ post_id: post.id }).subscribe((res: any) => {
            const post = this.posts.find(p => p.id === res.post_id);
            if (res.delete_flag === 0) {
                post.wishlists.push(res);
            } else {
                post.wishlists.splice(post.wishlists.findIndex(w => w.id === res.id), 1)
            }
        });
    }
}