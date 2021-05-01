import { RealEstateService } from '../../real.estate.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-real-estate-detail',
    templateUrl: 'detail.component.html',
    styleUrls: ["./detail.component.scss"]
})

export class BuyHireDetailComponent implements OnInit {
    constructor(private realEstateService: RealEstateService,  private route: ActivatedRoute) { }

  
    productComment: any = {};
    replyComment: any = {};
    product: any;
    ngOnInit() {
        // get id from router
        // const id = this.route.snapshot.paramMap.get('id');
        // this.realEstateService.getProduct(id).subscribe(res => {
        //     this.product = res;
        //     console.log(this.product);
            
        // })
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

// function sendComment(arg0: any) {
//     throw new Error('Function not implemented.');
// }
