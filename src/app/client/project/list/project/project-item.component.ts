import { ProjectService } from './../../project.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'project-item',
    templateUrl: 'project-item.component.html',
    styleUrls: ["./project-item.component.scss"]
})

export class ProjectItemComponent implements OnInit {

    constructor(private projectService: ProjectService) { }

    @Input() projects: any[];
    
    ngOnInit() { 
        this.projects = this.projects.slice(0, 4);
    }

    addWishlist(pj: any) {
        console.log(pj.id);
        this.projectService.saveWishlist({ project_id: pj.id }).subscribe((res: any) => {
            const project = this.projects.find(p => p.id === res.project_id);
            if (res.delete_flag === 0) {
                project.wishlists.push(res);
            } else {
                project.wishlists.splice(project.wishlists.findIndex(w => w.id === res.id), 1)
            }
        });
    }
}