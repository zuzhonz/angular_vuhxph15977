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

  customerInfo: any = this.fb.group({
    id: new FormControl(),
    Text: new FormControl('', [Validators.required, Validators.minLength(4)]),
    Marks: new FormControl('', [Validators.required]),
    AnswerId: new FormControl('', [Validators.required]),
    Answers: this.fb.array([], [Validators.required]),
  });

  ans: any = this.fb.group;
  code: any = this.route.snapshot.paramMap.get('code');
  id: any = this.route.snapshot.paramMap.get('id');

  ngOnInit() {
    let id = this.id;
    let code = this.code;

    if (id != null) {
      this.QuizService.question(id, code).subscribe((data) => {
        // trả về dữ Text,Marks AnswerId
        this.customerInfo.get('id').setValue(data.id);

        this.customerInfo.get('Text').setValue(data.Text);
        this.customerInfo.get('Marks').setValue(data.Marks);
        this.customerInfo.get('AnswerId').setValue(data.AnswerId);
        // trả về dữ liệu câu hỏi
        const grAns = this.customerInfo.controls.Answers as FormArray;
        data.Answers.forEach((item: any, index: any) => {
          grAns.push(
            this.fb.group({
              id: new FormControl(item.id, [Validators.required]),
              Text: new FormControl(item.Text, [Validators.required]),
            })
          );
        });
      });
    }
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
    if (data.id != null) {
      console.log('put', data);
      this.QuizService.update(data.id, code, data).subscribe((data) => {
        alert('sữa thành công thành công');
        this.router.navigate(['/admin/subject/quiz/' + code]);
      });
    } 
      //post dữ liệu vào data quiz
      console.log('post', data);
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
