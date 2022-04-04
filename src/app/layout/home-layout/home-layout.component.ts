import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {
  isLoggedIn: boolean = false;
  loggedInUser: any = null;
  router: any;
  constructor(private auth: AuthService,
     router: Router) { }

  ngOnInit(): void {
    this.auth.logginUser.subscribe(user => {
      if(user.email != undefined && user.googleId != undefined){
        this.isLoggedIn = true;
        this.loggedInUser = user;
      }
    })
  }

  logout(){
    this.auth.logout()
    // this.router.navigate(['/login'])
  }

}
