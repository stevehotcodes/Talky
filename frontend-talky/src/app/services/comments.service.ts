import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICommentWithUserAndPostInfo } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {


  baseUrl:string=`http://localhost:3400/comments`
  // POST  http://localhost:3400/comments/new/f77fc740-d15d-4745-830e-4df91efc568

  constructor(private http:HttpClient) { }

  addComment(id:string,commentContent:string){
   return  this.http.post(this.baseUrl +`/new/${id}`,{commentContent})

  }
  getCommentsofAPost(postID:string):Observable<ICommentWithUserAndPostInfo[]>{
    // GET http://localhost:3400/comments/e76d0a84-4bc7-4d5a-8822-a1e0b9866b95
    // GET http://localhost:3400/comments/35400e29-3cf6-4494-8423-5287c27b820f

    return this.http.get<ICommentWithUserAndPostInfo[]>(this.baseUrl +`/${postID}`)

  }
}
