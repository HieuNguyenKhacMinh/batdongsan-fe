import { ProfileService } from '../profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'selector-client-manager-profile-profile-detail',
    templateUrl: 'profile-detail.component.html',
    styleUrls: ['./profile-detail.component.scss']
})

export class UserDetailComponent implements OnInit {
    constructor(private service: ProfileService) { }
    edit: any;
    user: any = {};
    ngOnInit() {
        this.setColumns()
        const userId = localStorage.getItem("user_id");
        if (userId) {
            this.service.get(userId).subscribe(res => {
                this.user = res;
                this.dataSource = this.user;
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

        // load bang table-config
        this.service.getProperties().subscribe(async (res: any) => {

            // get properites
            this.properties = res.content;
            // filter những collum có visible != true
            this.columns = Object.keys(res.content)
                .filter(column => !["organization_id"].includes(column))
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

    updateUser() {
        this.service.update(this.dataSource).subscribe(res => {
            this.setIsEdit(true);
        })
    }
}