import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PipelineService } from '../pipeline.service';

@Component({
    selector: 'delete-hotel',
    templateUrl: 'delete.component.html',
    styleUrls: ['delete.component.scss']
})

export class DeletePipelineComponent implements OnInit {
    constructor(
        private service: PipelineService,
        public dialogRef: MatDialogRef<DeletePipelineComponent>,
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