import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-ad-quiz',
  templateUrl: './ad-quiz.component.html',
  styleUrls: ['./ad-quiz.component.css']
})
export class AdQuizComponent implements OnInit {

  quiz: Array<any> = [];
  code : any = null
  

  constructor(
    private route: ActivatedRoute,
    private QuizService: QuizService
    ) {}
  
  ngOnInit() {
     let code = this.route.snapshot.paramMap.get('code');
     this.code = code
     this.QuizService.list(code)
     .subscribe(data =>{
       this.quiz = data      
     });

    this.search
  } 

  
  search(e: any){
    let code = this.route.snapshot.paramMap.get('code');
     let keyword = e.target.value
     this.QuizService.search(keyword,code).subscribe(data =>{
        this.quiz = data
     })  
  }

  

}
