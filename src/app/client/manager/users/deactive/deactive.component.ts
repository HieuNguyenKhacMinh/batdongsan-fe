import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../users.service';

@Component({
    selector: 'deactive-hotel',
    templateUrl: 'deactive.component.html',
    styleUrls: ['deactive.component.scss']
})

export class DeactiveUsersComponent implements OnInit {
    constructor(
        private service: UserService,
        public dialogRef: MatDialogRef<DeactiveUsersComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() { }

    delete() {
        this.service.deactive(this.data.dataSource).subscribe(res => {
            this.dialogRef.close();
        })
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}