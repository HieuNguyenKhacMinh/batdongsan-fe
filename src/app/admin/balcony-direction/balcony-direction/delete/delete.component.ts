import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BalconyDirectionService } from '../balcony-direction.service';


@Component({
    selector: 'delete-balcony-direstion',
    templateUrl: 'delete.component.html',
    styleUrls: ['delete.component.scss']
})

export class DeleteBalconyDirectionComponent implements OnInit {
    constructor(
        private service:  BalconyDirectionService,
        public dialogRef: MatDialogRef<DeleteBalconyDirectionComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() { }

    delete() {
        this.service.delete(this.data.dataSource).subscribe(res => {
            this.dialogRef.close();
        })
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}