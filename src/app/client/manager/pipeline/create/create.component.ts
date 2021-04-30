import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PipelineService } from '../pipeline.service';

@Component({
    selector: 'create-pipeline',
    templateUrl: 'create.component.html',
    styleUrls: ['create.component.scss']
})

export class CreatePipelineComponent implements OnInit {
    constructor(
        private service: PipelineService,
        public dialogRef: MatDialogRef<CreatePipelineComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
    dataSource: any;
    columns: any;
    properties: any;
    async ngOnInit() {
        console.log(this.data);
        // get properites
        this.properties = this.data.properties;
        // filter những collum có visible != true
        this.columns = Object.keys(this.data.properties)
            // hide control organization_id
            .filter((column: any) => !["organization_id"].includes(column))
            .filter((column: any) => this.properties[column].visible !== true);
        /** colums reference */
        const references = this.columns.filter((column: any) => this.properties[column].reference !== undefined);
        console.log(references);

        // get data referent
        await Promise.all(references.map(async column => {
            await this.service.getData(this.properties[column].reference.api_url).subscribe((res) => {
                this.properties[column].data = res;
            })
        }))

        this.dataSource = this.data.dataSource || {};
        // set to form control
        this.dataSource.organization_id = localStorage.getItem("organization_id");





    }
    create() {
        console.log(this.dataSource);
        this.service.update(this.dataSource).subscribe(res => {
            this.dialogRef.close();
        })

    }
}