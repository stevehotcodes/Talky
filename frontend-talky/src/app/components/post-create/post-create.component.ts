import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
   createPostForm!:FormGroup

   constructor(private formBuilder:FormBuilder, private route:Router, private dialogRef:MatDialogRef<PostCreateComponent>){}


   ngOnInit(){
    this.createPostForm=this.formBuilder.group({
       postContent:['',[Validators.required]],
       postImage:['',[Validators.required]]

    })

   }




  submit(){
  
    console.log(this.createPostForm.value )
    this.dialogRef.close()
    this.route.navigate(['all'])
    

  }

}
