import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectTypeService } from '../project-type.service';

@Component({
    selector: 'delete-project-type',
    templateUrl: 'delete.component.html',
    styleUrls: ['delete.component.scss']
})

export class DeleteProjectTypeComponent implements OnInit {
    constructor(
        private service: ProjectTypeService,
        public dialogRef: MatDialogRef<DeleteProjectTypeComponent>,
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