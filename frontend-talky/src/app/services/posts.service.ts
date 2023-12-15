import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InewPostDetails, InewUserDetails } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl:string= `http://localhost:3400/posts`

  constructor(private http:HttpClient) { }


   createPost(newPostDetails:InewPostDetails){
    return  this.http.post(this.baseUrl+`/new`,newPostDetails)
   }
   
}
