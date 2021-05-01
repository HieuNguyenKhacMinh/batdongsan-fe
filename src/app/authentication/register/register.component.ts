import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: any = {};
  company: number = 1;
  message: any;
  constructor(private authService: RegisterService, private router: Router) { }



  ngOnInit(): void {
  }
   makeid(length) {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
 charactersLength)));
   }
   return result.join('');
}
  save() {
    console.log(this.user);
    if (this.company === 1) {
      this.user.domail = undefined;
    }
    if(this.company === 3){
      this.user.company_name = this.makeid(20);
      this.user.domail = undefined;
    }
    // if (!this.user.password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/)) {
    //   this.message = "password must be containing at least 8 characters, 1 number, 1 upper and 1 lowercase"
    // }
    if (!this.message)
      this.authService.save(this.user).subscribe(res => {
        console.log(res);
      })
  }
  // login(): void {
  //   const user = { username: this.username, password: this.password };
  //   this.authService.login(user).subscribe((res: any) => {
  //     if (res.access_token) {
  //       console.log(res);
  //       localStorage.setItem('authorization', res.access_token);
  //       localStorage.setItem('site_id', res.site_id);
  //     }
  //     this.router.navigate(['./landing']);
  //   });
  // }

}
