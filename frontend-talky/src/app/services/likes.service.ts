import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPostLikeCount } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  // POST  http://localhost:3400/postlike/35400e29-3cf6-4494-8423-5287c27b820f
  postLikeBaseUrl:string=`http://localhost:3400/postlike`

  constructor(private http:HttpClient) { }

  addLikeToPost(postID:string){
   return  this.http.post(this.postLikeBaseUrl+`/${postID}`,{})

  }
  getAllLiketoPost(postID:string):Observable<IPostLikeCount[]>{
    return this.http.get<IPostLikeCount[]>(this.getAllLiketoPost+`/${postID}`)
  }



}

