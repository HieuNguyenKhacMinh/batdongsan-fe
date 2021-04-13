import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductUnitService } from '../product_unit.service';

@Component({
    selector: 'create-productunit',
    templateUrl: 'create.component.html',
    styleUrls: ['create.component.scss']
})

export class CreateProductUnitComponent implements OnInit {
    constructor(
        private service: ProductUnitService,
        public dialogRef: MatDialogRef<CreateProductUnitComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
    dataSource: any;
    columns: any;
    properties: any;
    ngOnInit() {
        console.log(this.data);
        // get properites
        this.properties = this.data.properties;
        this.columns = Object.keys(this.data.properties);
        this.dataSource = this.data.dataSource || {};
        // set to form control



    }
    create() {
        console.log(this.dataSource);
        this.service.update(this.dataSource).subscribe(res => {
            this.dialogRef.close();
        })
       
    }
}