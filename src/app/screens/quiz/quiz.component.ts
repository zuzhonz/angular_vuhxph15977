import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { QuizService } from 'src/app/services/quiz.service';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  [x: string]: any;

  quiz: Array<any> = [];
  user_quiz: Array<any> = [];
  

  constructor(
    private route: ActivatedRoute,
    private QuizService: QuizService
    ) {}
  
  ngOnInit() {
     let code = this.route.snapshot.paramMap.get('code');
     this.QuizService.list(code)
     .subscribe(data =>{
       this.quiz = data.sort(()=>Math.random() < .5 ? -1 :1).slice(0,10)

     })
  } 

  choose(qId: number,aId: number){
    // lấy đáp án của người dùng chọn 
    let existed  = -1;
    this.user_quiz.forEach((el: any, index: number) => {
      if(el.qId == qId){
        existed = index;
      }
    });
    
    //gán đáp án của user vào user_quiz by
    if(existed == -1){
      this.user_quiz.push({
        qId: qId,
        aId: aId
      });
    }else{
      this.user_quiz[existed].aId = aId
    }

   
  }

  hi(e:any){
      
  }

  submit(){
    //đếm đáp án đúng 
    let correctAnswers = 0;
    this.user_quiz.forEach((ans: any) => {
      let question = this.quiz.find((item: any) => item.Id == ans.qId);
      if(question.AnswerId == ans.aId){
        correctAnswers++;
      }
    }); 

    // tính  điểm của mỗi câu hỏi so với số câu hỏi 
    const score = (correctAnswers*10/this.quiz.length)

    // console.log(score);

    
    
  }

  



}
