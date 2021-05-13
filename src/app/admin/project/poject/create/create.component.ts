import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectService } from '../project.service';

@Component({
    selector: 'create-project',
    templateUrl: 'create.component.html',
    styleUrls: ['create.component.scss']
})

export class CreateProjectComponent implements OnInit {
    constructor(
        private service: ProjectService,
        public dialogRef: MatDialogRef<CreateProjectComponent>,
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
            .filter((column: any) => this.properties[column].visible !== true);
        /** colums reference */
        const references = this.columns.filter((column: any) => this.properties[column].reference !== undefined);
        console.log(references);

         // get data referent
         await Promise.all(references.map(async column => {
            await this.service.getData(this.properties[column].reference.api_url).subscribe((res) =>{
                this.properties[column].data = res;
            })
        }))


        this.dataSource = this.data.dataSource || {};
        // set to form control






    }
    create() {
        this.dataSource.file_id = this.image.id;
                this.service.update(this.dataSource).subscribe(res => {
            this.dialogRef.close();
        })
       
    }
    fileToUpload: File = null;
    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
    }
    image: any = {};
    uploadImage() {
        this.service.projectFile(this.fileToUpload).subscribe(data => {
            console.log(data);
            this.image = data;
        }, error => {
            console.log(error);
        });
    }
}