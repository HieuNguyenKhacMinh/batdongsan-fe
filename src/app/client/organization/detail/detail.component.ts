import { OrganizationService } from './../organization.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'client-organization-detail',
    templateUrl: 'detail.component.html',
    styleUrls: ["./detail.component.scss"]
})

export class OrganizationDetailComponent implements OnInit {
    constructor(private organizationService: OrganizationService,  private route: ActivatedRoute) { }

    organization: any;

    async ngOnInit() {
        
        // get id from router
        const id = this.route.snapshot.paramMap.get('id');
        this.organizationService.getOrganization(id).subscribe(res => {
            this.organization = res;
            console.log(this.organization);
        })
    }
}