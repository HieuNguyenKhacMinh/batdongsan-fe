import { ProjectService } from '../project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detail-project',
    templateUrl: 'detail.component.html',
    styleUrls: ["./detail.component.scss"]
})

export class ProjectDetailComponent implements OnInit {
    constructor(private route: ActivatedRoute, private projectSerivce: ProjectService) { }

    dataSource: any = {};
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');

        const organization_id = localStorage.getItem("organization_id");
        this.dataSource.organization_id = organization_id;

        this.projectSerivce.get(id).subscribe(res => {
            this.dataSource = res;
        })

        this.getColumns();
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
        this.projectSerivce.getProperties().subscribe(async (res: any) => {

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
                await this.projectSerivce.getData(this.properties[column].reference.api_url).subscribe((res) => {
                    this.properties[column].data = res;
                })
            }))

        })
    }

    updateProject() {
        this.dataSource.file_id = this.image.id;
        this.projectSerivce.update(this.dataSource).subscribe(res => {
            this.setIsEdit(true);
        })
    }
    fileToUpload: File = null;
    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
    }
    image: any;
    uploadImage() {
        this.projectSerivce.postFile(this.fileToUpload).subscribe(data => {
            console.log(data);
            this.image = data;
        }, error => {
            console.log(error);
        });
    }
}