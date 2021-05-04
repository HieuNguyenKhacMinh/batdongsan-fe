import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'wishlist-project',
    templateUrl: 'project.component.html'
})

export class WishlistProjectComponent implements OnInit {

    @Input() projects: any[];

    constructor() { }

    ngOnInit() { }
}