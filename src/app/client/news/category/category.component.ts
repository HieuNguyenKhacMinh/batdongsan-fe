import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
    selector: 'app-new-categories',
    templateUrl: 'category.component.html'
})

export class CategoryComponent implements OnInit {
    constructor(private service: NewsService) { }

    categories: any;
    ngOnInit() {
        this.service.getCategories().subscribe(res => {
            this.categories = res;
            console.log(this.categories);
        })
    }
}