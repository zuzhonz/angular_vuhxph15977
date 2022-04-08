import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AuthService } from 'src/app/services/auth.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private socialAuthService: SocialAuthService,
    private authService: AuthService,
    private router: Router
  ) {}

  // loginForm : FormGroup = new FormGroup({
  //   email : new FormControl('',[
  //        Validators.required,
  //        Validators.email
  //   ]),
  //   password : new FormControl('',[
  //     Validators.required
  //   ])
  // });

  ngOnInit(): void {
    //  if()
  }

  ggSignIn() {
    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((authData) => {
        this.authService
          .login(authData.email, authData.id).subscribe((data) => {
            console.log(data);
            
            if (data == null) {
              let datas = {
                name: authData.name,
                googleId: authData.id,
                email: authData.email,
                avatar: authData.photoUrl,
                marks: {},
                roles : [
                   "member"
                ]
              };
              this.authService.add(datas).subscribe((response) => {
                if (response) {
                  alert('đăng ký thành công');
                }
              });

            } 
            if(data){
               alert('tài khoản đã tồn tại')
            }
          });
      });
  } 

 

  gg_login() {
    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((authData) => {
        console.log(authData);

        this.authService
          .login(authData.email, authData.id)
          .subscribe((response) => {
            if (response) {
              this.router.navigate(['/']);
            } else {
              alert('Tài khoản không tồn tại');
            }
          });
      });
  }
}
