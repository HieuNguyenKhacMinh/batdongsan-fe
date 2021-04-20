import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'project-item',
    templateUrl: 'project-item.component.html',
    styleUrls: ["./project-item.component.scss"]
})

export class ProjectItemComponent implements OnInit {

    constructor() { }

    @Input() projects: any[];
    
    ngOnInit() { 
        this.projects = this.projects.slice(0, 4);
    }
}