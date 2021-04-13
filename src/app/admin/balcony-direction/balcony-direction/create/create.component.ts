import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BalconyDirectionComponent } from '../balcony-direction.component';
import { BalconyDirectionService } from '../balcony-direction.service';


@Component({
    selector: 'create-balcony-direstion',
    templateUrl: 'create.component.html',
    styleUrls: ['create.component.scss']
})

export class CreateBalconyDirectionComponent implements OnInit {
    constructor(
        private service:  BalconyDirectionService,
        public dialogRef: MatDialogRef<CreateBalconyDirectionComponent>,
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