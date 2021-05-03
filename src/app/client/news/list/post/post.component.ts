import { NewsService } from './../../news.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-category-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostItemComponent implements OnInit {
  title = 'Post';

  @Input() posts: any

  constructor(private postService: NewsService) {

  }

  ngOnInit() {
    this.posts = this.posts.slice(0, 4);
  }

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
