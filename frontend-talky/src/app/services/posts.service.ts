import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl:string= `http://localhost:3400/posts`

  constructor(private http:HttpClient) { }


   createPost(postDetails:any){
    return  this.http.post(postDetails,this.baseUrl+`/new`)
   }
}
