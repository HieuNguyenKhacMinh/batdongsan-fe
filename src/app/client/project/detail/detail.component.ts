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

    currentUser: any = {};
    project: any;
    
    ngOnInit() {
        // const id = this.route.snapshot.paramMap.get('id');
        // this.projectSerivce.getProject(id).subscribe((res: any) => {
        //     this.project = res;
        // })
        this.currentUser = {
            id: localStorage.getItem('user_id'),
            fullname: localStorage.getItem('fullname')
        }
        this.getData();
    }

    getData() {
        // get id from router
        const id = this.route.snapshot.paramMap.get('id');
        this.projectSerivce.getProject(id).subscribe(res => {
            this.project = res;
            this.projectComment.project_id = this.project.id;
            
        })
    }
    projectComment: any = {};
    replyComment: any = {};
    sendComment(comment?: any) {
        if(comment){
        this.projectComment = this.replyComment;
        this.projectComment.parent_id = comment.id;
        }
        
        this.projectSerivce.sendComment(this.projectComment).subscribe(res => {
            this.getData();
            this.projectComment = {};
            this.replyComment = {};
        })
    }
}