import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RealEstateService } from '../../buy-hire/real.estate.service';

@Component({
    selector: 'app-list-buy-hire',
    templateUrl: 'list-buy-hire.component.html',
    styleUrls: ["./list-buy-hire.component.scss"]
})

export class ListBuyHireComponent implements OnInit {
    constructor(private realEstateService: RealEstateService,
        private route: ActivatedRoute
        ) { }

    allProducts: any[] = [];
    products: any[] = [];
    dataSource: any = {};
    ngOnInit() {
        this.realEstateService.getProducts(true).subscribe((res: any[]) => {
            this.allProducts = res;
            this.products = this.allProducts.filter(product => this.compareObjectAndObject(product, ""));
        })

        const id = this.route.snapshot.paramMap.get('id');
        
        const organization_id = localStorage.getItem("organization_id");
        this.dataSource.organization_id = organization_id;

        this.realEstateService.get(id).subscribe(res => {
            this.dataSource = res;
        })

    }

    changeConditionSearch(search) {
        console.log(search);
        
        this.products = this.allProducts.filter(product => this.compareObjectAndObject(product, search));
        console.log(this.products);
        
    }


    compareObjectAndObject(product, search) {
        const keys = Object.keys(search);
    
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (product[key] === search[key]) {
                continue;
            } else {
                // case đặc biêt
                return false;
            }
        }

        return true;
    }
    properties: any;
    columns: any;
    edit: any;
    setIsEdit(cancel?: any) {
        if (!cancel) {
            this.edit = true;
            // this.setColumns();
        } else {
            this.edit = undefined;
        }
    }

    getColumns() {
        this.realEstateService.getProperties().subscribe(async (res: any) => {

            // get properites
            this.properties = res.content;
            // filter những collum có visible != true
            const arr = ["organization_id"];
            this.columns = Object.keys(res.content).filter(c => !arr.includes(c))
                .filter((column: any) => this.properties[column].visible !== true);
            /** colums reference */
            const references = this.columns.filter((column: any) => this.properties[column].reference !== undefined);
            console.log(references);

            // get data referent
            await Promise.all(references.map(async column => {
                await this.realEstateService.getData(this.properties[column].reference.api_url).subscribe((res) => {
                    this.properties[column].data = res;
                })
            }))

        })
    }

    delete() {
        this.realEstateService.delete(this.dataSource).subscribe(res => {
            this.setIsEdit(true);
        })
    }
    
}