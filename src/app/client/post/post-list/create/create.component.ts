import { ActivatedRoute } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostService } from '../../post.service';

@Component({
    selector: 'create-post',
    templateUrl: 'create.component.html',
    styleUrls: ['create.component.scss']
})

export class CreatePostComponent implements OnInit {
    constructor(private route: ActivatedRoute,
        private service: PostService
        // data này được truyền từ list category
        // data : {dataSource, properties}
        // datasource Là ! object chua thong tin cua category {id: "5345367867", name: "categoryname", description: "gndsndsgd"}
    ) { }

    dataSource: any = {};
    columns: any[];
    properties: any;
    async ngOnInit() {

        // get properites
        const id = this.route.snapshot.paramMap.get('id');

        const organization_id = localStorage.getItem("organization_id");
        this.dataSource.organization_id = organization_id;

        this.getColumns();


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

    fileToUpload: File = null;
    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
    }

    image: any = {};
    create() {

        this.service.postFile(this.fileToUpload).subscribe(data => {
            console.log(data);
            this.image = data;
          
            }, error => {
              console.log(error);
            });
       
        console.log(this.dataSource);
        this.service.update(this.dataSource).subscribe(res => {
        })

    }
}