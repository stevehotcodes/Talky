import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
   createPostForm!:FormGroup

   constructor(private formBuilder:FormBuilder){}


   ngOnInit(){
    this.createPostForm=this.formBuilder.group({
       postContent:['',[Validators.required]],
       postImage:['',[Validators.required]]

    })

   }




  submit(){

  }

}
