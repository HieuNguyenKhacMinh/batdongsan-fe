import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostService } from '../post.service';

@Component({
    selector: 'create-post',
    templateUrl: 'create.component.html',
    styleUrls: ['create.component.scss']
})

export class CreatePostComponent implements OnInit {
    constructor(
        private service: PostService,
        public dialogRef: MatDialogRef<CreatePostComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
    dataSource: any;
    columns: any[];
    properties: any;
    async ngOnInit() {
        console.log(this.data);
        // get properites
        this.properties = this.data.properties;
        // filter những collum có visible != true
        this.columns = Object.keys(this.data.properties)
            .filter((column: any) => this.properties[column].visible !== true);

        // get colums reference 
        const references = this.columns.filter((column: any) => this.properties[column].reference !== undefined);
        console.log(references);

        // get data referent
        await Promise.all(references.map(async column => {
            await this.service.getData(this.properties[column].reference.api_url).subscribe((res) =>{
                this.properties[column].data = res;
            })
        }))

        console.log(this.properties);
        

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