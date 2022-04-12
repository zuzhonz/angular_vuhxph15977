import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

 
  constructor( private http: HttpClient) { }

  list() : Observable<any> {
    return this.http.get<any>(environment.student_api);
  } 

  find(id:any) : Observable<any> {
    return this.http.get<any>(`${environment.student_api}/${id}`);
  }


  search(keyword: string) : Observable<any> {
    return this.http.get<any>(`${environment.student_api}?email_like=${keyword}`)

  } 

  update(data: any,id : number) : Observable<any> {
    return this.http.put<any>(`${environment.student_api}/${id}`,data)
  }

  delete(id:Number): Observable<any> {
    return this.http.delete<any>(`${environment.student_api}/${id}`)
  }
}
