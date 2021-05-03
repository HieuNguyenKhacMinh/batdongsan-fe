import { ProfileService } from './profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'client-user-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ["./profile.component.scss"]
})

export class UserProfileComponent implements OnInit {
    user: any;
    constructor(private service: ProfileService) { }

    ngOnInit() {
        const userId = localStorage.getItem("user_id");
        if (userId) {
            this.service.get(userId).subscribe(res => {
                this.user = res;
            })
        }
    }
}