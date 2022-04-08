import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  list(code: any): Observable<any>{
    return this.http.get<any>(`${environment.Base_api}${code}`);
  }

  search(keyword:any,code:any): Observable<any>{
    return this.http.get<any>(`${environment.Base_api+code}?Text_like=${keyword}`)
  }
   
  addQuiz(data:any,code:any): Observable<any>{
    return this.http.post<any>(`${environment.Base_api + code}`, data)
  }
}
