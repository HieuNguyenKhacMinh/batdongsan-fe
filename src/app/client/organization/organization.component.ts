import { Component, OnInit } from '@angular/core';
import { OrganizationService } from './organization.service';

@Component({
    selector: 'client-organization',
    templateUrl: 'organization.component.html',
    styleUrls: ["./organization.component.scss"]
})

export class OrganizationComponent implements OnInit {
    constructor(private service: OrganizationService) { }

    organizations: any[] = [];
    ngOnInit() {
        this.service.all().subscribe(res => {
            this.organizations = res;
        })
    }
}
