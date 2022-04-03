import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subject : Array<any> = [];
  constructor(private http: HttpClient ) { }

  ngOnInit(): void {
     this.http.get<any>("http://localhost:3000/subjects")
      .subscribe(data =>{
            this.subject = data;
      });
  }

}
