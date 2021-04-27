import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PageService } from './page.service';

@Component({
    selector: 'client-page',
    templateUrl: 'page.component.html',
    styleUrls: ["./page.component.scss"]
})

export class PageComponent implements OnInit {
    constructor(private route: ActivatedRoute, private service: PageService) { }
    page: any;
    ngOnInit() {
        const slug = this.route.snapshot.paramMap.get('slug');
        console.log(slug);
        if (slug) {
            this.service.getPage(slug).subscribe(page => {
                this.page = page;
            })
        }
    }
}