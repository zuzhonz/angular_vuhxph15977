import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent implements OnInit {
   

  sigupForm : FormGroup = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ]),
    email : new FormControl('',[
         Validators.required,
         Validators.email
    ]),
    
    password : new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ]),
    confirmPassword : new FormControl('',[
      Validators.required,
    
      
    ]),
    
    birthDate : new FormControl('',Validators.required),
    address: new FormControl('',Validators.required)

    
  });


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
     
  } 
  dataUser(){
    console.log(this.sigupForm.value);
  }
  
  

}
