import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student : Array<any> = []

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get<any>("http://localhost:3000/students")
    .subscribe(data =>{
      this.student = data 
    });
  }

}
