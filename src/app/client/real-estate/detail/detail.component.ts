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
    productComment: any = {};
    replyComment: any = {};
    async ngOnInit() {

        this.getData();
    }

    getData() {
        // get id from router
        const id = this.route.snapshot.paramMap.get('id');
        this.realEstateService.getProduct(id).subscribe(res => {
            this.product = res;
            console.log(this.product);

            this.productComment.product_id = this.product.id;

        })
    }

    sendComment(comment?: any) {
        if(comment){
            
        this.productComment = this.replyComment;
        this.productComment.parent_id = comment.id;
        }
        
        this.realEstateService.sendComment(this.productComment).subscribe(res => {
            this.getData();
            this.productComment = {};
            this.replyComment = {};
        })
    }
}