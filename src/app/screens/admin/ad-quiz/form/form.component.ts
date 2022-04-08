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
  load: any = true;

  ngOnInit() {
    this.customerInfo = this.fb.group({
      Text: new FormControl(''),
      Marks: new FormControl('', []),
      AnswerId: new FormControl(),
      Answers: this.fb.array([]),
    });
  }

  addAnswer(Text = '') {
    let randomId = require('random-id');
    let i = randomId(6,'0');
    let Answers = this.customerInfo.get('Answers') as FormArray;
    Answers.push(
      this.fb.group({
        id: [Number(i),],
        Text: [Text],
      })
    );
  }


  createCustomerInfo() {
    // gán object vào một biến 
    let data = this.customerInfo.value;
     
    // get code từ url 
    let code = this.route.snapshot.paramMap.get('code');
    console.log(data);

    //post dữ liệu vào data 
    this.QuizService.addQuiz(data, code).subscribe((response) => {
      alert('thêm thành công');
    });
  }

   //get đáp án đúng
  h(selectedId: number) {
    // gán giá trị cho AnswerId
    this.customerInfo.get('AnswerId').setValue(selectedId);
  }
}