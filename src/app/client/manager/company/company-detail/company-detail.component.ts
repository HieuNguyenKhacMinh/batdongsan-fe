import { CompanyService } from './../company.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'selector-client-manager-company-company-detail',
    templateUrl: 'company-detail.component.html',
    styleUrls: ['./company-detail.component.scss']
})

export class CompanyDetailComponent implements OnInit {
    constructor(private service: CompanyService) { }
    edit: any;
    company: any;
    ngOnInit() {
        this.setColumns()
        const companyId = localStorage.getItem("company_id");
        if (companyId) {
            this.service.get(companyId).subscribe(res => {
                this.company = res;
                this.dataSource = this.company;
            })
        }
    }
    dataSource: any;
    columns: any;
    properties: any;

    setIsEdit(cancel?: any) {
        if (!cancel) {
            this.edit = true;
            // this.setColumns();
        } else {
            this.edit = undefined;
        }
    }

    setColumns() {

        this.service.getProperties().subscribe(async (res: any) => {

            // get properites
            this.properties = res.content;
            // filter những collum có visible != true
            this.columns = Object.keys(res.content)
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

        })
    }

    updateCompany() {
        this.service.update(this.dataSource).subscribe(res => {
            this.setIsEdit(true);
        })
    }
}