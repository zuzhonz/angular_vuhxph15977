import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AuthService } from 'src/app/services/auth.service';

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
        let data = {
          name: authData.name,
          googleId: authData.id,
          email: authData.email,
          avatar: authData.photoUrl,
          marks: {
            
          },
        };
          console.log(data);
          
        // this.authService.add(data)
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
