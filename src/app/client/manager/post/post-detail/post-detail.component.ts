import { PostService } from '../post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'selector-client-manager-post-post-detail',
    templateUrl: 'post-detail.component.html',
    styleUrls: ['./post-detail.component.scss']
})

export class PostDetailComponent implements OnInit {
    constructor(private route: ActivatedRoute, private service: PostService) { }
    dataSource: any = {};
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        
        const organization_id = localStorage.getItem("organization_id");
        this.dataSource.organization_id = organization_id;

        this.service.get(id).subscribe(res => {
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
        this.service.getProperties().subscribe(async (res: any) => {

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
                await this.service.getData(this.properties[column].reference.api_url).subscribe((res) => {
                    this.properties[column].data = res;
                })
            }))

        })
    }

    updatePost() {
        this.dataSource.file_id = this.image.id;
        this.service.update(this.dataSource).subscribe(res => {
            this.setIsEdit(true);
        })
    }

    fileToUpload: File = null;
    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
    }
    image: any;
    uploadImage() {
        this.service.postFile(this.fileToUpload).subscribe(data => {
            console.log(data);
            this.image = data;
        }, error => {
            console.log(error);
        });
    }
}