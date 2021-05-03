import { Component, Inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OpportunityService } from '../opportunity.service';

@Component({
    selector: 'create-opportunity',
    templateUrl: 'create.component.html',
    styleUrls: ['create.component.scss']
})

export class CreateOpportunityComponent implements OnInit, OnChanges {
    constructor(
        private service: OpportunityService,
        public dialogRef: MatDialogRef<CreateOpportunityComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }


    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    async selectionChange($event) {
        // get column change
        const columnSelected = $event.source.ngControl?.name;

        if (!columnSelected) return;
        const value = $event.value;
        // get column dependent
        const dependentColumns = this.properties[columnSelected].reference.dependents;

        if (dependentColumns.length > 0) {
            await Promise.all(dependentColumns.map(async column => {

                await this.service.getData(`${this.properties[column].reference.api_url}/${value}`).subscribe((res) => {
                    this.properties[column].data = res;
                })

            }))
        }

        console.log(this.dataSource);
    }


    dataSource: any = {};
    columns: any;
    properties: any;
    references: any[];
    async ngOnInit() {
        // get properites
        this.properties = this.data.properties;
        // filter những collum có visible != true
        this.columns = Object.keys(this.data.properties)
            .filter((column: any) => this.properties[column].visible !== true)
            // hide control organization_id
            .filter((column: any) => !["organization_id"].includes(column))
            .sort((a: any, b: any) => (this.properties[a].order > this.properties[b].order) ? 1 : ((this.properties[b].order > this.properties[a].order) ? -1 : 0));
        /** colums reference */
        this.references = this.columns.filter((column: any) => this.properties[column].reference !== undefined);

        // get data referent
        await Promise.all(this.references.map(async column => {
            if (!this.properties[column].reference.dependent) {
                await this.service.getData(this.properties[column].reference.api_url).subscribe((res) => {
                    this.properties[column].data = res;
                })
            }
        }))

        this.dataSource = this.data.dataSource || {};

        this.dataSource.organization_id = localStorage.getItem("organization_id");

        await this.service.getData(`${this.properties["pipeline_id"].reference.api_url}/${this.dataSource.organization_id}`).subscribe((res) => {
            this.properties["pipeline_id"].data = res;
        })
    }



    create() {
        console.log(this.dataSource);
        this.service.update(this.dataSource).subscribe(res => {
            this.dialogRef.close();
        })

    }
}