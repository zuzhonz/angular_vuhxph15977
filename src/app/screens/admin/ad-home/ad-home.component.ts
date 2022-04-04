import { SubjectService } from './../../../services/subject.service';
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-ad-home',
  templateUrl: './ad-home.component.html',
  styleUrls: ['./ad-home.component.css']
})
export class AdHomeComponent implements OnInit {
   subjectcount : number = 0;
   studentcount : number = 0;
  constructor(
    private SubjectService: SubjectService,
    private StudentService: StudentService,
  ) {}

  ngOnInit(): void {
    this.StudentService.list().subscribe(stu => {
           this.studentcount = stu.length;
    }) 

    this.SubjectService.list().subscribe(sub=>{
      this.subjectcount = sub.length;
    })
  } 



}
