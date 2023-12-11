import { Component } from '@angular/core';
import {Validators,FormGroup, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signupForm!:FormGroup

  constructor(private formBuiilder:FormBuilder){}

  ngOnInit(){
    this.signupForm=this.formBuiilder.group({
      fullName:['',[Validators.required]],
      userName:['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')]],
      password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')]]
    })
    
  }

  submit(){
    console.log(this.signupForm.value)
  }

}
