import { SubjectService } from 'src/app/services/subject.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  passQuiz : string  =  ""
  score : number = 0 

  code : any
  nameSub : string = ""
  imgSub : any
  user:any;

  constructor(
     private route : ActivatedRoute,
     private studentService : StudentService,
     private SubjectService : SubjectService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(pam => {
      this.studentService.find(Number(pam['id_stu'])).subscribe(stu => {
        let subject_code = pam['code'];
        this.code = pam['code']
        this.score = stu.marks[subject_code]
        this.resultQuiz(Number(stu.marks[subject_code]))
        this.user = stu
      }) 
      this.SubjectService.get(pam['code']).subscribe(sub=>{
          sub.map((res:any)=>{
            // console.log(res);
             this.imgSub = res.Logo
             this.nameSub = res.Name             
          })
      })
    })
  } 


  resultQuiz(score: any){
     if(score >= 5){
         this.passQuiz =  "card col-8 text-success border-success m-1 " 
     } else if(score < 5) {
      this.passQuiz =  "card col-8 text-danger border-danger m-1" 

     }
  }

}
