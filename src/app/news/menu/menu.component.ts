import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
    selector: 'app-news-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
    constructor(private menuService: MenuService) { }
    menus: any;
    ngOnInit() {
        this.menuService.get().subscribe(res => {
            this.menus = res; 
            console.log(this.menus);
        })
    }
}