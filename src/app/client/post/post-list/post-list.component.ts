import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
    selector: 'selector-client-manager-post-post-list',
    templateUrl: 'post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
    constructor(private service: PostService) { }

    categories: any;
    ngOnInit() {
        this.service.getCategories().subscribe(res => {
            this.categories = res;
        })
    }
}