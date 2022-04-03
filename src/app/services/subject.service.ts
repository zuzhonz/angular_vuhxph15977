import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { } 

  list(): Observable<any>{
    return this.http.get<any>(environment.subjects_api);
  }

  search(keyword:any): Observable<any>{
    return this.http.get<any>(`${environment.subjects_api}?Name_like=${keyword}`)
  }
  
}
