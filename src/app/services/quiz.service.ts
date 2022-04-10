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
   
  question(id:number,code:any): Observable<any>{
     return this.http.get<any>(`${environment.Base_api+code}/${id}`)   
  }

  search(keyword:any,code:any): Observable<any>{
    return this.http.get<any>(`${environment.Base_api+code}?Text_like=${keyword}`)
  }
   
  addQuiz(data:any,code:any): Observable<any>{
    return this.http.post<any>(`${environment.Base_api + code}`, data)
  }

  delete(id:Number,code:any): Observable<any>{
     return this.http.delete<any>(`${environment.Base_api+code}/${id}`)
  } 
   
  update(id:Number,code:any,data:any): Observable<any>{
     return this.http.put<any>(`${environment.Base_api+code}/${id}`,data)
  }
   
}
