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
  
  save() {

    console.log(this.user);
    if (this.company === 1) {
      this.user.domail = undefined;
    }
    if(this.company === 3){
      this.user.company_name = undefined;
      this.user.domail = undefined;
    }
    let kt =0;
    if(this.user.password.length <6){
      this.message = "Mật khẩu ít nhất 6 ký tự "
    }
    else{
      for(let i = 0; i<this.user.password.length; i++){
        if((this.user.password[i] >= 'a' && this.user.password[i] <= 'z') || (this.user.password[i] >= 'A' && this.user.password[i] <= 'Z')) {
         kt = 1;
         break;
      } 
      }
      if(kt == 0){
        this.message = "Mật khẩu ít nhất 6 ký tự bao gồm 1 chữ cái và số"
      }

    }
   
    
    // if (!this.user.password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/)) {
    //   this.message = "password must be containing at least 8 characters, 1 number, 1 upper and 1 lowercase"
    // }
   
    if (kt == 1){
      this.authService.save(this.user).subscribe(res => {
        console.log(res);
      })
      window.alert("Đăng ký thành công")
        location.href = "/auth/login";
    }
     
     
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
