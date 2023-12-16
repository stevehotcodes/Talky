import { Component, OnInit } from '@angular/core';
import { PostCreateComponent } from '../../components/post-create/post-create.component';
import {MatDialog} from '@angular/material/dialog'
import { PostsService } from 'src/app/services/posts.service';
import { IPosts, IPostsWithUserDetails } from 'src/app/interfaces/interfaces';
import { CommentsService } from 'src/app/service/comments.service';
import { FlashmessagesService } from 'src/app/services/flashmessages.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  posts:IPostsWithUserDetails[]=[]
  commentContent:string=""
  showCommentInput!:boolean
  postCommentStates: { [postID: string]: boolean } = {};
  

  constructor(private matDialog:MatDialog, private postSvc:PostsService, private commentSvc:CommentsService,private flashSvc:FlashmessagesService){}

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
  submitComment(postID:string){
    console.log(this.commentContent)
    console.log(postID)
  this.commentSvc.addComment(postID,this.commentContent).subscribe(
    (res:any)=>{
      console.log(res)
      this.flashSvc.pushMessage({
        type:'success',
        message:res.message
      })
      
      this.commentContent=''
      
    },
  
    err=>{
      console.log(err)
    }
  )
    

  }

  toggleCommentInput(postID:string) {
    this.postCommentStates[postID] = !this.postCommentStates[postID];
        
  }
  


  

}
