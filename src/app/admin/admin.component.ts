import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-admin',
    templateUrl: 'admin.component.html',
    styleUrls: ["./admin.component.scss"]
})

export class AdminComponent implements OnInit {
    showFiller = true;
    constructor(private router: Router) { }

    ngOnInit() {

        const role = localStorage.getItem('user_role');
        if (role !== undefined && 2 !== +role) {
            alert(" Bạn không có quyền truy cập trang")
            this.router.navigate(['/client']);
        }
    }
}