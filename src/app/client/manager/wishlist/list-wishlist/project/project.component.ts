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
            const project = this.projects.find(p => p.id === res.project_id);
            if (res.delete_flag === 0) {
                project.wishlists.push(res);
            } else {
                project.wishlists.splice(project.wishlists.findIndex(w => w.id === res.id), 1)
            }
        });
    }
}