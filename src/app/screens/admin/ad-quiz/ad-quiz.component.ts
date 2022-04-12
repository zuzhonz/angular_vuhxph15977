import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private QuizService: QuizService,
    private router: Router
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

  delquiz(id:number){
    let code = this.route.snapshot.paramMap.get('code');

    if(confirm("Are you sure to delete quizz ")){
      this.QuizService.delete(id, code).subscribe(data =>{
        window.location.reload()
       alert('Quiz deleted successfully')

     })
    }
    
      
  }
 

  

}
