import { Component, Input, OnInit } from '@angular/core';
import { WishlistService } from '../../wishlist.service';

@Component({
    selector: 'wishlist-project',
    templateUrl: 'project.component.html'
})

export class WishlistProjectComponent implements OnInit {

    @Input() projects: any[];

    constructor(private projectService: WishlistService) { }

    ngOnInit() { }
    addWishlist(project: any) {
        console.log(project.id);
        this.projectService.saveWishlist({ project_id: project.id }).subscribe((res: any) => {
            const index = this.projects.findIndex(p => p.id === res.project_id);
            this.projects.splice(index, 1);
        });
    }
}