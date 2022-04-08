import { SubjectService } from './../../services/subject.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subject : Array<any> = [];
  constructor(private SubjectService: SubjectService  ) { }

  ngOnInit(): void {
     this.SubjectService.list()
      .subscribe(data =>{
            this.subject = data;
      });
  }

  

}
