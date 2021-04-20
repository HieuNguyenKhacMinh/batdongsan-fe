import { ProjectService } from '../project.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-project',
    templateUrl: 'list.component.html',
    styleUrls: ["./list.component.scss"]
})

export class ListProjectComponent implements OnInit {
    constructor(private projectService: ProjectService) { }

    projectTypes: any[] = [];
    ngOnInit() {
        this.getProjectType();
    }
    getProjectType() {
        this.projectService.getProjectType().subscribe((res: any[]) => {
            this.projectTypes = res;
            console.log(this.projectTypes);
            
        })
    }
}