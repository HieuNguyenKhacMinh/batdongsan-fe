import { RealEstateService } from './../../real.estate.service';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
    selector: 'app-real-estate-detail',
    templateUrl: 'detail.component.html',
    styleUrls: ["./detail.component.scss"]
})

export class RealEstateDetailComponent implements OnInit {
    constructor(private realEstateService: RealEstateService, private route: ActivatedRoute
    ) { }



    product: any;
    comment: any = {};
    async ngOnInit() {

        this.getData();
    }

    getData() {
        // get id from router
        const id = this.route.snapshot.paramMap.get('id');
        this.realEstateService.getProduct(id).subscribe(res => {
            this.product = res;
            console.log(this.product);

            this.comment.product_id = this.product.id;

        })
    }

    sendComment() {
        console.log(this.comment);
        this.realEstateService.sendComment(this.comment).subscribe(res => {

            this.getData();
        })
    }
}