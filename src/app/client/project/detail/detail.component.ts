import { ProjectService } from '../project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detail-project',
    templateUrl: 'detail.component.html',
    styleUrls: ["./detail.component.scss"]
})

export class ProjectDetailComponent implements OnInit {
    constructor(private route: ActivatedRoute, private projectSerivce: ProjectService) { }

    project: any;
    
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.projectSerivce.getProject(id).subscribe((res: any) => {
            this.project = res;
        })
    }
}