import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-news-category-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostItem2Component implements OnInit {
  title = 'Post';
  edit: any;
  post: any;

  @Input() posts: any

  constructor(private service: PostService) { }

  ngOnInit() {
    this.posts = this.posts.slice(0, 4);
    this.setColumns()
        const postId = localStorage.getItem("post_id");
        
        if (postId) {
            this.service.get(postId).subscribe(res => {
                this.post = res;
                this.dataSource = this.post;
            })
        }
    }
    dataSource: any;
    columns: any[];
    properties: any;

    setIsEdit(cancel?: any) {
        if (!cancel) {
            this.edit = true;
            // this.setColumns();
        } else {
            this.edit = undefined;
        }
    }

    setColumns() {

       
    }

    updateCompany() {
        this.service.update(this.dataSource).subscribe(res => {
            this.setIsEdit(true);
        })
    }
}
