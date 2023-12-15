import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { PostCreateComponent } from '../post-create/post-create.component';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent {

  constructor(private matDialog:MatDialog){}


  openDialog(){
    this.matDialog.open(EditProfileComponent,{
      width:'43.75rem',
      
      
    });
  }
}
