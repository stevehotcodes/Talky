import { Component } from '@angular/core';
import { PostCreateComponent } from '../../components/post-create/post-create.component';
import {MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent {

  constructor(private matDialog:MatDialog){}

  openDialog(){
    this.matDialog.open(PostCreateComponent,{
      width:'700px',
      
    });
    
  }
  

}
