import { Component, OnInit } from '@angular/core';
import { PostCreateComponent } from '../../components/post-create/post-create.component';
import {MatDialog} from '@angular/material/dialog'
import { PostsService } from 'src/app/services/posts.service';
import { IPosts, IPostsWithUserDetails } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  posts:IPostsWithUserDetails[]=[]

  constructor(private matDialog:MatDialog, private postSvc:PostsService){}

  ngOnInit(){
    this.postSvc.getAllPosts().subscribe(
      res=>{
          console.log(res) 
          this.posts=res
          console.log(this.posts)
      },
      err=>{
        console.log(err)
      }
    )


  }

  openDialog(){
    this.matDialog.open(PostCreateComponent,{
      width:'43.75rem',
      
    });
    
  }
  


  

}
