import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any = {};
  email: string = "";
  password: string = "";
  constructor(private authService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  message: any;
  login(): void {
    console.log("login")
    this.authService.login(this.user).subscribe((res: any) => {

      if (res.access_token) {
        console.log(res);
        localStorage.setItem('access_token', res.access_token);
        localStorage.setItem('organization_id', res.organization_id);
        localStorage.setItem('user_id', res.user_id);
        localStorage.setItem('user_role', res.role);
        localStorage.setItem('fullname', res.fullname);
       
        if (res.role === 2) {
          // this.router.navigate(['./admin']);
          location.href = "/admin";
        } if (res.role === 0) {
          // this.router.navigate(['/client/manager']);
          location.href = "/client/manager";
        }
      }
     
      console.log(res.role);
      
      this.message = res.message
      // this.router.navigate(['./client']);
    },
      (res: any) => {
        this.message = res.error.message;
      })
  }
}
