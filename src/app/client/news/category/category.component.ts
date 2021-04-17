import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';

@Component({
    selector: 'app-new-categories',
    templateUrl: 'category.component.html'
})

export class CategoryComponent implements OnInit {
    constructor(private categoryService: CategoryService) { }

    categories: any;
    ngOnInit() {
        this.categoryService.get().subscribe(res => {
            this.categories = res;
            console.log(this.categories);
        })
    }
}