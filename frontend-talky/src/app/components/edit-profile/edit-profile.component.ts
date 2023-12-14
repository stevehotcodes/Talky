import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  editProfileForm!:FormGroup

  constructor(private formBuilder:FormBuilder, private dialogRef:DialogRef<EditProfileComponent>,private route:Router){}

  ngOnInit(){
    this.editProfileForm=this.formBuilder.group({
       userName:['',[Validators.required]],
       email:['',[Validators.required]]

    })


}


submit(){
  
  console.log(this.editProfileForm.value )
  this.dialogRef.close()
  this.route.navigate(['profile'])
  

}
}
