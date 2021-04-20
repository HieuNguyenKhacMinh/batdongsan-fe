import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
    selector: 'app-news-detail',
    templateUrl: 'detail.component.html',
    styleUrls: ["./detail.component.scss"]
})

export class NewsDetailComponent implements OnInit {
    constructor(private service: NewsService,  private route: ActivatedRoute) { }

    post: any;
    ngOnInit() {
        // get id from router
        const id = this.route.snapshot.paramMap.get('id');
        this.service.getNews(id).subscribe(res => {
            this.post = res;
            console.log(this.post);
            
        })
    }
}