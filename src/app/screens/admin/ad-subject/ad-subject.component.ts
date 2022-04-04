import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-ad-subject',
  templateUrl: './ad-subject.component.html',
  styleUrls: ['./ad-subject.component.css']
})
export class AdSubjectComponent implements OnInit {
  subject : Array<any> = [];
  constructor(private SubjectService : SubjectService) { }

  ngOnInit(): void {
    this.SubjectService.list()
    .subscribe(data=>{
       this.subject = data
    })
  }

  search(e: any){
      let keyword = e.target.value

      this.SubjectService.search(keyword).subscribe(data=>{
         this.subject = data
      })
  }

}
