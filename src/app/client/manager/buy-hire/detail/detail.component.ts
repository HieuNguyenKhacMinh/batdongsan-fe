import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RealEstateService } from '../../buy-hire/real.estate.service';

@Component({
    selector: 'app-real-estate-detail',
    templateUrl: 'detail.component.html',
    styleUrls: ["./detail.component.scss"]
})

export class BuyHireDetailComponent implements OnInit {
    constructor(private realEstateService: RealEstateService,
        private route: ActivatedRoute
    ) { }


    dataSource: any = {};
    product: any;

    async ngOnInit() {

        // get id from router
        // const id = this.route.snapshot.paramMap.get('id');
        // this.realEstateService.getProduct(id).subscribe(res => {
        //     this.product = res;
        //     console.log(this.product);

        // })

        const id = this.route.snapshot.paramMap.get('id');

        const organization_id = localStorage.getItem("organization_id");
        this.dataSource.organization_id = organization_id;

        this.realEstateService.get(id).subscribe(res => {
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
        this.realEstateService.getProperties().subscribe(async (res: any) => {

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
                await this.realEstateService.getData(this.properties[column].reference.api_url).subscribe((res) => {
                    this.properties[column].data = res;
                })
            }))
        })
    }

    updateCompany() {
        debugger
        this.dataSource.file_id = this.image.id;
        this.realEstateService.update(this.dataSource).subscribe(res => {
            this.setIsEdit(true);
        })
    }
    fileToUpload: File = null;
    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
    }
    image: any = {};
    uploadImage() {
        this.realEstateService.postFile(this.fileToUpload).subscribe(data => {
            console.log(data);
            this.image = data;
        }, error => {
            console.log(error);
        });
    }

}