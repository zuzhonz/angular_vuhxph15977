import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { QuizService } from 'src/app/services/quiz.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {

  quiz: Array<any> = [];
  user_quiz: Array<any> = [];
  id_stu : number = 0
  score: number = 0;
  code: any = this.route.snapshot.paramMap.get('code');

  // isScore : boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private QuizService: QuizService,
    private studentService : StudentService,
    private auth : AuthService
  ) {}

  ngOnInit() {
    this.QuizService.list(this.code).subscribe((data) => {
      this.quiz = data.sort(() => (Math.random() < 0.5 ? -1 : 1)).slice(0, 10);
    }); 
   
    // lấ  id  tài khoản   và gán cho id_stu
    this.auth.logginUser.subscribe((data) => {
       this.id_stu = data.id;
    })
  }

  choose(qId: number, aId: number) {
    // lấy đáp án của người dùng chọn
    let existed = -1;
    this.user_quiz.forEach((el: any, index: number) => {
      if (el.qId == qId) {
        existed = index;
      }
    });

    //gán đáp án của user vào user_quiz by
    if (existed == -1) {
      this.user_quiz.push({
        qId: qId,
        aId: aId,
      });
    } else {
      this.user_quiz[existed].aId = aId;
    }
  }

  hi(e: any) {}

  submit() {
    //đếm đáp án đúng
    let correctAnswers = 0;
    this.user_quiz.forEach((ans: any) => {
      let question = this.quiz.find((item: any) => item.id == ans.qId);
      if (question.AnswerId == ans.aId) {
        correctAnswers++;
      }
    });
    // tính  điểm của mỗi câu hỏi so với số câu hỏi
    const score = (correctAnswers * 10) / this.quiz.length;
    this.score = score; 

     //lấy id của tài khoãn đã đăng nhập  số
      
     
    this.studentService.find(this.id_stu).subscribe((stu: any)=> { 
      //gán giá trị mới cho marks 
      stu.marks[this.code] = score.toFixed(2);
      console.log(stu);
       
      //update marks của student
      this.studentService.update(stu,this.id_stu).subscribe(data => {
        this.router.navigate(['/result', data.id, this.code]);
      }) 

      // debugger
    })
  }
}
