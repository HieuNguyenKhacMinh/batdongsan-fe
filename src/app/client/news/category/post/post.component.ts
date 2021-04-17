import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-category-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class CategoryPostComponent implements OnInit {
  title = 'Post';

  @Input() posts: any

  constructor() {

  }

  ngOnInit() {
    this.posts = this.posts.slice(0, 4);
    console.log(this.posts);
  }
}
