import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { isBuffer } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public logginUser: BehaviorSubject<any>;
  constructor(private http: HttpClient,private router: Router) {
    this.logginUser  = new BehaviorSubject(
      JSON.parse(localStorage.getItem('login_user') || "{}")
    );
  }

  getLoggedInUser(){
    return this.logginUser.value;
  }
  add(data: any): Observable<any>{
    return this.http.post<any>(environment.student_api,data)
  }


  logout(){
    localStorage.removeItem('login_user');
    this.logginUser.next({});
    this.router.navigate(['login']);
    return null 
  }
  


  login(email: string, ggId:string ): Observable<any>{
     return this.http.get<any>(`${environment.student_api}?email=${email}&googleId=${ggId}`)
      .pipe(
        map(data => {
          if(data.length > 0){
            this.logginUser.next(data[0]);
            localStorage.setItem('login_user', JSON.stringify(data[0]));
            return data[0];
          }
          return null;
        })
      )
  }
}
