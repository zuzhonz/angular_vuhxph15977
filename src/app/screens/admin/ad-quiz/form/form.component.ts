import { map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
// import {random-id} from '@'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private QuizService: QuizService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  customerInfo: any = FormGroup;
  ans: any = this.fb.group;
  code: any = this.route.snapshot.paramMap.get('code');
  id: any = this.route.snapshot.paramMap.get('id');

  ngOnInit() {
    let id = this.id;
    let code = this.code;
    if (id != null) {
      this.QuizService.question(id, code).subscribe((data) => {
        data.Answers.map((res: any) => {
           if(data.AnswerId == res.id){
            this.ans = this.fb.group({
              id: new FormControl(res.id),
              Text: new FormControl(res.Text),
            })
           }
        });
       

        this.customerInfo = this.fb.group({
          id: new FormControl(data.id),
          Text: new FormControl(data.Text, [
            Validators.required,
            Validators.minLength(4),
          ]),
          Marks: new FormControl(data.Marks, [Validators.required]),
          AnswerId: new FormControl(data.AnswerId, [Validators.required]),
          Answers: this.fb.array([this.ans], [Validators.required]),
        });
      });
    }


    // form data question 
    this.customerInfo = this.fb.group({
      Text: new FormControl('', [Validators.required, Validators.minLength(4)]),
      Marks: new FormControl('', [Validators.required]),
      AnswerId: new FormControl('', [Validators.required]),
      Answers: this.fb.array([],[Validators.required]),
    });

  }
  // thêm đáp án cho câu hỏi 
  addAnswer(Text = '') {
    //random id answer
    let randomId = require('random-id');
    let i = randomId(6, '0');

    // lấy form array
    let Answers = this.customerInfo.get('Answers') as FormArray;

    //thêm object vào array
    Answers.push(
      this.fb.group({
        id: [Number(i)],
        Text: [Text, [Validators.required]],
      })
    );
  }

  delAnswer(i: Number) {
    //xóa câu hỏi
    let answers = this.customerInfo.get('Answers');
    answers.removeAt(i);
  }

  createCustomerInfo() {
    // gán object vào một biến
    let data = this.customerInfo.value;
    let code = this.code;
    //post dữ liệu vào data
    this.QuizService.addQuiz(data, code).subscribe((response) => {
      alert('thêm thành công');
      this.router.navigate(['/admin/subject/quiz/' + code]);
    });
  }

  //get đáp án đúng
  h(selectedId: number) {
    // gán giá trị cho AnswerId
    this.customerInfo.get('AnswerId').setValue(selectedId);
  }
}
